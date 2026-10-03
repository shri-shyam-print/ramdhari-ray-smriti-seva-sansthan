document.getElementById('year').textContent=new Date().getFullYear();
const yt='';
if(yt){document.getElementById('ytLink').href=yt;}else{document.getElementById('ytLink').onclick=e=>{e.preventDefault();alert('YouTube channel link अभी संस्था की ओर से update नहीं किया गया है।');};}
document.getElementById('joinForm').addEventListener('submit',async(e)=>{
 e.preventDefault(); const msg=document.getElementById('formMsg'); msg.textContent='आवेदन भेजा जा रहा है…';
 try{const r=await fetch('/api/join',{method:'POST',body:new FormData(e.target)});const d=await r.json();msg.textContent=d.message||'आवेदन प्राप्त हुआ।';if(r.ok)e.target.reset();}
 catch(x){msg.textContent='अभी server से संपर्क नहीं हो सका। कृपया कुछ देर बाद फिर प्रयास करें।';}
});
const donateModal=document.getElementById('donateModal');
const donationAmount=document.getElementById('donationAmount');
const donateSelected=document.getElementById('donateSelected');
document.querySelectorAll('.amount-btn').forEach(btn=>btn.addEventListener('click',()=>{donationAmount.value=btn.dataset.amount;document.querySelectorAll('.amount-btn').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected');}));
function openDonate(){const amount=Number(donationAmount.value||0);donateSelected.textContent=amount>0?'चुनी गई सहयोग राशि: ₹'+amount.toLocaleString('en-IN'):'आपने कोई राशि नहीं चुनी है।';donateModal.classList.add('open');donateModal.setAttribute('aria-hidden','false');}
document.getElementById('donateNow').addEventListener('click',openDonate);
function closeDonate(){donateModal.classList.remove('open');donateModal.setAttribute('aria-hidden','true');}
document.getElementById('closeDonate').addEventListener('click',closeDonate);
document.getElementById('closeDonate2').addEventListener('click',closeDonate);
donateModal.addEventListener('click',e=>{if(e.target===donateModal)closeDonate();});
