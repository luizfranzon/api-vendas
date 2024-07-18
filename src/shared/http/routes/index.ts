import { Router } from "express"

const routes = Router()

routes.get("/", async (request, response) => {
  return response.json({
    message: "dale!"
  })
})

export default routes;
