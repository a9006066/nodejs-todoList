
function router(req,res, pathName, handRouter){
    console.log('Call for router'+ pathName);
    if(typeof handRouter[pathName] ==='function'){
        handRouter[pathName](req,res)
    }
}

exports.router = router;