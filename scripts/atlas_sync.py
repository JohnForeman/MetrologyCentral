"""Regenerate Atlas data + per-case stubs from data/atlas_cases.source.json. Run: python3 scripts/atlas_sync.py"""
import json,os,re
R=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
cases=json.load(open(f'{R}/scripts/atlas_cases.source.json'))
CAT=[("Paint & coating",r"paint|coating|whitening|haze"),("Weld & spatter",r"weld|spatter"),("Casting & machining",r"casting|porosity|flash|machin|blister|burr|fill"),
("Cracks",r"crack"),("Surface scratches/dents",r"scratch|dent|surface|rust|cosmetic"),("Assembly / missing part",r"assembly|missing|clip|misfit|connector|locking|wrong part|installed"),
("Labels & OCR",r"label|badge|serial|designation"),("Adhesive & sealant",r"adhesive|sealant|glue|caulking"),("Composite structures & layup",r"composite|layup|fiber placement"),("Engine blade damage",r"blade|engine part")]
for c in cases:
    t=(c['defect_type']+' '+c['part']).lower()
    c['defect_categories']=[n for n,p in CAT if re.search(p,t)] or ["Other"]
    c['part_group']=c['part'].split('(')[0].strip() or 'Unspecified'
    v=c['vendor']
    for k in ['UnitX','SwitchOn','MVTec','Cognex','Waygate','Elementary','IBM','Siemens','LandingAI','Awiros']:
        if k in v: v=k; break
    else: v=v.split('(')[0].split(' via ')[0].strip()
    c['vendor_group']={'LandingAI':'Landing AI'}.get(v,v)
    c['context']='MRO' if re.search(r'MRO|maintenance|\\blease\\b',c['notes']+c['company_plant']) else ('R&D project' if re.search(r'project|not yet in production|Development',c['notes']+c['source_type']) else 'Production')
json.dump(cases,open(f'{R}/_data/atlas_cases.json','w'),indent=1,ensure_ascii=False)
def desc(c):
    """Meta description: who, what part/defect, which vendor. ~160 chars max."""
    who=re.sub(r'\s*\(.*?\)','',c['company_plant']).split(';')[0].strip().rstrip(',') or 'Manufacturer'
    what=c['part'] or c['defect_type']
    what=re.sub(r'\s*\(.*?\)','',what).strip()
    if who.lower()=='unnamed': who=f"Unnamed {c['industry']} manufacturer"
    if len(who)>60 and ',' in who[:60]: who=who[:60].rsplit(',',1)[0]
    lc=lambda t: t[:1].lower()+t[1:] if len(t)>1 and not t[1].isupper() else t
    vend=re.sub(r'\s*\(.*?\)','',c['vendor']).strip()
    s=f"{who}: AI visual inspection of {lc(what)}" + (f" with {vend}" if vend and vend.lower() not in who.lower() else "") + (". Quoted result, camera setup and source." if c['camera_lighting'].strip() else ". Quoted result and source.")
    if len(s)>160:
        s=f"{who}: AI visual inspection of {lc(what)}"
        s=(s[:150].rsplit(' ',1)[0]+'…') if len(s)>155 else s+'. Quoted result and source.'
    return s
d=f'{R}/_atlas_cases'
for f in os.listdir(d): os.remove(f'{d}/{f}')
for c in cases:
    open(f'{d}/{c["id"]}.md','w').write(f'---\nlayout: atlas-case\ncase_id: {c["id"]}\ntitle: {json.dumps(c["title"])}\ndescription: {json.dumps(desc(c))}\n---\n')
print(len(cases),'cases synced')
