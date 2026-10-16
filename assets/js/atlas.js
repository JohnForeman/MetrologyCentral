(function(){const $=s=>document.querySelector(s);const B=window.ATLAS_BASE||'/atlas/';
const esc=s=>(s||'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
fetch(B+'cases.json').then(r=>r.json()).then(C=>{
 const fill=(sel,vals)=>{const el=$(sel);if(!el)return;[...new Set(vals)].sort().forEach(v=>el.add(new Option(v,v)))};
 const card=c=>`<a class="atlas-card" href="${B}${c.id}/"><span class="atlas-tag ${c.industry}">${c.industry}</span>${c.context!=='Production'?`<span class="atlas-tag">${c.context}</span>`:''}<h3>${esc(c.title)}</h3><p><b>Vendor:</b> ${esc(c.vendor)}<br><b>Part:</b> ${esc(c.part||'Not stated')}<br><b>Defect:</b> ${esc(c.defect_type)}</p><p class="atlas-res">${esc(c.reported_result)}</p></a>`;
 if($('#atlas-list')){fill('#industry',C.map(c=>c.industry));fill('#defect',C.flatMap(c=>c.defect_categories));fill('#part',C.map(c=>c.part_group));fill('#vendor',C.map(c=>c.vendor_group));
  const draw=()=>{const q=$('#q').value.toLowerCase(),i=$('#industry').value,d=$('#defect').value,p=$('#part').value,v=$('#vendor').value;
   const r=C.filter(c=>(!i||c.industry==i)&&(!d||c.defect_categories.includes(d))&&(!p||c.part_group==p)&&(!v||c.vendor_group==v)&&(!q||JSON.stringify(c).toLowerCase().includes(q)));
   $('#atlas-shown').textContent=`Showing ${r.length} of ${C.length} cases`;$('#atlas-list').innerHTML=r.map(card).join('')||'<p>No matches.</p>'};
  document.querySelectorAll('.atlas-filters input,.atlas-filters select').forEach(e=>e.addEventListener('input',draw));draw()}
 if($('#fitout')){fill('#fd',C.flatMap(c=>c.defect_categories));
  const go=()=>{const i=$('#fi').value,d=$('#fd').value;if(!d){$('#fitout').innerHTML='';return}
   const r=C.filter(c=>c.defect_categories.includes(d)&&(!i||c.industry==i));const g={};r.forEach(c=>(g[c.vendor_group]=g[c.vendor_group]||[]).push(c));
   $('#fitout').innerHTML=Object.entries(g).sort((a,b)=>b[1].length-a[1].length).map(([v,cs])=>`<div class="atlas-card"><h3>${esc(v)} <span class="atlas-muted">(${cs.length} case${cs.length>1?'s':''})</span></h3><ul>${cs.map(c=>`<li><a href="${B}${c.id}/">${esc(c.part||c.title)}</a>: ${esc(c.reported_result)}</li>`).join('')}</ul></div>`).join('')||'<p>No published cases yet.</p>'};
  $('#fi').oninput=go;$('#fd').oninput=go;const u=new URLSearchParams(location.search);if(u.get('defect')){$('#fd').value=u.get('defect');go()}}});})();
