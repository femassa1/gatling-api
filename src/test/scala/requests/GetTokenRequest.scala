package requests

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import config.Config.url_login

object GetTokenRequest {
        val get_token = http("Login").post(url_login)
          .check(status is 200)
          .check(jsonPath("$.access_token").saveAs("access_token"))
                print("##########################"+ "access_token" +"#########################")

}
