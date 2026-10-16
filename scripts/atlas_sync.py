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
d=f'{R}/_atlas_cases'
for f in os.listdir(d): os.remove(f'{d}/{f}')
for c in cases:
    open(f'{d}/{c["id"]}.md','w').write(f'---\nlayout: atlas-case\ncase_id: {c["id"]}\ntitle: {json.dumps(c["title"])}\ndescription: {json.dumps("AI visual inspection case: "+c["part"]+" ("+c["vendor"]+"), "+c["industry"])}\n---\n')
print(len(cases),'cases synced')
