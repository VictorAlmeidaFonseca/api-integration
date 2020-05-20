import pipeDrive from 'pipedrive'

pipeDrive.Configuration.apiToken = 'c2c46b8af3ee0e47f77462d49e8786040da99cad'

const mockApi = async ( request, response ) => {
  try {
    const user = await pipeDrive.UsersController.getCurrentUserData()
    return response.json(user)

  } catch (err) {
    console.log(err)
  }
}

export {
  mockApi
}
