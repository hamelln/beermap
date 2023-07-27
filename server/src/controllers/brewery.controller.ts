const RequestHandler = async (req, res) => {
  const { keyword } = req.params;
  const camps = await this.campsiteService.getCampsByKeyword(keyword);

  res.json({ status: true, camps });
};
