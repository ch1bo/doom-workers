let latestCmd = { forwardMove: 0 };

function hydraSend(cmd) {
  console.log("encode and submit transaction for", cmd);

  console.log("short-cutting for now...")
  latestCmd = cmd;
}

function hydraRecv() {
  const cmd = latestCmd;
  console.log("receive next decoded command from head", cmd);
  return cmd;
}
