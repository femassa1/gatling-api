package requests

import config.Config.app_url
import io.gatling.core.Predef._
import io.gatling.http.Predef._

object ExecuteRequest {

        val sentHeaders =Map("Content-Type" -> """application/json""",
                "Authorization" -> """Bearer pfUF7cFeQg1RzXztYmr4AXwJ""")

        val requestGet = exec(http("Get Request")
          .get(app_url)
          .headers(sentHeaders)
          .check(status is 200))

}
