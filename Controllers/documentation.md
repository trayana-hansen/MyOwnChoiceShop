# Controllers documentation

1. Import dependencies
2. Declare relationships if any
3. Create a class Controller with all the CRUD methods defined

`code
create = async (req, res) => {
		const { name }  = req.body;
		if(name) {
		const model = await BrandModel.create(req.body)
		res.json({ newId: model.id })
			} else {
				res.sendStatus(418)
			}
	}`

4. Export the controller so it can be used in other files
