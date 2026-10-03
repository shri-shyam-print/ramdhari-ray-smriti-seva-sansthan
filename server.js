const express=require('express'); const multer=require('multer'); const fs=require('fs'); const path=require('path');
const app=express(); const PORT=process.env.PORT||3000;
const uploadDir=process.env.UPLOAD_DIR||path.join(__dirname,'uploads'); fs.mkdirSync(uploadDir,{recursive:true});
const storage=multer.diskStorage({destination:(req,file,cb)=>cb(null,uploadDir),filename:(req,file,cb)=>{const safe=Date.now()+'-'+file.originalname.replace(/[^a-zA-Z0-9._-]/g,'_');cb(null,safe)}});
const upload=multer({storage,limits:{fileSize:10*1024*1024}});
app.use(express.static(path.join(__dirname,'public')));
app.post('/api/join',upload.single('document'),(req,res)=>{
 const record={...req.body,file:req.file?req.file.filename:null,receivedAt:new Date().toISOString()};
 fs.appendFileSync(path.join(uploadDir,'applications.jsonl'),JSON.stringify(record)+'\n');
 res.json({ok:true,message:'आपका आवेदन सफलतापूर्वक प्राप्त हो गया है। संस्था द्वारा सत्यापन के बाद आपसे संपर्क किया जाएगा।'});
});
app.get('/health',(req,res)=>res.json({ok:true}));
app.listen(PORT,()=>console.log('Running on '+PORT));