const CertainFactor= (factors)=>{
    let fact1=undefined;
    let factN=undefined;
    if(factors.length>0){
        factors.forEach(factor=>{
            if (fact1===undefined){
                fact1=factor;
            }else{
                factN= factor;
            }
            if(factN!==undefined){
                if(fact1>0&&factN>0){
                    fact1 = fact1+(factN*(1-fact1));
                }else if(fact1<0&&factN<0){
                    fact1 = fact1+(factN*(1+fact1));
                }else if(fact1>0&&factN<0){
                    fact1 = (fact1+factN)/(1-factN);
                }else if(fact1<0&&factN>0){
                    fact1 = (fact1+factN)/(1-fact1);
                }
            }
            
        });
    }else{
        return undefined;
    }
    return fact1;
}

module.exports = CertainFactor;