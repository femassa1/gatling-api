package scenarios

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.util.Random

object BasicScenario {

  val headers_oauth = Map("Content-Type" -> """application/json""",
    "Authorization" -> """Bearer pfUF7cFeQg1RzXztYmr4AXwJ""")

  private def randomString = Random.alphanumeric.take(10).mkString

  private def newTask =  s"""{
    "name": "$randomString",
    "description": "$randomString"
  }"""

  private def updatedTask = "{" +
    "\"id\": \"${taskId}\", " + s"""
    "name": "$randomString",
    "description": "$randomString"
  }"""

  val createTask = exec(
    http("CreateTask") // let's give proper names, as they are displayed in the reports
      .post("/tasks")
      .header("Content-Type", "application/json")
      .body(StringBody(newTask))
      .asJSON
      .check(jsonPath("$.id").saveAs("taskId"))
      .check(status is 201)
  )

  val viewTask = exec(
    http("http")
      .post("url.com")
      .headers(headers_oauth)
      .asJSON
      .check(status is 200)
  )

  val updateTask = exec(
    http("ViewTask")
      .put("/tasks/${taskId}")
      .header("Content-Type", "application/json")
      .body(StringBody(updatedTask))
      .asJSON
      .check(jsonPath("$.id"))
      .check(status is 200)
  )
}
