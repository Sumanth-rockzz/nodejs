const fs=require('fs');
const path=require('path');


const p=path.join(path.dirname(require.main.filename),
'data',
'products.json'
);
const getproductsfromfile=(cb)=>{
   
     fs.readFile(p,(err,data)=>{
        if(err)
        {
            cb([]);
        }
        else{
        cb(JSON.parse(data));
        }
    })
}


module.exports=class Product{
 
    constructor(t){
        this.title=t;
    }
    save(){
       
       getproductsfromfile(products=>{
        products.push(this);
        fs.writeFile(p,JSON.stringify(products),(err)=>{
            if(err)

          console.log(err);
        })
       });
          
    }
    
    static fetchAll(cb){
       getproductsfromfile(cb);
    }
}