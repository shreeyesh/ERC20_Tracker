Moralis.initialize("MIgi23QaNqqI7wqAWNLgYlVDSu7IQTFHCGNnq67d");
Moralis.serverURL = "https://p1jssl2kbpzh.moralis.io:2053/server"; 
async function login() {
    try {
        let currentUser = Moralis.User.current();
        if(!currentUser){
            currentUser = await Moralis.Web3.authenticate();
        }
        const balances = await Moralis.Web3.getAllERC20();
        console.log(balances);

        
    } catch (error) {
        console.log(error);
    }
}

login();