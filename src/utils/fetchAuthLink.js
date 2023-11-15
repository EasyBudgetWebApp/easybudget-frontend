const fetchLink = (args) => {
  const { url, setLoadFlag, setErrFlag, setLink } = args;
  console.log(args);
  if (!url || !setLoadFlag || !setErrFlag || !setLink) {
    return;
  }
  (async function () {
    try {
      const response = await fetch(url);
      const { link } = await response.json();
      setLink(link);
      setLoadFlag(false);
    } catch (err) {
      setErrFlag({
        state: true,
        reason: err.message,
      });
    }
  })();
};

export default fetchLink;
