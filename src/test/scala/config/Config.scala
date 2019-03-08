package config

object Config {
        val app_url = "https://userede--qa.cs26.my.salesforce.com/services/data/v43.0/query/?q=SELECT IdExterno__c FROM InformacoesContratos__c limit 20"
        val url_login = "https://test.salesforce.com/services/oauth2/token?grant_type=password&username=siglatv@userede.com.br.qa&password=Orbitallrede0886pfUF7cFeQg1RzXztYmr4AXwJ&client_id=3MVG9bx.kiqxiA6ZQ2DaJfMYCSJXpyF.jRIzeQDWOpfGPDt2gePFaSBaAWjK0OKY_SbNIaIO0ehniYTZy7ecS&client_secret=4594976901072154985"

        val users = Integer.getInteger("users", 20).toInt
        val rampUp = Integer.getInteger("rampup", 10).toInt
        val throughput = Integer.getInteger("throughput", 100).toInt
        }
