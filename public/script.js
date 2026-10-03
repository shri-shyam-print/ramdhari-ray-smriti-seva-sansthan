document.getElementById('year').textContent=new Date().getFullYear();
const yt='';
if(yt){document.getElementById('ytLink').href=yt;}else{document.getElementById('ytLink').onclick=e=>{e.preventDefault();alert('YouTube channel link अभी संस्था की ओर से update नहीं किया गया है।');};}
document.getElementById('joinForm').addEventListener('submit',async(e)=>{
 e.preventDefault(); const msg=document.getElementById('formMsg'); msg.textContent='आवेदन भेजा जा रहा है…';
 try{const r=await fetch('/api/join',{method:'POST',body:new FormData(e.target)});const d=await r.json();msg.textContent=d.message||'आवेदन प्राप्त हुआ।';if(r.ok)e.target.reset();}
 catch(x){msg.textContent='अभी server से संपर्क नहीं हो सका। कृपया कुछ देर बाद फिर प्रयास करें।';}
});