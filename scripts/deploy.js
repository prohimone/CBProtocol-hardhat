
const main = async () => {
    // const bentoBoxFactory = await hre.ethers.getContractFactory('BentoBox');
    // const BentoBox = await bentoBoxFactory.deploy();
    // await BentoBox.deployed();
    // console.log("Contract deployed to:", BentoBox.address);
    const vaultPairDatafactory = await hre.ethers.getContractFactory('VaultPairData')
    const vaultPairDatax = await vaultPairDatafactory.deploy()
    await vaultPairDatax.deployed();
    console.log("VaultPairData deployed to:", vaultPairDatax.address);


    const vaultPairFactory = await hre.ethers.getContractFactory('VaultPair')
    const vaultPair = await vaultPairFactory.deploy(vaultPairDatax.address)
    await vaultPair.deployed();
    console.log("VaultPair deployed to:", vaultPair.address);
    console.log(await vaultPair.getFromVaultPairData());
    // console.log(await vaultPair.getValue());
    // console.log(await vaultPair.masterContract());

  };






const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();