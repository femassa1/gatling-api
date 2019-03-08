var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3",
        "ok": "1",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "537",
        "ok": "1200",
        "ko": "537"
    },
    "maxResponseTime": {
        "total": "1200",
        "ok": "1200",
        "ko": "873"
    },
    "meanResponseTime": {
        "total": "870",
        "ok": "1200",
        "ko": "705"
    },
    "standardDeviation": {
        "total": "271",
        "ok": "0",
        "ko": "168"
    },
    "percentiles1": {
        "total": "873",
        "ok": "1200",
        "ko": "705"
    },
    "percentiles2": {
        "total": "1037",
        "ok": "1200",
        "ko": "789"
    },
    "percentiles3": {
        "total": "1167",
        "ok": "1200",
        "ko": "856"
    },
    "percentiles4": {
        "total": "1193",
        "ok": "1200",
        "ko": "870"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 33
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 2,
        "percentage": 67
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.5",
        "ok": "0.5",
        "ko": "1"
    }
},
contents: {
"req_login-99dea": {
        type: "REQUEST",
        name: "Login",
path: "Login",
pathFormatted: "req_login-99dea",
stats: {
    "name": "Login",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1200",
        "ok": "1200",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1200",
        "ok": "1200",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1200",
        "ok": "1200",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1200",
        "ok": "1200",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1200",
        "ok": "1200",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1200",
        "ok": "1200",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1200",
        "ok": "1200",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 100
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "0.5",
        "ko": "-"
    }
}
    },"req_get-request-76828": {
        type: "REQUEST",
        name: "Get Request",
path: "Get Request",
pathFormatted: "req_get-request-76828",
stats: {
    "name": "Get Request",
    "numberOfRequests": {
        "total": "2",
        "ok": "0",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "537",
        "ok": "-",
        "ko": "537"
    },
    "maxResponseTime": {
        "total": "873",
        "ok": "-",
        "ko": "873"
    },
    "meanResponseTime": {
        "total": "705",
        "ok": "-",
        "ko": "705"
    },
    "standardDeviation": {
        "total": "168",
        "ok": "-",
        "ko": "168"
    },
    "percentiles1": {
        "total": "705",
        "ok": "-",
        "ko": "705"
    },
    "percentiles2": {
        "total": "789",
        "ok": "-",
        "ko": "789"
    },
    "percentiles3": {
        "total": "856",
        "ok": "-",
        "ko": "856"
    },
    "percentiles4": {
        "total": "870",
        "ok": "-",
        "ko": "870"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 2,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
