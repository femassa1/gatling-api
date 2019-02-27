package br.com.scenary

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class PerformanceApiTest extends Simulation {

  //scenario
  val scn = scenario("Login Sales Force")
    .exec(
      BasicScenario.viewTask
    )

  // set up the scenario and threads (users) count:
  setUp(scn.inject(rampUsers(10) over (10 seconds)))
    .protocols(http.baseURL("https://baseUrl.com"))
}