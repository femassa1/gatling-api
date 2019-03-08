package scenarios

import io.gatling.core.Predef.scenario
import requests.{ExecuteRequest, GetTokenRequest}

object SalesForceRequest {
        val loginRequest = scenario("Login SalesForce")
          .exec(GetTokenRequest.get_token)

        val salesRequest = scenario("Request SalesForce")
          .exec(ExecuteRequest.requestGet)
}
