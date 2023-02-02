let cursor = "";
  let owners = [];

  async function getOwner() {
    do {
      await axios
        .get(
          `https://deep-index.moralis.io/api/v2/nft/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/owners?chain=eth&cursor=${cursor}`,
          {
            headers: {
              accept: "application/json",
              "x-api-key":
                "McDEmVq9B72ws5fHMbZogGimAMC5hUZxDsnNmoFgJQMfb5wfL3aN5XVusMNQKhnf",
            },
          }
        )
        .then((response) => {
          const res = response.data;
          console.log(
            `Got page ${res.page} of ${Math.ceil(res.total / res.page_size)}, ${
              res.total
            } total`
          );

          for (const owner of res.result) {
            owners.push({
              id: owner.token_id,
              owner: owner.owner_of,
            });
          }

          cursor = res.cursor;
        });
    } while (cursor != "" && cursor != null);

    console.log(owners);
  }

  useEffect(() => {
    getOwner();
  }, []);