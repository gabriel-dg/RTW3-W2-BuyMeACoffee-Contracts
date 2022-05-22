  const buyCoffee = async (amount) => {
    try {
      const {ethereum} = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();
        const buyMeACoffee = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        console.log("buying coffee..")
        const coffeeTxn = await buyMeACoffee.buyCoffee(
          name ? name : "anon",
          message ? message : "Enjoy your coffee!",
          {value: ethers.utils.parseEther(amount)}
        );

        await coffeeTxn.wait();

        console.log("mined ", coffeeTxn.hash);

        console.log("coffee purchased!");

        // Clear the form fields.
        setName("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //////////////////////////////////////////////
  
                <button
                  type="button"
                  onClick={() => buyCoffee("0.001")}
                >
                  Send 1 Coffee (0.001ETH)
                </button>
                <button
                  type="button"
                  onClick={() => buyCoffee("0.003")}
                >
                  Send 3 Coffees (0.003ETH)
                </button>
                 <button
                  type="button"
                  onClick={() => buyCoffee("0.005")}
                >
                  Send 5 Coffees (0.005ETH)
                </button>
