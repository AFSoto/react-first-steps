
const myPromise = new Promise<number>((resolve,reject) => {

    setTimeout(() => {
        //! quiero mi dinero
        reject('mi amigo se perdio');
    }, 2000);
});


myPromise.then((myMoneyIsBack) => {
        console.log('Tengo mi dinero', myMoneyIsBack);
}).catch( (reason) => {
    console.warn(reason)
}).finally(() => console.log('pues a seguir con mi vida'));