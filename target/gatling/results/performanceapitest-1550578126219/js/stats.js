var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1318",
        "ok": "1318",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2209",
        "ok": "2209",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1461",
        "ok": "1461",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "259",
        "ok": "259",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1358",
        "ok": "1358",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1395",
        "ok": "1395",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1927",
        "ok": "1927",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2152",
        "ok": "2152",
        "ko": "-"
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
        "count": 10,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.959",
        "ok": "0.959",
        "ko": "-"
    }
},
contents: {
"http-80791": {
        type: "REQUEST",
        name: "http",
path: "http",
pathFormatted: "http-80791",
stats: {
    "name": "http",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1318",
        "ok": "1318",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2209",
        "ok": "2209",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1461",
        "ok": "1461",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "259",
        "ok": "259",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1358",
        "ok": "1358",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1395",
        "ok": "1395",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1927",
        "ok": "1927",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2152",
        "ok": "2152",
        "ko": "-"
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
        "count": 10,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.959",
        "ok": "0.959",
        "ko": "-"
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