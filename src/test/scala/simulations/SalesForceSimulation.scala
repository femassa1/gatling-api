package simulations

import io.gatling.core.Predef.{Simulation, _}
import scenarios.SalesForceRequest

import scala.concurrent.duration.DurationInt

class SalesForceSimulation extends Simulation {
        private val loginSales = SalesForceRequest.loginRequest
          .inject(atOnceUsers(1))

        private val testSales = SalesForceRequest.salesRequest
          .inject(
         // rampUsers(users) over (10 seconds)) // 3
          constantUsersPerSec(1) during (2 seconds)) // 4
//          constantUsersPerSec(20) during (15 seconds) randomized, // 5
//          rampUsersPerSec(10) to 20 during (10 minutes), // 6
//          rampUsersPerSec(10) to 20 during (10 minutes) randomized, // 7
//          splitUsers(1000) into (rampUsers(10) over (10 seconds)) separatedBy (10 seconds), // 8
//          splitUsers(1000) into (rampUsers(10) over (10 seconds)) separatedBy atOnceUsers(30), // 9
//          heavisideUsers(1000) over (20 seconds)) //

        setUp(loginSales, testSales)
}