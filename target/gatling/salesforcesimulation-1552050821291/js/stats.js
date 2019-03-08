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
        "total": "685",
        "ok": "856",
        "ko": "685"
    },
    "maxResponseTime": {
        "total": "856",
        "ok": "856",
        "ko": "853"
    },
    "meanResponseTime": {
        "total": "798",
        "ok": "856",
        "ko": "769"
    },
    "standardDeviation": {
        "total": "80",
        "ok": "0",
        "ko": "84"
    },
    "percentiles1": {
        "total": "853",
        "ok": "856",
        "ko": "769"
    },
    "percentiles2": {
        "total": "855",
        "ok": "856",
        "ko": "811"
    },
    "percentiles3": {
        "total": "856",
        "ok": "856",
        "ko": "845"
    },
    "percentiles4": {
        "total": "856",
        "ok": "856",
        "ko": "851"
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
        "total": "856",
        "ok": "856",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "856",
        "ok": "856",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "856",
        "ok": "856",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "856",
        "ok": "856",
        "ko": "-"
    },
    "percentiles2": {
        "total": "856",
        "ok": "856",
        "ko": "-"
    },
    "percentiles3": {
        "total": "856",
        "ok": "856",
        "ko": "-"
    },
    "percentiles4": {
        "total": "856",
        "ok": "856",
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
        "total": "685",
        "ok": "-",
        "ko": "685"
    },
    "maxResponseTime": {
        "total": "853",
        "ok": "-",
        "ko": "853"
    },
    "meanResponseTime": {
        "total": "769",
        "ok": "-",
        "ko": "769"
    },
    "standardDeviation": {
        "total": "84",
        "ok": "-",
        "ko": "84"
    },
    "percentiles1": {
        "total": "769",
        "ok": "-",
        "ko": "769"
    },
    "percentiles2": {
        "total": "811",
        "ok": "-",
        "ko": "811"
    },
    "percentiles3": {
        "total": "845",
        "ok": "-",
        "ko": "845"
    },
    "percentiles4": {
        "total": "851",
        "ok": "-",
        "ko": "851"
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
