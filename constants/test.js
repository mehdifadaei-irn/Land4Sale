<main>
  {isWeb3Enabled ? (
    <div>
      <button onClick={() => changeNumberTo()}>changeNum</button>
      <button onClick={handleGet}>getNum</button>
      {/* <h1>{num}</h1> */}
    </div>
  ) : (
    <div>
      <button onClick={() => enableWeb3()}>connect</button>
    </div>
  )}
</main>;
