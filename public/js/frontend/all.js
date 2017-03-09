!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
                if (!a.document)throw new Error("jQuery requires a window with a document");
                return b(a)
            } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = "2.1.3", n = function (a, b) {
        return new n.fn.init(a, b)
    }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) {
        return b.toUpperCase()
    };
    n.fn = n.prototype = {
        jquery: m, constructor: n, selector: "", length: 0, toArray: function () {
            return d.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        }, pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function (a, b) {
            return n.each(this, a, b)
        }, map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(d.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: f, sort: c.sort, splice: c.splice
    }, n.extend = n.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (a = arguments[h]))for (b in a)c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === n.type(a)
        }, isArray: Array.isArray, isWindow: function (a) {
            return null != a && a === a.window
        }, isNumeric: function (a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
        }, isPlainObject: function (a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        }, isEmptyObject: function (a) {
            var b;
            for (b in a)return !1;
            return !0
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        }, globalEval: function (a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        }, camelCase: function (a) {
            return a.replace(p, "ms-").replace(q, r)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)if (d = b.apply(a[e], c), d === !1)break
                } else for (e in a)if (d = b.apply(a[e], c), d === !1)break
            } else if (g) {
                for (; f > e; e++)if (d = b.call(a[e], e, a[e]), d === !1)break
            } else for (e in a)if (d = b.call(a[e], e, a[e]), d === !1)break;
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(o, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        }, inArray: function (a, b, c) {
            return null == b ? -1 : g.call(b, a, c)
        }, merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++)a[e++] = b[d];
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        }, map: function (a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h)for (; g > f; f++)d = b(a[f], f, c), null != d && i.push(d); else for (f in a)d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        }, guid: 1, proxy: function (a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
                    return a.apply(b || this, e.concat(d.call(arguments)))
                }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        }, now: Date.now, support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    function s(a) {
        var b = a.length, c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    var t = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = hb(), z = hb(), A = hb(), B = function (a, b) {
            return a === b && (l = !0), 0
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function (a, b) {
            for (var c = 0, d = a.length; d > c; c++)if (a[c] === b)return c;
            return -1
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + O),
            PSEUDO: new RegExp("^" + P),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), db = function (a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, eb = function () {
            m()
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fb) {
            H = {
                apply: E.length ? function (a, b) {
                        G.apply(a, I.call(b))
                    } : function (a, b) {
                        var c = a.length, d = 0;
                        while (a[c++] = b[d++]);
                        a.length = c - 1
                    }
            }
        }
        function gb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode)return d;
                        if (h.id === j)return d.push(h), d
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)return d.push(h), d
                } else {
                    if (f[2])return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((j = f[3]) && c.getElementsByClassName)return H.apply(d, b.getElementsByClassName(j)), d
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--)o[l] = s + rb(o[l]);
                        w = ab.test(a) && pb(b.parentNode) || b, x = o.join(",")
                    }
                    if (x)try {
                        return H.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {
                    } finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function hb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }

            return b
        }

        function ib(a) {
            return a[u] = !0, a
        }

        function jb(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function kb(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--)d.attrHandle[c[e]] = b
        }

        function lb(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)return d;
            if (c)while (c = c.nextSibling)if (c === b)return -1;
            return a ? 1 : -1
        }

        function mb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function nb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function ob(a) {
            return ib(function (b) {
                return b = +b, ib(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pb(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        c = gb.support = {}, f = gb.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = gb.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", eb, !1) : e.attachEvent && e.attachEvent("onunload", eb)), p = !f(g), c.attributes = jb(function (a) {
                    return a.className = "i", !a.getAttribute("className")
                }), c.getElementsByTagName = jb(function (a) {
                    return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
                }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = jb(function (a) {
                    return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
                }), c.getById ? (d.find.ID = function (a, b) {
                        if ("undefined" != typeof b.getElementById && p) {
                            var c = b.getElementById(a);
                            return c && c.parentNode ? [c] : []
                        }
                    }, d.filter.ID = function (a) {
                        var b = a.replace(cb, db);
                        return function (a) {
                            return a.getAttribute("id") === b
                        }
                    }) : (delete d.find.ID, d.filter.ID = function (a) {
                        var b = a.replace(cb, db);
                        return function (a) {
                            var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                            return c && c.value === b
                        }
                    }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
                    } : function (a, b) {
                        var c, d = [], e = 0, f = b.getElementsByTagName(a);
                        if ("*" === a) {
                            while (c = f[e++])1 === c.nodeType && d.push(c);
                            return d
                        }
                        return f
                    }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                        return p ? b.getElementsByClassName(a) : void 0
                    }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (jb(function (a) {
                    o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
                }), jb(function (a) {
                    var b = g.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
                })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && jb(function (a) {
                    c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
                }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                        var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                    } : function (a, b) {
                        if (b)while (b = b.parentNode)if (b === a)return !0;
                        return !1
                    }, B = b ? function (a, b) {
                        if (a === b)return l = !0, 0;
                        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
                    } : function (a, b) {
                        if (a === b)return l = !0, 0;
                        var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                        if (!e || !f)return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                        if (e === f)return lb(a, b);
                        c = a;
                        while (c = c.parentNode)h.unshift(c);
                        c = b;
                        while (c = c.parentNode)i.unshift(c);
                        while (h[d] === i[d])d++;
                        return d ? lb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
                    }, g) : n
        }, gb.matches = function (a, b) {
            return gb(a, null, null, b)
        }, gb.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
            } catch (e) {
            }
            return gb(b, n, null, [a]).length > 0
        }, gb.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, gb.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, gb.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, gb.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++])b === a[f] && (e = d.push(f));
                while (e--)a.splice(d[e], 1)
            }
            return k = null, a
        }, e = gb.getText = function (a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)c += e(a)
                } else if (3 === f || 4 === f)return a.nodeValue
            } else while (b = a[d++])c += e(b);
            return c
        }, d = gb.selectors = {
            cacheLength: 50,
            createPseudo: ib,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || gb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && gb.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function () {
                            return !0
                        } : function (a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                }, CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                }, ATTR: function (a, b, c) {
                    return function (d) {
                        var e = gb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                            return !!a.parentNode
                        } : function (b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                            if (q) {
                                if (f) {
                                    while (p) {
                                        l = b;
                                        while (l = l[p])if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                    while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                                } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b))break;
                                return m -= e, m === d || m % d === 0 && m / d >= 0
                            }
                        }
                }, PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || gb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ib(function (a, c) {
                                    var d, f = e(a, b), g = f.length;
                                    while (g--)d = J(a, f[g]), a[d] = !(c[d] = f[g])
                                }) : function (a) {
                                    return e(a, 0, c)
                                }) : e
                }
            },
            pseudos: {
                not: ib(function (a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? ib(function (a, b, c, e) {
                            var f, g = d(a, null, e, []), h = a.length;
                            while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function (a, e, f) {
                            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                        }
                }), has: ib(function (a) {
                    return function (b) {
                        return gb(a, b).length > 0
                    }
                }), contains: ib(function (a) {
                    return a = a.replace(cb, db), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }), lang: ib(function (a) {
                    return W.test(a || "") || gb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function (b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === o
                }, focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return a.disabled === !1
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return !1;
                    return !0
                }, parent: function (a) {
                    return !d.pseudos.empty(a)
                }, header: function (a) {
                    return Z.test(a.nodeName)
                }, input: function (a) {
                    return Y.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: ob(function () {
                    return [0]
                }), last: ob(function (a, b) {
                    return [b - 1]
                }), eq: ob(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }), even: ob(function (a, b) {
                    for (var c = 0; b > c; c += 2)a.push(c);
                    return a
                }), odd: ob(function (a, b) {
                    for (var c = 1; b > c; c += 2)a.push(c);
                    return a
                }), lt: ob(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
                    return a
                }), gt: ob(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})d.pseudos[b] = mb(b);
        for (b in{submit: !0, reset: !0})d.pseudos[b] = nb(b);
        function qb() {
        }

        qb.prototype = d.filters = d.pseudos, d.setFilters = new qb, g = gb.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter)!(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c)break
            }
            return b ? h.length : h ? gb.error(a) : z(a, i).slice(0)
        };
        function rb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
            return d
        }

        function sb(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function (b, c, f) {
                    while (b = b[d])if (1 === b.nodeType || e)return a(b, c, f)
                } : function (b, c, g) {
                    var h, i, j = [w, f];
                    if (g) {
                        while (b = b[d])if ((1 === b.nodeType || e) && a(b, c, g))return !0
                    } else while (b = b[d])if (1 === b.nodeType || e) {
                        if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)return j[2] = h[2];
                        if (i[d] = j, j[2] = a(b, c, g))return !0
                    }
                }
        }

        function tb(a) {
            return a.length > 1 ? function (b, c, d) {
                    var e = a.length;
                    while (e--)if (!a[e](b, c, d))return !1;
                    return !0
                } : a[0]
        }

        function ub(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)gb(a, b[d], c);
            return c
        }

        function vb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function wb(a, b, c, d, e, f) {
            return d && !d[u] && (d = wb(d)), e && !e[u] && (e = wb(e, f)), ib(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ub(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : vb(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = vb(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = vb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sb(function (a) {
                return a === b
            }, h, !0), l = sb(function (a) {
                return J(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; f > i; i++)if (c = d.relative[a[i].type]) m = [sb(tb(m), c)]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e; e++)if (d.relative[a[e].type])break;
                    return wb(i > 1 && tb(m), i > 1 && rb(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && xb(a.slice(i, e)), f > e && xb(a = a.slice(e)), f > e && rb(a))
                }
                m.push(c)
            }
            return tb(m)
        }

        function yb(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++])if (o(l, g, h)) {
                            i.push(l);
                            break
                        }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--, f && r.push(l))
                }
                if (p += q, c && q !== p) {
                    m = 0;
                    while (o = b[m++])o(r, s, g, h);
                    if (f) {
                        if (p > 0)while (q--)r[q] || s[q] || (s[q] = F.call(i));
                        s = vb(s)
                    }
                    H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && gb.uniqueSort(i)
                }
                return k && (w = v, j = t), r
            };
            return c ? ib(f) : f
        }

        return h = gb.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--)f = xb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, yb(e, d)), f.selector = a
            }
            return f
        }, i = gb.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b)return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type])break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && pb(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && rb(j), !a)return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && pb(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = jb(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), jb(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || kb("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && jb(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || kb("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), jb(function (a) {
            return null == a.getAttribute("disabled")
        }) || kb(K, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), gb
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (n.isFunction(b))return n.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType)return n.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b))return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function (a) {
            return g.call(b, a) >= 0 !== c
        })
    }

    n.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
                return 1 === a.nodeType
            }))
    }, n.fn.extend({
        find: function (a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a)return this.pushStack(n(a).filter(function () {
                for (b = 0; c > b; b++)if (n.contains(e[b], this))return !0
            }));
            for (b = 0; c > b; b++)n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        }, filter: function (a) {
            return this.pushStack(x(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(x(this, a || [], !0))
        }, is: function (a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function (a, b) {
        var c, d;
        if (!a)return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))for (c in b)n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0};
    n.extend({
        dir: function (a, b, c) {
            var d = [], e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)if (1 === a.nodeType) {
                if (e && n(a).is(c))break;
                d.push(a)
            }
            return d
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function (a) {
            var b = n(a, this), c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++)if (n.contains(this, b[a]))return !0
            })
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }

    n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return n.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return n.dir(a, "parentNode", c)
        }, next: function (a) {
            return D(a, "nextSibling")
        }, prev: function (a) {
            return D(a, "previousSibling")
        }, nextAll: function (a) {
            return n.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return n.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return n.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return n.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return n.sibling(a.firstChild)
        }, contents: function (a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var E = /\S+/g, F = {};

    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    n.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
            for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break
            }
            d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
        }, k = {
            add: function () {
                if (h) {
                    var c = h.length;
                    !function g(b) {
                        n.each(b, function (b, c) {
                            var d = n.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                        })
                    }(arguments), d ? f = h.length : b && (e = c, j(b))
                }
                return this
            }, remove: function () {
                return h && n.each(arguments, function (a, b) {
                    var c;
                    while ((c = n.inArray(b, h, c)) > -1)h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                }), this
            }, has: function (a) {
                return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
            }, empty: function () {
                return h = [], f = 0, this
            }, disable: function () {
                return h = i = b = void 0, this
            }, disabled: function () {
                return !h
            }, lock: function () {
                return i = void 0, b || k.disable(), this
            }, locked: function () {
                return !i
            }, fireWith: function (a, b) {
                return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
            }, fire: function () {
                return k.fireWith(this, arguments), this
            }, fired: function () {
                return !!c
            }
        };
        return k
    }, n.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c = "pending", d = {
                state: function () {
                    return c
                }, always: function () {
                    return e.done(arguments).fail(arguments), this
                }, then: function () {
                    var a = arguments;
                    return n.Deferred(function (c) {
                        n.each(b, function (b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function () {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }), a = null
                    }).promise()
                }, promise: function (a) {
                    return null != a ? n.extend(a, d) : d
                }
            }, e = {};
            return d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function (a, b, c) {
                return function (e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (e > 1)for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? n.readyWait++ : n.ready(!0)
        }, ready: function (a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
        }
    });
    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
    }

    n.ready.promise = function (b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, n.ready.promise();
    var J = n.access = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c)n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                    return j.call(n(a), c)
                })), b))for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    n.acceptData = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = n.expando + K.uid++
    }

    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function (a) {
            if (!K.accepts(a))return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {value: c}, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        }, set: function (a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b) f[b] = c; else if (n.isEmptyObject(f)) n.extend(this.cache[e], b); else for (d in b)f[d] = b[d];
            return f
        }, get: function (a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        }, access: function (a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        }, remove: function (a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b) this.cache[f] = {}; else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                while (c--)delete g[d[c]]
            }
        }, hasData: function (a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {})
        }, discard: function (a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K, M = new K, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;

    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
            } catch (e) {
            }
            M.set(a, b, c)
        } else c = void 0;
        return c
    }

    n.extend({
        hasData: function (a) {
            return M.hasData(a) || L.hasData(a)
        }, data: function (a, b, c) {
            return M.access(a, b, c)
        }, removeData: function (a, b) {
            M.remove(a, b)
        }, _data: function (a, b, c) {
            return L.access(a, b, c)
        }, _removeData: function (a, b) {
            L.remove(a, b)
        }
    }), n.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--)g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                    M.set(this, a)
                }) : J(this, function (b) {
                    var c, d = n.camelCase(a);
                    if (f && void 0 === b) {
                        if (c = M.get(f, a), void 0 !== c)return c;
                        if (c = M.get(f, d), void 0 !== c)return c;
                        if (c = P(f, d, void 0), void 0 !== c)return c
                    } else this.each(function () {
                        var c = M.get(this, d);
                        M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                    })
                }, null, b, arguments.length > 1, null, !0)
        }, removeData: function (a) {
            return this.each(function () {
                M.remove(this, a)
            })
        }
    }), n.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                    empty: n.Callbacks("once memory").add(function () {
                        L.remove(a, [b + "queue", c])
                    })
                })
        }
    }), n.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                        var c = n.queue(this, a, b);
                        n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                    })
        }, dequeue: function (a) {
            return this.each(function () {
                n.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--)c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = ["Top", "Right", "Bottom", "Left"], S = function (a, b) {
        return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    }, T = /^(?:checkbox|radio)$/i;
    !function () {
        var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;

    function Z() {
        return !0
    }

    function $() {
        return !1
    }

    function _() {
        try {
            return l.activeElement
        } catch (a) {
        }
    }

    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(E) || [""], j = b.length;
                while (j--)h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                    while (f--)k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                } else for (o in i)n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)p.push(g), h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped())b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))for (; i !== this; i = i.parentNode || this)if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++)f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                d.length && g.push({elem: i, handlers: d})
            }
            return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[n.expando])return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--)c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return n.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = n.extend(new n.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        n.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.focusinBubbles || n.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
            }
        }
    }), n.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a)this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $; else if (!d)return this;
            return 1 === e && (f = d, d = function (a) {
                return n().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
                n.event.add(this, a, d, c, b)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a)this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
                n.event.remove(this, a, c, b)
            })
        }, trigger: function (a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bb = /<([\w:]+)/, cb = /<|&#?\w+;/, db = /<(?:script|style|link)/i, eb = /checked\s*(?:[^=]|=\s*.checked.)/i, fb = /^$|\/(?:java|ecma)script/i, gb = /^true\/(.*)/, hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ib = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td;
    function jb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function kb(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function lb(a) {
        var b = gb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function mb(a, b) {
        for (var c = 0, d = a.length; d > c; c++)L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }

    function nb(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)for (c = 0, d = j[e].length; d > c; c++)n.event.add(b, e, j[e][c])
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
        }
    }

    function ob(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function pb(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    n.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++)pb(f[d], g[d]);
            if (b)if (c)for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++)nb(f[d], g[d]); else nb(a, h);
            return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h
        }, buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)if (e = a[m], e || 0 === e)if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e); else if (cb.test(e)) {
                f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0];
                while (j--)f = f.lastChild;
                n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            k.textContent = "", m = 0;
            while (e = l[m++])if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c)) {
                j = 0;
                while (e = f[j++])fb.test(e.type || "") && c.push(e)
            }
            return k
        }, cleanData: function (a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events)for (d in b.events)f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }), n.fn.extend({
        text: function (a) {
            return J(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().each(function () {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                    })
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, remove: function (a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || n.cleanData(ob(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (n.cleanData(ob(a, !1)), a.textContent = "");
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b)
            })
        }, html: function (a) {
            return J(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType)return b.innerHTML;
                if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(ab, "<$1></$2>");
                    try {
                        for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && eb.test(p))return this.each(function (c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++)h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, ob(h, "script"))), b.call(this[j], h, j);
                if (g)for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++)h = f[j], fb.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, "")))
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qb, rb = {};

    function sb(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(), f
    }

    function tb(a) {
        var b = l, c = rb[a];
        return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c
    }

    var ub = /^margin/, vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wb = function (b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    };

    function xb(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function yb(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    !function () {
        var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);
            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
            }

            a.getComputedStyle && n.extend(k, {
                pixelPosition: function () {
                    return g(), b
                }, boxSizingReliable: function () {
                    return null == c && g(), c
                }, reliableMarginRight: function () {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b
                }
            })
        }
    }(), n.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b)g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)a.style[f] = g[f];
        return e
    };
    var zb = /^(none|table(?!-c[ea]).+)/, Ab = new RegExp("^(" + Q + ")(.*)$", "i"), Bb = new RegExp("^([+-])=(" + Q + ")", "i"), Cb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Db = {letterSpacing: "0", fontWeight: "400"}, Eb = ["Webkit", "O", "Moz", "ms"];

    function Fb(a, b) {
        if (b in a)return b;
        var c = b[0].toUpperCase() + b.slice(1), d = b, e = Eb.length;
        while (e--)if (b = Eb[e] + c, b in a)return b;
        return d
    }

    function Gb(a, b, c) {
        var d = Ab.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Hb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }

    function Ib(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wb(a), g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e))return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Jb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = xb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Cb, function () {
                            return Ib(a, b, d)
                        }) : Ib(a, b, d) : void 0
            }, set: function (a, c, d) {
                var e = d && wb(a);
                return Gb(a, c, d ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function (a, b) {
        return b ? n.swap(a, {display: "inline-block"}, xb, [a, "marginRight"]) : void 0
    }), n.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        n.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, ub.test(a) || (n.cssHooks[a + b].set = Gb)
    }), n.fn.extend({
        css: function (a, b) {
            return J(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = wb(a), e = b.length; e > g; g++)f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () {
            return Jb(this, !0)
        }, hide: function () {
            return Jb(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                    S(this) ? n(this).show() : n(this).hide()
                })
        }
    });
    function Kb(a, b, c, d, e) {
        return new Kb.prototype.init(a, b, c, d, e)
    }

    n.Tween = Kb, Kb.prototype = {
        constructor: Kb, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = Kb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Kb.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = Kb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this
        }
    }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = Kb.prototype.init, n.fx.step = {};
    var Lb, Mb, Nb = /^(?:toggle|show|hide)$/, Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), Pb = /queueHooks$/, Qb = [Vb], Rb = {
        "*": [function (a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = Ob.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || "px" !== f && +d) && Ob.exec(n.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
        }]
    };

    function Sb() {
        return setTimeout(function () {
            Lb = void 0
        }), Lb = n.now()
    }

    function Tb(a, b) {
        var c, d = 0, e = {height: a};
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ub(a, b, c) {
        for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a))return d
    }

    function Vb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b)if (e = b[d], Nb.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d])continue;
                p = !0
            }
            m[d] = q && q[d] || n.style(a, d)
        } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j); else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
                    n(a).hide()
                }), l.done(function () {
                var b;
                L.remove(a, "fxshow");
                for (b in m)n.style(a, b, m[b])
            });
            for (d in m)g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Wb(a, b) {
        var c, d, e, f, g;
        for (c in a)if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f)c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function Xb(a, b, c) {
        var d, e, f = 0, g = Qb.length, h = n.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e)return !1;
            for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Lb || Sb(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e)return this;
                for (e = !0; d > c; c++)j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (Wb(k, j.opts.specialEasing); g > f; f++)if (d = Qb[f].call(j, a, k, j.opts))return d;
        return n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    n.Animation = n.extend(Xb, {
        tweener: function (a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? Qb.unshift(a) : Qb.push(a)
        }
    }), n.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () {
                var b = Xb(this, n.extend({}, a), f);
                (e || L.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && Pb.test(e) && d(g[e]);
                for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function (a, b) {
        var c = n.fn[b];
        n.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: Tb("show"),
        slideUp: Tb("hide"),
        slideToggle: Tb("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        n.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function () {
        var a, b = 0, c = n.timers;
        for (Lb = n.now(); b < c.length; b++)a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), Lb = void 0
    }, n.fx.timer = function (a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function () {
        Mb || (Mb = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function () {
        clearInterval(Mb), Mb = null
    }, n.fx.speeds = {slow: 600, fast: 200, _default: 400}, n.fn.delay = function (a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, function () {
        var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
        a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
    }();
    var Yb, Zb, $b = n.expr.attrHandle;
    n.fn.extend({
        attr: function (a, b) {
            return J(this, n.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        }, removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)while (c = f[e++])d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), Zb = {
        set: function (a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = $b[b] || n.find.attr;
        $b[b] = function (a, b, d) {
            var e, f;
            return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e
        }
    });
    var _b = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return J(this, n.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return this.each(function () {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        n.propFix[this.toLowerCase()] = this
    });
    var ac = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))return this.each(function (b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (h)for (b = (a || "").match(E) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
                f = 0;
                while (e = b[f++])d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = n.trim(d), c.className !== g && (c.className = g)
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))return this.each(function (b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (h)for (b = (a || "").match(E) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
                f = 0;
                while (e = b[f++])while (d.indexOf(" " + e + " ") >= 0)d = d.replace(" " + e + " ", " ");
                g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
                        n(this).toggleClass(a.call(this, c, this.className, b), b)
                    } : function () {
                        if ("string" === c) {
                            var b, d = 0, e = n(this), f = a.match(E) || [];
                            while (b = f[d++])e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                        } else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
                    })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0)return !0;
            return !1
        }
    });
    var bc = /\r/g;
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)return d = n.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                                return null == a ? "" : a + ""
                            })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e)return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                        if (b = n(c).val(), f)return b;
                        g.push(b)
                    }
                    return g
                }, set: function (a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--)d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = {
            set: function (a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cc = n.now(), dc = /\?/;
    n.parseJSON = function (a) {
        return JSON.parse(a + "")
    }, n.parseXML = function (a) {
        var b, c;
        if (!a || "string" != typeof a)return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
    };
    var ec = /#.*$/, fc = /([?&])_=[^&]*/, gc = /^(.*?):[ \t]*([^\r\n]*)$/gm, hc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ic = /^(?:GET|HEAD)$/, jc = /^\/\//, kc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, lc = {}, mc = {}, nc = "*/".concat("*"), oc = a.location.href, pc = kc.exec(oc.toLowerCase()) || [];

    function qc(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c))while (d = f[e++])"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function rc(a, b, c, d) {
        var e = {}, f = a === mc;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }

        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function sc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b)void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function tc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)for (e in h)if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function uc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0)if (g && a["throws"]) b = g(b); else try {
                b = g(b)
            } catch (l) {
                return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: oc,
            type: "GET",
            isLocal: hc.test(pc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? sc(sc(a, n.ajaxSettings), b) : sc(n.ajaxSettings, a)
        },
        ajaxPrefilter: qc(lc),
        ajaxTransport: qc(mc),
        ajax: function (a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function (a) {
                    var b;
                    if (2 === t) {
                        if (!f) {
                            f = {};
                            while (b = gc.exec(e))f[b[1].toLowerCase()] = b[2]
                        }
                        b = f[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function () {
                    return 2 === t ? e : null
                },
                setRequestHeader: function (a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this
                },
                overrideMimeType: function (a) {
                    return t || (k.mimeType = a), this
                },
                statusCode: function (a) {
                    var b;
                    if (a)if (2 > t)for (b in a)q[b] = [q[b], a[b]]; else v.always(a[v.status]);
                    return this
                },
                abort: function (a) {
                    var b = a || u;
                    return c && c.abort(b), x(0, b), this
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || oc) + "").replace(ec, "").replace(jc, pc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pc[1] && h[2] === pc[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pc[3] || ("http:" === pc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rc(lc, k, b, v), 2 === t)return v;
            i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ic.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fc.test(d) ? d.replace(fc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nc + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers)v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))return v.abort();
            u = "abort";
            for (j in{success: 1, error: 1, complete: 1})v[j](k[j]);
            if (c = rc(mc, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, c.send(r, x)
                } catch (w) {
                    if (!(2 > t))throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");
            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tc(k, v, f)), u = uc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }

            return v
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n._evalUrl = function (a) {
        return n.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, n.fn.extend({
        wrapAll: function (a) {
            var b;
            return n.isFunction(a) ? this.each(function (b) {
                    n(this).wrapAll(a.call(this, b))
                }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstElementChild)a = a.firstElementChild;
                    return a
                }).append(this)), this)
        }, wrapInner: function (a) {
            return this.each(n.isFunction(a) ? function (b) {
                    n(this).wrapInner(a.call(this, b))
                } : function () {
                    var b = n(this), c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
        }, wrap: function (a) {
            var b = n.isFunction(a);
            return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a)
    };
    var vc = /%20/g, wc = /\[\]$/, xc = /\r?\n/g, yc = /^(?:submit|button|image|reset|file)$/i, zc = /^(?:input|select|textarea|keygen)/i;

    function Ac(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function (b, e) {
            c || wc.test(a) ? d(a, e) : Ac(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b)Ac(a + "[" + e + "]", b[e], c, d)
    }

    n.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a)Ac(c, a[c], b, e);
        return d.join("&").replace(vc, "+")
    }, n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && zc.test(this.nodeName) && !yc.test(a) && (this.checked || !T.test(a))
            }).map(function (a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                            return {name: b.name, value: a.replace(xc, "\r\n")}
                        }) : {name: b.name, value: c.replace(xc, "\r\n")}
            }).get()
        }
    }), n.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var Bc = 0, Cc = {}, Dc = {0: 200, 1223: 204}, Ec = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in Cc)Cc[a]()
    }), k.cors = !!Ec && "withCredentials" in Ec, k.ajax = Ec = !!Ec, n.ajaxTransport(function (a) {
        var b;
        return k.cors || Ec && !a.crossDomain ? {
                send: function (c, d) {
                    var e, f = a.xhr(), g = ++Bc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (e in a.xhrFields)f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c)f.setRequestHeader(e, c[e]);
                    b = function (a) {
                        return function () {
                            b && (delete Cc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Dc[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()))
                        }
                    }, f.onload = b(), f.onerror = b("error"), b = Cc[g] = b("abort");
                    try {
                        f.send(a.hasContent && a.data || null)
                    } catch (h) {
                        if (b)throw h
                    }
                }, abort: function () {
                    b && b()
                }
            } : void 0
    }), n.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function (a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), l.head.appendChild(b[0])
                }, abort: function () {
                    c && c()
                }
            }
        }
    });
    var Fc = [], Gc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = Fc.pop() || n.expando + "_" + cc++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Gc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
                return g || n.error(e + " was not called"), g[0]
            }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
                g = arguments
            }, d.always(function () {
                a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
            }), "script") : void 0
    }), n.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a)return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var Hc = n.fn.load;
    n.fn.load = function (a, b, c) {
        if ("string" != typeof a && Hc)return Hc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
                g.each(c, f || [a.responseText, b, a])
            }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem
        }).length
    };
    var Ic = a.document.documentElement;

    function Jc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }

    n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function (a) {
            if (arguments.length)return void 0 === a ? this : this.each(function (b) {
                    n.offset.setOffset(this, a, b)
                });
            var b, c, d = this[0], e = {top: 0, left: 0}, f = d && d.ownerDocument;
            if (f)return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jc(f), {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e
        }, position: function () {
            if (this[0]) {
                var a, b, c = this[0], d = {top: 0, left: 0};
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || Ic;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position"))a = a.offsetParent;
                return a || Ic
            })
        }
    }), n.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function (e) {
            return J(this, function (b, e, f) {
                var g = Jc(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = yb(k.pixelPosition, function (a, c) {
            return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({Height: "height", Width: "width"}, function (a, b) {
        n.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function (b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function () {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return n
    });
    var Kc = a.jQuery, Lc = a.$;
    return n.noConflict = function (b) {
        return a.$ === n && (a.$ = Lc), b && a.jQuery === n && (a.jQuery = Kc), n
    }, typeof b === U && (a.jQuery = a.$ = n), n
});
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad', swing: function (x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    }, easeInQuad: function (x, t, b, c, d) {
        return c * (t /= d) * t + b;
    }, easeOutQuad: function (x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    }, easeInOutQuad: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1)return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }, easeInCubic: function (x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    }, easeOutCubic: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    }, easeInOutCubic: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1)return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    }, easeInQuart: function (x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    }, easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    }, easeInOutQuart: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1)return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    }, easeInQuint: function (x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    }, easeOutQuint: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    }, easeInOutQuint: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1)return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    }, easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    }, easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    }, easeInOutSine: function (x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    }, easeInExpo: function (x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    }, easeOutExpo: function (x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    }, easeInOutExpo: function (x, t, b, c, d) {
        if (t == 0)return b;
        if (t == d)return b + c;
        if ((t /= d / 2) < 1)return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }, easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    }, easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    }, easeInOutCirc: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1)return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    }, easeInElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)return b;
        if ((t /= d) == 1)return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    }, easeOutElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)return b;
        if ((t /= d) == 1)return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    }, easeInOutElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)return b;
        if ((t /= d / 2) == 2)return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1)return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    }, easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    }, easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    }, easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1)return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    }, easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    }, easeOutBounce: function (x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    }, easeInOutBounce: function (x, t, b, c, d) {
        if (t < d / 2)return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
});
;jQuery.extend(jQuery.easing, {
    easeInOutMaterial: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1)return c / 2 * t * t + b;
        return c / 4 * ((t -= 2) * t * t + 2) + b;
    }
});
;!function (e) {
    function t(e) {
        var t = e.length, r = $.type(e);
        return "function" === r || $.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    if (!e.jQuery) {
        var $ = function (e, t) {
            return new $.fn.init(e, t)
        };
        $.isWindow = function (e) {
            return null != e && e == e.window
        }, $.type = function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? a[o.call(e)] || "object" : typeof e
        }, $.isArray = Array.isArray || function (e) {
                return "array" === $.type(e)
            }, $.isPlainObject = function (e) {
            var t;
            if (!e || "object" !== $.type(e) || e.nodeType || $.isWindow(e))return !1;
            try {
                if (e.constructor && !n.call(e, "constructor") && !n.call(e.constructor.prototype, "isPrototypeOf"))return !1
            } catch (r) {
                return !1
            }
            for (t in e);
            return void 0 === t || n.call(e, t)
        }, $.each = function (e, r, a) {
            var n, o = 0, i = e.length, s = t(e);
            if (a) {
                if (s)for (; i > o && (n = r.apply(e[o], a), n !== !1); o++); else for (o in e)if (n = r.apply(e[o], a), n === !1)break
            } else if (s)for (; i > o && (n = r.call(e[o], o, e[o]), n !== !1); o++); else for (o in e)if (n = r.call(e[o], o, e[o]), n === !1)break;
            return e
        }, $.data = function (e, t, a) {
            if (void 0 === a) {
                var n = e[$.expando], o = n && r[n];
                if (void 0 === t)return o;
                if (o && t in o)return o[t]
            } else if (void 0 !== t) {
                var n = e[$.expando] || (e[$.expando] = ++$.uuid);
                return r[n] = r[n] || {}, r[n][t] = a, a
            }
        }, $.removeData = function (e, t) {
            var a = e[$.expando], n = a && r[a];
            n && $.each(t, function (e, t) {
                delete n[t]
            })
        }, $.extend = function () {
            var e, t, r, a, n, o, i = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
            for ("boolean" == typeof i && (u = i, i = arguments[s] || {}, s++), "object" != typeof i && "function" !== $.type(i) && (i = {}), s === l && (i = this, s--); l > s; s++)if (null != (n = arguments[s]))for (a in n)e = i[a], r = n[a], i !== r && (u && r && ($.isPlainObject(r) || (t = $.isArray(r))) ? (t ? (t = !1, o = e && $.isArray(e) ? e : []) : o = e && $.isPlainObject(e) ? e : {}, i[a] = $.extend(u, o, r)) : void 0 !== r && (i[a] = r));
            return i
        }, $.queue = function (e, r, a) {
            function n(e, r) {
                var a = r || [];
                return null != e && (t(Object(e)) ? !function (e, t) {
                        for (var r = +t.length, a = 0, n = e.length; r > a;)e[n++] = t[a++];
                        if (r !== r)for (; void 0 !== t[a];)e[n++] = t[a++];
                        return e.length = n, e
                    }(a, "string" == typeof e ? [e] : e) : [].push.call(a, e)), a
            }

            if (e) {
                r = (r || "fx") + "queue";
                var o = $.data(e, r);
                return a ? (!o || $.isArray(a) ? o = $.data(e, r, n(a)) : o.push(a), o) : o || []
            }
        }, $.dequeue = function (e, t) {
            $.each(e.nodeType ? [e] : e, function (e, r) {
                t = t || "fx";
                var a = $.queue(r, t), n = a.shift();
                "inprogress" === n && (n = a.shift()), n && ("fx" === t && a.unshift("inprogress"), n.call(r, function () {
                    $.dequeue(r, t)
                }))
            })
        }, $.fn = $.prototype = {
            init: function (e) {
                if (e.nodeType)return this[0] = e, this;
                throw new Error("Not a DOM node.")
            }, offset: function () {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            }, position: function () {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;)e = e.offsetParent;
                    return e || document
                }

                var t = this[0], e = e.apply(t), r = this.offset(), a = /^(?:body|html)$/i.test(e.nodeName) ? {
                        top: 0,
                        left: 0
                    } : $(e).offset();
                return r.top -= parseFloat(t.style.marginTop) || 0, r.left -= parseFloat(t.style.marginLeft) || 0, e.style && (a.top += parseFloat(e.style.borderTopWidth) || 0, a.left += parseFloat(e.style.borderLeftWidth) || 0), {
                    top: r.top - a.top,
                    left: r.left - a.left
                }
            }
        };
        var r = {};
        $.expando = "velocity" + (new Date).getTime(), $.uuid = 0;
        for (var a = {}, n = a.hasOwnProperty, o = a.toString, i = "Boolean Number String Function Array Date RegExp Object Error".split(" "), s = 0; s < i.length; s++)a["[object " + i[s] + "]"] = i[s].toLowerCase();
        $.fn.init.prototype = $.fn, e.Velocity = {Utilities: $}
    }
}(window), function (e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function () {
    return function (e, t, r, a) {
        function n(e) {
            for (var t = -1, r = e ? e.length : 0, a = []; ++t < r;) {
                var n = e[t];
                n && a.push(n)
            }
            return a
        }

        function o(e) {
            return g.isWrapped(e) ? e = [].slice.call(e) : g.isNode(e) && (e = [e]), e
        }

        function i(e) {
            var t = $.data(e, "velocity");
            return null === t ? a : t
        }

        function s(e) {
            return function (t) {
                return Math.round(t * e) * (1 / e)
            }
        }

        function l(e, r, a, n) {
            function o(e, t) {
                return 1 - 3 * t + 3 * e
            }

            function i(e, t) {
                return 3 * t - 6 * e
            }

            function s(e) {
                return 3 * e
            }

            function l(e, t, r) {
                return ((o(t, r) * e + i(t, r)) * e + s(t)) * e
            }

            function u(e, t, r) {
                return 3 * o(t, r) * e * e + 2 * i(t, r) * e + s(t)
            }

            function c(t, r) {
                for (var n = 0; m > n; ++n) {
                    var o = u(r, e, a);
                    if (0 === o)return r;
                    var i = l(r, e, a) - t;
                    r -= i / o
                }
                return r
            }

            function p() {
                for (var t = 0; b > t; ++t)w[t] = l(t * x, e, a)
            }

            function f(t, r, n) {
                var o, i, s = 0;
                do i = r + (n - r) / 2, o = l(i, e, a) - t, o > 0 ? n = i : r = i; while (Math.abs(o) > h && ++s < v);
                return i
            }

            function d(t) {
                for (var r = 0, n = 1, o = b - 1; n != o && w[n] <= t; ++n)r += x;
                --n;
                var i = (t - w[n]) / (w[n + 1] - w[n]), s = r + i * x, l = u(s, e, a);
                return l >= y ? c(t, s) : 0 == l ? s : f(t, r, r + x)
            }

            function g() {
                V = !0, (e != r || a != n) && p()
            }

            var m = 4, y = .001, h = 1e-7, v = 10, b = 11, x = 1 / (b - 1), S = "Float32Array" in t;
            if (4 !== arguments.length)return !1;
            for (var P = 0; 4 > P; ++P)if ("number" != typeof arguments[P] || isNaN(arguments[P]) || !isFinite(arguments[P]))return !1;
            e = Math.min(e, 1), a = Math.min(a, 1), e = Math.max(e, 0), a = Math.max(a, 0);
            var w = S ? new Float32Array(b) : new Array(b), V = !1, C = function (t) {
                return V || g(), e === r && a === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), r, n)
            };
            C.getControlPoints = function () {
                return [{x: e, y: r}, {x: a, y: n}]
            };
            var T = "generateBezier(" + [e, r, a, n] + ")";
            return C.toString = function () {
                return T
            }, C
        }

        function u(e, t) {
            var r = e;
            return g.isString(e) ? v.Easings[e] || (r = !1) : r = g.isArray(e) && 1 === e.length ? s.apply(null, e) : g.isArray(e) && 2 === e.length ? b.apply(null, e.concat([t])) : g.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, r === !1 && (r = v.Easings[v.defaults.easing] ? v.defaults.easing : h), r
        }

        function c(e) {
            if (e) {
                var t = (new Date).getTime(), r = v.State.calls.length;
                r > 1e4 && (v.State.calls = n(v.State.calls));
                for (var o = 0; r > o; o++)if (v.State.calls[o]) {
                    var s = v.State.calls[o], l = s[0], u = s[2], f = s[3], d = !!f, m = null;
                    f || (f = v.State.calls[o][3] = t - 16);
                    for (var y = Math.min((t - f) / u.duration, 1), h = 0, b = l.length; b > h; h++) {
                        var S = l[h], w = S.element;
                        if (i(w)) {
                            var V = !1;
                            if (u.display !== a && null !== u.display && "none" !== u.display) {
                                if ("flex" === u.display) {
                                    var C = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                    $.each(C, function (e, t) {
                                        x.setPropertyValue(w, "display", t)
                                    })
                                }
                                x.setPropertyValue(w, "display", u.display)
                            }
                            u.visibility !== a && "hidden" !== u.visibility && x.setPropertyValue(w, "visibility", u.visibility);
                            for (var T in S)if ("element" !== T) {
                                var k = S[T], A, F = g.isString(k.easing) ? v.Easings[k.easing] : k.easing;
                                if (1 === y) A = k.endValue; else {
                                    var E = k.endValue - k.startValue;
                                    if (A = k.startValue + E * F(y, u, E), !d && A === k.currentValue)continue
                                }
                                if (k.currentValue = A, "tween" === T) m = A; else {
                                    if (x.Hooks.registered[T]) {
                                        var j = x.Hooks.getRoot(T), H = i(w).rootPropertyValueCache[j];
                                        H && (k.rootPropertyValue = H)
                                    }
                                    var N = x.setPropertyValue(w, T, k.currentValue + (0 === parseFloat(A) ? "" : k.unitType), k.rootPropertyValue, k.scrollData);
                                    x.Hooks.registered[T] && (i(w).rootPropertyValueCache[j] = x.Normalizations.registered[j] ? x.Normalizations.registered[j]("extract", null, N[1]) : N[1]), "transform" === N[0] && (V = !0)
                                }
                            }
                            u.mobileHA && i(w).transformCache.translate3d === a && (i(w).transformCache.translate3d = "(0px, 0px, 0px)", V = !0), V && x.flushTransformCache(w)
                        }
                    }
                    u.display !== a && "none" !== u.display && (v.State.calls[o][2].display = !1), u.visibility !== a && "hidden" !== u.visibility && (v.State.calls[o][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], y, Math.max(0, f + u.duration - t), f, m), 1 === y && p(o)
                }
            }
            v.State.isTicking && P(c)
        }

        function p(e, t) {
            if (!v.State.calls[e])return !1;
            for (var r = v.State.calls[e][0], n = v.State.calls[e][1], o = v.State.calls[e][2], s = v.State.calls[e][4], l = !1, u = 0, c = r.length; c > u; u++) {
                var p = r[u].element;
                if (t || o.loop || ("none" === o.display && x.setPropertyValue(p, "display", o.display), "hidden" === o.visibility && x.setPropertyValue(p, "visibility", o.visibility)), o.loop !== !0 && ($.queue(p)[1] === a || !/\.velocityQueueEntryFlag/i.test($.queue(p)[1])) && i(p)) {
                    i(p).isAnimating = !1, i(p).rootPropertyValueCache = {};
                    var f = !1;
                    $.each(x.Lists.transforms3D, function (e, t) {
                        var r = /^scale/.test(t) ? 1 : 0, n = i(p).transformCache[t];
                        i(p).transformCache[t] !== a && new RegExp("^\\(" + r + "[^.]").test(n) && (f = !0, delete i(p).transformCache[t])
                    }), o.mobileHA && (f = !0, delete i(p).transformCache.translate3d), f && x.flushTransformCache(p), x.Values.removeClass(p, "velocity-animating")
                }
                if (!t && o.complete && !o.loop && u === c - 1)try {
                    o.complete.call(n, n)
                } catch (d) {
                    setTimeout(function () {
                        throw d
                    }, 1)
                }
                s && o.loop !== !0 && s(n), i(p) && o.loop === !0 && !t && ($.each(i(p).tweensContainer, function (e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                }), v(p, "reverse", {loop: !0, delay: o.delay})), o.queue !== !1 && $.dequeue(p, o.queue)
            }
            v.State.calls[e] = !1;
            for (var g = 0, m = v.State.calls.length; m > g; g++)if (v.State.calls[g] !== !1) {
                l = !0;
                break
            }
            l === !1 && (v.State.isTicking = !1, delete v.State.calls, v.State.calls = [])
        }

        var f = function () {
            if (r.documentMode)return r.documentMode;
            for (var e = 7; e > 4; e--) {
                var t = r.createElement("div");
                if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length)return t = null, e
            }
            return a
        }(), d = function () {
            var e = 0;
            return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
                    var r = (new Date).getTime(), a;
                    return a = Math.max(0, 16 - (r - e)), e = r + a, setTimeout(function () {
                        t(r + a)
                    }, a)
                }
        }(), g = {
            isString: function (e) {
                return "string" == typeof e
            }, isArray: Array.isArray || function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }, isFunction: function (e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }, isNode: function (e) {
                return e && e.nodeType
            }, isNodeList: function (e) {
                return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== a && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
            }, isWrapped: function (e) {
                return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
            }, isSVG: function (e) {
                return t.SVGElement && e instanceof t.SVGElement
            }, isEmptyObject: function (e) {
                for (var t in e)return !1;
                return !0
            }
        }, $, m = !1;
        if (e.fn && e.fn.jquery ? ($ = e, m = !0) : $ = t.Velocity.Utilities, 8 >= f && !m)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= f)return void(jQuery.fn.velocity = jQuery.fn.animate);
        var y = 400, h = "swing", v = {
            State: {
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                isAndroid: /Android/i.test(navigator.userAgent),
                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                isChrome: t.chrome,
                isFirefox: /Firefox/i.test(navigator.userAgent),
                prefixElement: r.createElement("div"),
                prefixMatches: {},
                scrollAnchor: null,
                scrollPropertyLeft: null,
                scrollPropertyTop: null,
                isTicking: !1,
                calls: []
            },
            CSS: {},
            Utilities: $,
            Redirects: {},
            Easings: {},
            Promise: t.Promise,
            defaults: {
                queue: "",
                duration: y,
                easing: h,
                begin: a,
                complete: a,
                progress: a,
                display: a,
                visibility: a,
                loop: !1,
                delay: !1,
                mobileHA: !0,
                _cacheValues: !0
            },
            init: function (e) {
                $.data(e, "velocity", {
                    isSVG: g.isSVG(e),
                    isAnimating: !1,
                    computedStyle: null,
                    tweensContainer: null,
                    rootPropertyValueCache: {},
                    transformCache: {}
                })
            },
            hook: null,
            mock: !1,
            version: {major: 1, minor: 2, patch: 2},
            debug: !1
        };
        t.pageYOffset !== a ? (v.State.scrollAnchor = t, v.State.scrollPropertyLeft = "pageXOffset", v.State.scrollPropertyTop = "pageYOffset") : (v.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, v.State.scrollPropertyLeft = "scrollLeft", v.State.scrollPropertyTop = "scrollTop");
        var b = function () {
            function e(e) {
                return -e.tension * e.x - e.friction * e.v
            }

            function t(t, r, a) {
                var n = {x: t.x + a.dx * r, v: t.v + a.dv * r, tension: t.tension, friction: t.friction};
                return {dx: n.v, dv: e(n)}
            }

            function r(r, a) {
                var n = {
                    dx: r.v,
                    dv: e(r)
                }, o = t(r, .5 * a, n), i = t(r, .5 * a, o), s = t(r, a, i), l = 1 / 6 * (n.dx + 2 * (o.dx + i.dx) + s.dx), u = 1 / 6 * (n.dv + 2 * (o.dv + i.dv) + s.dv);
                return r.x = r.x + l * a, r.v = r.v + u * a, r
            }

            return function a(e, t, n) {
                var o = {x: -1, v: 0, tension: null, friction: null}, i = [0], s = 0, l = 1e-4, u = .016, c, p, f;
                for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, n = n || null, o.tension = e, o.friction = t, c = null !== n, c ? (s = a(e, t), p = s / n * u) : p = u; ;)if (f = r(f || o, p), i.push(1 + f.x), s += 16, !(Math.abs(f.x) > l && Math.abs(f.v) > l))break;
                return c ? function (e) {
                        return i[e * (i.length - 1) | 0]
                    } : s
            }
        }();
        v.Easings = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }, spring: function (e) {
                return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
            }
        }, $.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (e, t) {
            v.Easings[t[0]] = l.apply(null, t[1])
        });
        var x = v.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                }, registered: {}, register: function () {
                    for (var e = 0; e < x.Lists.colors.length; e++) {
                        var t = "color" === x.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                        x.Hooks.templates[x.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                    }
                    var r, a, n;
                    if (f)for (r in x.Hooks.templates) {
                        a = x.Hooks.templates[r], n = a[0].split(" ");
                        var o = a[1].match(x.RegEx.valueSplit);
                        "Color" === n[0] && (n.push(n.shift()), o.push(o.shift()), x.Hooks.templates[r] = [n.join(" "), o.join(" ")])
                    }
                    for (r in x.Hooks.templates) {
                        a = x.Hooks.templates[r], n = a[0].split(" ");
                        for (var e in n) {
                            var i = r + n[e], s = e;
                            x.Hooks.registered[i] = [r, s]
                        }
                    }
                }, getRoot: function (e) {
                    var t = x.Hooks.registered[e];
                    return t ? t[0] : e
                }, cleanRootPropertyValue: function (e, t) {
                    return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]), t
                }, extractValue: function (e, t) {
                    var r = x.Hooks.registered[e];
                    if (r) {
                        var a = r[0], n = r[1];
                        return t = x.Hooks.cleanRootPropertyValue(a, t), t.toString().match(x.RegEx.valueSplit)[n]
                    }
                    return t
                }, injectValue: function (e, t, r) {
                    var a = x.Hooks.registered[e];
                    if (a) {
                        var n = a[0], o = a[1], i, s;
                        return r = x.Hooks.cleanRootPropertyValue(n, r), i = r.toString().match(x.RegEx.valueSplit), i[o] = t, s = i.join(" ")
                    }
                    return r
                }
            },
            Normalizations: {
                registered: {
                    clip: function (e, t, r) {
                        switch (e) {
                            case"name":
                                return "clip";
                            case"extract":
                                var a;
                                return x.RegEx.wrappedValueAlreadyExtracted.test(r) ? a = r : (a = r.toString().match(x.RegEx.valueUnwrap), a = a ? a[1].replace(/,(\s+)?/g, " ") : r), a;
                            case"inject":
                                return "rect(" + r + ")"
                        }
                    }, blur: function (e, t, r) {
                        switch (e) {
                            case"name":
                                return v.State.isFirefox ? "filter" : "-webkit-filter";
                            case"extract":
                                var a = parseFloat(r);
                                if (!a && 0 !== a) {
                                    var n = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    a = n ? n[1] : 0
                                }
                                return a;
                            case"inject":
                                return parseFloat(r) ? "blur(" + r + ")" : "none"
                        }
                    }, opacity: function (e, t, r) {
                        if (8 >= f)switch (e) {
                            case"name":
                                return "filter";
                            case"extract":
                                var a = r.toString().match(/alpha\(opacity=(.*)\)/i);
                                return r = a ? a[1] / 100 : 1;
                            case"inject":
                                return t.style.zoom = 1, parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")"
                        } else switch (e) {
                            case"name":
                                return "opacity";
                            case"extract":
                                return r;
                            case"inject":
                                return r
                        }
                    }
                }, register: function () {
                    9 >= f || v.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                    for (var e = 0; e < x.Lists.transformsBase.length; e++)!function () {
                        var t = x.Lists.transformsBase[e];
                        x.Normalizations.registered[t] = function (e, r, n) {
                            switch (e) {
                                case"name":
                                    return "transform";
                                case"extract":
                                    return i(r) === a || i(r).transformCache[t] === a ? /^scale/i.test(t) ? 1 : 0 : i(r).transformCache[t].replace(/[()]/g, "");
                                case"inject":
                                    var o = !1;
                                    switch (t.substr(0, t.length - 1)) {
                                        case"translate":
                                            o = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);
                                            break;
                                        case"scal":
                                        case"scale":
                                            v.State.isAndroid && i(r).transformCache[t] === a && 1 > n && (n = 1), o = !/(\d)$/i.test(n);
                                            break;
                                        case"skew":
                                            o = !/(deg|\d)$/i.test(n);
                                            break;
                                        case"rotate":
                                            o = !/(deg|\d)$/i.test(n)
                                    }
                                    return o || (i(r).transformCache[t] = "(" + n + ")"), i(r).transformCache[t]
                            }
                        }
                    }();
                    for (var e = 0; e < x.Lists.colors.length; e++)!function () {
                        var t = x.Lists.colors[e];
                        x.Normalizations.registered[t] = function (e, r, n) {
                            switch (e) {
                                case"name":
                                    return t;
                                case"extract":
                                    var o;
                                    if (x.RegEx.wrappedValueAlreadyExtracted.test(n)) o = n; else {
                                        var i, s = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(n) ? i = s[n] !== a ? s[n] : s.black : x.RegEx.isHex.test(n) ? i = "rgb(" + x.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (i = s.black), o = (i || n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= f || 3 !== o.split(" ").length || (o += " 1"), o;
                                case"inject":
                                    return 8 >= f ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), (8 >= f ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                            }
                        }
                    }()
                }
            },
            Names: {
                camelCase: function (e) {
                    return e.replace(/-(\w)/g, function (e, t) {
                        return t.toUpperCase()
                    })
                }, SVGAttribute: function (e) {
                    var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (f || v.State.isAndroid && !v.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                }, prefixCheck: function (e) {
                    if (v.State.prefixMatches[e])return [v.State.prefixMatches[e], !0];
                    for (var t = ["", "Webkit", "Moz", "ms", "O"], r = 0, a = t.length; a > r; r++) {
                        var n;
                        if (n = 0 === r ? e : t[r] + e.replace(/^\w/, function (e) {
                                    return e.toUpperCase()
                                }), g.isString(v.State.prefixElement.style[n]))return v.State.prefixMatches[e] = n, [n, !0]
                    }
                    return [e, !1]
                }
            },
            Values: {
                hexToRgb: function (e) {
                    var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, a;
                    return e = e.replace(t, function (e, t, r, a) {
                        return t + t + r + r + a + a
                    }), a = r.exec(e), a ? [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)] : [0, 0, 0]
                }, isCSSNullValue: function (e) {
                    return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                }, getUnitType: function (e) {
                    return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                }, getDisplayType: function (e) {
                    var t = e && e.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                }, addClass: function (e, t) {
                    e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                }, removeClass: function (e, t) {
                    e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                }
            },
            getPropertyValue: function (e, r, n, o) {
                function s(e, r) {
                    function n() {
                        u && x.setPropertyValue(e, "display", "none")
                    }

                    var l = 0;
                    if (8 >= f) l = $.css(e, r); else {
                        var u = !1;
                        if (/^(width|height)$/.test(r) && 0 === x.getPropertyValue(e, "display") && (u = !0, x.setPropertyValue(e, "display", x.Values.getDisplayType(e))), !o) {
                            if ("height" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var c = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                                return n(), c
                            }
                            if ("width" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var p = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                                return n(), p
                            }
                        }
                        var d;
                        d = i(e) === a ? t.getComputedStyle(e, null) : i(e).computedStyle ? i(e).computedStyle : i(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === r && (r = "borderTopColor"), l = 9 === f && "filter" === r ? d.getPropertyValue(r) : d[r], ("" === l || null === l) && (l = e.style[r]), n()
                    }
                    if ("auto" === l && /^(top|right|bottom|left)$/i.test(r)) {
                        var g = s(e, "position");
                        ("fixed" === g || "absolute" === g && /top|left/i.test(r)) && (l = $(e).position()[r] + "px")
                    }
                    return l
                }

                var l;
                if (x.Hooks.registered[r]) {
                    var u = r, c = x.Hooks.getRoot(u);
                    n === a && (n = x.getPropertyValue(e, x.Names.prefixCheck(c)[0])), x.Normalizations.registered[c] && (n = x.Normalizations.registered[c]("extract", e, n)), l = x.Hooks.extractValue(u, n)
                } else if (x.Normalizations.registered[r]) {
                    var p, d;
                    p = x.Normalizations.registered[r]("name", e), "transform" !== p && (d = s(e, x.Names.prefixCheck(p)[0]), x.Values.isCSSNullValue(d) && x.Hooks.templates[r] && (d = x.Hooks.templates[r][1])), l = x.Normalizations.registered[r]("extract", e, d)
                }
                if (!/^[\d-]/.test(l))if (i(e) && i(e).isSVG && x.Names.SVGAttribute(r))if (/^(height|width)$/i.test(r))try {
                    l = e.getBBox()[r]
                } catch (g) {
                    l = 0
                } else l = e.getAttribute(r); else l = s(e, x.Names.prefixCheck(r)[0]);
                return x.Values.isCSSNullValue(l) && (l = 0), v.debug >= 2 && console.log("Get " + r + ": " + l), l
            },
            setPropertyValue: function (e, r, a, n, o) {
                var s = r;
                if ("scroll" === r) o.container ? o.container["scroll" + o.direction] = a : "Left" === o.direction ? t.scrollTo(a, o.alternateValue) : t.scrollTo(o.alternateValue, a); else if (x.Normalizations.registered[r] && "transform" === x.Normalizations.registered[r]("name", e)) x.Normalizations.registered[r]("inject", e, a), s = "transform", a = i(e).transformCache[r]; else {
                    if (x.Hooks.registered[r]) {
                        var l = r, u = x.Hooks.getRoot(r);
                        n = n || x.getPropertyValue(e, u), a = x.Hooks.injectValue(l, a, n), r = u
                    }
                    if (x.Normalizations.registered[r] && (a = x.Normalizations.registered[r]("inject", e, a), r = x.Normalizations.registered[r]("name", e)), s = x.Names.prefixCheck(r)[0], 8 >= f)try {
                        e.style[s] = a
                    } catch (c) {
                        v.debug && console.log("Browser does not support [" + a + "] for [" + s + "]")
                    } else i(e) && i(e).isSVG && x.Names.SVGAttribute(r) ? e.setAttribute(r, a) : e.style[s] = a;
                    v.debug >= 2 && console.log("Set " + r + " (" + s + "): " + a)
                }
                return [s, a]
            },
            flushTransformCache: function (e) {
                function t(t) {
                    return parseFloat(x.getPropertyValue(e, t))
                }

                var r = "";
                if ((f || v.State.isAndroid && !v.State.isChrome) && i(e).isSVG) {
                    var a = {
                        translate: [t("translateX"), t("translateY")],
                        skewX: [t("skewX")],
                        skewY: [t("skewY")],
                        scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                        rotate: [t("rotateZ"), 0, 0]
                    };
                    $.each(i(e).transformCache, function (e) {
                        /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), a[e] && (r += e + "(" + a[e].join(" ") + ") ", delete a[e])
                    })
                } else {
                    var n, o;
                    $.each(i(e).transformCache, function (t) {
                        return n = i(e).transformCache[t], "transformPerspective" === t ? (o = n, !0) : (9 === f && "rotateZ" === t && (t = "rotate"), void(r += t + n + " "))
                    }), o && (r = "perspective" + o + " " + r)
                }
                x.setPropertyValue(e, "transform", r)
            }
        };
        x.Hooks.register(), x.Normalizations.register(), v.hook = function (e, t, r) {
            var n = a;
            return e = o(e), $.each(e, function (e, o) {
                if (i(o) === a && v.init(o), r === a) n === a && (n = v.CSS.getPropertyValue(o, t)); else {
                    var s = v.CSS.setPropertyValue(o, t, r);
                    "transform" === s[0] && v.CSS.flushTransformCache(o), n = s
                }
            }), n
        };
        var S = function () {
            function e() {
                return l ? T.promise || null : f
            }

            function n() {
                function e(e) {
                    function p(e, t) {
                        var r = a, i = a, s = a;
                        return g.isArray(e) ? (r = e[0], !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? s = e[1] : (g.isString(e[1]) && !x.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (i = t ? e[1] : u(e[1], o.duration), e[2] !== a && (s = e[2]))) : r = e, t || (i = i || o.easing), g.isFunction(r) && (r = r.call(n, w, P)), g.isFunction(s) && (s = s.call(n, w, P)), [r || 0, i, s]
                    }

                    function f(e, t) {
                        var r, a;
                        return a = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
                            return r = e, ""
                        }), r || (r = x.Values.getUnitType(e)), [a, r]
                    }

                    function d() {
                        var e = {
                            myParent: n.parentNode || r.body,
                            position: x.getPropertyValue(n, "position"),
                            fontSize: x.getPropertyValue(n, "fontSize")
                        }, a = e.position === N.lastPosition && e.myParent === N.lastParent, o = e.fontSize === N.lastFontSize;
                        N.lastParent = e.myParent, N.lastPosition = e.position, N.lastFontSize = e.fontSize;
                        var s = 100, l = {};
                        if (o && a) l.emToPx = N.lastEmToPx, l.percentToPxWidth = N.lastPercentToPxWidth, l.percentToPxHeight = N.lastPercentToPxHeight; else {
                            var u = i(n).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");
                            v.init(u), e.myParent.appendChild(u), $.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                                v.CSS.setPropertyValue(u, t, "hidden")
                            }), v.CSS.setPropertyValue(u, "position", e.position), v.CSS.setPropertyValue(u, "fontSize", e.fontSize), v.CSS.setPropertyValue(u, "boxSizing", "content-box"), $.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                                v.CSS.setPropertyValue(u, t, s + "%")
                            }), v.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = N.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = N.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = N.lastEmToPx = (parseFloat(x.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u)
                        }
                        return null === N.remToPx && (N.remToPx = parseFloat(x.getPropertyValue(r.body, "fontSize")) || 16), null === N.vwToPx && (N.vwToPx = parseFloat(t.innerWidth) / 100, N.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = N.remToPx, l.vwToPx = N.vwToPx, l.vhToPx = N.vhToPx, v.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), n), l
                    }

                    if (o.begin && 0 === w)try {
                        o.begin.call(m, m)
                    } catch (y) {
                        setTimeout(function () {
                            throw y
                        }, 1)
                    }
                    if ("scroll" === k) {
                        var S = /^x$/i.test(o.axis) ? "Left" : "Top", V = parseFloat(o.offset) || 0, C, A, F;
                        o.container ? g.isWrapped(o.container) || g.isNode(o.container) ? (o.container = o.container[0] || o.container, C = o.container["scroll" + S], F = C + $(n).position()[S.toLowerCase()] + V) : o.container = null : (C = v.State.scrollAnchor[v.State["scrollProperty" + S]], A = v.State.scrollAnchor[v.State["scrollProperty" + ("Left" === S ? "Top" : "Left")]], F = $(n).offset()[S.toLowerCase()] + V), s = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: C,
                                currentValue: C,
                                endValue: F,
                                unitType: "",
                                easing: o.easing,
                                scrollData: {container: o.container, direction: S, alternateValue: A}
                            }, element: n
                        }, v.debug && console.log("tweensContainer (scroll): ", s.scroll, n)
                    } else if ("reverse" === k) {
                        if (!i(n).tweensContainer)return void $.dequeue(n, o.queue);
                        "none" === i(n).opts.display && (i(n).opts.display = "auto"), "hidden" === i(n).opts.visibility && (i(n).opts.visibility = "visible"), i(n).opts.loop = !1, i(n).opts.begin = null, i(n).opts.complete = null, b.easing || delete o.easing, b.duration || delete o.duration, o = $.extend({}, i(n).opts, o);
                        var E = $.extend(!0, {}, i(n).tweensContainer);
                        for (var j in E)if ("element" !== j) {
                            var H = E[j].startValue;
                            E[j].startValue = E[j].currentValue = E[j].endValue, E[j].endValue = H, g.isEmptyObject(b) || (E[j].easing = o.easing), v.debug && console.log("reverse tweensContainer (" + j + "): " + JSON.stringify(E[j]), n)
                        }
                        s = E
                    } else if ("start" === k) {
                        var E;
                        i(n).tweensContainer && i(n).isAnimating === !0 && (E = i(n).tweensContainer), $.each(h, function (e, t) {
                            if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e)) {
                                var r = p(t, !0), n = r[0], o = r[1], i = r[2];
                                if (x.RegEx.isHex.test(n)) {
                                    for (var s = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(n), u = i ? x.Values.hexToRgb(i) : a, c = 0; c < s.length; c++) {
                                        var f = [l[c]];
                                        o && f.push(o), u !== a && f.push(u[c]), h[e + s[c]] = f
                                    }
                                    delete h[e]
                                }
                            }
                        });
                        for (var R in h) {
                            var O = p(h[R]), z = O[0], q = O[1], M = O[2];
                            R = x.Names.camelCase(R);
                            var I = x.Hooks.getRoot(R), B = !1;
                            if (i(n).isSVG || "tween" === I || x.Names.prefixCheck(I)[1] !== !1 || x.Normalizations.registered[I] !== a) {
                                (o.display !== a && null !== o.display && "none" !== o.display || o.visibility !== a && "hidden" !== o.visibility) && /opacity|filter/.test(R) && !M && 0 !== z && (M = 0), o._cacheValues && E && E[R] ? (M === a && (M = E[R].endValue + E[R].unitType), B = i(n).rootPropertyValueCache[I]) : x.Hooks.registered[R] ? M === a ? (B = x.getPropertyValue(n, I), M = x.getPropertyValue(n, R, B)) : B = x.Hooks.templates[I][1] : M === a && (M = x.getPropertyValue(n, R));
                                var W, G, D, X = !1;
                                if (W = f(R, M), M = W[0], D = W[1], W = f(R, z), z = W[0].replace(/^([+-\/*])=/, function (e, t) {
                                        return X = t, ""
                                    }), G = W[1], M = parseFloat(M) || 0, z = parseFloat(z) || 0, "%" === G && (/^(fontSize|lineHeight)$/.test(R) ? (z /= 100, G = "em") : /^scale/.test(R) ? (z /= 100, G = "") : /(Red|Green|Blue)$/i.test(R) && (z = z / 100 * 255, G = "")), /[\/*]/.test(X)) G = D; else if (D !== G && 0 !== M)if (0 === z) G = D; else {
                                    l = l || d();
                                    var Y = /margin|padding|left|right|width|text|word|letter/i.test(R) || /X$/.test(R) || "x" === R ? "x" : "y";
                                    switch (D) {
                                        case"%":
                                            M *= "x" === Y ? l.percentToPxWidth : l.percentToPxHeight;
                                            break;
                                        case"px":
                                            break;
                                        default:
                                            M *= l[D + "ToPx"]
                                    }
                                    switch (G) {
                                        case"%":
                                            M *= 1 / ("x" === Y ? l.percentToPxWidth : l.percentToPxHeight);
                                            break;
                                        case"px":
                                            break;
                                        default:
                                            M *= 1 / l[G + "ToPx"]
                                    }
                                }
                                switch (X) {
                                    case"+":
                                        z = M + z;
                                        break;
                                    case"-":
                                        z = M - z;
                                        break;
                                    case"*":
                                        z = M * z;
                                        break;
                                    case"/":
                                        z = M / z
                                }
                                s[R] = {
                                    rootPropertyValue: B,
                                    startValue: M,
                                    currentValue: M,
                                    endValue: z,
                                    unitType: G,
                                    easing: q
                                }, v.debug && console.log("tweensContainer (" + R + "): " + JSON.stringify(s[R]), n)
                            } else v.debug && console.log("Skipping [" + I + "] due to a lack of browser support.")
                        }
                        s.element = n
                    }
                    s.element && (x.Values.addClass(n, "velocity-animating"), L.push(s), "" === o.queue && (i(n).tweensContainer = s, i(n).opts = o), i(n).isAnimating = !0, w === P - 1 ? (v.State.calls.push([L, m, o, null, T.resolver]), v.State.isTicking === !1 && (v.State.isTicking = !0, c())) : w++)
                }

                var n = this, o = $.extend({}, v.defaults, b), s = {}, l;
                switch (i(n) === a && v.init(n), parseFloat(o.delay) && o.queue !== !1 && $.queue(n, o.queue, function (e) {
                    v.velocityQueueEntryFlag = !0, i(n).delayTimer = {
                        setTimeout: setTimeout(e, parseFloat(o.delay)),
                        next: e
                    }
                }), o.duration.toString().toLowerCase()) {
                    case"fast":
                        o.duration = 200;
                        break;
                    case"normal":
                        o.duration = y;
                        break;
                    case"slow":
                        o.duration = 600;
                        break;
                    default:
                        o.duration = parseFloat(o.duration) || 1
                }
                v.mock !== !1 && (v.mock === !0 ? o.duration = o.delay = 1 : (o.duration *= parseFloat(v.mock) || 1, o.delay *= parseFloat(v.mock) || 1)), o.easing = u(o.easing, o.duration), o.begin && !g.isFunction(o.begin) && (o.begin = null), o.progress && !g.isFunction(o.progress) && (o.progress = null), o.complete && !g.isFunction(o.complete) && (o.complete = null), o.display !== a && null !== o.display && (o.display = o.display.toString().toLowerCase(), "auto" === o.display && (o.display = v.CSS.Values.getDisplayType(n))), o.visibility !== a && null !== o.visibility && (o.visibility = o.visibility.toString().toLowerCase()), o.mobileHA = o.mobileHA && v.State.isMobile && !v.State.isGingerbread, o.queue === !1 ? o.delay ? setTimeout(e, o.delay) : e() : $.queue(n, o.queue, function (t, r) {
                        return r === !0 ? (T.promise && T.resolver(m), !0) : (v.velocityQueueEntryFlag = !0, void e(t))
                    }), "" !== o.queue && "fx" !== o.queue || "inprogress" === $.queue(n)[0] || $.dequeue(n)
            }

            var s = arguments[0] && (arguments[0].p || $.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties)), l, f, d, m, h, b;
            if (g.isWrapped(this) ? (l = !1, d = 0, m = this, f = this) : (l = !0, d = 1, m = s ? arguments[0].elements || arguments[0].e : arguments[0]), m = o(m)) {
                s ? (h = arguments[0].properties || arguments[0].p, b = arguments[0].options || arguments[0].o) : (h = arguments[d], b = arguments[d + 1]);
                var P = m.length, w = 0;
                if (!/^(stop|finish)$/i.test(h) && !$.isPlainObject(b)) {
                    var V = d + 1;
                    b = {};
                    for (var C = V; C < arguments.length; C++)g.isArray(arguments[C]) || !/^(fast|normal|slow)$/i.test(arguments[C]) && !/^\d/.test(arguments[C]) ? g.isString(arguments[C]) || g.isArray(arguments[C]) ? b.easing = arguments[C] : g.isFunction(arguments[C]) && (b.complete = arguments[C]) : b.duration = arguments[C]
                }
                var T = {promise: null, resolver: null, rejecter: null};
                l && v.Promise && (T.promise = new v.Promise(function (e, t) {
                    T.resolver = e, T.rejecter = t
                }));
                var k;
                switch (h) {
                    case"scroll":
                        k = "scroll";
                        break;
                    case"reverse":
                        k = "reverse";
                        break;
                    case"finish":
                    case"stop":
                        $.each(m, function (e, t) {
                            i(t) && i(t).delayTimer && (clearTimeout(i(t).delayTimer.setTimeout), i(t).delayTimer.next && i(t).delayTimer.next(), delete i(t).delayTimer)
                        });
                        var A = [];
                        return $.each(v.State.calls, function (e, t) {
                            t && $.each(t[1], function (r, n) {
                                var o = b === a ? "" : b;
                                return o === !0 || t[2].queue === o || b === a && t[2].queue === !1 ? void $.each(m, function (r, a) {
                                        a === n && ((b === !0 || g.isString(b)) && ($.each($.queue(a, g.isString(b) ? b : ""), function (e, t) {
                                            g.isFunction(t) && t(null, !0)
                                        }), $.queue(a, g.isString(b) ? b : "", [])), "stop" === h ? (i(a) && i(a).tweensContainer && o !== !1 && $.each(i(a).tweensContainer, function (e, t) {
                                                t.endValue = t.currentValue
                                            }), A.push(e)) : "finish" === h && (t[2].duration = 1))
                                    }) : !0
                            })
                        }), "stop" === h && ($.each(A, function (e, t) {
                            p(t, !0)
                        }), T.promise && T.resolver(m)), e();
                    default:
                        if (!$.isPlainObject(h) || g.isEmptyObject(h)) {
                            if (g.isString(h) && v.Redirects[h]) {
                                var F = $.extend({}, b), E = F.duration, j = F.delay || 0;
                                return F.backwards === !0 && (m = $.extend(!0, [], m).reverse()), $.each(m, function (e, t) {
                                    parseFloat(F.stagger) ? F.delay = j + parseFloat(F.stagger) * e : g.isFunction(F.stagger) && (F.delay = j + F.stagger.call(t, e, P)), F.drag && (F.duration = parseFloat(E) || (/^(callout|transition)/.test(h) ? 1e3 : y), F.duration = Math.max(F.duration * (F.backwards ? 1 - e / P : (e + 1) / P), .75 * F.duration, 200)), v.Redirects[h].call(t, t, F || {}, e, P, m, T.promise ? T : a)
                                }), e()
                            }
                            var H = "Velocity: First argument (" + h + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return T.promise ? T.rejecter(new Error(H)) : console.log(H), e()
                        }
                        k = "start"
                }
                var N = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPx: null,
                    vwToPx: null,
                    vhToPx: null
                }, L = [];
                $.each(m, function (e, t) {
                    g.isNode(t) && n.call(t)
                });
                var F = $.extend({}, v.defaults, b), R;
                if (F.loop = parseInt(F.loop), R = 2 * F.loop - 1, F.loop)for (var O = 0; R > O; O++) {
                    var z = {delay: F.delay, progress: F.progress};
                    O === R - 1 && (z.display = F.display, z.visibility = F.visibility, z.complete = F.complete), S(m, "reverse", z)
                }
                return e()
            }
        };
        v = $.extend(S, v), v.animate = S;
        var P = t.requestAnimationFrame || d;
        return v.State.isMobile || r.hidden === a || r.addEventListener("visibilitychange", function () {
            r.hidden ? (P = function (e) {
                    return setTimeout(function () {
                        e(!0)
                    }, 16)
                }, c()) : P = t.requestAnimationFrame || d
        }), e.Velocity = v, e !== t && (e.fn.velocity = S, e.fn.velocity.defaults = v.defaults), $.each(["Down", "Up"], function (e, t) {
            v.Redirects["slide" + t] = function (e, r, n, o, i, s) {
                var l = $.extend({}, r), u = l.begin, c = l.complete, p = {
                    height: "",
                    marginTop: "",
                    marginBottom: "",
                    paddingTop: "",
                    paddingBottom: ""
                }, f = {};
                l.display === a && (l.display = "Down" === t ? "inline" === v.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function () {
                    u && u.call(i, i);
                    for (var r in p) {
                        f[r] = e.style[r];
                        var a = v.CSS.getPropertyValue(e, r);
                        p[r] = "Down" === t ? [a, 0] : [0, a]
                    }
                    f.overflow = e.style.overflow, e.style.overflow = "hidden"
                }, l.complete = function () {
                    for (var t in f)e.style[t] = f[t];
                    c && c.call(i, i), s && s.resolver(i)
                }, v(e, p, l)
            }
        }), $.each(["In", "Out"], function (e, t) {
            v.Redirects["fade" + t] = function (e, r, n, o, i, s) {
                var l = $.extend({}, r), u = {opacity: "In" === t ? 1 : 0}, c = l.complete;
                l.complete = n !== o - 1 ? l.begin = null : function () {
                        c && c.call(i, i), s && s.resolver(i)
                    }, l.display === a && (l.display = "In" === t ? "auto" : "none"), v(this, u, l)
            }
        }), v
    }(window.jQuery || window.Zepto || window, window, document)
});
;!function (a, b, c, d) {
    "use strict";
    function k(a, b, c) {
        return setTimeout(q(a, c), b)
    }

    function l(a, b, c) {
        return Array.isArray(a) ? (m(a, c[b], c), !0) : !1
    }

    function m(a, b, c) {
        var e;
        if (a)if (a.forEach) a.forEach(b, c); else if (a.length !== d)for (e = 0; e < a.length;)b.call(c, a[e], e, a), e++; else for (e in a)a.hasOwnProperty(e) && b.call(c, a[e], e, a)
    }

    function n(a, b, c) {
        for (var e = Object.keys(b), f = 0; f < e.length;)(!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
        return a
    }

    function o(a, b) {
        return n(a, b, !0)
    }

    function p(a, b, c) {
        var e, d = b.prototype;
        e = a.prototype = Object.create(d), e.constructor = a, e._super = d, c && n(e, c)
    }

    function q(a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }

    function r(a, b) {
        return typeof a == g ? a.apply(b ? b[0] || d : d, b) : a
    }

    function s(a, b) {
        return a === d ? b : a
    }

    function t(a, b, c) {
        m(x(b), function (b) {
            a.addEventListener(b, c, !1)
        })
    }

    function u(a, b, c) {
        m(x(b), function (b) {
            a.removeEventListener(b, c, !1)
        })
    }

    function v(a, b) {
        for (; a;) {
            if (a == b)return !0;
            a = a.parentNode
        }
        return !1
    }

    function w(a, b) {
        return a.indexOf(b) > -1
    }

    function x(a) {
        return a.trim().split(/\s+/g)
    }

    function y(a, b, c) {
        if (a.indexOf && !c)return a.indexOf(b);
        for (var d = 0; d < a.length;) {
            if (c && a[d][c] == b || !c && a[d] === b)return d;
            d++
        }
        return -1
    }

    function z(a) {
        return Array.prototype.slice.call(a, 0)
    }

    function A(a, b, c) {
        for (var d = [], e = [], f = 0; f < a.length;) {
            var g = b ? a[f][b] : a[f];
            y(e, g) < 0 && d.push(a[f]), e[f] = g, f++
        }
        return c && (d = b ? d.sort(function (a, c) {
                return a[b] > c[b]
            }) : d.sort()), d
    }

    function B(a, b) {
        for (var c, f, g = b[0].toUpperCase() + b.slice(1), h = 0; h < e.length;) {
            if (c = e[h], f = c ? c + g : b, f in a)return f;
            h++
        }
        return d
    }

    function D() {
        return C++
    }

    function E(a) {
        var b = a.ownerDocument;
        return b.defaultView || b.parentWindow
    }

    function ab(a, b) {
        var c = this;
        this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) {
            r(a.options.enable, [a]) && c.handler(b)
        }, this.init()
    }

    function bb(a) {
        var b, c = a.options.inputClass;
        return b = c ? c : H ? wb : I ? Eb : G ? Gb : rb, new b(a, cb)
    }

    function cb(a, b, c) {
        var d = c.pointers.length, e = c.changedPointers.length, f = b & O && 0 === d - e, g = b & (Q | R) && 0 === d - e;
        c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, db(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c
    }

    function db(a, b) {
        var c = a.session, d = b.pointers, e = d.length;
        c.firstInput || (c.firstInput = gb(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = gb(b) : 1 === e && (c.firstMultiple = !1);
        var f = c.firstInput, g = c.firstMultiple, h = g ? g.center : f.center, i = b.center = hb(d);
        b.timeStamp = j(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = lb(h, i), b.distance = kb(h, i), eb(c, b), b.offsetDirection = jb(b.deltaX, b.deltaY), b.scale = g ? nb(g.pointers, d) : 1, b.rotation = g ? mb(g.pointers, d) : 0, fb(c, b);
        var k = a.element;
        v(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k
    }

    function eb(a, b) {
        var c = b.center, d = a.offsetDelta || {}, e = a.prevDelta || {}, f = a.prevInput || {};
        (b.eventType === O || f.eventType === Q) && (e = a.prevDelta = {
            x: f.deltaX || 0,
            y: f.deltaY || 0
        }, d = a.offsetDelta = {x: c.x, y: c.y}), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y)
    }

    function fb(a, b) {
        var f, g, h, j, c = a.lastInterval || b, e = b.timeStamp - c.timeStamp;
        if (b.eventType != R && (e > N || c.velocity === d)) {
            var k = c.deltaX - b.deltaX, l = c.deltaY - b.deltaY, m = ib(e, k, l);
            g = m.x, h = m.y, f = i(m.x) > i(m.y) ? m.x : m.y, j = jb(k, l), a.lastInterval = b
        } else f = c.velocity, g = c.velocityX, h = c.velocityY, j = c.direction;
        b.velocity = f, b.velocityX = g, b.velocityY = h, b.direction = j
    }

    function gb(a) {
        for (var b = [], c = 0; c < a.pointers.length;)b[c] = {
            clientX: h(a.pointers[c].clientX),
            clientY: h(a.pointers[c].clientY)
        }, c++;
        return {timeStamp: j(), pointers: b, center: hb(b), deltaX: a.deltaX, deltaY: a.deltaY}
    }

    function hb(a) {
        var b = a.length;
        if (1 === b)return {x: h(a[0].clientX), y: h(a[0].clientY)};
        for (var c = 0, d = 0, e = 0; b > e;)c += a[e].clientX, d += a[e].clientY, e++;
        return {x: h(c / b), y: h(d / b)}
    }

    function ib(a, b, c) {
        return {x: b / a || 0, y: c / a || 0}
    }

    function jb(a, b) {
        return a === b ? S : i(a) >= i(b) ? a > 0 ? T : U : b > 0 ? V : W
    }

    function kb(a, b, c) {
        c || (c = $);
        var d = b[c[0]] - a[c[0]], e = b[c[1]] - a[c[1]];
        return Math.sqrt(d * d + e * e)
    }

    function lb(a, b, c) {
        c || (c = $);
        var d = b[c[0]] - a[c[0]], e = b[c[1]] - a[c[1]];
        return 180 * Math.atan2(e, d) / Math.PI
    }

    function mb(a, b) {
        return lb(b[1], b[0], _) - lb(a[1], a[0], _)
    }

    function nb(a, b) {
        return kb(b[0], b[1], _) / kb(a[0], a[1], _)
    }

    function rb() {
        this.evEl = pb, this.evWin = qb, this.allow = !0, this.pressed = !1, ab.apply(this, arguments)
    }

    function wb() {
        this.evEl = ub, this.evWin = vb, ab.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function Ab() {
        this.evTarget = yb, this.evWin = zb, this.started = !1, ab.apply(this, arguments)
    }

    function Bb(a, b) {
        var c = z(a.touches), d = z(a.changedTouches);
        return b & (Q | R) && (c = A(c.concat(d), "identifier", !0)), [c, d]
    }

    function Eb() {
        this.evTarget = Db, this.targetIds = {}, ab.apply(this, arguments)
    }

    function Fb(a, b) {
        var c = z(a.touches), d = this.targetIds;
        if (b & (O | P) && 1 === c.length)return d[c[0].identifier] = !0, [c, c];
        var e, f, g = z(a.changedTouches), h = [], i = this.target;
        if (f = c.filter(function (a) {
                return v(a.target, i)
            }), b === O)for (e = 0; e < f.length;)d[f[e].identifier] = !0, e++;
        for (e = 0; e < g.length;)d[g[e].identifier] && h.push(g[e]), b & (Q | R) && delete d[g[e].identifier], e++;
        return h.length ? [A(f.concat(h), "identifier", !0), h] : void 0
    }

    function Gb() {
        ab.apply(this, arguments);
        var a = q(this.handler, this);
        this.touch = new Eb(this.manager, a), this.mouse = new rb(this.manager, a)
    }

    function Pb(a, b) {
        this.manager = a, this.set(b)
    }

    function Qb(a) {
        if (w(a, Mb))return Mb;
        var b = w(a, Nb), c = w(a, Ob);
        return b && c ? Nb + " " + Ob : b || c ? b ? Nb : Ob : w(a, Lb) ? Lb : Kb
    }

    function Yb(a) {
        this.id = D(), this.manager = null, this.options = o(a || {}, this.defaults), this.options.enable = s(this.options.enable, !0), this.state = Rb, this.simultaneous = {}, this.requireFail = []
    }

    function Zb(a) {
        return a & Wb ? "cancel" : a & Ub ? "end" : a & Tb ? "move" : a & Sb ? "start" : ""
    }

    function $b(a) {
        return a == W ? "down" : a == V ? "up" : a == T ? "left" : a == U ? "right" : ""
    }

    function _b(a, b) {
        var c = b.manager;
        return c ? c.get(a) : a
    }

    function ac() {
        Yb.apply(this, arguments)
    }

    function bc() {
        ac.apply(this, arguments), this.pX = null, this.pY = null
    }

    function cc() {
        ac.apply(this, arguments)
    }

    function dc() {
        Yb.apply(this, arguments), this._timer = null, this._input = null
    }

    function ec() {
        ac.apply(this, arguments)
    }

    function fc() {
        ac.apply(this, arguments)
    }

    function gc() {
        Yb.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function hc(a, b) {
        return b = b || {}, b.recognizers = s(b.recognizers, hc.defaults.preset), new kc(a, b)
    }

    function kc(a, b) {
        b = b || {}, this.options = o(b, hc.defaults), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = a, this.input = bb(this), this.touchAction = new Pb(this, this.options.touchAction), lc(this, !0), m(b.recognizers, function (a) {
            var b = this.add(new a[0](a[1]));
            a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3])
        }, this)
    }

    function lc(a, b) {
        var c = a.element;
        m(a.options.cssProps, function (a, d) {
            c.style[B(c.style, d)] = b ? a : ""
        })
    }

    function mc(a, c) {
        var d = b.createEvent("Event");
        d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d)
    }

    var e = ["", "webkit", "moz", "MS", "ms", "o"], f = b.createElement("div"), g = "function", h = Math.round, i = Math.abs, j = Date.now, C = 1, F = /mobile|tablet|ip(ad|hone|od)|android/i, G = "ontouchstart" in a, H = B(a, "PointerEvent") !== d, I = G && F.test(navigator.userAgent), J = "touch", K = "pen", L = "mouse", M = "kinect", N = 25, O = 1, P = 2, Q = 4, R = 8, S = 1, T = 2, U = 4, V = 8, W = 16, X = T | U, Y = V | W, Z = X | Y, $ = ["x", "y"], _ = ["clientX", "clientY"];
    ab.prototype = {
        handler: function () {
        }, init: function () {
            this.evEl && t(this.element, this.evEl, this.domHandler), this.evTarget && t(this.target, this.evTarget, this.domHandler), this.evWin && t(E(this.element), this.evWin, this.domHandler)
        }, destroy: function () {
            this.evEl && u(this.element, this.evEl, this.domHandler), this.evTarget && u(this.target, this.evTarget, this.domHandler), this.evWin && u(E(this.element), this.evWin, this.domHandler)
        }
    };
    var ob = {mousedown: O, mousemove: P, mouseup: Q}, pb = "mousedown", qb = "mousemove mouseup";
    p(rb, ab, {
        handler: function (a) {
            var b = ob[a.type];
            b & O && 0 === a.button && (this.pressed = !0), b & P && 1 !== a.which && (b = Q), this.pressed && this.allow && (b & Q && (this.pressed = !1), this.callback(this.manager, b, {
                pointers: [a],
                changedPointers: [a],
                pointerType: L,
                srcEvent: a
            }))
        }
    });
    var sb = {pointerdown: O, pointermove: P, pointerup: Q, pointercancel: R, pointerout: R}, tb = {
        2: J,
        3: K,
        4: L,
        5: M
    }, ub = "pointerdown", vb = "pointermove pointerup pointercancel";
    a.MSPointerEvent && (ub = "MSPointerDown", vb = "MSPointerMove MSPointerUp MSPointerCancel"), p(wb, ab, {
        handler: function (a) {
            var b = this.store, c = !1, d = a.type.toLowerCase().replace("ms", ""), e = sb[d], f = tb[a.pointerType] || a.pointerType, g = f == J, h = y(b, a.pointerId, "pointerId");
            e & O && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Q | R) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, {
                pointers: b,
                changedPointers: [a],
                pointerType: f,
                srcEvent: a
            }), c && b.splice(h, 1))
        }
    });
    var xb = {
        touchstart: O,
        touchmove: P,
        touchend: Q,
        touchcancel: R
    }, yb = "touchstart", zb = "touchstart touchmove touchend touchcancel";
    p(Ab, ab, {
        handler: function (a) {
            var b = xb[a.type];
            if (b === O && (this.started = !0), this.started) {
                var c = Bb.call(this, a, b);
                b & (Q | R) && 0 === c[0].length - c[1].length && (this.started = !1), this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: J,
                    srcEvent: a
                })
            }
        }
    });
    var Cb = {
        touchstart: O,
        touchmove: P,
        touchend: Q,
        touchcancel: R
    }, Db = "touchstart touchmove touchend touchcancel";
    p(Eb, ab, {
        handler: function (a) {
            var b = Cb[a.type], c = Fb.call(this, a, b);
            c && this.callback(this.manager, b, {pointers: c[0], changedPointers: c[1], pointerType: J, srcEvent: a})
        }
    }), p(Gb, ab, {
        handler: function (a, b, c) {
            var d = c.pointerType == J, e = c.pointerType == L;
            if (d) this.mouse.allow = !1; else if (e && !this.mouse.allow)return;
            b & (Q | R) && (this.mouse.allow = !0), this.callback(a, b, c)
        }, destroy: function () {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var Hb = B(f.style, "touchAction"), Ib = Hb !== d, Jb = "compute", Kb = "auto", Lb = "manipulation", Mb = "none", Nb = "pan-x", Ob = "pan-y";
    Pb.prototype = {
        set: function (a) {
            a == Jb && (a = this.compute()), Ib && (this.manager.element.style[Hb] = a), this.actions = a.toLowerCase().trim()
        }, update: function () {
            this.set(this.manager.options.touchAction)
        }, compute: function () {
            var a = [];
            return m(this.manager.recognizers, function (b) {
                r(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
            }), Qb(a.join(" "))
        }, preventDefaults: function (a) {
            if (!Ib) {
                var b = a.srcEvent, c = a.offsetDirection;
                if (this.manager.session.prevented)return b.preventDefault(), void 0;
                var d = this.actions, e = w(d, Mb), f = w(d, Ob), g = w(d, Nb);
                return e || f && c & X || g && c & Y ? this.preventSrc(b) : void 0
            }
        }, preventSrc: function (a) {
            this.manager.session.prevented = !0, a.preventDefault()
        }
    };
    var Rb = 1, Sb = 2, Tb = 4, Ub = 8, Vb = Ub, Wb = 16, Xb = 32;
    Yb.prototype = {
        defaults: {}, set: function (a) {
            return n(this.options, a), this.manager && this.manager.touchAction.update(), this
        }, recognizeWith: function (a) {
            if (l(a, "recognizeWith", this))return this;
            var b = this.simultaneous;
            return a = _b(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this
        }, dropRecognizeWith: function (a) {
            return l(a, "dropRecognizeWith", this) ? this : (a = _b(a, this), delete this.simultaneous[a.id], this)
        }, requireFailure: function (a) {
            if (l(a, "requireFailure", this))return this;
            var b = this.requireFail;
            return a = _b(a, this), -1 === y(b, a) && (b.push(a), a.requireFailure(this)), this
        }, dropRequireFailure: function (a) {
            if (l(a, "dropRequireFailure", this))return this;
            a = _b(a, this);
            var b = y(this.requireFail, a);
            return b > -1 && this.requireFail.splice(b, 1), this
        }, hasRequireFailures: function () {
            return this.requireFail.length > 0
        }, canRecognizeWith: function (a) {
            return !!this.simultaneous[a.id]
        }, emit: function (a) {
            function d(d) {
                b.manager.emit(b.options.event + (d ? Zb(c) : ""), a)
            }

            var b = this, c = this.state;
            Ub > c && d(!0), d(), c >= Ub && d(!0)
        }, tryEmit: function (a) {
            return this.canEmit() ? this.emit(a) : (this.state = Xb, void 0)
        }, canEmit: function () {
            for (var a = 0; a < this.requireFail.length;) {
                if (!(this.requireFail[a].state & (Xb | Rb)))return !1;
                a++
            }
            return !0
        }, recognize: function (a) {
            var b = n({}, a);
            return r(this.options.enable, [this, b]) ? (this.state & (Vb | Wb | Xb) && (this.state = Rb), this.state = this.process(b), this.state & (Sb | Tb | Ub | Wb) && this.tryEmit(b), void 0) : (this.reset(), this.state = Xb, void 0)
        }, process: function () {
        }, getTouchAction: function () {
        }, reset: function () {
        }
    }, p(ac, Yb, {
        defaults: {pointers: 1}, attrTest: function (a) {
            var b = this.options.pointers;
            return 0 === b || a.pointers.length === b
        }, process: function (a) {
            var b = this.state, c = a.eventType, d = b & (Sb | Tb), e = this.attrTest(a);
            return d && (c & R || !e) ? b | Wb : d || e ? c & Q ? b | Ub : b & Sb ? b | Tb : Sb : Xb
        }
    }), p(bc, ac, {
        defaults: {event: "pan", threshold: 10, pointers: 1, direction: Z}, getTouchAction: function () {
            var a = this.options.direction, b = [];
            return a & X && b.push(Ob), a & Y && b.push(Nb), b
        }, directionTest: function (a) {
            var b = this.options, c = !0, d = a.distance, e = a.direction, f = a.deltaX, g = a.deltaY;
            return e & b.direction || (b.direction & X ? (e = 0 === f ? S : 0 > f ? T : U, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? S : 0 > g ? V : W, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction
        }, attrTest: function (a) {
            return ac.prototype.attrTest.call(this, a) && (this.state & Sb || !(this.state & Sb) && this.directionTest(a))
        }, emit: function (a) {
            this.pX = a.deltaX, this.pY = a.deltaY;
            var b = $b(a.direction);
            b && this.manager.emit(this.options.event + b, a), this._super.emit.call(this, a)
        }
    }), p(cc, ac, {
        defaults: {event: "pinch", threshold: 0, pointers: 2}, getTouchAction: function () {
            return [Mb]
        }, attrTest: function (a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & Sb)
        }, emit: function (a) {
            if (this._super.emit.call(this, a), 1 !== a.scale) {
                var b = a.scale < 1 ? "in" : "out";
                this.manager.emit(this.options.event + b, a)
            }
        }
    }), p(dc, Yb, {
        defaults: {event: "press", pointers: 1, time: 500, threshold: 5}, getTouchAction: function () {
            return [Kb]
        }, process: function (a) {
            var b = this.options, c = a.pointers.length === b.pointers, d = a.distance < b.threshold, e = a.deltaTime > b.time;
            if (this._input = a, !d || !c || a.eventType & (Q | R) && !e) this.reset(); else if (a.eventType & O) this.reset(), this._timer = k(function () {
                this.state = Vb, this.tryEmit()
            }, b.time, this); else if (a.eventType & Q)return Vb;
            return Xb
        }, reset: function () {
            clearTimeout(this._timer)
        }, emit: function (a) {
            this.state === Vb && (a && a.eventType & Q ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = j(), this.manager.emit(this.options.event, this._input)))
        }
    }), p(ec, ac, {
        defaults: {event: "rotate", threshold: 0, pointers: 2}, getTouchAction: function () {
            return [Mb]
        }, attrTest: function (a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & Sb)
        }
    }), p(fc, ac, {
        defaults: {event: "swipe", threshold: 10, velocity: .65, direction: X | Y, pointers: 1},
        getTouchAction: function () {
            return bc.prototype.getTouchAction.call(this)
        },
        attrTest: function (a) {
            var c, b = this.options.direction;
            return b & (X | Y) ? c = a.velocity : b & X ? c = a.velocityX : b & Y && (c = a.velocityY), this._super.attrTest.call(this, a) && b & a.direction && a.distance > this.options.threshold && i(c) > this.options.velocity && a.eventType & Q
        },
        emit: function (a) {
            var b = $b(a.direction);
            b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a)
        }
    }), p(gc, Yb, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 2,
            posThreshold: 10
        }, getTouchAction: function () {
            return [Lb]
        }, process: function (a) {
            var b = this.options, c = a.pointers.length === b.pointers, d = a.distance < b.threshold, e = a.deltaTime < b.time;
            if (this.reset(), a.eventType & O && 0 === this.count)return this.failTimeout();
            if (d && e && c) {
                if (a.eventType != Q)return this.failTimeout();
                var f = this.pTime ? a.timeStamp - this.pTime < b.interval : !0, g = !this.pCenter || kb(this.pCenter, a.center) < b.posThreshold;
                this.pTime = a.timeStamp, this.pCenter = a.center, g && f ? this.count += 1 : this.count = 1, this._input = a;
                var h = this.count % b.taps;
                if (0 === h)return this.hasRequireFailures() ? (this._timer = k(function () {
                        this.state = Vb, this.tryEmit()
                    }, b.interval, this), Sb) : Vb
            }
            return Xb
        }, failTimeout: function () {
            return this._timer = k(function () {
                this.state = Xb
            }, this.options.interval, this), Xb
        }, reset: function () {
            clearTimeout(this._timer)
        }, emit: function () {
            this.state == Vb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), hc.VERSION = "2.0.4", hc.defaults = {
        domEvents: !1,
        touchAction: Jb,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[ec, {enable: !1}], [cc, {enable: !1}, ["rotate"]], [fc, {direction: X}], [bc, {direction: X}, ["swipe"]], [gc], [gc, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [dc]],
        cssProps: {
            userSelect: "default",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var ic = 1, jc = 2;
    kc.prototype = {
        set: function (a) {
            return n(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this
        }, stop: function (a) {
            this.session.stopped = a ? jc : ic
        }, recognize: function (a) {
            var b = this.session;
            if (!b.stopped) {
                this.touchAction.preventDefaults(a);
                var c, d = this.recognizers, e = b.curRecognizer;
                (!e || e && e.state & Vb) && (e = b.curRecognizer = null);
                for (var f = 0; f < d.length;)c = d[f], b.stopped === jc || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (Sb | Tb | Ub) && (e = b.curRecognizer = c), f++
            }
        }, get: function (a) {
            if (a instanceof Yb)return a;
            for (var b = this.recognizers, c = 0; c < b.length; c++)if (b[c].options.event == a)return b[c];
            return null
        }, add: function (a) {
            if (l(a, "add", this))return this;
            var b = this.get(a.options.event);
            return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a
        }, remove: function (a) {
            if (l(a, "remove", this))return this;
            var b = this.recognizers;
            return a = this.get(a), b.splice(y(b, a), 1), this.touchAction.update(), this
        }, on: function (a, b) {
            var c = this.handlers;
            return m(x(a), function (a) {
                c[a] = c[a] || [], c[a].push(b)
            }), this
        }, off: function (a, b) {
            var c = this.handlers;
            return m(x(a), function (a) {
                b ? c[a].splice(y(c[a], b), 1) : delete c[a]
            }), this
        }, emit: function (a, b) {
            this.options.domEvents && mc(a, b);
            var c = this.handlers[a] && this.handlers[a].slice();
            if (c && c.length) {
                b.type = a, b.preventDefault = function () {
                    b.srcEvent.preventDefault()
                };
                for (var d = 0; d < c.length;)c[d](b), d++
            }
        }, destroy: function () {
            this.element && lc(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, n(hc, {
        INPUT_START: O,
        INPUT_MOVE: P,
        INPUT_END: Q,
        INPUT_CANCEL: R,
        STATE_POSSIBLE: Rb,
        STATE_BEGAN: Sb,
        STATE_CHANGED: Tb,
        STATE_ENDED: Ub,
        STATE_RECOGNIZED: Vb,
        STATE_CANCELLED: Wb,
        STATE_FAILED: Xb,
        DIRECTION_NONE: S,
        DIRECTION_LEFT: T,
        DIRECTION_RIGHT: U,
        DIRECTION_UP: V,
        DIRECTION_DOWN: W,
        DIRECTION_HORIZONTAL: X,
        DIRECTION_VERTICAL: Y,
        DIRECTION_ALL: Z,
        Manager: kc,
        Input: ab,
        TouchAction: Pb,
        TouchInput: Eb,
        MouseInput: rb,
        PointerEventInput: wb,
        TouchMouseInput: Gb,
        SingleTouchInput: Ab,
        Recognizer: Yb,
        AttrRecognizer: ac,
        Tap: gc,
        Pan: bc,
        Swipe: fc,
        Pinch: cc,
        Rotate: ec,
        Press: dc,
        on: t,
        off: u,
        each: m,
        merge: o,
        extend: n,
        inherit: p,
        bindFn: q,
        prefixed: B
    }), typeof define == g && define.amd ? define(function () {
            return hc
        }) : "undefined" != typeof module && module.exports ? module.exports = hc : a[c] = hc
}(window, document, "Hammer");
;(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'hammerjs'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'), require('hammerjs'));
    } else {
        factory(jQuery, Hammer);
    }
}(function ($, Hammer) {
    function hammerify(el, options) {
        var $el = $(el);
        if (!$el.data("hammer")) {
            $el.data("hammer", new Hammer($el[0], options));
        }
    }

    $.fn.hammer = function (options) {
        return this.each(function () {
            hammerify(this, options);
        });
    };
    Hammer.Manager.prototype.emit = (function (originalEmit) {
        return function (type, data) {
            originalEmit.call(this, type, data);
            $(this.element).trigger({type: type, gesture: data});
        };
    })(Hammer.Manager.prototype.emit);
}));
;Materialize = {};
Materialize.guid = (function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    return function () {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
})();
Materialize.elementOrParentIsFixed = function (element) {
    var $element = $(element);
    var $checkElements = $element.add($element.parents());
    var isFixed = false;
    $checkElements.each(function () {
        if ($(this).css("position") === "fixed") {
            isFixed = true;
            return false;
        }
    });
    return isFixed;
};
var Vel;
if ($) {
    Vel = $.Velocity;
} else {
    Vel = Velocity;
}
;(function ($) {
    $.fn.collapsible = function (options) {
        var defaults = {accordion: undefined};
        options = $.extend(defaults, options);
        return this.each(function () {
            var $this = $(this);
            var $panel_headers = $(this).find('> li > .collapsible-header');
            var collapsible_type = $this.data("collapsible");
            $this.off('click.collapse', '.collapsible-header');
            $panel_headers.off('click.collapse');
            function accordionOpen(object) {
                $panel_headers = $this.find('> li > .collapsible-header');
                if (object.hasClass('active')) {
                    object.parent().addClass('active');
                } else {
                    object.parent().removeClass('active');
                }
                if (object.parent().hasClass('active')) {
                    object.siblings('.collapsible-body').stop(true, false).slideDown({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: false,
                        complete: function () {
                            $(this).css('height', '');
                        }
                    });
                } else {
                    object.siblings('.collapsible-body').stop(true, false).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: false,
                        complete: function () {
                            $(this).css('height', '');
                        }
                    });
                }
                $panel_headers.not(object).removeClass('active').parent().removeClass('active');
                $panel_headers.not(object).parent().children('.collapsible-body').stop(true, false).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: false,
                    complete: function () {
                        $(this).css('height', '');
                    }
                });
            }

            function expandableOpen(object) {
                if (object.hasClass('active')) {
                    object.parent().addClass('active');
                } else {
                    object.parent().removeClass('active');
                }
                if (object.parent().hasClass('active')) {
                    object.siblings('.collapsible-body').stop(true, false).slideDown({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: false,
                        complete: function () {
                            $(this).css('height', '');
                        }
                    });
                } else {
                    object.siblings('.collapsible-body').stop(true, false).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: false,
                        complete: function () {
                            $(this).css('height', '');
                        }
                    });
                }
            }

            function isChildrenOfPanelHeader(object) {
                var panelHeader = getPanelHeader(object);
                return panelHeader.length > 0;
            }

            function getPanelHeader(object) {
                return object.closest('li > .collapsible-header');
            }

            if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) {
                $panel_headers = $this.find('> li > .collapsible-header');
                $panel_headers.on('click.collapse', function (e) {
                    var element = $(e.target);
                    if (isChildrenOfPanelHeader(element)) {
                        element = getPanelHeader(element);
                    }
                    element.toggleClass('active');
                    accordionOpen(element);
                });
                accordionOpen($panel_headers.filter('.active').first());
            } else {
                $panel_headers.each(function () {
                    $(this).on('click.collapse', function (e) {
                        var element = $(e.target);
                        if (isChildrenOfPanelHeader(element)) {
                            element = getPanelHeader(element);
                        }
                        element.toggleClass('active');
                        expandableOpen(element);
                    });
                    if ($(this).hasClass('active')) {
                        expandableOpen($(this));
                    }
                });
            }
        });
    };
    $(document).ready(function () {
        $('.collapsible').collapsible();
    });
}(jQuery));
;(function ($) {
    $.fn.scrollTo = function (elem) {
        $(this).scrollTop($(this).scrollTop() - $(this).offset().top + $(elem).offset().top);
        return this;
    };
    $.fn.dropdown = function (option) {
        var defaults = {
            inDuration: 300,
            outDuration: 225,
            constrain_width: true,
            hover: false,
            gutter: 0,
            belowOrigin: false
        };
        this.each(function () {
            var origin = $(this);
            var options = $.extend({}, defaults, option);
            var activates = $("#" + origin.attr('data-activates'));

            function updateOptions() {
                if (origin.data('induration') !== undefined) options.inDuration = origin.data('inDuration');
                if (origin.data('outduration') !== undefined) options.outDuration = origin.data('outDuration');
                if (origin.data('constrainwidth') !== undefined) options.constrain_width = origin.data('constrainwidth');
                if (origin.data('hover') !== undefined) options.hover = origin.data('hover');
                if (origin.data('gutter') !== undefined) options.gutter = origin.data('gutter');
                if (origin.data('beloworigin') !== undefined) options.belowOrigin = origin.data('beloworigin');
            }

            updateOptions();
            origin.after(activates);
            function placeDropdown() {
                updateOptions();
                activates.addClass('active');
                if (options.constrain_width === true) {
                    activates.css('width', origin.outerWidth());
                }
                var offset = 0;
                if (options.belowOrigin === true) {
                    offset = origin.height();
                }
                var offsetLeft = origin.offset().left;
                var width_difference = 0;
                var gutter_spacing = options.gutter;
                if (offsetLeft + activates.innerWidth() > $(window).width()) {
                    width_difference = origin.innerWidth() - activates.innerWidth();
                    gutter_spacing = gutter_spacing * -1;
                }
                activates.css({
                    position: 'absolute',
                    top: origin.position().top + offset,
                    left: origin.position().left + width_difference + gutter_spacing
                });
                activates.stop(true, true).css('opacity', 0).slideDown({
                    queue: false,
                    duration: options.inDuration,
                    easing: 'easeOutCubic',
                    complete: function () {
                        $(this).css('height', '');
                    }
                }).animate({opacity: 1}, {queue: false, duration: options.inDuration, easing: 'easeOutSine'});
            }

            function hideDropdown() {
                activates.fadeOut(options.outDuration);
                activates.removeClass('active');
            }

            if (options.hover) {
                var open = false;
                origin.unbind('click.' + origin.attr('id'));
                origin.on('mouseenter', function (e) {
                    if (open === false) {
                        placeDropdown();
                        open = true;
                    }
                });
                origin.on('mouseleave', function (e) {
                    var toEl = e.toElement || e.relatedTarget;
                    if (!$(toEl).closest('.dropdown-content').is(activates)) {
                        activates.stop(true, true);
                        hideDropdown();
                        open = false;
                    }
                });
                activates.on('mouseleave', function (e) {
                    var toEl = e.toElement || e.relatedTarget;
                    if (!$(toEl).closest('.dropdown-button').is(origin)) {
                        activates.stop(true, true);
                        hideDropdown();
                        open = false;
                    }
                });
            } else {
                origin.unbind('click.' + origin.attr('id'));
                origin.bind('click.' + origin.attr('id'), function (e) {
                    if (origin[0] == e.currentTarget && ($(e.target).closest('.dropdown-content').length === 0)) {
                        e.preventDefault();
                        placeDropdown();
                    } else {
                        if (origin.hasClass('active')) {
                            hideDropdown();
                            $(document).unbind('click.' + activates.attr('id'));
                        }
                    }
                    if (activates.hasClass('active')) {
                        $(document).bind('click.' + activates.attr('id'), function (e) {
                            if (!activates.is(e.target) && !origin.is(e.target) && (!origin.find(e.target).length > 0)) {
                                hideDropdown();
                                $(document).unbind('click.' + activates.attr('id'));
                            }
                        });
                    }
                });
            }
            origin.on('open', placeDropdown);
            origin.on('close', hideDropdown);
        });
    };
    $(document).ready(function () {
        $('.dropdown-button').dropdown();
    });
}(jQuery));
;(function ($) {
    var _stack = 0, _lastID = 0, _generateID = function () {
        _lastID++;
        return 'materialize-lean-overlay-' + _lastID;
    };
    $.fn.extend({
        openModal: function (options) {
            $('body').css('overflow', 'hidden');
            var defaults = {
                opacity: 0.5,
                in_duration: 350,
                out_duration: 250,
                ready: undefined,
                complete: undefined,
                dismissible: true,
                starting_top: '4%'
            }, overlayID = _generateID(), $modal = $(this), $overlay = $('<div class="lean-overlay"></div>'), lStack = (++_stack);
            $overlay.attr('id', overlayID).css('z-index', 1000 + lStack * 2);
            $modal.data('overlay-id', overlayID).css('z-index', 1000 + lStack * 2 + 1);
            $("body").append($overlay);
            options = $.extend(defaults, options);
            if (options.dismissible) {
                $overlay.click(function () {
                    $modal.closeModal(options);
                });
                $(document).on('keyup.leanModal' + overlayID, function (e) {
                    if (e.keyCode === 27) {
                        $modal.closeModal(options);
                    }
                });
            }
            $modal.find(".modal-close").on('click.close', function (e) {
                $modal.closeModal(options);
            });
            $overlay.css({display: "block", opacity: 0});
            $modal.css({display: "block", opacity: 0});
            $overlay.velocity({opacity: options.opacity}, {
                duration: options.in_duration,
                queue: false,
                ease: "easeOutCubic"
            });
            $modal.data('associated-overlay', $overlay[0]);
            if ($modal.hasClass('bottom-sheet')) {
                $modal.velocity({bottom: "0", opacity: 1}, {
                    duration: options.in_duration,
                    queue: false,
                    ease: "easeOutCubic",
                    complete: function () {
                        if (typeof(options.ready) === "function") {
                            options.ready();
                        }
                    }
                });
            } else {
                $.Velocity.hook($modal, "scaleX", 0.7);
                $modal.css({top: options.starting_top});
                $modal.velocity({top: "10%", opacity: 1, scaleX: '1'}, {
                    duration: options.in_duration,
                    queue: false,
                    ease: "easeOutCubic",
                    complete: function () {
                        if (typeof(options.ready) === "function") {
                            options.ready();
                        }
                    }
                });
            }
        }
    });
    $.fn.extend({
        closeModal: function (options) {
            var defaults = {
                out_duration: 250,
                complete: undefined
            }, $modal = $(this), overlayID = $modal.data('overlay-id'), $overlay = $('#' + overlayID);
            options = $.extend(defaults, options);
            $('body').css('overflow', '');
            $modal.find('.modal-close').off('click.close');
            $(document).off('keyup.leanModal' + overlayID);
            $overlay.velocity({opacity: 0}, {duration: options.out_duration, queue: false, ease: "easeOutQuart"});
            if ($modal.hasClass('bottom-sheet')) {
                $modal.velocity({bottom: "-100%", opacity: 0}, {
                    duration: options.out_duration,
                    queue: false,
                    ease: "easeOutCubic",
                    complete: function () {
                        $overlay.css({display: "none"});
                        if (typeof(options.complete) === "function") {
                            options.complete();
                        }
                        $overlay.remove();
                        _stack--;
                    }
                });
            } else {
                $modal.velocity({top: options.starting_top, opacity: 0, scaleX: 0.7}, {
                    duration: options.out_duration,
                    complete: function () {
                        $(this).css('display', 'none');
                        if (typeof(options.complete) === "function") {
                            options.complete();
                        }
                        $overlay.remove();
                        _stack--;
                    }
                });
            }
        }
    });
    $.fn.extend({
        leanModal: function (option) {
            return this.each(function () {
                var defaults = {starting_top: '4%'}, options = $.extend(defaults, option);
                $(this).click(function (e) {
                    options.starting_top = ($(this).offset().top - $(window).scrollTop()) / 1.15;
                    var modal_id = $(this).attr("href") || '#' + $(this).data('target');
                    $(modal_id).openModal(options);
                    e.preventDefault();
                });
            });
        }
    });
})(jQuery);
;(function ($) {
    $.fn.materialbox = function () {
        return this.each(function () {
            if ($(this).hasClass('initialized')) {
                return;
            }
            $(this).addClass('initialized');
            var overlayActive = false;
            var doneAnimating = true;
            var inDuration = 275;
            var outDuration = 200;
            var origin = $(this);
            var placeholder = $('<div></div>').addClass('material-placeholder');
            var originalWidth = 0;
            var originalHeight = 0;
            origin.wrap(placeholder);
            origin.on('click', function () {
                var placeholder = origin.parent('.material-placeholder');
                var windowWidth = window.innerWidth;
                var windowHeight = window.innerHeight;
                var originalWidth = origin.width();
                var originalHeight = origin.height();
                if (doneAnimating === false) {
                    returnToOriginal();
                    return false;
                } else if (overlayActive && doneAnimating === true) {
                    returnToOriginal();
                    return false;
                }
                doneAnimating = false;
                origin.addClass('active');
                overlayActive = true;
                placeholder.css({
                    width: placeholder[0].getBoundingClientRect().width,
                    height: placeholder[0].getBoundingClientRect().height,
                    position: 'relative',
                    top: 0,
                    left: 0
                });
                origin.css({
                    position: 'absolute',
                    'z-index': 1000
                }).data('width', originalWidth).data('height', originalHeight);
                var overlay = $('<div id="materialbox-overlay"></div>').css({opacity: 0}).click(function () {
                    if (doneAnimating === true) returnToOriginal();
                });
                $('body').append(overlay);
                overlay.velocity({opacity: 1}, {duration: inDuration, queue: false, easing: 'easeOutQuad'});
                if (origin.data('caption') !== "") {
                    var $photo_caption = $('<div class="materialbox-caption"></div>');
                    $photo_caption.text(origin.data('caption'));
                    $('body').append($photo_caption);
                    $photo_caption.css({"display": "inline"});
                    $photo_caption.velocity({opacity: 1}, {duration: inDuration, queue: false, easing: 'easeOutQuad'});
                }
                var ratio = 0;
                var widthPercent = originalWidth / windowWidth;
                var heightPercent = originalHeight / windowHeight;
                var newWidth = 0;
                var newHeight = 0;
                if (widthPercent > heightPercent) {
                    ratio = originalHeight / originalWidth;
                    newWidth = windowWidth * 0.9;
                    newHeight = windowWidth * 0.9 * ratio;
                } else {
                    ratio = originalWidth / originalHeight;
                    newWidth = (windowHeight * 0.9) * ratio;
                    newHeight = windowHeight * 0.9;
                }
                if (origin.hasClass('responsive-img')) {
                    origin.velocity({'max-width': newWidth, 'width': originalWidth}, {
                        duration: 0,
                        queue: false,
                        complete: function () {
                            origin.css({left: 0, top: 0}).velocity({
                                height: newHeight,
                                width: newWidth,
                                left: $(document).scrollLeft() + windowWidth / 2 - origin.parent('.material-placeholder').offset().left - newWidth / 2,
                                top: $(document).scrollTop() + windowHeight / 2 - origin.parent('.material-placeholder').offset().top - newHeight / 2
                            }, {
                                duration: inDuration, queue: false, easing: 'easeOutQuad', complete: function () {
                                    doneAnimating = true;
                                }
                            });
                        }
                    });
                } else {
                    origin.css('left', 0).css('top', 0).velocity({
                        height: newHeight,
                        width: newWidth,
                        left: $(document).scrollLeft() + windowWidth / 2 - origin.parent('.material-placeholder').offset().left - newWidth / 2,
                        top: $(document).scrollTop() + windowHeight / 2 - origin.parent('.material-placeholder').offset().top - newHeight / 2
                    }, {
                        duration: inDuration, queue: false, easing: 'easeOutQuad', complete: function () {
                            doneAnimating = true;
                        }
                    });
                }
            });
            $(window).scroll(function () {
                if (overlayActive) {
                    returnToOriginal();
                }
            });
            $(document).keyup(function (e) {
                if (e.keyCode === 27 && doneAnimating === true) {
                    if (overlayActive) {
                        returnToOriginal();
                    }
                }
            });
            function returnToOriginal() {
                doneAnimating = false;
                var placeholder = origin.parent('.material-placeholder');
                var windowWidth = window.innerWidth;
                var windowHeight = window.innerHeight;
                var originalWidth = origin.data('width');
                var originalHeight = origin.data('height');
                origin.velocity("stop", true);
                $('#materialbox-overlay').velocity("stop", true);
                $('.materialbox-caption').velocity("stop", true);
                $('#materialbox-overlay').velocity({opacity: 0}, {
                    duration: outDuration,
                    queue: false,
                    easing: 'easeOutQuad',
                    complete: function () {
                        overlayActive = false;
                        $(this).remove();
                    }
                });
                origin.velocity({width: originalWidth, height: originalHeight, left: 0, top: 0}, {
                    duration: outDuration,
                    queue: false,
                    easing: 'easeOutQuad'
                });
                $('.materialbox-caption').velocity({opacity: 0}, {
                    duration: outDuration,
                    queue: false,
                    easing: 'easeOutQuad',
                    complete: function () {
                        placeholder.css({height: '', width: '', position: '', top: '', left: ''});
                        origin.css({
                            height: '',
                            top: '',
                            left: '',
                            width: '',
                            'max-width': '',
                            position: '',
                            'z-index': ''
                        });
                        origin.removeClass('active');
                        doneAnimating = true;
                        $(this).remove();
                    }
                });
            }
        });
    };
    $(document).ready(function () {
        $('.materialboxed').materialbox();
    });
}(jQuery));
;(function ($) {
    $.fn.parallax = function () {
        var window_width = $(window).width();
        return this.each(function (i) {
            var $this = $(this);
            $this.addClass('parallax');
            function updateParallax(initial) {
                var container_height;
                if (window_width < 601) {
                    container_height = ($this.height() > 0) ? $this.height() : $this.children("img").height();
                } else {
                    container_height = ($this.height() > 0) ? $this.height() : 500;
                }
                var $img = $this.children("img").first();
                var img_height = $img.height();
                var parallax_dist = img_height - container_height;
                var bottom = $this.offset().top + container_height;
                var top = $this.offset().top;
                var scrollTop = $(window).scrollTop();
                var windowHeight = window.innerHeight;
                var windowBottom = scrollTop + windowHeight;
                var percentScrolled = (windowBottom - top) / (container_height + windowHeight);
                var parallax = Math.round((parallax_dist * percentScrolled));
                if (initial) {
                    $img.css('display', 'block');
                }
                if ((bottom > scrollTop) && (top < (scrollTop + windowHeight))) {
                    $img.css('transform', "translate3D(-50%," + parallax + "px, 0)");
                }
            }

            $this.children("img").one("load", function () {
                updateParallax(true);
            }).each(function () {
                if (this.complete) $(this).load();
            });
            $(window).scroll(function () {
                window_width = $(window).width();
                updateParallax(false);
            });
            $(window).resize(function () {
                window_width = $(window).width();
                updateParallax(false);
            });
        });
    };
}(jQuery));
;(function ($) {
    var methods = {
        init: function () {
            return this.each(function () {
                var $this = $(this), window_width = $(window).width();
                $this.width('100%');
                var $num_tabs = $(this).children('li').length;
                $this.children('li').each(function () {
                    $(this).width((100 / $num_tabs) + '%');
                });
                var $active, $content, $links = $this.find('li.tab a'), $tabs_width = $this.width(), $tab_width = $this.find('li').first().outerWidth(), $index = 0;
                $active = $($links.filter('[href="' + location.hash + '"]'));
                if ($active.length === 0) {
                    $active = $(this).find('li.tab a.active').first();
                }
                if ($active.length === 0) {
                    $active = $(this).find('li.tab a').first();
                }
                $active.addClass('active');
                $index = $links.index($active);
                if ($index < 0) {
                    $index = 0;
                }
                $content = $($active[0].hash);
                $this.append('<div class="indicator"></div>');
                var $indicator = $this.find('.indicator');
                if ($this.is(":visible")) {
                    $indicator.css({"right": $tabs_width - (($index + 1) * $tab_width)});
                    $indicator.css({"left": $index * $tab_width});
                }
                $(window).resize(function () {
                    $tabs_width = $this.width();
                    $tab_width = $this.find('li').first().outerWidth();
                    if ($index < 0) {
                        $index = 0;
                    }
                    if ($tab_width !== 0 && $tabs_width !== 0) {
                        $indicator.css({"right": $tabs_width - (($index + 1) * $tab_width)});
                        $indicator.css({"left": $index * $tab_width});
                    }
                });
                $links.not($active).each(function () {
                    $(this.hash).hide();
                });
                $this.on('click', 'a', function (e) {
                    if ($(this).parent().hasClass('disabled')) {
                        e.preventDefault();
                        return;
                    }
                    $tabs_width = $this.width();
                    $tab_width = $this.find('li').first().outerWidth();
                    $active.removeClass('active');
                    $content.hide();
                    $active = $(this);
                    $content = $(this.hash);
                    $links = $this.find('li.tab a');
                    $active.addClass('active');
                    var $prev_index = $index;
                    $index = $links.index($(this));
                    if ($index < 0) {
                        $index = 0;
                    }
                    $content.show();
                    if (($index - $prev_index) >= 0) {
                        $indicator.velocity({"right": $tabs_width - (($index + 1) * $tab_width)}, {
                            duration: 300,
                            queue: false,
                            easing: 'easeOutQuad'
                        });
                        $indicator.velocity({"left": $index * $tab_width}, {
                            duration: 300,
                            queue: false,
                            easing: 'easeOutQuad',
                            delay: 90
                        });
                    } else {
                        $indicator.velocity({"left": $index * $tab_width}, {
                            duration: 300,
                            queue: false,
                            easing: 'easeOutQuad'
                        });
                        $indicator.velocity({"right": $tabs_width - (($index + 1) * $tab_width)}, {
                            duration: 300,
                            queue: false,
                            easing: 'easeOutQuad',
                            delay: 90
                        });
                    }
                    e.preventDefault();
                });
            });
        }, select_tab: function (id) {
            this.find('a[href="#' + id + '"]').trigger('click');
        }
    };
    $.fn.tabs = function (methodOrOptions) {
        if (methods[methodOrOptions]) {
            return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + methodOrOptions + ' does not exist on jQuery.tooltip');
        }
    };
    $(document).ready(function () {
        $('ul.tabs').tabs();
    });
}(jQuery));
;(function ($) {
    $.fn.tooltip = function (options) {
        var timeout = null, counter = null, started = false, counterInterval = null, margin = 5;
        var defaults = {delay: 350};
        options = $.extend(defaults, options);
        $('.material-tooltip').remove();
        return this.each(function () {
            var origin = $(this);
            var tooltip_text = $('<span></span>').text(origin.attr('data-tooltip'));
            var newTooltip = $('<div></div>');
            newTooltip.addClass('material-tooltip').append(tooltip_text);
            newTooltip.appendTo($('body'));
            var backdrop = $('<div></div>').addClass('backdrop');
            backdrop.appendTo(newTooltip);
            backdrop.css({top: 0, left: 0});
            $(this).off('mouseenter mouseleave');
            $(this).on({
                mouseenter: function (e) {
                    var tooltip_delay = origin.data("delay");
                    tooltip_delay = (tooltip_delay === undefined || tooltip_delay === '') ? options.delay : tooltip_delay;
                    counter = 0;
                    counterInterval = setInterval(function () {
                        counter += 10;
                        if (counter >= tooltip_delay && started === false) {
                            started = true;
                            newTooltip.css({display: 'block', left: '0px', top: '0px'});
                            newTooltip.children('span').text(origin.attr('data-tooltip'));
                            var originWidth = origin.outerWidth();
                            var originHeight = origin.outerHeight();
                            var tooltipPosition = origin.attr('data-position');
                            var tooltipHeight = newTooltip.outerHeight();
                            var tooltipWidth = newTooltip.outerWidth();
                            var tooltipVerticalMovement = '0px';
                            var tooltipHorizontalMovement = '0px';
                            var scale_factor = 8;
                            if (tooltipPosition === "top") {
                                newTooltip.css({
                                    top: origin.offset().top - tooltipHeight - margin,
                                    left: origin.offset().left + originWidth / 2 - tooltipWidth / 2
                                });
                                tooltipVerticalMovement = '-10px';
                                backdrop.css({
                                    borderRadius: '14px 14px 0 0',
                                    transformOrigin: '50% 90%',
                                    marginTop: tooltipHeight,
                                    marginLeft: (tooltipWidth / 2) - (backdrop.width() / 2)
                                });
                            } else if (tooltipPosition === "left") {
                                newTooltip.css({
                                    top: origin.offset().top + originHeight / 2 - tooltipHeight / 2,
                                    left: origin.offset().left - tooltipWidth - margin
                                });
                                tooltipHorizontalMovement = '-10px';
                                backdrop.css({
                                    width: '14px',
                                    height: '14px',
                                    borderRadius: '14px 0 0 14px',
                                    transformOrigin: '95% 50%',
                                    marginTop: tooltipHeight / 2,
                                    marginLeft: tooltipWidth
                                });
                            } else if (tooltipPosition === "right") {
                                newTooltip.css({
                                    top: origin.offset().top + originHeight / 2 - tooltipHeight / 2,
                                    left: origin.offset().left + originWidth + margin
                                });
                                tooltipHorizontalMovement = '+10px';
                                backdrop.css({
                                    width: '14px',
                                    height: '14px',
                                    borderRadius: '0 14px 14px 0',
                                    transformOrigin: '5% 50%',
                                    marginTop: tooltipHeight / 2,
                                    marginLeft: '0px'
                                });
                            } else {
                                newTooltip.css({
                                    top: origin.offset().top + origin.outerHeight() + margin,
                                    left: origin.offset().left + originWidth / 2 - tooltipWidth / 2
                                });
                                tooltipVerticalMovement = '+10px';
                                backdrop.css({marginLeft: (tooltipWidth / 2) - (backdrop.width() / 2)});
                            }
                            scale_factor = tooltipWidth / 8;
                            if (scale_factor < 8) {
                                scale_factor = 8;
                            }
                            if (tooltipPosition === "right" || tooltipPosition === "left") {
                                scale_factor = tooltipWidth / 10;
                                if (scale_factor < 6) scale_factor = 6;
                            }
                            newTooltip.velocity({
                                opacity: 1,
                                marginTop: tooltipVerticalMovement,
                                marginLeft: tooltipHorizontalMovement
                            }, {duration: 350, queue: false});
                            backdrop.css({display: 'block'}).velocity({opacity: 1}, {
                                duration: 55,
                                delay: 0,
                                queue: false
                            }).velocity({scale: scale_factor}, {
                                duration: 300,
                                delay: 0,
                                queue: false,
                                easing: 'easeInOutQuad'
                            });
                        }
                    }, 10);
                }, mouseleave: function () {
                    clearInterval(counterInterval);
                    counter = 0;
                    newTooltip.velocity({opacity: 0, marginTop: 0, marginLeft: 0}, {
                        duration: 225,
                        queue: false,
                        delay: 275
                    });
                    backdrop.velocity({opacity: 0, scale: 1}, {
                        duration: 225,
                        delay: 275,
                        queue: false,
                        complete: function () {
                            backdrop.css('display', 'none');
                            newTooltip.css('display', 'none');
                            started = false;
                        }
                    });
                }
            });
        });
    };
    $(document).ready(function () {
        $('.tooltipped').tooltip();
    });
}(jQuery));
;;(function (window) {
    'use strict';
    var Waves = Waves || {};
    var $$ = document.querySelectorAll.bind(document);

    function isWindow(obj) {
        return obj !== null && obj === obj.window;
    }

    function getWindow(elem) {
        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }

    function offset(elem) {
        var docElem, win, box = {top: 0, left: 0}, doc = elem && elem.ownerDocument;
        docElem = doc.documentElement;
        if (typeof elem.getBoundingClientRect !== typeof undefined) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    }

    function convertStyle(obj) {
        var style = '';
        for (var a in obj) {
            if (obj.hasOwnProperty(a)) {
                style += (a + ':' + obj[a] + ';');
            }
        }
        return style;
    }

    var Effect = {
        duration: 750, show: function (e, element) {
            if (e.button === 2) {
                return false;
            }
            var el = element || this;
            var ripple = document.createElement('div');
            ripple.className = 'waves-ripple';
            el.appendChild(ripple);
            var pos = offset(el);
            var relativeY = (e.pageY - pos.top);
            var relativeX = (e.pageX - pos.left);
            var scale = 'scale(' + ((el.clientWidth / 100) * 10) + ')';
            if ('touches' in e) {
                relativeY = (e.touches[0].pageY - pos.top);
                relativeX = (e.touches[0].pageX - pos.left);
            }
            ripple.setAttribute('data-hold', Date.now());
            ripple.setAttribute('data-scale', scale);
            ripple.setAttribute('data-x', relativeX);
            ripple.setAttribute('data-y', relativeY);
            var rippleStyle = {'top': relativeY + 'px', 'left': relativeX + 'px'};
            ripple.className = ripple.className + ' waves-notransition';
            ripple.setAttribute('style', convertStyle(rippleStyle));
            ripple.className = ripple.className.replace('waves-notransition', '');
            rippleStyle['-webkit-transform'] = scale;
            rippleStyle['-moz-transform'] = scale;
            rippleStyle['-ms-transform'] = scale;
            rippleStyle['-o-transform'] = scale;
            rippleStyle.transform = scale;
            rippleStyle.opacity = '1';
            rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';
            rippleStyle['-moz-transition-duration'] = Effect.duration + 'ms';
            rippleStyle['-o-transition-duration'] = Effect.duration + 'ms';
            rippleStyle['transition-duration'] = Effect.duration + 'ms';
            rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-moz-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-o-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            ripple.setAttribute('style', convertStyle(rippleStyle));
        }, hide: function (e) {
            TouchHandler.touchup(e);
            var el = this;
            var width = el.clientWidth * 1.4;
            var ripple = null;
            var ripples = el.getElementsByClassName('waves-ripple');
            if (ripples.length > 0) {
                ripple = ripples[ripples.length - 1];
            } else {
                return false;
            }
            var relativeX = ripple.getAttribute('data-x');
            var relativeY = ripple.getAttribute('data-y');
            var scale = ripple.getAttribute('data-scale');
            var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
            var delay = 350 - diff;
            if (delay < 0) {
                delay = 0;
            }
            setTimeout(function () {
                var style = {
                    'top': relativeY + 'px',
                    'left': relativeX + 'px',
                    'opacity': '0',
                    '-webkit-transition-duration': Effect.duration + 'ms',
                    '-moz-transition-duration': Effect.duration + 'ms',
                    '-o-transition-duration': Effect.duration + 'ms',
                    'transition-duration': Effect.duration + 'ms',
                    '-webkit-transform': scale,
                    '-moz-transform': scale,
                    '-ms-transform': scale,
                    '-o-transform': scale,
                    'transform': scale,
                };
                ripple.setAttribute('style', convertStyle(style));
                setTimeout(function () {
                    try {
                        el.removeChild(ripple);
                    } catch (e) {
                        return false;
                    }
                }, Effect.duration);
            }, delay);
        }, wrapInput: function (elements) {
            for (var a = 0; a < elements.length; a++) {
                var el = elements[a];
                if (el.tagName.toLowerCase() === 'input') {
                    var parent = el.parentNode;
                    if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {
                        continue;
                    }
                    var wrapper = document.createElement('i');
                    wrapper.className = el.className + ' waves-input-wrapper';
                    var elementStyle = el.getAttribute('style');
                    if (!elementStyle) {
                        elementStyle = '';
                    }
                    wrapper.setAttribute('style', elementStyle);
                    el.className = 'waves-button-input';
                    el.removeAttribute('style');
                    parent.replaceChild(wrapper, el);
                    wrapper.appendChild(el);
                }
            }
        }
    };
    var TouchHandler = {
        touches: 0, allowEvent: function (e) {
            var allow = true;
            if (e.type === 'touchstart') {
                TouchHandler.touches += 1;
            } else if (e.type === 'touchend' || e.type === 'touchcancel') {
                setTimeout(function () {
                    if (TouchHandler.touches > 0) {
                        TouchHandler.touches -= 1;
                    }
                }, 500);
            } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {
                allow = false;
            }
            return allow;
        }, touchup: function (e) {
            TouchHandler.allowEvent(e);
        }
    };

    function getWavesEffectElement(e) {
        if (TouchHandler.allowEvent(e) === false) {
            return null;
        }
        var element = null;
        var target = e.target || e.srcElement;
        while (target.parentElement !== null) {
            if (!(target instanceof SVGElement) && target.className.indexOf('waves-effect') !== -1) {
                element = target;
                break;
            } else if (target.classList.contains('waves-effect')) {
                element = target;
                break;
            }
            target = target.parentElement;
        }
        return element;
    }

    function showEffect(e) {
        var element = getWavesEffectElement(e);
        if (element !== null) {
            Effect.show(e, element);
            if ('ontouchstart' in window) {
                element.addEventListener('touchend', Effect.hide, false);
                element.addEventListener('touchcancel', Effect.hide, false);
            }
            element.addEventListener('mouseup', Effect.hide, false);
            element.addEventListener('mouseleave', Effect.hide, false);
        }
    }

    Waves.displayEffect = function (options) {
        options = options || {};
        if ('duration' in options) {
            Effect.duration = options.duration;
        }
        Effect.wrapInput($$('.waves-effect'));
        if ('ontouchstart' in window) {
            document.body.addEventListener('touchstart', showEffect, false);
        }
        document.body.addEventListener('mousedown', showEffect, false);
    };
    Waves.attach = function (element) {
        if (element.tagName.toLowerCase() === 'input') {
            Effect.wrapInput([element]);
            element = element.parentElement;
        }
        if ('ontouchstart' in window) {
            element.addEventListener('touchstart', showEffect, false);
        }
        element.addEventListener('mousedown', showEffect, false);
    };
    window.Waves = Waves;
    document.addEventListener('DOMContentLoaded', function () {
        Waves.displayEffect();
    }, false);
})(window);
;Materialize.toast = function (message, displayLength, className, completeCallback) {
    className = className || "";
    var container = document.getElementById('toast-container');
    if (container === null) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }
    var newToast = createToast(message);
    if (message) {
        container.appendChild(newToast);
    }
    newToast.style.top = '35px';
    newToast.style.opacity = 0;
    Vel(newToast, {"top": "0px", opacity: 1}, {duration: 300, easing: 'easeOutCubic', queue: false});
    var timeLeft = displayLength;
    var counterInterval = setInterval(function () {
        if (newToast.parentNode === null) window.clearInterval(counterInterval);
        if (!newToast.classList.contains('panning')) {
            timeLeft -= 20;
        }
        if (timeLeft <= 0) {
            Vel(newToast, {"opacity": 0, marginTop: '-40px'}, {
                duration: 375,
                easing: 'easeOutExpo',
                queue: false,
                complete: function () {
                    if (typeof(completeCallback) === "function") completeCallback();
                    this[0].parentNode.removeChild(this[0]);
                }
            });
            window.clearInterval(counterInterval);
        }
    }, 20);

    function createToast(html) {
        var toast = document.createElement('div');
        toast.classList.add('toast');
        if (className) {
            var classes = className.split(' ');
            for (var i = 0, count = classes.length; i < count; i++) {
                toast.classList.add(classes[i]);
            }
        }
        toast.innerHTML = html;
        var hammerHandler = new Hammer(toast, {prevent_default: false});
        hammerHandler.on('pan', function (e) {
            var deltaX = e.deltaX;
            var activationDistance = 80;
            if (!toast.classList.contains('panning')) {
                toast.classList.add('panning');
            }
            var opacityPercent = 1 - Math.abs(deltaX / activationDistance);
            if (opacityPercent < 0) opacityPercent = 0;
            Vel(toast, {left: deltaX, opacity: opacityPercent}, {duration: 50, queue: false, easing: 'easeOutQuad'});
        });
        hammerHandler.on('panend', function (e) {
            var deltaX = e.deltaX;
            var activationDistance = 80;
            if (Math.abs(deltaX) > activationDistance) {
                Vel(toast, {marginTop: '-40px'}, {
                    duration: 375,
                    easing: 'easeOutExpo',
                    queue: false,
                    complete: function () {
                        if (typeof(completeCallback) === "function") {
                            completeCallback();
                        }
                        toast.parentNode.removeChild(toast);
                    }
                });
            } else {
                toast.classList.remove('panning');
                Vel(toast, {left: 0, opacity: 1}, {duration: 300, easing: 'easeOutExpo', queue: false});
            }
        });
        return toast;
    }
};
;(function ($) {
    var methods = {
        init: function (options) {
            var defaults = {menuWidth: 240, edge: 'left', closeOnClick: false};
            options = $.extend(defaults, options);
            $(this).each(function () {
                var $this = $(this);
                var menu_id = $("#" + $this.attr('data-activates'));
                if (options.menuWidth != 240) {
                    menu_id.css('width', options.menuWidth);
                }
                $('body').append($('<div class="drag-target"></div>'));
                if (options.edge == 'left') {
                    menu_id.css('left', -1 * (options.menuWidth + 10));
                    $('.drag-target').css({'left': 0});
                } else {
                    menu_id.addClass('right-aligned').css('right', -1 * (options.menuWidth + 10)).css('left', '');
                    $('.drag-target').css({'right': 0});
                }
                if (menu_id.hasClass('fixed')) {
                    if (window.innerWidth > 992) {
                        menu_id.css('left', 0);
                    }
                }
                if (menu_id.hasClass('fixed')) {
                    $(window).resize(function () {
                        if (window.innerWidth > 992) {
                            if ($('#sidenav-overlay').css('opacity') !== 0 && menuOut) {
                                removeMenu(true);
                            } else {
                                menu_id.removeAttr('style');
                                menu_id.css('width', options.menuWidth);
                            }
                        } else if (menuOut === false) {
                            if (options.edge === 'left') menu_id.css('left', -1 * (options.menuWidth + 10)); else
                                menu_id.css('right', -1 * (options.menuWidth + 10));
                        }
                    });
                }
                if (options.closeOnClick === true) {
                    menu_id.on("click.itemclick", "a:not(.collapsible-header)", function () {
                        removeMenu();
                    });
                }
                function removeMenu(restoreNav) {
                    panning = false;
                    menuOut = false;
                    $('body').css('overflow', '');
                    $('#sidenav-overlay').velocity({opacity: 0}, {
                        duration: 200,
                        queue: false,
                        easing: 'easeOutQuad',
                        complete: function () {
                            $(this).remove();
                        }
                    });
                    if (options.edge === 'left') {
                        $('.drag-target').css({width: '', right: '', left: '0'});
                        menu_id.velocity({left: -1 * (options.menuWidth + 10)}, {
                            duration: 200,
                            queue: false,
                            easing: 'easeOutCubic',
                            complete: function () {
                                if (restoreNav === true) {
                                    menu_id.removeAttr('style');
                                    menu_id.css('width', options.menuWidth);
                                }
                            }
                        });
                    } else {
                        $('.drag-target').css({width: '', right: '0', left: ''});
                        menu_id.velocity({right: -1 * (options.menuWidth + 10)}, {
                            duration: 200,
                            queue: false,
                            easing: 'easeOutCubic',
                            complete: function () {
                                if (restoreNav === true) {
                                    menu_id.removeAttr('style');
                                    menu_id.css('width', options.menuWidth);
                                }
                            }
                        });
                    }
                }

                var panning = false;
                var menuOut = false;
                $('.drag-target').on('click', function () {
                    removeMenu();
                });
                $('.drag-target').hammer({prevent_default: false}).bind('pan', function (e) {
                    if (e.gesture.pointerType == "touch") {
                        var direction = e.gesture.direction;
                        var x = e.gesture.center.x;
                        var y = e.gesture.center.y;
                        var velocityX = e.gesture.velocityX;
                        $('body').css('overflow', 'hidden');
                        if ($('#sidenav-overlay').length === 0) {
                            var overlay = $('<div id="sidenav-overlay"></div>');
                            overlay.css('opacity', 0).click(function () {
                                removeMenu();
                            });
                            $('body').append(overlay);
                        }
                        if (options.edge === 'left') {
                            if (x > options.menuWidth) {
                                x = options.menuWidth;
                            } else if (x < 0) {
                                x = 0;
                            }
                        }
                        if (options.edge === 'left') {
                            if (x < (options.menuWidth / 2)) {
                                menuOut = false;
                            } else if (x >= (options.menuWidth / 2)) {
                                menuOut = true;
                            }
                            menu_id.css('left', (x - options.menuWidth));
                        } else {
                            if (x < (window.innerWidth - options.menuWidth / 2)) {
                                menuOut = true;
                            } else if (x >= (window.innerWidth - options.menuWidth / 2)) {
                                menuOut = false;
                            }
                            var rightPos = -1 * (x - options.menuWidth / 2);
                            if (rightPos > 0) {
                                rightPos = 0;
                            }
                            menu_id.css('right', rightPos);
                        }
                        var overlayPerc;
                        if (options.edge === 'left') {
                            overlayPerc = x / options.menuWidth;
                            $('#sidenav-overlay').velocity({opacity: overlayPerc}, {
                                duration: 50,
                                queue: false,
                                easing: 'easeOutQuad'
                            });
                        } else {
                            overlayPerc = Math.abs((x - window.innerWidth) / options.menuWidth);
                            $('#sidenav-overlay').velocity({opacity: overlayPerc}, {
                                duration: 50,
                                queue: false,
                                easing: 'easeOutQuad'
                            });
                        }
                    }
                }).bind('panend', function (e) {
                    if (e.gesture.pointerType == "touch") {
                        var velocityX = e.gesture.velocityX;
                        panning = false;
                        if (options.edge === 'left') {
                            if ((menuOut && velocityX <= 0.3) || velocityX < -0.5) {
                                menu_id.velocity({left: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                                $('#sidenav-overlay').velocity({opacity: 1}, {
                                    duration: 50,
                                    queue: false,
                                    easing: 'easeOutQuad'
                                });
                                $('.drag-target').css({width: '50%', right: 0, left: ''});
                            } else if (!menuOut || velocityX > 0.3) {
                                $('body').css('overflow', '');
                                menu_id.velocity({left: -1 * (options.menuWidth + 10)}, {
                                    duration: 200,
                                    queue: false,
                                    easing: 'easeOutQuad'
                                });
                                $('#sidenav-overlay').velocity({opacity: 0}, {
                                    duration: 200,
                                    queue: false,
                                    easing: 'easeOutQuad',
                                    complete: function () {
                                        $(this).remove();
                                    }
                                });
                                $('.drag-target').css({width: '10px', right: '', left: 0});
                            }
                        } else {
                            if ((menuOut && velocityX >= -0.3) || velocityX > 0.5) {
                                menu_id.velocity({right: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                                $('#sidenav-overlay').velocity({opacity: 1}, {
                                    duration: 50,
                                    queue: false,
                                    easing: 'easeOutQuad'
                                });
                                $('.drag-target').css({width: '50%', right: '', left: 0});
                            } else if (!menuOut || velocityX < -0.3) {
                                $('body').css('overflow', '');
                                menu_id.velocity({right: -1 * (options.menuWidth + 10)}, {
                                    duration: 200,
                                    queue: false,
                                    easing: 'easeOutQuad'
                                });
                                $('#sidenav-overlay').velocity({opacity: 0}, {
                                    duration: 200,
                                    queue: false,
                                    easing: 'easeOutQuad',
                                    complete: function () {
                                        $(this).remove();
                                    }
                                });
                                $('.drag-target').css({width: '10px', right: 0, left: ''});
                            }
                        }
                    }
                });
                $this.click(function () {
                    if (menuOut === true) {
                        menuOut = false;
                        panning = false;
                        removeMenu();
                    } else {
                        $('body').css('overflow', 'hidden');
                        if (options.edge === 'left') {
                            $('.drag-target').css({width: '50%', right: 0, left: ''});
                            menu_id.velocity({left: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                        } else {
                            $('.drag-target').css({width: '50%', right: '', left: 0});
                            menu_id.velocity({right: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                            menu_id.css('left', '');
                        }
                        var overlay = $('<div id="sidenav-overlay"></div>');
                        overlay.css('opacity', 0).click(function () {
                            menuOut = false;
                            panning = false;
                            removeMenu();
                            overlay.velocity({opacity: 0}, {
                                duration: 300,
                                queue: false,
                                easing: 'easeOutQuad',
                                complete: function () {
                                    $(this).remove();
                                }
                            });
                        });
                        $('body').append(overlay);
                        overlay.velocity({opacity: 1}, {
                            duration: 300,
                            queue: false,
                            easing: 'easeOutQuad',
                            complete: function () {
                                menuOut = true;
                                panning = false;
                            }
                        });
                    }
                    return false;
                });
            });
        }, show: function () {
            this.trigger('click');
        }, hide: function () {
            $('#sidenav-overlay').trigger('click');
        }
    };
    $.fn.sideNav = function (methodOrOptions) {
        if (methods[methodOrOptions]) {
            return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + methodOrOptions + ' does not exist on jQuery.sideNav');
        }
    };
}(jQuery));
;(function ($) {
    var jWindow = $(window);
    var elements = [];
    var elementsInView = [];
    var isSpying = false;
    var ticks = 0;
    var unique_id = 1;
    var offset = {top: 0, right: 0, bottom: 0, left: 0,}

    function findElements(top, right, bottom, left) {
        var hits = $();
        $.each(elements, function (i, element) {
            if (element.height() > 0) {
                var elTop = element.offset().top, elLeft = element.offset().left, elRight = elLeft + element.width(), elBottom = elTop + element.height();
                var isIntersect = !(elLeft > right || elRight < left || elTop > bottom || elBottom < top);
                if (isIntersect) {
                    hits.push(element);
                }
            }
        });
        return hits;
    }

    function onScroll() {
        ++ticks;
        var top = jWindow.scrollTop(), left = jWindow.scrollLeft(), right = left + jWindow.width(), bottom = top + jWindow.height();
        var intersections = findElements(top + offset.top + 200, right + offset.right, bottom + offset.bottom, left + offset.left);
        $.each(intersections, function (i, element) {
            var lastTick = element.data('scrollSpy:ticks');
            if (typeof lastTick != 'number') {
                element.triggerHandler('scrollSpy:enter');
            }
            element.data('scrollSpy:ticks', ticks);
        });
        $.each(elementsInView, function (i, element) {
            var lastTick = element.data('scrollSpy:ticks');
            if (typeof lastTick == 'number' && lastTick !== ticks) {
                element.triggerHandler('scrollSpy:exit');
                element.data('scrollSpy:ticks', null);
            }
        });
        elementsInView = intersections;
    }

    function onWinSize() {
        jWindow.trigger('scrollSpy:winSize');
    }

    var getTime = (Date.now || function () {
        return new Date().getTime();
    });

    function throttle(func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        options || (options = {});
        var later = function () {
            previous = options.leading === false ? 0 : getTime();
            timeout = null;
            result = func.apply(context, args);
            context = args = null;
        };
        return function () {
            var now = getTime();
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0) {
                clearTimeout(timeout);
                timeout = null;
                previous = now;
                result = func.apply(context, args);
                context = args = null;
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    };
    $.scrollSpy = function (selector, options) {
        var visible = [];
        selector = $(selector);
        selector.each(function (i, element) {
            elements.push($(element));
            $(element).data("scrollSpy:id", i);
            $('a[href=#' + $(element).attr('id') + ']').click(function (e) {
                e.preventDefault();
                var offset = $(this.hash).offset().top + 1;
                $('html, body').animate({scrollTop: offset - 200}, {
                    duration: 400,
                    queue: false,
                    easing: 'easeOutCubic'
                });
            });
        });
        options = options || {throttle: 100};
        offset.top = options.offsetTop || 0;
        offset.right = options.offsetRight || 0;
        offset.bottom = options.offsetBottom || 0;
        offset.left = options.offsetLeft || 0;
        var throttledScroll = throttle(onScroll, options.throttle || 100);
        var readyScroll = function () {
            $(document).ready(throttledScroll);
        };
        if (!isSpying) {
            jWindow.on('scroll', readyScroll);
            jWindow.on('resize', readyScroll);
            isSpying = true;
        }
        setTimeout(readyScroll, 0);
        selector.on('scrollSpy:enter', function () {
            visible = $.grep(visible, function (value) {
                return value.height() != 0;
            });
            var $this = $(this);
            if (visible[0]) {
                $('a[href=#' + visible[0].attr('id') + ']').removeClass('active');
                if ($this.data('scrollSpy:id') < visible[0].data('scrollSpy:id')) {
                    visible.unshift($(this));
                } else {
                    visible.push($(this));
                }
            } else {
                visible.push($(this));
            }
            $('a[href=#' + visible[0].attr('id') + ']').addClass('active');
        });
        selector.on('scrollSpy:exit', function () {
            visible = $.grep(visible, function (value) {
                return value.height() != 0;
            });
            if (visible[0]) {
                $('a[href=#' + visible[0].attr('id') + ']').removeClass('active');
                var $this = $(this);
                visible = $.grep(visible, function (value) {
                    return value.attr('id') != $this.attr('id');
                });
                if (visible[0]) {
                    $('a[href=#' + visible[0].attr('id') + ']').addClass('active');
                }
            }
        });
        return selector;
    };
    $.winSizeSpy = function (options) {
        $.winSizeSpy = function () {
            return jWindow;
        };
        options = options || {throttle: 100};
        return jWindow.on('resize', throttle(onWinSize, options.throttle || 100));
    };
    $.fn.scrollSpy = function (options) {
        return $.scrollSpy($(this), options);
    };
})(jQuery);
;(function ($) {
    $(document).ready(function () {
        Materialize.updateTextFields = function () {
            var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';
            $(input_selector).each(function (index, element) {
                if ($(element).val().length > 0 || $(this).attr('placeholder') !== undefined || $(element)[0].validity.badInput === true) {
                    $(this).siblings('label, i').addClass('active');
                } else {
                    $(this).siblings('label, i').removeClass('active');
                }
            });
        };
        var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';
        $('input[autofocus]').siblings('label, i').addClass('active');
        $(document).on('change', input_selector, function () {
            if ($(this).val().length !== 0 || $(this).attr('placeholder') !== undefined) {
                $(this).siblings('label, i').addClass('active');
            }
            validate_field($(this));
        });
        $(document).ready(function () {
            Materialize.updateTextFields();
        });
        $(document).on('reset', function (e) {
            var formReset = $(e.target);
            if (formReset.is('form')) {
                formReset.find(input_selector).removeClass('valid').removeClass('invalid');
                formReset.find(input_selector).each(function () {
                    if ($(this).attr('value') === '') {
                        $(this).siblings('label, i').removeClass('active');
                    }
                });
                formReset.find('select.initialized').each(function () {
                    var reset_text = formReset.find('option[selected]').text();
                    formReset.siblings('input.select-dropdown').val(reset_text);
                });
            }
        });
        $(document).on('focus', input_selector, function () {
            $(this).siblings('label, i').addClass('active');
        });
        $(document).on('blur', input_selector, function () {
            var $inputElement = $(this);
            if ($inputElement.val().length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') === undefined) {
                $inputElement.siblings('label, i').removeClass('active');
            }
            validate_field($inputElement);
        });
        validate_field = function (object) {
            var hasLength = object.attr('length') !== undefined;
            var lenAttr = parseInt(object.attr('length'));
            var len = object.val().length;
            if (object.val().length === 0 && object[0].validity.badInput === false) {
                if (object.hasClass('validate')) {
                    object.removeClass('valid');
                    object.removeClass('invalid');
                }
            } else {
                if (object.hasClass('validate')) {
                    if ((object.is(':valid') && hasLength && (len < lenAttr)) || (object.is(':valid') && !hasLength)) {
                        object.removeClass('invalid');
                        object.addClass('valid');
                    } else {
                        object.removeClass('valid');
                        object.addClass('invalid');
                    }
                }
            }
        };
        var hiddenDiv = $('.hiddendiv').first();
        if (!hiddenDiv.length) {
            hiddenDiv = $('<div class="hiddendiv common"></div>');
            $('body').append(hiddenDiv);
        }
        var text_area_selector = '.materialize-textarea';

        function textareaAutoResize($textarea) {
            var fontFamily = $textarea.css('font-family');
            var fontSize = $textarea.css('font-size');
            if (fontSize) {
                hiddenDiv.css('font-size', fontSize);
            }
            if (fontFamily) {
                hiddenDiv.css('font-family', fontFamily);
            }
            if ($textarea.attr('wrap') === "off") {
                hiddenDiv.css('overflow-wrap', "normal").css('white-space', "pre");
            }
            hiddenDiv.text($textarea.val() + '\n');
            var content = hiddenDiv.html().replace(/\n/g, '<br>');
            hiddenDiv.html(content);
            if ($textarea.is(':visible')) {
                hiddenDiv.css('width', $textarea.width());
            } else {
                hiddenDiv.css('width', $(window).width() / 2);
            }
            $textarea.css('height', hiddenDiv.height());
        }

        $(text_area_selector).each(function () {
            var $textarea = $(this);
            if ($textarea.val().length) {
                textareaAutoResize($textarea);
            }
        });
        $('body').on('keyup keydown', text_area_selector, function () {
            textareaAutoResize($(this));
        });
        $('.file-field').each(function () {
            var path_input = $(this).find('input.file-path');
            $(this).find('input[type="file"]').change(function () {
                path_input.val($(this)[0].files[0].name);
                path_input.trigger('change');
            });
        });
        var range_type = 'input[type=range]';
        var range_mousedown = false;
        var left;
        $(range_type).each(function () {
            var thumb = $('<span class="thumb"><span class="value"></span></span>');
            $(this).after(thumb);
        });
        var range_wrapper = '.range-field';
        $(document).on('change', range_type, function (e) {
            var thumb = $(this).siblings('.thumb');
            thumb.find('.value').html($(this).val());
        });
        $(document).on('mousedown touchstart', range_type, function (e) {
            var thumb = $(this).siblings('.thumb');
            if (thumb.length <= 0) {
                thumb = $('<span class="thumb"><span class="value"></span></span>');
                $(this).append(thumb);
            }
            thumb.find('.value').html($(this).val());
            range_mousedown = true;
            $(this).addClass('active');
            if (!thumb.hasClass('active')) {
                thumb.velocity({height: "30px", width: "30px", top: "-20px", marginLeft: "-15px"}, {
                    duration: 300,
                    easing: 'easeOutExpo'
                });
            }
            if (e.pageX === undefined || e.pageX === null) {
                left = e.originalEvent.touches[0].pageX - $(this).offset().left;
            } else {
                left = e.pageX - $(this).offset().left;
            }
            var width = $(this).outerWidth();
            if (left < 0) {
                left = 0;
            } else if (left > width) {
                left = width;
            }
            thumb.addClass('active').css('left', left);
            thumb.find('.value').html($(this).val());
        });
        $(document).on('mouseup touchend', range_wrapper, function () {
            range_mousedown = false;
            $(this).removeClass('active');
        });
        $(document).on('mousemove touchmove', range_wrapper, function (e) {
            var thumb = $(this).children('.thumb');
            var left;
            if (range_mousedown) {
                if (!thumb.hasClass('active')) {
                    thumb.velocity({height: '30px', width: '30px', top: '-20px', marginLeft: '-15px'}, {
                        duration: 300,
                        easing: 'easeOutExpo'
                    });
                }
                if (e.pageX === undefined || e.pageX === null) {
                    left = e.originalEvent.touches[0].pageX - $(this).offset().left;
                } else {
                    left = e.pageX - $(this).offset().left;
                }
                var width = $(this).outerWidth();
                if (left < 0) {
                    left = 0;
                } else if (left > width) {
                    left = width;
                }
                thumb.addClass('active').css('left', left);
            }
        });
        $(document).on('mouseout touchleave', range_wrapper, function () {
            if (!range_mousedown) {
                var thumb = $(this).children('.thumb');
                if (thumb.hasClass('active')) {
                    thumb.velocity({height: '0', width: '0', top: '10px', marginLeft: '-6px'}, {duration: 100});
                }
                thumb.removeClass('active');
            }
        });
    });
    $.fn.material_select = function (callback) {
        $(this).each(function () {
            $select = $(this);
            if ($select.hasClass('browser-default')) {
                return;
            }
            var lastID = $select.data('select-id');
            if (lastID) {
                $select.parent().find('i').remove();
                $select.parent().find('input').remove();
                $select.unwrap();
                $('ul#select-options-' + lastID).remove();
            }
            if (callback === 'destroy') {
                $select.data('select-id', null).removeClass('initialized');
                return;
            }
            var uniqueID = Materialize.guid();
            $select.data('select-id', uniqueID);
            var wrapper = $('<div class="select-wrapper"></div>');
            wrapper.addClass($select.attr('class'));
            var options = $('<ul id="select-options-' + uniqueID + '" class="dropdown-content select-dropdown"></ul>');
            var selectOptions = $select.children('option');
            var label;
            if ($select.find('option:selected') !== undefined) {
                label = $select.find('option:selected');
            } else {
                label = options.first();
            }
            selectOptions.each(function () {
                options.append($('<li class="' + (($(this).is(':disabled')) ? 'disabled' : '') + '"><span>' + $(this).html() + '</span></li>'));
            });
            options.find('li').each(function (i) {
                var $curr_select = $select;
                $(this).click(function () {
                    if (!$(this).hasClass('disabled')) {
                        $curr_select.find('option').eq(i).prop('selected', true);
                        $curr_select.trigger('change');
                        $curr_select.siblings('input.select-dropdown').val($(this).text());
                        if (typeof callback !== 'undefined') callback();
                    }
                });
            });
            $select.wrap(wrapper);
            var dropdownIcon = $('<span class="caret">&#9660;</span>');
            if ($select.is(':disabled')) dropdownIcon.addClass('disabled');
            var $newSelect = $('<input type="text" class="select-dropdown" readonly="true" ' + (($select.is(':disabled')) ? 'disabled' : '') + ' data-activates="select-options-' + uniqueID + '" value="' + label.html() + '"/>');
            $select.before($newSelect);
            $newSelect.before(dropdownIcon);
            $('body').append(options);
            if (!$select.is(':disabled')) {
                $newSelect.dropdown({"hover": false});
            }
            if ($select.attr('tabindex')) {
                $($newSelect[0]).attr('tabindex', $select.attr('tabindex'));
            }
            $select.addClass('initialized');
            $newSelect.on('focus', function () {
                $(this).trigger('open');
                label = $(this).val();
                selectedOption = options.find('li').filter(function () {
                    return $(this).text().toLowerCase() === label.toLowerCase();
                })[0];
                activateOption(options, selectedOption);
            });
            $newSelect.on('blur', function () {
                $(this).trigger('close');
            });
            activateOption = function (collection, newOption) {
                collection.find('li.active').removeClass('active');
                $(newOption).addClass('active');
                collection.scrollTo(newOption);
            };
            filterQuery = [];
            onKeyDown = function (event) {
                if (event.which == 9) {
                    $newSelect.trigger('close');
                    return;
                }
                if (event.which == 40 && !options.is(":visible")) {
                    $newSelect.trigger('open');
                    return;
                }
                if (event.which == 13 && !options.is(":visible")) {
                    return;
                }
                event.preventDefault();
                letter = String.fromCharCode(event.which).toLowerCase();
                var nonLetters = [9, 13, 27, 38, 40];
                if (letter && (nonLetters.indexOf(event.which) === -1)) {
                    filterQuery.push(letter);
                    string = filterQuery.join("");
                    newOption = options.find('li').filter(function () {
                        return $(this).text().toLowerCase().indexOf(string) === 0;
                    })[0];
                    if (newOption) {
                        activateOption(options, newOption);
                    }
                }
                if (event.which == 13) {
                    activeOption = options.find('li.active:not(.disabled)')[0];
                    if (activeOption) {
                        $(activeOption).trigger('click');
                        $newSelect.trigger('close');
                    }
                }
                if (event.which == 40) {
                    newOption = options.find('li.active').next('li:not(.disabled)')[0];
                    if (newOption) {
                        activateOption(options, newOption);
                    }
                }
                if (event.which == 27) {
                    $newSelect.trigger('close');
                }
                if (event.which == 38) {
                    newOption = options.find('li.active').prev('li:not(.disabled)')[0];
                    if (newOption) {
                        activateOption(options, newOption);
                    }
                }
                setTimeout(function () {
                    filterQuery = [];
                }, 1000);
            };
            $newSelect.on('keydown', onKeyDown);
        });
    };
}(jQuery));
;(function ($) {
    var methods = {
        init: function (options) {
            var defaults = {indicators: true, height: 400, transition: 500, interval: 6000};
            options = $.extend(defaults, options);
            return this.each(function () {
                var $this = $(this);
                var $slider = $this.find('ul.slides').first();
                var $slides = $slider.find('li');
                var $active_index = $slider.find('.active').index();
                var $active;
                if ($active_index != -1) {
                    $active = $slides.eq($active_index);
                }
                function captionTransition(caption, duration) {
                    if (caption.hasClass("center-align")) {
                        caption.velocity({opacity: 0, translateY: -100}, {duration: duration, queue: false});
                    } else if (caption.hasClass("right-align")) {
                        caption.velocity({opacity: 0, translateX: 100}, {duration: duration, queue: false});
                    } else if (caption.hasClass("left-align")) {
                        caption.velocity({opacity: 0, translateX: -100}, {duration: duration, queue: false});
                    }
                }

                function moveToSlide(index) {
                    if (index >= $slides.length) index = 0; else if (index < 0) index = $slides.length - 1;
                    $active_index = $slider.find('.active').index();
                    if ($active_index != index) {
                        $active = $slides.eq($active_index);
                        $caption = $active.find('.caption');
                        $active.removeClass('active');
                        $active.velocity({opacity: 0}, {
                            duration: options.transition,
                            queue: false,
                            easing: 'easeOutQuad',
                            complete: function () {
                                $slides.not('.active').velocity({opacity: 0, translateX: 0, translateY: 0}, {
                                    duration: 0,
                                    queue: false
                                });
                            }
                        });
                        captionTransition($caption, options.transition);
                        if (options.indicators) {
                            $indicators.eq($active_index).removeClass('active');
                        }
                        $slides.eq(index).velocity({opacity: 1}, {
                            duration: options.transition,
                            queue: false,
                            easing: 'easeOutQuad'
                        });
                        $slides.eq(index).find('.caption').velocity({
                            opacity: 1,
                            translateX: 0,
                            translateY: 0
                        }, {
                            duration: options.transition,
                            delay: options.transition,
                            queue: false,
                            easing: 'easeOutQuad'
                        });
                        $slides.eq(index).addClass('active');
                        if (options.indicators) {
                            $indicators.eq(index).addClass('active');
                        }
                    }
                }

                if (!$this.hasClass('fullscreen')) {
                    if (options.indicators) {
                        $this.height(options.height + 40);
                    } else {
                        $this.height(options.height);
                    }
                    $slider.height(options.height);
                }
                $slides.find('.caption').each(function () {
                    captionTransition($(this), 0);
                });
                $slides.find('img').each(function () {
                    $(this).css('background-image', 'url(' + $(this).attr('src') + ')');
                    $(this).attr('src', 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==');
                });
                if (options.indicators) {
                    var $indicators = $('<ul class="indicators"></ul>');
                    $slides.each(function (index) {
                        var $indicator = $('<li class="indicator-item"></li>');
                        $indicator.click(function () {
                            var $parent = $slider.parent();
                            var curr_index = $parent.find($(this)).index();
                            moveToSlide(curr_index);
                            clearInterval($interval);
                            $interval = setInterval(function () {
                                $active_index = $slider.find('.active').index();
                                if ($slides.length == $active_index + 1) $active_index = 0; else $active_index += 1;
                                moveToSlide($active_index);
                            }, options.transition + options.interval);
                        });
                        $indicators.append($indicator);
                    });
                    $this.append($indicators);
                    $indicators = $this.find('ul.indicators').find('li.indicator-item');
                }
                if ($active) {
                    $active.show();
                } else {
                    $slides.first().addClass('active').velocity({opacity: 1}, {
                        duration: options.transition,
                        queue: false,
                        easing: 'easeOutQuad'
                    });
                    $active_index = 0;
                    $active = $slides.eq($active_index);
                    if (options.indicators) {
                        $indicators.eq($active_index).addClass('active');
                    }
                }
                $active.find('img').each(function () {
                    $active.find('.caption').velocity({
                        opacity: 1,
                        translateX: 0,
                        translateY: 0
                    }, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
                });
                $interval = setInterval(function () {
                    $active_index = $slider.find('.active').index();
                    moveToSlide($active_index + 1);
                }, options.transition + options.interval);
                var panning = false;
                var swipeLeft = false;
                var swipeRight = false;
                $this.hammer({prevent_default: false}).bind('pan', function (e) {
                    if (e.gesture.pointerType === "touch") {
                        clearInterval($interval);
                        var direction = e.gesture.direction;
                        var x = e.gesture.deltaX;
                        var velocityX = e.gesture.velocityX;
                        $curr_slide = $slider.find('.active');
                        $curr_slide.velocity({translateX: x}, {duration: 50, queue: false, easing: 'easeOutQuad'});
                        if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.65)) {
                            swipeRight = true;
                        } else if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.65)) {
                            swipeLeft = true;
                        }
                        var next_slide;
                        if (swipeLeft) {
                            next_slide = $curr_slide.next();
                            if (next_slide.length === 0) {
                                next_slide = $slides.first();
                            }
                            next_slide.velocity({opacity: 1}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                        }
                        if (swipeRight) {
                            next_slide = $curr_slide.prev();
                            if (next_slide.length === 0) {
                                next_slide = $slides.last();
                            }
                            next_slide.velocity({opacity: 1}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                        }
                    }
                }).bind('panend', function (e) {
                    if (e.gesture.pointerType === "touch") {
                        $curr_slide = $slider.find('.active');
                        panning = false;
                        curr_index = $slider.find('.active').index();
                        if (!swipeRight && !swipeLeft) {
                            $curr_slide.velocity({translateX: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                        } else if (swipeLeft) {
                            moveToSlide(curr_index + 1);
                            $curr_slide.velocity({translateX: -1 * $this.innerWidth()}, {
                                duration: 300,
                                queue: false,
                                easing: 'easeOutQuad',
                                complete: function () {
                                    $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: false});
                                }
                            });
                        } else if (swipeRight) {
                            moveToSlide(curr_index - 1);
                            $curr_slide.velocity({translateX: $this.innerWidth()}, {
                                duration: 300,
                                queue: false,
                                easing: 'easeOutQuad',
                                complete: function () {
                                    $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: false});
                                }
                            });
                        }
                        swipeLeft = false;
                        swipeRight = false;
                        clearInterval($interval);
                        $interval = setInterval(function () {
                            $active_index = $slider.find('.active').index();
                            if ($slides.length == $active_index + 1) $active_index = 0; else $active_index += 1;
                            moveToSlide($active_index);
                        }, options.transition + options.interval);
                    }
                });
                $this.on('sliderPause', function () {
                    clearInterval($interval);
                });
                $this.on('sliderStart', function () {
                    clearInterval($interval);
                    $interval = setInterval(function () {
                        $active_index = $slider.find('.active').index();
                        if ($slides.length == $active_index + 1) $active_index = 0; else $active_index += 1;
                        moveToSlide($active_index);
                    }, options.transition + options.interval);
                });
            });
        }, pause: function () {
            $(this).trigger('sliderPause');
        }, start: function () {
            $(this).trigger('sliderStart');
        }
    };
    $.fn.slider = function (methodOrOptions) {
        if (methods[methodOrOptions]) {
            return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + methodOrOptions + ' does not exist on jQuery.tooltip');
        }
    };
}(jQuery));
;(function ($) {
    $(document).ready(function () {
        $(document).on('click.card', '.card', function (e) {
            if ($(this).find('.card-reveal').length) {
                if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
                    $(this).find('.card-reveal').velocity({translateY: 0}, {
                        duration: 225,
                        queue: false,
                        easing: 'easeInOutQuad',
                        complete: function () {
                            $(this).css({display: 'none'});
                        }
                    });
                } else if ($(e.target).is($('.card .activator')) || $(e.target).is($('.card .activator i'))) {
                    $(this).find('.card-reveal').css({display: 'block'}).velocity("stop", false).velocity({translateY: '-100%'}, {
                        duration: 300,
                        queue: false,
                        easing: 'easeInOutQuad'
                    });
                }
            }
        });
    });
}(jQuery));
;(function ($) {
    $(document).ready(function () {
        $.fn.pushpin = function (options) {
            var defaults = {top: 0, bottom: Infinity, offset: 0}
            options = $.extend(defaults, options);
            $index = 0;
            return this.each(function () {
                var $uniqueId = Materialize.guid(), $this = $(this), $original_offset = $(this).offset().top;

                function removePinClasses(object) {
                    object.removeClass('pin-top');
                    object.removeClass('pinned');
                    object.removeClass('pin-bottom');
                }

                function updateElements(objects, scrolled) {
                    objects.each(function () {
                        if (options.top <= scrolled && options.bottom >= scrolled && !$(this).hasClass('pinned')) {
                            removePinClasses($(this));
                            $(this).css('top', options.offset);
                            $(this).addClass('pinned');
                        }
                        if (scrolled < options.top && !$(this).hasClass('pin-top')) {
                            removePinClasses($(this));
                            $(this).css('top', 0);
                            $(this).addClass('pin-top');
                        }
                        if (scrolled > options.bottom && !$(this).hasClass('pin-bottom')) {
                            removePinClasses($(this));
                            $(this).addClass('pin-bottom');
                            $(this).css('top', options.bottom - $original_offset);
                        }
                    });
                }

                updateElements($this, $(window).scrollTop());
                $(window).on('scroll.' + $uniqueId, function () {
                    var $scrolled = $(window).scrollTop() + options.offset;
                    updateElements($this, $scrolled);
                });
            });
        };
    });
}(jQuery));
;(function ($) {
    $(document).ready(function () {
        $.fn.reverse = [].reverse;
        $(document).on('mouseenter.fixedActionBtn', '.fixed-action-btn', function (e) {
            var $this = $(this);
            openFABMenu($this);
        });
        $(document).on('mouseleave.fixedActionBtn', '.fixed-action-btn', function (e) {
            var $this = $(this);
            closeFABMenu($this);
        });
    });
    $.fn.extend({
        openFAB: function () {
            var $this = $(this);
            openFABMenu($this);
        }, closeFAB: function () {
            closeFABMenu($this);
        }
    });
    var openFABMenu = function (btn) {
        $this = btn;
        if ($this.hasClass('active') === false) {
            $this.addClass('active');
            $this.find('ul .btn-floating').velocity({scaleY: ".4", scaleX: ".4", translateY: "40px"}, {duration: 0});
            var time = 0;
            $this.find('ul .btn-floating').reverse().each(function () {
                $(this).velocity({opacity: "1", scaleX: "1", scaleY: "1", translateY: "0"}, {
                    duration: 80,
                    delay: time
                });
                time += 40;
            });
        }
    };
    var closeFABMenu = function (btn) {
        $this = btn;
        $this.removeClass('active');
        var time = 0;
        $this.find('ul .btn-floating').velocity("stop", true);
        $this.find('ul .btn-floating').velocity({
            opacity: "0",
            scaleX: ".4",
            scaleY: ".4",
            translateY: "40px"
        }, {duration: 80});
    };
}(jQuery));
;(function ($) {
    Materialize.fadeInImage = function (selector) {
        var element = $(selector);
        element.css({opacity: 0});
        $(element).velocity({opacity: 1}, {duration: 650, queue: false, easing: 'easeOutSine'});
        $(element).velocity({opacity: 1}, {
            duration: 1300, queue: false, easing: 'swing', step: function (now, fx) {
                fx.start = 100;
                var grayscale_setting = now / 100;
                var brightness_setting = 150 - (100 - now) / 1.75;
                if (brightness_setting < 100) {
                    brightness_setting = 100;
                }
                if (now >= 0) {
                    $(this).css({
                        "-webkit-filter": "grayscale(" + grayscale_setting + ")" + "brightness(" + brightness_setting + "%)",
                        "filter": "grayscale(" + grayscale_setting + ")" + "brightness(" + brightness_setting + "%)"
                    });
                }
            }
        });
    };
    Materialize.showStaggeredList = function (selector) {
        var time = 0;
        $(selector).find('li').velocity({translateX: "-100px"}, {duration: 0});
        $(selector).find('li').each(function () {
            $(this).velocity({opacity: "1", translateX: "0"}, {duration: 800, delay: time, easing: [60, 10]});
            time += 120;
        });
    };
    $(document).ready(function () {
        var swipeLeft = false;
        var swipeRight = false;
        $('.dismissable').each(function () {
            $(this).hammer({prevent_default: false}).bind('pan', function (e) {
                if (e.gesture.pointerType === "touch") {
                    var $this = $(this);
                    var direction = e.gesture.direction;
                    var x = e.gesture.deltaX;
                    var velocityX = e.gesture.velocityX;
                    $this.velocity({translateX: x}, {duration: 50, queue: false, easing: 'easeOutQuad'});
                    if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.75)) {
                        swipeLeft = true;
                    }
                    if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.75)) {
                        swipeRight = true;
                    }
                }
            }).bind('panend', function (e) {
                if (Math.abs(e.gesture.deltaX) < ($(this).innerWidth() / 2)) {
                    swipeRight = false;
                    swipeLeft = false;
                }
                if (e.gesture.pointerType === "touch") {
                    var $this = $(this);
                    if (swipeLeft || swipeRight) {
                        var fullWidth;
                        if (swipeLeft) {
                            fullWidth = $this.innerWidth();
                        } else {
                            fullWidth = -1 * $this.innerWidth();
                        }
                        $this.velocity({translateX: fullWidth,}, {
                            duration: 100,
                            queue: false,
                            easing: 'easeOutQuad',
                            complete: function () {
                                $this.css('border', 'none');
                                $this.velocity({height: 0, padding: 0,}, {
                                    duration: 200,
                                    queue: false,
                                    easing: 'easeOutQuad',
                                    complete: function () {
                                        $this.remove();
                                    }
                                });
                            }
                        });
                    } else {
                        $this.velocity({translateX: 0,}, {duration: 100, queue: false, easing: 'easeOutQuad'});
                    }
                    swipeLeft = false;
                    swipeRight = false;
                }
            });
        });
    });
}(jQuery));
;(function ($) {
    Materialize.scrollFire = function (options) {
        var didScroll = false;
        window.addEventListener("scroll", function () {
            didScroll = true;
        });
        setInterval(function () {
            if (didScroll) {
                didScroll = false;
                var windowScroll = window.pageYOffset + window.innerHeight;
                for (var i = 0; i < options.length; i++) {
                    var value = options[i];
                    var selector = value.selector, offset = value.offset, callback = value.callback;
                    var currentElement = document.querySelector(selector);
                    if (currentElement !== null) {
                        var elementOffset = currentElement.getBoundingClientRect().top + document.body.scrollTop;
                        if (windowScroll > (elementOffset + offset)) {
                            if (value.done !== true) {
                                var callbackFunc = new Function(callback);
                                callbackFunc();
                                value.done = true;
                            }
                        }
                    }
                }
            }
        }, 100);
    };
})(jQuery);
;(function (factory) {
    if (typeof define == 'function' && define.amd) define('picker', ['jquery'], factory)
    else if (typeof exports == 'object') module.exports = factory(require('jquery'))
    else this.Picker = factory(jQuery)
}(function ($) {
    var $window = $(window)
    var $document = $(document)
    var $html = $(document.documentElement)

    function PickerConstructor(ELEMENT, NAME, COMPONENT, OPTIONS) {
        if (!ELEMENT)return PickerConstructor
        var
            IS_DEFAULT_THEME = false, STATE = {id: ELEMENT.id || 'P' + Math.abs(~~(Math.random() * new Date()))}, SETTINGS = COMPONENT ? $.extend(true, {}, COMPONENT.defaults, OPTIONS) : OPTIONS || {}, CLASSES = $.extend({}, PickerConstructor.klasses(), SETTINGS.klass), $ELEMENT = $(ELEMENT), PickerInstance = function () {
                return this.start()
            }, P = PickerInstance.prototype = {
                constructor: PickerInstance, $node: $ELEMENT, start: function () {
                    if (STATE && STATE.start)return P
                    STATE.methods = {}
                    STATE.start = true
                    STATE.open = false
                    STATE.type = ELEMENT.type
                    ELEMENT.autofocus = ELEMENT == getActiveElement()
                    ELEMENT.readOnly = !SETTINGS.editable
                    ELEMENT.id = ELEMENT.id || STATE.id
                    if (ELEMENT.type != 'text') {
                        ELEMENT.type = 'text'
                    }
                    P.component = new COMPONENT(P, SETTINGS)
                    P.$root = $(PickerConstructor._.node('div', createWrappedComponent(), CLASSES.picker, 'id="' + ELEMENT.id + '_root" tabindex="0"'))
                    prepareElementRoot()
                    if (SETTINGS.formatSubmit) {
                        prepareElementHidden()
                    }
                    prepareElement()
                    if (SETTINGS.container) $(SETTINGS.container).append(P.$root)
                    else $ELEMENT.after(P.$root)
                    P.on({
                        start: P.component.onStart,
                        render: P.component.onRender,
                        stop: P.component.onStop,
                        open: P.component.onOpen,
                        close: P.component.onClose,
                        set: P.component.onSet
                    }).on({
                        start: SETTINGS.onStart,
                        render: SETTINGS.onRender,
                        stop: SETTINGS.onStop,
                        open: SETTINGS.onOpen,
                        close: SETTINGS.onClose,
                        set: SETTINGS.onSet
                    })
                    IS_DEFAULT_THEME = isUsingDefaultTheme(P.$root.children()[0])
                    if (ELEMENT.autofocus) {
                        P.open()
                    }
                    return P.trigger('start').trigger('render')
                }, render: function (entireComponent) {
                    if (entireComponent) P.$root.html(createWrappedComponent())
                    else P.$root.find('.' + CLASSES.box).html(P.component.nodes(STATE.open))
                    return P.trigger('render')
                }, stop: function () {
                    if (!STATE.start)return P
                    P.close()
                    if (P._hidden) {
                        P._hidden.parentNode.removeChild(P._hidden)
                    }
                    P.$root.remove()
                    $ELEMENT.removeClass(CLASSES.input).removeData(NAME)
                    setTimeout(function () {
                        $ELEMENT.off('.' + STATE.id)
                    }, 0)
                    ELEMENT.type = STATE.type
                    ELEMENT.readOnly = false
                    P.trigger('stop')
                    STATE.methods = {}
                    STATE.start = false
                    return P
                }, open: function (dontGiveFocus) {
                    if (STATE.open)return P
                    $ELEMENT.addClass(CLASSES.active)
                    aria(ELEMENT, 'expanded', true)
                    setTimeout(function () {
                        P.$root.addClass(CLASSES.opened)
                        aria(P.$root[0], 'hidden', false)
                    }, 0)
                    if (dontGiveFocus !== false) {
                        STATE.open = true
                        if (IS_DEFAULT_THEME) {
                            $html.css('overflow', 'hidden').css('padding-right', '+=' + getScrollbarWidth())
                        }
                        P.$root[0].focus()
                        $document.on('click.' + STATE.id + ' focusin.' + STATE.id, function (event) {
                            var target = event.target
                            if (target != ELEMENT && target != document && event.which != 3) {
                                P.close(target === P.$root.children()[0])
                            }
                        }).on('keydown.' + STATE.id, function (event) {
                            var
                                keycode = event.keyCode, keycodeToMove = P.component.key[keycode], target = event.target
                            if (keycode == 27) {
                                P.close(true)
                            } else if (target == P.$root[0] && (keycodeToMove || keycode == 13)) {
                                event.preventDefault()
                                if (keycodeToMove) {
                                    PickerConstructor._.trigger(P.component.key.go, P, [PickerConstructor._.trigger(keycodeToMove)])
                                } else if (!P.$root.find('.' + CLASSES.highlighted).hasClass(CLASSES.disabled)) {
                                    P.set('select', P.component.item.highlight).close()
                                }
                            } else if ($.contains(P.$root[0], target) && keycode == 13) {
                                event.preventDefault()
                                target.click()
                            }
                        })
                    }
                    return P.trigger('open')
                }, close: function (giveFocus) {
                    if (giveFocus) {
                        P.$root.off('focus.toOpen')[0].focus()
                        setTimeout(function () {
                            P.$root.on('focus.toOpen', handleFocusToOpenEvent)
                        }, 0)
                    }
                    $ELEMENT.removeClass(CLASSES.active)
                    aria(ELEMENT, 'expanded', false)
                    setTimeout(function () {
                        P.$root.removeClass(CLASSES.opened + ' ' + CLASSES.focused)
                        aria(P.$root[0], 'hidden', true)
                    }, 0)
                    if (!STATE.open)return P
                    STATE.open = false
                    if (IS_DEFAULT_THEME) {
                        $html.css('overflow', '').css('padding-right', '-=' + getScrollbarWidth())
                    }
                    $document.off('.' + STATE.id)
                    return P.trigger('close')
                }, clear: function (options) {
                    return P.set('clear', null, options)
                }, set: function (thing, value, options) {
                    var thingItem, thingValue, thingIsObject = $.isPlainObject(thing), thingObject = thingIsObject ? thing : {}
                    options = thingIsObject && $.isPlainObject(value) ? value : options || {}
                    if (thing) {
                        if (!thingIsObject) {
                            thingObject[thing] = value
                        }
                        for (thingItem in thingObject) {
                            thingValue = thingObject[thingItem]
                            if (thingItem in P.component.item) {
                                if (thingValue === undefined) thingValue = null
                                P.component.set(thingItem, thingValue, options)
                            }
                            if (thingItem == 'select' || thingItem == 'clear') {
                                $ELEMENT.val(thingItem == 'clear' ? '' : P.get(thingItem, SETTINGS.format)).trigger('change')
                            }
                        }
                        P.render()
                    }
                    return options.muted ? P : P.trigger('set', thingObject)
                }, get: function (thing, format) {
                    thing = thing || 'value'
                    if (STATE[thing] != null) {
                        return STATE[thing]
                    }
                    if (thing == 'valueSubmit') {
                        if (P._hidden) {
                            return P._hidden.value
                        }
                        thing = 'value'
                    }
                    if (thing == 'value') {
                        return ELEMENT.value
                    }
                    if (thing in P.component.item) {
                        if (typeof format == 'string') {
                            var thingValue = P.component.get(thing)
                            return thingValue ? PickerConstructor._.trigger(P.component.formats.toString, P.component, [format, thingValue]) : ''
                        }
                        return P.component.get(thing)
                    }
                }, on: function (thing, method, internal) {
                    var thingName, thingMethod, thingIsObject = $.isPlainObject(thing), thingObject = thingIsObject ? thing : {}
                    if (thing) {
                        if (!thingIsObject) {
                            thingObject[thing] = method
                        }
                        for (thingName in thingObject) {
                            thingMethod = thingObject[thingName]
                            if (internal) {
                                thingName = '_' + thingName
                            }
                            STATE.methods[thingName] = STATE.methods[thingName] || []
                            STATE.methods[thingName].push(thingMethod)
                        }
                    }
                    return P
                }, off: function () {
                    var i, thingName, names = arguments;
                    for (i = 0, namesCount = names.length; i < namesCount; i += 1) {
                        thingName = names[i]
                        if (thingName in STATE.methods) {
                            delete STATE.methods[thingName]
                        }
                    }
                    return P
                }, trigger: function (name, data) {
                    var _trigger = function (name) {
                        var methodList = STATE.methods[name]
                        if (methodList) {
                            methodList.map(function (method) {
                                PickerConstructor._.trigger(method, P, [data])
                            })
                        }
                    }
                    _trigger('_' + name)
                    _trigger(name)
                    return P
                }
            }

        function createWrappedComponent() {
            return PickerConstructor._.node('div', PickerConstructor._.node('div', PickerConstructor._.node('div', PickerConstructor._.node('div', P.component.nodes(STATE.open), CLASSES.box), CLASSES.wrap), CLASSES.frame), CLASSES.holder)
        }

        function prepareElement() {
            $ELEMENT.data(NAME, P).addClass(CLASSES.input).attr('tabindex', -1).val($ELEMENT.data('value') ? P.get('select', SETTINGS.format) : ELEMENT.value)
            if (!SETTINGS.editable) {
                $ELEMENT.on('focus.' + STATE.id + ' click.' + STATE.id, function (event) {
                    event.preventDefault()
                    P.$root[0].focus()
                }).on('keydown.' + STATE.id, handleKeydownEvent)
            }
            aria(ELEMENT, {haspopup: true, expanded: false, readonly: false, owns: ELEMENT.id + '_root'})
        }

        function prepareElementRoot() {
            P.$root.on({
                keydown: handleKeydownEvent, focusin: function (event) {
                    P.$root.removeClass(CLASSES.focused)
                    event.stopPropagation()
                }, 'mousedown click': function (event) {
                    var target = event.target
                    if (target != P.$root.children()[0]) {
                        event.stopPropagation()
                        if (event.type == 'mousedown' && !$(target).is('input, select, textarea, button, option')) {
                            event.preventDefault()
                            P.$root[0].focus()
                        }
                    }
                }
            }).on({
                focus: function () {
                    $ELEMENT.addClass(CLASSES.target)
                }, blur: function () {
                    $ELEMENT.removeClass(CLASSES.target)
                }
            }).on('focus.toOpen', handleFocusToOpenEvent).on('click', '[data-pick], [data-nav], [data-clear], [data-close]', function () {
                var $target = $(this), targetData = $target.data(), targetDisabled = $target.hasClass(CLASSES.navDisabled) || $target.hasClass(CLASSES.disabled), activeElement = getActiveElement()
                activeElement = activeElement && (activeElement.type || activeElement.href)
                if (targetDisabled || activeElement && !$.contains(P.$root[0], activeElement)) {
                    P.$root[0].focus()
                }
                if (!targetDisabled && targetData.nav) {
                    P.set('highlight', P.component.item.highlight, {nav: targetData.nav})
                } else if (!targetDisabled && 'pick' in targetData) {
                    P.set('select', targetData.pick)
                } else if (targetData.clear) {
                    P.clear().close(true)
                } else if (targetData.close) {
                    P.close(true)
                }
            })
            aria(P.$root[0], 'hidden', true)
        }

        function prepareElementHidden() {
            var name
            if (SETTINGS.hiddenName === true) {
                name = ELEMENT.name
                ELEMENT.name = ''
            } else {
                name = [typeof SETTINGS.hiddenPrefix == 'string' ? SETTINGS.hiddenPrefix : '', typeof SETTINGS.hiddenSuffix == 'string' ? SETTINGS.hiddenSuffix : '_submit']
                name = name[0] + ELEMENT.name + name[1]
            }
            P._hidden = $('<input ' + 'type=hidden ' + 'name="' + name + '"' + ($ELEMENT.data('value') || ELEMENT.value ? ' value="' + P.get('select', SETTINGS.formatSubmit) + '"' : '') + '>')[0]
            $ELEMENT.on('change.' + STATE.id, function () {
                P._hidden.value = ELEMENT.value ? P.get('select', SETTINGS.formatSubmit) : ''
            })
            if (SETTINGS.container) $(SETTINGS.container).append(P._hidden)
            else $ELEMENT.after(P._hidden)
        }

        function handleKeydownEvent(event) {
            var keycode = event.keyCode, isKeycodeDelete = /^(8|46)$/.test(keycode)
            if (keycode == 27) {
                P.close()
                return false
            }
            if (keycode == 32 || isKeycodeDelete || !STATE.open && P.component.key[keycode]) {
                event.preventDefault()
                event.stopPropagation()
                if (isKeycodeDelete) {
                    P.clear().close()
                } else {
                    P.open()
                }
            }
        }

        function handleFocusToOpenEvent(event) {
            event.stopPropagation()
            if (event.type == 'focus') {
                P.$root.addClass(CLASSES.focused)
            }
            P.open()
        }

        return new PickerInstance()
    }

    PickerConstructor.klasses = function (prefix) {
        prefix = prefix || 'picker'
        return {
            picker: prefix,
            opened: prefix + '--opened',
            focused: prefix + '--focused',
            input: prefix + '__input',
            active: prefix + '__input--active',
            target: prefix + '__input--target',
            holder: prefix + '__holder',
            frame: prefix + '__frame',
            wrap: prefix + '__wrap',
            box: prefix + '__box'
        }
    }
    function isUsingDefaultTheme(element) {
        var theme, prop = 'position'
        if (element.currentStyle) {
            theme = element.currentStyle[prop]
        } else if (window.getComputedStyle) {
            theme = getComputedStyle(element)[prop]
        }
        return theme == 'fixed'
    }

    function getScrollbarWidth() {
        if ($html.height() <= $window.height()) {
            return 0
        }
        var $outer = $('<div style="visibility:hidden;width:100px" />').appendTo('body')
        var widthWithoutScroll = $outer[0].offsetWidth
        $outer.css('overflow', 'scroll')
        var $inner = $('<div style="width:100%" />').appendTo($outer)
        var widthWithScroll = $inner[0].offsetWidth
        $outer.remove()
        return widthWithoutScroll - widthWithScroll
    }

    PickerConstructor._ = {
        group: function (groupObject) {
            var
                loopObjectScope, nodesList = '', counter = PickerConstructor._.trigger(groupObject.min, groupObject)
            for (; counter <= PickerConstructor._.trigger(groupObject.max, groupObject, [counter]); counter += groupObject.i) {
                loopObjectScope = PickerConstructor._.trigger(groupObject.item, groupObject, [counter])
                nodesList += PickerConstructor._.node(groupObject.node, loopObjectScope[0], loopObjectScope[1], loopObjectScope[2])
            }
            return nodesList
        }, node: function (wrapper, item, klass, attribute) {
            if (!item)return ''
            item = $.isArray(item) ? item.join('') : item
            klass = klass ? ' class="' + klass + '"' : ''
            attribute = attribute ? ' ' + attribute : ''
            return '<' + wrapper + klass + attribute + '>' + item + '</' + wrapper + '>'
        }, lead: function (number) {
            return (number < 10 ? '0' : '') + number
        }, trigger: function (callback, scope, args) {
            return typeof callback == 'function' ? callback.apply(scope, args || []) : callback
        }, digits: function (string) {
            return (/\d/).test(string[1]) ? 2 : 1
        }, isDate: function (value) {
            return {}.toString.call(value).indexOf('Date') > -1 && this.isInteger(value.getDate())
        }, isInteger: function (value) {
            return {}.toString.call(value).indexOf('Number') > -1 && value % 1 === 0
        }, ariaAttr: ariaAttr
    }
    PickerConstructor.extend = function (name, Component) {
        $.fn[name] = function (options, action) {
            var componentData = this.data(name)
            if (options == 'picker') {
                return componentData
            }
            if (componentData && typeof options == 'string') {
                return PickerConstructor._.trigger(componentData[options], componentData, [action])
            }
            return this.each(function () {
                var $this = $(this)
                if (!$this.data(name)) {
                    new PickerConstructor(this, name, Component, options)
                }
            })
        }
        $.fn[name].defaults = Component.defaults
    }
    function aria(element, attribute, value) {
        if ($.isPlainObject(attribute)) {
            for (var key in attribute) {
                ariaSet(element, key, attribute[key])
            }
        } else {
            ariaSet(element, attribute, value)
        }
    }

    function ariaSet(element, attribute, value) {
        element.setAttribute((attribute == 'role' ? '' : 'aria-') + attribute, value)
    }

    function ariaAttr(attribute, data) {
        if (!$.isPlainObject(attribute)) {
            attribute = {attribute: data}
        }
        data = ''
        for (var key in attribute) {
            var attr = (key == 'role' ? '' : 'aria-') + key, attrVal = attribute[key]
            data += attrVal == null ? '' : attr + '="' + attribute[key] + '"'
        }
        return data
    }

    function getActiveElement() {
        try {
            return document.activeElement
        } catch (err) {
        }
    }

    return PickerConstructor
}));
;(function (factory) {
    if (typeof define == 'function' && define.amd) define(['picker', 'jquery'], factory)
    else if (typeof exports == 'object') module.exports = factory(require('./picker.js'), require('jquery'))
    else factory(Picker, jQuery)
}(function (Picker, $) {
    var DAYS_IN_WEEK = 7, WEEKS_IN_CALENDAR = 6, _ = Picker._

    function DatePicker(picker, settings) {
        var calendar = this, element = picker.$node[0], elementValue = element.value, elementDataValue = picker.$node.data('value'), valueString = elementDataValue || elementValue, formatString = elementDataValue ? settings.formatSubmit : settings.format, isRTL = function () {
            return element.currentStyle ? element.currentStyle.direction == 'rtl' : getComputedStyle(picker.$root[0]).direction == 'rtl'
        }
        calendar.settings = settings
        calendar.$node = picker.$node
        calendar.queue = {
            min: 'measure create',
            max: 'measure create',
            now: 'now create',
            select: 'parse create validate',
            highlight: 'parse navigate create validate',
            view: 'parse create validate viewset',
            disable: 'deactivate',
            enable: 'activate'
        }
        calendar.item = {}
        calendar.item.clear = null
        calendar.item.disable = (settings.disable || []).slice(0)
        calendar.item.enable = -(function (collectionDisabled) {
            return collectionDisabled[0] === true ? collectionDisabled.shift() : -1
        })(calendar.item.disable)
        calendar.set('min', settings.min).set('max', settings.max).set('now')
        if (valueString) {
            calendar.set('select', valueString, {format: formatString})
        } else {
            calendar.set('select', null).set('highlight', calendar.item.now)
        }
        calendar.key = {
            40: 7, 38: -7, 39: function () {
                return isRTL() ? -1 : 1
            }, 37: function () {
                return isRTL() ? 1 : -1
            }, go: function (timeChange) {
                var highlightedObject = calendar.item.highlight, targetDate = new Date(highlightedObject.year, highlightedObject.month, highlightedObject.date + timeChange)
                calendar.set('highlight', targetDate, {interval: timeChange})
                this.render()
            }
        }
        picker.on('render', function () {
            picker.$root.find('.' + settings.klass.selectMonth).on('change', function () {
                var value = this.value
                if (value) {
                    picker.set('highlight', [picker.get('view').year, value, picker.get('highlight').date])
                    picker.$root.find('.' + settings.klass.selectMonth).trigger('focus')
                }
            })
            picker.$root.find('.' + settings.klass.selectYear).on('change', function () {
                var value = this.value
                if (value) {
                    picker.set('highlight', [value, picker.get('view').month, picker.get('highlight').date])
                    picker.$root.find('.' + settings.klass.selectYear).trigger('focus')
                }
            })
        }, 1).on('open', function () {
            var includeToday = ''
            if (calendar.disabled(calendar.get('now'))) {
                includeToday = ':not(.' + settings.klass.buttonToday + ')'
            }
            picker.$root.find('button' + includeToday + ', select').attr('disabled', false)
        }, 1).on('close', function () {
            picker.$root.find('button, select').attr('disabled', true)
        }, 1)
    }

    DatePicker.prototype.set = function (type, value, options) {
        var calendar = this, calendarItem = calendar.item
        if (value === null) {
            if (type == 'clear') type = 'select'
            calendarItem[type] = value
            return calendar
        }
        calendarItem[(type == 'enable' ? 'disable' : type == 'flip' ? 'enable' : type)] = calendar.queue[type].split(' ').map(function (method) {
            value = calendar[method](type, value, options)
            return value
        }).pop()
        if (type == 'select') {
            calendar.set('highlight', calendarItem.select, options)
        } else if (type == 'highlight') {
            calendar.set('view', calendarItem.highlight, options)
        } else if (type.match(/^(flip|min|max|disable|enable)$/)) {
            if (calendarItem.select && calendar.disabled(calendarItem.select)) {
                calendar.set('select', calendarItem.select, options)
            }
            if (calendarItem.highlight && calendar.disabled(calendarItem.highlight)) {
                calendar.set('highlight', calendarItem.highlight, options)
            }
        }
        return calendar
    }
    DatePicker.prototype.get = function (type) {
        return this.item[type]
    }
    DatePicker.prototype.create = function (type, value, options) {
        var isInfiniteValue, calendar = this
        value = value === undefined ? type : value
        if (value == -Infinity || value == Infinity) {
            isInfiniteValue = value
        } else if ($.isPlainObject(value) && _.isInteger(value.pick)) {
            value = value.obj
        } else if ($.isArray(value)) {
            value = new Date(value[0], value[1], value[2])
            value = _.isDate(value) ? value : calendar.create().obj
        } else if (_.isInteger(value) || _.isDate(value)) {
            value = calendar.normalize(new Date(value), options)
        } else {
            value = calendar.now(type, value, options)
        }
        return {
            year: isInfiniteValue || value.getFullYear(),
            month: isInfiniteValue || value.getMonth(),
            date: isInfiniteValue || value.getDate(),
            day: isInfiniteValue || value.getDay(),
            obj: isInfiniteValue || value,
            pick: isInfiniteValue || value.getTime()
        }
    }
    DatePicker.prototype.createRange = function (from, to) {
        var calendar = this, createDate = function (date) {
            if (date === true || $.isArray(date) || _.isDate(date)) {
                return calendar.create(date)
            }
            return date
        }
        if (!_.isInteger(from)) {
            from = createDate(from)
        }
        if (!_.isInteger(to)) {
            to = createDate(to)
        }
        if (_.isInteger(from) && $.isPlainObject(to)) {
            from = [to.year, to.month, to.date + from];
        } else if (_.isInteger(to) && $.isPlainObject(from)) {
            to = [from.year, from.month, from.date + to];
        }
        return {from: createDate(from), to: createDate(to)}
    }
    DatePicker.prototype.withinRange = function (range, dateUnit) {
        range = this.createRange(range.from, range.to)
        return dateUnit.pick >= range.from.pick && dateUnit.pick <= range.to.pick
    }
    DatePicker.prototype.overlapRanges = function (one, two) {
        var calendar = this
        one = calendar.createRange(one.from, one.to)
        two = calendar.createRange(two.from, two.to)
        return calendar.withinRange(one, two.from) || calendar.withinRange(one, two.to) || calendar.withinRange(two, one.from) || calendar.withinRange(two, one.to)
    }
    DatePicker.prototype.now = function (type, value, options) {
        value = new Date()
        if (options && options.rel) {
            value.setDate(value.getDate() + options.rel)
        }
        return this.normalize(value, options)
    }
    DatePicker.prototype.navigate = function (type, value, options) {
        var targetDateObject, targetYear, targetMonth, targetDate, isTargetArray = $.isArray(value), isTargetObject = $.isPlainObject(value), viewsetObject = this.item.view
        if (isTargetArray || isTargetObject) {
            if (isTargetObject) {
                targetYear = value.year
                targetMonth = value.month
                targetDate = value.date
            } else {
                targetYear = +value[0]
                targetMonth = +value[1]
                targetDate = +value[2]
            }
            if (options && options.nav && viewsetObject && viewsetObject.month !== targetMonth) {
                targetYear = viewsetObject.year
                targetMonth = viewsetObject.month
            }
            targetDateObject = new Date(targetYear, targetMonth + (options && options.nav ? options.nav : 0), 1)
            targetYear = targetDateObject.getFullYear()
            targetMonth = targetDateObject.getMonth()
            while (new Date(targetYear, targetMonth, targetDate).getMonth() !== targetMonth) {
                targetDate -= 1
            }
            value = [targetYear, targetMonth, targetDate]
        }
        return value
    }
    DatePicker.prototype.normalize = function (value) {
        value.setHours(0, 0, 0, 0)
        return value
    }
    DatePicker.prototype.measure = function (type, value) {
        var calendar = this
        if (!value) {
            value = type == 'min' ? -Infinity : Infinity
        } else if (typeof value == 'string') {
            value = calendar.parse(type, value)
        } else if (_.isInteger(value)) {
            value = calendar.now(type, value, {rel: value})
        }
        return value
    }
    DatePicker.prototype.viewset = function (type, dateObject) {
        return this.create([dateObject.year, dateObject.month, 1])
    }
    DatePicker.prototype.validate = function (type, dateObject, options) {
        var calendar = this, originalDateObject = dateObject, interval = options && options.interval ? options.interval : 1, isFlippedBase = calendar.item.enable === -1, hasEnabledBeforeTarget, hasEnabledAfterTarget, minLimitObject = calendar.item.min, maxLimitObject = calendar.item.max, reachedMin, reachedMax, hasEnabledWeekdays = isFlippedBase && calendar.item.disable.filter(function (value) {
                if ($.isArray(value)) {
                    var dateTime = calendar.create(value).pick
                    if (dateTime < dateObject.pick) hasEnabledBeforeTarget = true
                    else if (dateTime > dateObject.pick) hasEnabledAfterTarget = true
                }
                return _.isInteger(value)
            }).length
        if (!options || !options.nav)if ((!isFlippedBase && calendar.disabled(dateObject)) || (isFlippedBase && calendar.disabled(dateObject) && (hasEnabledWeekdays || hasEnabledBeforeTarget || hasEnabledAfterTarget)) || (!isFlippedBase && (dateObject.pick <= minLimitObject.pick || dateObject.pick >= maxLimitObject.pick))) {
            if (isFlippedBase && !hasEnabledWeekdays && ((!hasEnabledAfterTarget && interval > 0) || (!hasEnabledBeforeTarget && interval < 0))) {
                interval *= -1
            }
            while (calendar.disabled(dateObject)) {
                if (Math.abs(interval) > 1 && (dateObject.month < originalDateObject.month || dateObject.month > originalDateObject.month)) {
                    dateObject = originalDateObject
                    interval = interval > 0 ? 1 : -1
                }
                if (dateObject.pick <= minLimitObject.pick) {
                    reachedMin = true
                    interval = 1
                    dateObject = calendar.create([minLimitObject.year, minLimitObject.month, minLimitObject.date + (dateObject.pick === minLimitObject.pick ? 0 : -1)])
                } else if (dateObject.pick >= maxLimitObject.pick) {
                    reachedMax = true
                    interval = -1
                    dateObject = calendar.create([maxLimitObject.year, maxLimitObject.month, maxLimitObject.date + (dateObject.pick === maxLimitObject.pick ? 0 : 1)])
                }
                if (reachedMin && reachedMax) {
                    break
                }
                dateObject = calendar.create([dateObject.year, dateObject.month, dateObject.date + interval])
            }
        }
        return dateObject
    }
    DatePicker.prototype.disabled = function (dateToVerify) {
        var
            calendar = this, isDisabledMatch = calendar.item.disable.filter(function (dateToDisable) {
                if (_.isInteger(dateToDisable)) {
                    return dateToVerify.day === (calendar.settings.firstDay ? dateToDisable : dateToDisable - 1) % 7
                }
                if ($.isArray(dateToDisable) || _.isDate(dateToDisable)) {
                    return dateToVerify.pick === calendar.create(dateToDisable).pick
                }
                if ($.isPlainObject(dateToDisable)) {
                    return calendar.withinRange(dateToDisable, dateToVerify)
                }
            })
        isDisabledMatch = isDisabledMatch.length && !isDisabledMatch.filter(function (dateToDisable) {
                return $.isArray(dateToDisable) && dateToDisable[3] == 'inverted' || $.isPlainObject(dateToDisable) && dateToDisable.inverted
            }).length
        return calendar.item.enable === -1 ? !isDisabledMatch : isDisabledMatch || dateToVerify.pick < calendar.item.min.pick || dateToVerify.pick > calendar.item.max.pick
    }
    DatePicker.prototype.parse = function (type, value, options) {
        var calendar = this, parsingObject = {}
        if (!value || typeof value != 'string') {
            return value
        }
        if (!(options && options.format)) {
            options = options || {}
            options.format = calendar.settings.format
        }
        calendar.formats.toArray(options.format).map(function (label) {
            var
                formattingLabel = calendar.formats[label], formatLength = formattingLabel ? _.trigger(formattingLabel, calendar, [value, parsingObject]) : label.replace(/^!/, '').length
            if (formattingLabel) {
                parsingObject[label] = value.substr(0, formatLength)
            }
            value = value.substr(formatLength)
        })
        return [parsingObject.yyyy || parsingObject.yy, +(parsingObject.mm || parsingObject.m) - 1, parsingObject.dd || parsingObject.d]
    }
    DatePicker.prototype.formats = (function () {
        function getWordLengthFromCollection(string, collection, dateObject) {
            var word = string.match(/\w+/)[0]
            if (!dateObject.mm && !dateObject.m) {
                dateObject.m = collection.indexOf(word) + 1
            }
            return word.length
        }

        function getFirstWordLength(string) {
            return string.match(/\w+/)[0].length
        }

        return {
            d: function (string, dateObject) {
                return string ? _.digits(string) : dateObject.date
            }, dd: function (string, dateObject) {
                return string ? 2 : _.lead(dateObject.date)
            }, ddd: function (string, dateObject) {
                return string ? getFirstWordLength(string) : this.settings.weekdaysShort[dateObject.day]
            }, dddd: function (string, dateObject) {
                return string ? getFirstWordLength(string) : this.settings.weekdaysFull[dateObject.day]
            }, m: function (string, dateObject) {
                return string ? _.digits(string) : dateObject.month + 1
            }, mm: function (string, dateObject) {
                return string ? 2 : _.lead(dateObject.month + 1)
            }, mmm: function (string, dateObject) {
                var collection = this.settings.monthsShort
                return string ? getWordLengthFromCollection(string, collection, dateObject) : collection[dateObject.month]
            }, mmmm: function (string, dateObject) {
                var collection = this.settings.monthsFull
                return string ? getWordLengthFromCollection(string, collection, dateObject) : collection[dateObject.month]
            }, yy: function (string, dateObject) {
                return string ? 2 : ('' + dateObject.year).slice(2)
            }, yyyy: function (string, dateObject) {
                return string ? 4 : dateObject.year
            }, toArray: function (formatString) {
                return formatString.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
            }, toString: function (formatString, itemObject) {
                var calendar = this
                return calendar.formats.toArray(formatString).map(function (label) {
                    return _.trigger(calendar.formats[label], calendar, [0, itemObject]) || label.replace(/^!/, '')
                }).join('')
            }
        }
    })()
    DatePicker.prototype.isDateExact = function (one, two) {
        var calendar = this
        if ((_.isInteger(one) && _.isInteger(two)) || (typeof one == 'boolean' && typeof two == 'boolean')) {
            return one === two
        }
        if ((_.isDate(one) || $.isArray(one)) && (_.isDate(two) || $.isArray(two))) {
            return calendar.create(one).pick === calendar.create(two).pick
        }
        if ($.isPlainObject(one) && $.isPlainObject(two)) {
            return calendar.isDateExact(one.from, two.from) && calendar.isDateExact(one.to, two.to)
        }
        return false
    }
    DatePicker.prototype.isDateOverlap = function (one, two) {
        var calendar = this, firstDay = calendar.settings.firstDay ? 1 : 0
        if (_.isInteger(one) && (_.isDate(two) || $.isArray(two))) {
            one = one % 7 + firstDay
            return one === calendar.create(two).day + 1
        }
        if (_.isInteger(two) && (_.isDate(one) || $.isArray(one))) {
            two = two % 7 + firstDay
            return two === calendar.create(one).day + 1
        }
        if ($.isPlainObject(one) && $.isPlainObject(two)) {
            return calendar.overlapRanges(one, two)
        }
        return false
    }
    DatePicker.prototype.flipEnable = function (val) {
        var itemObject = this.item
        itemObject.enable = val || (itemObject.enable == -1 ? 1 : -1)
    }
    DatePicker.prototype.deactivate = function (type, datesToDisable) {
        var calendar = this, disabledItems = calendar.item.disable.slice(0)
        if (datesToDisable == 'flip') {
            calendar.flipEnable()
        } else if (datesToDisable === false) {
            calendar.flipEnable(1)
            disabledItems = []
        } else if (datesToDisable === true) {
            calendar.flipEnable(-1)
            disabledItems = []
        } else {
            datesToDisable.map(function (unitToDisable) {
                var matchFound
                for (var index = 0; index < disabledItems.length; index += 1) {
                    if (calendar.isDateExact(unitToDisable, disabledItems[index])) {
                        matchFound = true
                        break
                    }
                }
                if (!matchFound) {
                    if (_.isInteger(unitToDisable) || _.isDate(unitToDisable) || $.isArray(unitToDisable) || ($.isPlainObject(unitToDisable) && unitToDisable.from && unitToDisable.to)) {
                        disabledItems.push(unitToDisable)
                    }
                }
            })
        }
        return disabledItems
    }
    DatePicker.prototype.activate = function (type, datesToEnable) {
        var calendar = this, disabledItems = calendar.item.disable, disabledItemsCount = disabledItems.length
        if (datesToEnable == 'flip') {
            calendar.flipEnable()
        } else if (datesToEnable === true) {
            calendar.flipEnable(1)
            disabledItems = []
        } else if (datesToEnable === false) {
            calendar.flipEnable(-1)
            disabledItems = []
        } else {
            datesToEnable.map(function (unitToEnable) {
                var matchFound, disabledUnit, index, isExactRange
                for (index = 0; index < disabledItemsCount; index += 1) {
                    disabledUnit = disabledItems[index]
                    if (calendar.isDateExact(disabledUnit, unitToEnable)) {
                        matchFound = disabledItems[index] = null
                        isExactRange = true
                        break
                    } else if (calendar.isDateOverlap(disabledUnit, unitToEnable)) {
                        if ($.isPlainObject(unitToEnable)) {
                            unitToEnable.inverted = true
                            matchFound = unitToEnable
                        } else if ($.isArray(unitToEnable)) {
                            matchFound = unitToEnable
                            if (!matchFound[3]) matchFound.push('inverted')
                        } else if (_.isDate(unitToEnable)) {
                            matchFound = [unitToEnable.getFullYear(), unitToEnable.getMonth(), unitToEnable.getDate(), 'inverted']
                        }
                        break
                    }
                }
                if (matchFound)for (index = 0; index < disabledItemsCount; index += 1) {
                    if (calendar.isDateExact(disabledItems[index], unitToEnable)) {
                        disabledItems[index] = null
                        break
                    }
                }
                if (isExactRange)for (index = 0; index < disabledItemsCount; index += 1) {
                    if (calendar.isDateOverlap(disabledItems[index], unitToEnable)) {
                        disabledItems[index] = null
                        break
                    }
                }
                if (matchFound) {
                    disabledItems.push(matchFound)
                }
            })
        }
        return disabledItems.filter(function (val) {
            return val != null
        })
    }
    DatePicker.prototype.nodes = function (isOpen) {
        var
            calendar = this, settings = calendar.settings, calendarItem = calendar.item, nowObject = calendarItem.now, selectedObject = calendarItem.select, highlightedObject = calendarItem.highlight, viewsetObject = calendarItem.view, disabledCollection = calendarItem.disable, minLimitObject = calendarItem.min, maxLimitObject = calendarItem.max, tableHead = (function (collection, fullCollection) {
                if (settings.firstDay) {
                    collection.push(collection.shift())
                    fullCollection.push(fullCollection.shift())
                }
                return _.node('thead', _.node('tr', _.group({
                    min: 0,
                    max: DAYS_IN_WEEK - 1,
                    i: 1,
                    node: 'th',
                    item: function (counter) {
                        return [collection[counter], settings.klass.weekdays, 'scope=col title="' + fullCollection[counter] + '"']
                    }
                })))
            })((settings.showWeekdaysFull ? settings.weekdaysFull : settings.weekdaysLetter).slice(0), settings.weekdaysFull.slice(0)), createMonthNav = function (next) {
                return _.node('div', ' ', settings.klass['nav' + (next ? 'Next' : 'Prev')] + ((next && viewsetObject.year >= maxLimitObject.year && viewsetObject.month >= maxLimitObject.month) || (!next && viewsetObject.year <= minLimitObject.year && viewsetObject.month <= minLimitObject.month) ? ' ' + settings.klass.navDisabled : ''), 'data-nav=' + (next || -1) + ' ' + _.ariaAttr({
                        role: 'button',
                        controls: calendar.$node[0].id + '_table'
                    }) + ' ' + 'title="' + (next ? settings.labelMonthNext : settings.labelMonthPrev) + '"')
            }, createMonthLabel = function (override) {
                var monthsCollection = settings.showMonthsShort ? settings.monthsShort : settings.monthsFull
                if (override == "short_months") {
                    monthsCollection = settings.monthsShort;
                }
                if (settings.selectMonths && override == undefined) {
                    return _.node('select', _.group({
                        min: 0, max: 11, i: 1, node: 'option', item: function (loopedMonth) {
                            return [monthsCollection[loopedMonth], 0, 'value=' + loopedMonth + (viewsetObject.month == loopedMonth ? ' selected' : '') + (((viewsetObject.year == minLimitObject.year && loopedMonth < minLimitObject.month) || (viewsetObject.year == maxLimitObject.year && loopedMonth > maxLimitObject.month)) ? ' disabled' : '')]
                        }
                    }), settings.klass.selectMonth + ' browser-default', (isOpen ? '' : 'disabled') + ' ' + _.ariaAttr({controls: calendar.$node[0].id + '_table'}) + ' ' + 'title="' + settings.labelMonthSelect + '"')
                }
                if (override == "short_months")if (selectedObject != null)return _.node('div', monthsCollection[selectedObject.month]); else return _.node('div', monthsCollection[viewsetObject.month]);
                return _.node('div', monthsCollection[viewsetObject.month], settings.klass.month)
            }, createYearLabel = function (override) {
                var focusedYear = viewsetObject.year, numberYears = settings.selectYears === true ? 5 : ~~(settings.selectYears / 2)
                if (numberYears) {
                    var
                        minYear = minLimitObject.year, maxYear = maxLimitObject.year, lowestYear = focusedYear - numberYears, highestYear = focusedYear + numberYears
                    if (minYear > lowestYear) {
                        highestYear += minYear - lowestYear
                        lowestYear = minYear
                    }
                    if (maxYear < highestYear) {
                        var availableYears = lowestYear - minYear, neededYears = highestYear - maxYear
                        lowestYear -= availableYears > neededYears ? neededYears : availableYears
                        highestYear = maxYear
                    }
                    if (settings.selectYears && override == undefined) {
                        return _.node('select', _.group({
                            min: lowestYear,
                            max: highestYear,
                            i: 1,
                            node: 'option',
                            item: function (loopedYear) {
                                return [loopedYear, 0, 'value=' + loopedYear + (focusedYear == loopedYear ? ' selected' : '')]
                            }
                        }), settings.klass.selectYear + ' browser-default', (isOpen ? '' : 'disabled') + ' ' + _.ariaAttr({controls: calendar.$node[0].id + '_table'}) + ' ' + 'title="' + settings.labelYearSelect + '"')
                    }
                }
                if (override == "raw")return _.node('div', focusedYear)
                return _.node('div', focusedYear, settings.klass.year)
            }
        createDayLabel = function () {
            if (selectedObject != null)return _.node('div', selectedObject.date)
            else return _.node('div', nowObject.date)
        }
        createWeekdayLabel = function () {
            var display_day;
            if (selectedObject != null) display_day = selectedObject.day; else
                display_day = nowObject.day;
            var weekday = settings.weekdaysFull[display_day]
            return weekday
        }
        return _.node('div', _.node('div', createWeekdayLabel(), "picker__weekday-display") + _.node('div', createMonthLabel("short_months"), settings.klass.month_display) + _.node('div', createDayLabel(), settings.klass.day_display) + _.node('div', createYearLabel("raw"), settings.klass.year_display), settings.klass.date_display) + _.node('div', _.node('div', (settings.selectYears ? createMonthLabel() + createYearLabel() : createMonthLabel() + createYearLabel()) + createMonthNav() + createMonthNav(1), settings.klass.header) + _.node('table', tableHead + _.node('tbody', _.group({
                        min: 0, max: WEEKS_IN_CALENDAR - 1, i: 1, node: 'tr', item: function (rowCounter) {
                            var shiftDateBy = settings.firstDay && calendar.create([viewsetObject.year, viewsetObject.month, 1]).day === 0 ? -7 : 0
                            return [_.group({
                                min: DAYS_IN_WEEK * rowCounter - viewsetObject.day + shiftDateBy + 1, max: function () {
                                    return this.min + DAYS_IN_WEEK - 1
                                }, i: 1, node: 'td', item: function (targetDate) {
                                    targetDate = calendar.create([viewsetObject.year, viewsetObject.month, targetDate + (settings.firstDay ? 1 : 0)])
                                    var isSelected = selectedObject && selectedObject.pick == targetDate.pick, isHighlighted = highlightedObject && highlightedObject.pick == targetDate.pick, isDisabled = disabledCollection && calendar.disabled(targetDate) || targetDate.pick < minLimitObject.pick || targetDate.pick > maxLimitObject.pick, formattedDate = _.trigger(calendar.formats.toString, calendar, [settings.format, targetDate])
                                    return [_.node('div', targetDate.date, (function (klasses) {
                                        klasses.push(viewsetObject.month == targetDate.month ? settings.klass.infocus : settings.klass.outfocus)
                                        if (nowObject.pick == targetDate.pick) {
                                            klasses.push(settings.klass.now)
                                        }
                                        if (isSelected) {
                                            klasses.push(settings.klass.selected)
                                        }
                                        if (isHighlighted) {
                                            klasses.push(settings.klass.highlighted)
                                        }
                                        if (isDisabled) {
                                            klasses.push(settings.klass.disabled)
                                        }
                                        return klasses.join(' ')
                                    })([settings.klass.day]), 'data-pick=' + targetDate.pick + ' ' + _.ariaAttr({
                                            role: 'gridcell',
                                            label: formattedDate,
                                            selected: isSelected && calendar.$node.val() === formattedDate ? true : null,
                                            activedescendant: isHighlighted ? true : null,
                                            disabled: isDisabled ? true : null
                                        })), '', _.ariaAttr({role: 'presentation'})]
                                }
                            })]
                        }
                    })), settings.klass.table, 'id="' + calendar.$node[0].id + '_table' + '" ' + _.ariaAttr({
                        role: 'grid',
                        controls: calendar.$node[0].id,
                        readonly: true
                    })), settings.klass.calendar_container) + _.node('div', _.node('button', settings.today, "btn-flat picker__today", 'type=button data-pick=' + nowObject.pick + (isOpen && !calendar.disabled(nowObject) ? '' : ' disabled') + ' ' + _.ariaAttr({controls: calendar.$node[0].id})) + _.node('button', settings.clear, "btn-flat picker__clear", 'type=button data-clear=1' + (isOpen ? '' : ' disabled') + ' ' + _.ariaAttr({controls: calendar.$node[0].id})) + _.node('button', settings.close, "btn-flat picker__close", 'type=button data-close=true ' + (isOpen ? '' : ' disabled') + ' ' + _.ariaAttr({controls: calendar.$node[0].id})), settings.klass.footer)
    }
    DatePicker.defaults = (function (prefix) {
        return {
            labelMonthNext: 'Next month',
            labelMonthPrev: 'Previous month',
            labelMonthSelect: 'Select a month',
            labelYearSelect: 'Select a year',
            monthsFull: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            weekdaysFull: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            weekdaysLetter: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            today: 'Today',
            clear: 'Clear',
            close: 'Close',
            format: 'd mmmm, yyyy',
            klass: {
                table: prefix + 'table',
                header: prefix + 'header',
                date_display: prefix + 'date-display',
                day_display: prefix + 'day-display',
                month_display: prefix + 'month-display',
                year_display: prefix + 'year-display',
                calendar_container: prefix + 'calendar-container',
                navPrev: prefix + 'nav--prev',
                navNext: prefix + 'nav--next',
                navDisabled: prefix + 'nav--disabled',
                month: prefix + 'month',
                year: prefix + 'year',
                selectMonth: prefix + 'select--month',
                selectYear: prefix + 'select--year',
                weekdays: prefix + 'weekday',
                day: prefix + 'day',
                disabled: prefix + 'day--disabled',
                selected: prefix + 'day--selected',
                highlighted: prefix + 'day--highlighted',
                now: prefix + 'day--today',
                infocus: prefix + 'day--infocus',
                outfocus: prefix + 'day--outfocus',
                footer: prefix + 'footer',
                buttonClear: prefix + 'button--clear',
                buttonToday: prefix + 'button--today',
                buttonClose: prefix + 'button--close'
            }
        }
    })(Picker.klasses().picker + '__')
    Picker.extend('pickadate', DatePicker)
}));
;(function ($) {
    $.fn.characterCounter = function () {
        return this.each(function () {
            var itHasLengthAttribute = $(this).attr('length') !== undefined;
            if (itHasLengthAttribute) {
                $(this).on('input', updateCounter);
                $(this).on('focus', updateCounter);
                $(this).on('blur', removeCounterElement);
                addCounterElement($(this));
            }
        });
    };
    function updateCounter() {
        var maxLength = +$(this).attr('length'), actualLength = +$(this).val().length, isValidLength = actualLength <= maxLength;
        $(this).parent().find('span[class="character-counter"]').html(actualLength + '/' + maxLength);
        addInputStyle(isValidLength, $(this));
    }

    function addCounterElement($input) {
        var $counterElement = $('<span/>').addClass('character-counter').css('float', 'right').css('font-size', '12px').css('height', 1);
        $input.parent().append($counterElement);
    }

    function removeCounterElement() {
        $(this).parent().find('span[class="character-counter"]').html('');
    }

    function addInputStyle(isValidLength, $input) {
        var inputHasInvalidClass = $input.hasClass('invalid');
        if (isValidLength && inputHasInvalidClass) {
            $input.removeClass('invalid');
        } else if (!isValidLength && !inputHasInvalidClass) {
            $input.removeClass('valid');
            $input.addClass('invalid');
        }
    }

    $(document).ready(function () {
        $('input, textarea').characterCounter();
    });
}(jQuery));
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        root.lightbox = factory(root.jQuery);
    }
}(this, function ($) {
    function Lightbox(options) {
        this.album = [];
        this.currentImageIndex = void 0;
        this.init();
        this.options = $.extend({}, this.constructor.defaults);
        this.option(options);
    }

    Lightbox.defaults = {
        albumLabel: 'Фото %1 из %2',
        alwaysShowNavOnTouchDevices: false,
        fadeDuration: 500,
        fitImagesInViewport: true,
        positionFromTop: 50,
        resizeDuration: 700,
        showImageNumberLabel: true,
        wrapAround: false
    };
    Lightbox.prototype.option = function (options) {
        $.extend(this.options, options);
    };
    Lightbox.prototype.imageCountLabel = function (currentImageNum, totalImages) {
        return this.options.albumLabel.replace(/%1/g, currentImageNum).replace(/%2/g, totalImages);
    };
    Lightbox.prototype.init = function () {
        this.enable();
        this.build();
    };
    Lightbox.prototype.enable = function () {
        var self = this;
        $('body').on('click', 'a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]', function (event) {
            self.start($(event.currentTarget));
            return false;
        });
    };
    Lightbox.prototype.build = function () {
        var self = this;
        $('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo($('body'));
        this.$lightbox = $('#lightbox');
        this.$overlay = $('#lightboxOverlay');
        this.$outerContainer = this.$lightbox.find('.lb-outerContainer');
        this.$container = this.$lightbox.find('.lb-container');
        this.containerTopPadding = parseInt(this.$container.css('padding-top'), 10);
        this.containerRightPadding = parseInt(this.$container.css('padding-right'), 10);
        this.containerBottomPadding = parseInt(this.$container.css('padding-bottom'), 10);
        this.containerLeftPadding = parseInt(this.$container.css('padding-left'), 10);
        this.$overlay.hide().on('click', function () {
            self.end();
            return false;
        });
        this.$lightbox.hide().on('click', function (evnt) {
            if ($(event.target).attr('id') === 'lightbox') {
                self.end();
            }
            return false;
        });
        this.$outerContainer.on('click', function (event) {
            if ($(event.target).attr('id') === 'lightbox') {
                self.end();
            }
            return false;
        });
        this.$lightbox.find('.lb-prev').on('click', function () {
            if (self.currentImageIndex === 0) {
                self.changeImage(self.album.length - 1);
            } else {
                self.changeImage(self.currentImageIndex - 1);
            }
            return false;
        });
        this.$lightbox.find('.lb-next').on('click', function () {
            if (self.currentImageIndex === self.album.length - 1) {
                self.changeImage(0);
            } else {
                self.changeImage(self.currentImageIndex + 1);
            }
            return false;
        });
        this.$lightbox.find('.lb-loader, .lb-close').on('click', function () {
            self.end();
            return false;
        });
    };
    Lightbox.prototype.start = function ($link) {
        var self = this;
        var $window = $(window);
        $window.on('resize', $.proxy(this.sizeOverlay, this));
        $('select, object, embed').css({visibility: 'hidden'});
        this.sizeOverlay();
        this.album = [];
        var imageNumber = 0;

        function addToAlbum($link) {
            self.album.push({link: $link.attr('href'), title: $link.attr('data-title') || $link.attr('title')});
        }

        var dataLightboxValue = $link.attr('data-lightbox');
        var $links;
        if (dataLightboxValue) {
            $links = $($link.prop('tagName') + '[data-lightbox="' + dataLightboxValue + '"]');
            for (var i = 0; i < $links.length; i = ++i) {
                addToAlbum($($links[i]));
                if ($links[i] === $link[0]) {
                    imageNumber = i;
                }
            }
        } else {
            if ($link.attr('rel') === 'lightbox') {
                addToAlbum($link);
            } else {
                $links = $($link.prop('tagName') + '[rel="' + $link.attr('rel') + '"]');
                for (var j = 0; j < $links.length; j = ++j) {
                    addToAlbum($($links[j]));
                    if ($links[j] === $link[0]) {
                        imageNumber = j;
                    }
                }
            }
        }
        var top = $window.scrollTop() + this.options.positionFromTop;
        var left = $window.scrollLeft();
        this.$lightbox.css({top: top + 'px', left: left + 'px'}).fadeIn(this.options.fadeDuration);
        this.changeImage(imageNumber);
    };
    Lightbox.prototype.changeImage = function (imageNumber) {
        var self = this;
        this.disableKeyboardNav();
        var $image = this.$lightbox.find('.lb-image');
        this.$overlay.fadeIn(this.options.fadeDuration);
        $('.lb-loader').fadeIn('slow');
        this.$lightbox.find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption').hide();
        this.$outerContainer.addClass('animating');
        var preloader = new Image();
        preloader.onload = function () {
            var $preloader;
            var imageHeight;
            var imageWidth;
            var maxImageHeight;
            var maxImageWidth;
            var windowHeight;
            var windowWidth;
            $image.attr('src', self.album[imageNumber].link);
            $preloader = $(preloader);
            $image.width(preloader.width);
            $image.height(preloader.height);
            if (self.options.fitImagesInViewport) {
                windowWidth = $(window).width();
                windowHeight = $(window).height();
                maxImageWidth = windowWidth - self.containerLeftPadding - self.containerRightPadding - 20;
                maxImageHeight = windowHeight - self.containerTopPadding - self.containerBottomPadding - 120;
                if (self.options.maxWidth && self.options.maxWidth < maxImageWidth) {
                    maxImageWidth = self.options.maxWidth;
                }
                if (self.options.maxHeight && self.options.maxHeight < maxImageWidth) {
                    maxImageHeight = self.options.maxHeight;
                }
                if ((preloader.width > maxImageWidth) || (preloader.height > maxImageHeight)) {
                    if ((preloader.width / maxImageWidth) > (preloader.height / maxImageHeight)) {
                        imageWidth = maxImageWidth;
                        imageHeight = parseInt(preloader.height / (preloader.width / imageWidth), 10);
                        $image.width(imageWidth);
                        $image.height(imageHeight);
                    } else {
                        imageHeight = maxImageHeight;
                        imageWidth = parseInt(preloader.width / (preloader.height / imageHeight), 10);
                        $image.width(imageWidth);
                        $image.height(imageHeight);
                    }
                }
            }
            self.sizeContainer($image.width(), $image.height());
        };
        preloader.src = this.album[imageNumber].link;
        this.currentImageIndex = imageNumber;
    };
    Lightbox.prototype.sizeOverlay = function () {
        this.$overlay.width($(window).width()).height($(document).height());
    };
    Lightbox.prototype.sizeContainer = function (imageWidth, imageHeight) {
        var self = this;
        var oldWidth = this.$outerContainer.outerWidth();
        var oldHeight = this.$outerContainer.outerHeight();
        var newWidth = imageWidth + this.containerLeftPadding + this.containerRightPadding;
        var newHeight = imageHeight + this.containerTopPadding + this.containerBottomPadding;

        function postResize() {
            self.$lightbox.find('.lb-dataContainer').width(newWidth);
            self.$lightbox.find('.lb-prevLink').height(newHeight);
            self.$lightbox.find('.lb-nextLink').height(newHeight);
            self.showImage();
        }

        if (oldWidth !== newWidth || oldHeight !== newHeight) {
            this.$outerContainer.animate({
                width: newWidth,
                height: newHeight
            }, this.options.resizeDuration, 'swing', function () {
                postResize();
            });
        } else {
            postResize();
        }
    };
    Lightbox.prototype.showImage = function () {
        this.$lightbox.find('.lb-loader').stop(true).hide();
        this.$lightbox.find('.lb-image').fadeIn('slow');
        this.updateNav();
        this.updateDetails();
        this.preloadNeighboringImages();
        this.enableKeyboardNav();
    };
    Lightbox.prototype.updateNav = function () {
        var alwaysShowNav = false;
        try {
            document.createEvent('TouchEvent');
            alwaysShowNav = (this.options.alwaysShowNavOnTouchDevices) ? true : false;
        } catch (e) {
        }
        this.$lightbox.find('.lb-nav').show();
        if (this.album.length > 1) {
            if (this.options.wrapAround) {
                if (alwaysShowNav) {
                    this.$lightbox.find('.lb-prev, .lb-next').css('opacity', '1');
                }
                this.$lightbox.find('.lb-prev, .lb-next').show();
            } else {
                if (this.currentImageIndex > 0) {
                    this.$lightbox.find('.lb-prev').show();
                    if (alwaysShowNav) {
                        this.$lightbox.find('.lb-prev').css('opacity', '1');
                    }
                }
                if (this.currentImageIndex < this.album.length - 1) {
                    this.$lightbox.find('.lb-next').show();
                    if (alwaysShowNav) {
                        this.$lightbox.find('.lb-next').css('opacity', '1');
                    }
                }
            }
        }
    };
    Lightbox.prototype.updateDetails = function () {
        var self = this;
        if (typeof this.album[this.currentImageIndex].title !== 'undefined' && this.album[this.currentImageIndex].title !== '') {
            this.$lightbox.find('.lb-caption').html(this.album[this.currentImageIndex].title).fadeIn('fast').find('a').on('click', function (event) {
                if ($(this).attr('target') !== undefined) {
                    window.open($(this).attr('href'), $(this).attr('target'));
                } else {
                    location.href = $(this).attr('href');
                }
            });
        }
        if (this.album.length > 1 && this.options.showImageNumberLabel) {
            var labelText = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
            this.$lightbox.find('.lb-number').text(labelText).fadeIn('fast');
        } else {
            this.$lightbox.find('.lb-number').hide();
        }
        this.$outerContainer.removeClass('animating');
        this.$lightbox.find('.lb-dataContainer').fadeIn(this.options.resizeDuration, function () {
            return self.sizeOverlay();
        });
    };
    Lightbox.prototype.preloadNeighboringImages = function () {
        if (this.album.length > this.currentImageIndex + 1) {
            var preloadNext = new Image();
            preloadNext.src = this.album[this.currentImageIndex + 1].link;
        }
        if (this.currentImageIndex > 0) {
            var preloadPrev = new Image();
            preloadPrev.src = this.album[this.currentImageIndex - 1].link;
        }
    };
    Lightbox.prototype.enableKeyboardNav = function () {
        $(document).on('keyup.keyboard', $.proxy(this.keyboardAction, this));
    };
    Lightbox.prototype.disableKeyboardNav = function () {
        $(document).off('.keyboard');
    };
    Lightbox.prototype.keyboardAction = function (event) {
        var KEYCODE_ESC = 27;
        var KEYCODE_LEFTARROW = 37;
        var KEYCODE_RIGHTARROW = 39;
        var keycode = event.keyCode;
        var key = String.fromCharCode(keycode).toLowerCase();
        if (keycode === KEYCODE_ESC || key.match(/x|o|c/)) {
            this.end();
        } else if (key === 'p' || keycode === KEYCODE_LEFTARROW) {
            if (this.currentImageIndex !== 0) {
                this.changeImage(this.currentImageIndex - 1);
            } else if (this.options.wrapAround && this.album.length > 1) {
                this.changeImage(this.album.length - 1);
            }
        } else if (key === 'n' || keycode === KEYCODE_RIGHTARROW) {
            if (this.currentImageIndex !== this.album.length - 1) {
                this.changeImage(this.currentImageIndex + 1);
            } else if (this.options.wrapAround && this.album.length > 1) {
                this.changeImage(0);
            }
        }
    };
    Lightbox.prototype.end = function () {
        this.disableKeyboardNav();
        $(window).off('resize', this.sizeOverlay);
        this.$lightbox.fadeOut(this.options.fadeDuration);
        this.$overlay.fadeOut(this.options.fadeDuration);
        $('select, object, embed').css({visibility: 'visible'});
    };
    return new Lightbox();
}));
;(function ($, window, document, undefined) {
    var name = 'glide', defaults = {
        autoplay: 4000,
        hoverpause: false,
        animationTime: 2000,
        arrows: true,
        arrowsWrapperClass: 'slider-arrows',
        arrowMainClass: 'slider-arrow',
        arrowRightClass: 'slider-arrow--right',
        arrowRightText: '<img src="/frontend/images/arrow-next.png" />',
        arrowLeftClass: 'slider-arrow--left',
        arrowLeftText: '<img src="/frontend/images/arrow-prev.png" />',
        nav: true,
        navCenter: true,
        navClass: 'slider-nav',
        navItemClass: 'slider-nav__item',
        navCurrentItemClass: 'slider-nav__item--current',
        keyboard: true,
        touchDistance: 60,
        beforeInit: function () {
        },
        afterInit: function () {
        },
        beforeTransition: function () {
        },
        afterTransition: function () {
        }
    };

    function Glide(parent, options) {
        var _ = this;
        _.options = $.extend({}, defaults, options);
        _.parent = parent;
        _.wrapper = _.parent.children();
        _.slides = _.wrapper.children();
        _.currentSlide = 0;
        _.CSS3support = true;
        _.options.beforeInit.call(_);
        _.init();
        _.build();
        _.play();
        if (_.options.touchDistance) {
            _.swipe();
        }
        if (_.options.keyboard) {
            $(document).on('keyup', function (k) {
                if (k.keyCode === 39) _.slide(1);
                if (k.keyCode === 37) _.slide(-1);
            });
        }
        if (_.options.hoverpause) {
            _.parent.add(_.arrows).add(_.nav).on('mouseover mouseout', function (e) {
                _.pause();
                if (e.type === 'mouseout') _.play();
            });
        }
        $(window).on('resize', function () {
            _.init();
            _.slide(0);
        });
        _.options.afterInit.call(_);
        return {
            current: function () {
                return -(_.currentSlide) + 1;
            }, play: function () {
                _.play();
            }, pause: function () {
                _.pause();
            }, next: function (callback) {
                _.slide(1, false, callback);
            }, prev: function (callback) {
                _.slide(-1, false, callback);
            }, jump: function (distance, callback) {
                _.slide(distance - 1, true, callback);
            }, nav: function (target) {
                if (_.navWrapper) {
                    _.navWrapper.remove();
                }
                _.options.nav = (target) ? target : _.options.nav;
                _.navigation();
            }, arrows: function (target) {
                if (_.arrowsWrapper) {
                    _.arrowsWrapper.remove();
                }
                _.options.arrows = (target) ? target : _.options.arrows;
                _.arrows();
            }
        };
    }

    Glide.prototype.build = function () {
        var _ = this;
        if (_.options.arrows) _.arrows();
        if (_.options.nav) _.navigation();
    };
    Glide.prototype.navigation = function () {
        var _ = this;
        if (_.slides.length > 1) {
            var o = _.options, target = (_.options.nav === true) ? _.parent : _.options.nav;
            _.navWrapper = $('<div />', {'class': o.navClass}).appendTo(target);
            var nav = _.navWrapper, item;
            for (var i = 0; i < _.slides.length; i++) {
                item = $('<a />', {'href': '#', 'class': o.navItemClass, 'data-distance': i}).appendTo(nav);
                nav[i + 1] = item;
            }
            var navChildren = nav.children();
            navChildren.eq(0).addClass(o.navCurrentItemClass);
            if (o.navCenter) {
                nav.css({
                    'left': '50%',
                    'width': navChildren.outerWidth(true) * navChildren.length,
                    'margin-left': -nav.outerWidth(true) / 2
                });
            }
            navChildren.on('click touchstart', function (e) {
                e.preventDefault();
                _.slide($(this).data('distance'), true);
            });
        }
    };
    Glide.prototype.arrows = function () {
        var _ = this;
        if (_.slides.length > 1) {
            var o = _.options, target = (_.options.arrows === true) ? _.parent : _.options.arrows;
            _.arrowsWrapper = $('<div />', {'class': o.arrowsWrapperClass}).appendTo(target);
            var arrows = _.arrowsWrapper;
            arrows.right = $('<a />', {
                'href': '#',
                'class': o.arrowMainClass + ' ' + o.arrowRightClass,
                'data-distance': '1',
                'html': o.arrowRightText
            }).appendTo(arrows);
            arrows.left = $('<a />', {
                'href': '#',
                'class': o.arrowMainClass + ' ' + o.arrowLeftClass,
                'data-distance': '-1',
                'html': o.arrowLeftText
            }).appendTo(arrows);
            arrows.children().on('click touchstart', function (e) {
                e.preventDefault();
                _.slide($(this).data('distance'), false);
            });
        }
    };
    Glide.prototype.slide = function (distance, jump, callback) {
        var _ = this;
        _.pause();
        _.options.beforeTransition.call(_);
        var currentSlide = (jump) ? 0 : _.currentSlide, slidesLength = -(_.slides.length - 1), navCurrentClass = _.options.navCurrentItemClass, slidesSpread = _.slides.spread;
        if (currentSlide === 0 && distance === -1) {
            currentSlide = slidesLength;
        } else if (currentSlide === slidesLength && distance === 1) {
            currentSlide = 0;
        } else {
            currentSlide = currentSlide + (-distance);
        }
        var translate = slidesSpread * currentSlide + 'px';
        if (_.CSS3support) {
            _.wrapper.css({
                '-webkit-transform': 'translate3d(' + translate + ', 0px, 0px)',
                '-moz-transform': 'translate3d(' + translate + ', 0px, 0px)',
                '-ms-transform': 'translate3d(' + translate + ', 0px, 0px)',
                '-o-transform': 'translate3d(' + translate + ', 0px, 0px)',
                'transform': 'translate3d(' + translate + ', 0px, 0px)'
            });
        } else {
            _.wrapper.stop().animate({'margin-left': translate}, _.options.animationTime);
        }
        if (_.options.nav && _.navWrapper) {
            _.navWrapper.children().eq(-currentSlide).addClass(navCurrentClass).siblings().removeClass(navCurrentClass);
        }
        _.currentSlide = currentSlide;
        _.options.afterTransition.call(_);
        if ((callback !== 'undefined') && (typeof callback === 'function')) callback();
        _.play();
    };
    Glide.prototype.play = function () {
        var _ = this;
        if (_.options.autoplay) {
            _.auto = setInterval(function () {
                _.slide(1, false);
            }, _.options.autoplay);
        }
    };
    Glide.prototype.pause = function () {
        var _ = this;
        if (_.options.autoplay) {
            _.auto = clearInterval(_.auto);
        }
    };
    Glide.prototype.swipe = function () {
        var _ = this, touch, touchDistance, touchStartX, touchStartY, touchEndX, touchEndY, touchHypotenuse, touchCathetus, touchSin, MathPI = 180 / Math.PI, subExSx, subEySy, powEX, powEY;
        _.parent.on('touchstart', function (e) {
            touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
            touchStartX = touch.pageX;
            touchStartY = touch.pageY;
        });
        _.parent.on('touchmove', function (e) {
            touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
            touchEndX = touch.pageX;
            touchEndY = touch.pageY;
            subExSx = touchEndX - touchStartX;
            subEySy = touchEndY - touchStartY;
            powEX = Math.abs(subExSx << 2);
            powEY = Math.abs(subEySy << 2);
            touchHypotenuse = Math.sqrt(powEX + powEY);
            touchCathetus = Math.sqrt(powEY);
            touchSin = Math.asin(touchCathetus / touchHypotenuse);
            if ((touchSin * MathPI) < 32) e.preventDefault();
        });
        _.parent.on('touchend', function (e) {
            touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
            touchDistance = touch.pageX - touchStartX;
            if (touchDistance > _.options.touchDistance) {
                _.slide(-1);
            } else if (touchDistance < -_.options.touchDistance) {
                _.slide(1);
            }
        });
    };
    Glide.prototype.init = function () {
        var _ = this, sliderWidth = _.parent.width();
        _.slides.spread = sliderWidth;
        _.wrapper.width(sliderWidth * _.slides.length);
        _.slides.width(_.slides.spread);
        if (!isCssSupported("transition") || !isCssSupported("transform")) _.CSS3support = false;
    };
    function isCssSupported(declaration) {
        var isSupported = false, prefixes = 'Khtml ms O Moz Webkit'.split(' '), clone = document.createElement('div'), declarationCapital = null;
        declaration = declaration.toLowerCase();
        if (clone.style[declaration] !== undefined) isSupported = true;
        if (isSupported === false) {
            declarationCapital = declaration.charAt(0).toUpperCase() + declaration.substr(1);
            for (var i = 0; i < prefixes.length; i++) {
                if (clone.style[prefixes[i] + declarationCapital] !== undefined) {
                    isSupported = true;
                    break;
                }
            }
        }
        if (window.opera) {
            if (window.opera.version() < 13) isSupported = false;
        }
        return isSupported;
    }

    $.fn[name] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'api_' + name)) {
                $.data(this, 'api_' + name, new Glide($(this), options));
            }
        });
    };
})(jQuery, window, document);
(function () {
    var a, b, c, d, e, f = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, g = [].indexOf || function (a) {
            for (var b = 0, c = this.length; c > b; b++)if (b in this && this[b] === a)return b;
            return -1
        };
    b = function () {
        function a() {
        }

        return a.prototype.extend = function (a, b) {
            var c, d;
            for (c in b)d = b[c], null == a[c] && (a[c] = d);
            return a
        }, a.prototype.isMobile = function (a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }, a.prototype.createEvent = function (a, b, c, d) {
            var e;
            return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
        }, a.prototype.emitEvent = function (a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
        }, a.prototype.addEvent = function (a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }, a.prototype.removeEvent = function (a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }, a.prototype.innerHeight = function () {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, a
    }(), c = this.WeakMap || this.MozWeakMap || (c = function () {
            function a() {
                this.keys = [], this.values = []
            }

            return a.prototype.get = function (a) {
                var b, c, d, e, f;
                for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)if (c = f[b], c === a)return this.values[b]
            }, a.prototype.set = function (a, b) {
                var c, d, e, f, g;
                for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)if (d = g[c], d === a)return void(this.values[c] = b);
                return this.keys.push(a), this.values.push(b)
            }, a
        }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function () {
            function a() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }

            return a.notSupported = !0, a.prototype.observe = function () {
            }, a
        }()), d = this.getComputedStyle || function (a) {
            return this.getPropertyValue = function (b) {
                var c;
                return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function (a, b) {
                    return b.toUpperCase()
                }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
            }, this
        }, e = /(\-([a-z]){1})/g, this.WOW = function () {
        function e(a) {
            null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }

        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null
        }, e.prototype.init = function () {
            var a;
            return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, e.prototype.start = function () {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function () {
                    var a, c, d, e;
                    for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++)b = d[a], e.push(b);
                    return e
                }.call(this), this.all = function () {
                    var a, c, d, e;
                    for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++)b = d[a], e.push(b);
                    return e
                }.call(this), this.boxes.length)if (this.disabled()) this.resetStyle(); else for (e = this.boxes, c = 0, d = e.length; d > c; c++)b = e[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function (a) {
                    return function (b) {
                        var c, d, e, f, g;
                        for (g = [], c = 0, d = b.length; d > c; c++)f = b[c], g.push(function () {
                            var a, b, c, d;
                            for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++)e = c[a], d.push(this.doSync(e));
                            return d
                        }.call(a));
                        return g
                    }
                }(this)).observe(document.body, {childList: !0, subtree: !0}) : void 0
        }, e.prototype.stop = function () {
            return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, e.prototype.sync = function () {
            return a.notSupported ? this.doSync(this.element) : void 0
        }, e.prototype.doSync = function (a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element), 1 === a.nodeType) {
                for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++)b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }, e.prototype.show = function (a) {
            return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
        }, e.prototype.applyStyle = function (a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function (f) {
                return function () {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }, e.prototype.animate = function () {
            return "requestAnimationFrame" in window ? function (a) {
                    return window.requestAnimationFrame(a)
                } : function (a) {
                    return a()
                }
        }(), e.prototype.resetStyle = function () {
            var a, b, c, d, e;
            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)a = d[b], e.push(a.style.visibility = "visible");
            return e
        }, e.prototype.resetAnimation = function (a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
        }, e.prototype.customStyle = function (a, b, c, d, e) {
            return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {animationDuration: c}), d && this.vendorSet(a.style, {animationDelay: d}), e && this.vendorSet(a.style, {animationIterationCount: e}), this.vendorSet(a.style, {animationName: b ? "none" : this.cachedAnimationName(a)}), a
        }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function (a, b) {
            var c, d, e, f;
            d = [];
            for (c in b)e = b[c], a["" + c] = e, d.push(function () {
                var b, d, g, h;
                for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++)f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                return h
            }.call(this));
            return d
        }, e.prototype.vendorCSS = function (a, b) {
            var c, e, f, g, h, i;
            for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++)i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g
        }, e.prototype.animationName = function (a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }, e.prototype.cacheAnimationName = function (a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }, e.prototype.cachedAnimationName = function (a) {
            return this.animationNameCache.get(a)
        }, e.prototype.scrollHandler = function () {
            return this.scrolled = !0
        }, e.prototype.scrollCallback = function () {
            var a;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
                var b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, e.prototype.offsetTop = function (a) {
            for (var b; void 0 === a.offsetTop;)a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent;)b += a.offsetTop;
            return b
        }, e.prototype.isVisible = function (a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
        }, e.prototype.util = function () {
            return null != this._util ? this._util : this._util = new b
        }, e.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, e
    }()
}).call(this);
(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function ($) {
    'use strict';
    var Slick = window.Slick || {};
    Slick = (function () {
        var instanceUid = 0;

        function Slick(element, settings) {
            var _ = this, dataSettings;
            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function (slider, i) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (i + 1) + '</button>';
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };
            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };
            $.extend(_, _.initials);
            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.hidden = 'hidden';
            _.paused = false;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;
            dataSettings = $(element).data('slick') || {};
            _.options = $.extend({}, _.defaults, dataSettings, settings);
            _.currentSlide = _.options.initialSlide;
            _.originalSettings = _.options;
            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }
            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.instanceUid = instanceUid++;
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
            _.registerBreakpoints();
            _.init(true);
            _.checkResponsive(true);
        }

        return Slick;
    }());
    Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {
        var _ = this;
        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }
        _.unload();
        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }
        _.$slides = _.$slideTrack.children(this.options.slide);
        _.$slideTrack.children(this.options.slide).detach();
        _.$slideTrack.append(_.$slides);
        _.$slides.each(function (index, element) {
            $(element).attr('data-slick-index', index);
        });
        _.$slidesCache = _.$slides;
        _.reinit();
    };
    Slick.prototype.animateHeight = function () {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({height: targetHeight}, _.options.speed);
        }
    };
    Slick.prototype.animateSlide = function (targetLeft, callback) {
        var animProps = {}, _ = this;
        _.animateHeight();
        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({left: targetLeft}, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({top: targetLeft}, _.options.speed, _.options.easing, callback);
            }
        } else {
            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({animStart: _.currentLeft}).animate({animStart: targetLeft}, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function (now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' + now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' + now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function () {
                        if (callback) {
                            callback.call();
                        }
                    }
                });
            } else {
                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);
                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);
                if (callback) {
                    setTimeout(function () {
                        _.disableTransition();
                        callback.call();
                    }, _.options.speed);
                }
            }
        }
    };
    Slick.prototype.asNavFor = function (index) {
        var _ = this, asNavFor = _.options.asNavFor;
        if (asNavFor && asNavFor !== null) {
            asNavFor = $(asNavFor).not(_.$slider);
        }
        if (asNavFor !== null && typeof asNavFor === 'object') {
            asNavFor.each(function () {
                var target = $(this).slick('getSlick');
                if (!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }
    };
    Slick.prototype.applyTransition = function (slide) {
        var _ = this, transition = {};
        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }
        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };
    Slick.prototype.autoPlay = function () {
        var _ = this;
        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }
        if (_.slideCount > _.options.slidesToShow && _.paused !== true) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
        }
    };
    Slick.prototype.autoPlayClear = function () {
        var _ = this;
        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }
    };
    Slick.prototype.autoPlayIterator = function () {
        var _ = this;
        if (_.options.infinite === false) {
            if (_.direction === 1) {
                if ((_.currentSlide + 1) === _.slideCount - 1) {
                    _.direction = 0;
                }
                _.slideHandler(_.currentSlide + _.options.slidesToScroll);
            } else {
                if ((_.currentSlide - 1 === 0)) {
                    _.direction = 1;
                }
                _.slideHandler(_.currentSlide - _.options.slidesToScroll);
            }
        } else {
            _.slideHandler(_.currentSlide + _.options.slidesToScroll);
        }
    };
    Slick.prototype.buildArrows = function () {
        var _ = this;
        if (_.options.arrows === true) {
            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');
            if (_.slideCount > _.options.slidesToShow) {
                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }
                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }
                if (_.options.infinite !== true) {
                    _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                }
            } else {
                _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
                    'aria-disabled': 'true',
                    'tabindex': '-1'
                });
            }
        }
    };
    Slick.prototype.buildDots = function () {
        var _ = this, i, dotString;
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            dotString = '<ul class="' + _.options.dotsClass + '">';
            for (i = 0; i <= _.getDotCount(); i += 1) {
                dotString += '<li>' + _.options.customPaging.call(this, _, i) + '</li>';
            }
            dotString += '</ul>';
            _.$dots = $(dotString).appendTo(_.options.appendDots);
            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');
        }
    };
    Slick.prototype.buildOut = function () {
        var _ = this;
        _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');
        _.slideCount = _.$slides.length;
        _.$slides.each(function (index, element) {
            $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
        });
        _.$slidesCache = _.$slides;
        _.$slider.addClass('slick-slider');
        _.$slideTrack = (_.slideCount === 0) ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
        _.$list = _.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);
        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }
        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');
        _.setupInfinite();
        _.buildArrows();
        _.buildDots();
        _.updateDots();
        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }
    };
    Slick.prototype.buildRows = function () {
        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides, slidesPerSection;
        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();
        if (_.options.rows > 1) {
            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);
            for (a = 0; a < numOfSlides; a++) {
                var slide = document.createElement('div');
                for (b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for (c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }
            _.$slider.html(newSlides);
            _.$slider.children().children().children().css({
                'width': (100 / _.options.slidesPerRow) + '%',
                'display': 'inline-block'
            });
        }
    };
    Slick.prototype.checkResponsive = function (initial, forceUpdate) {
        var _ = this, breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();
        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }
        if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
            targetBreakpoint = null;
            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }
            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint = targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }
            if (!initial && triggerBreakpoint !== false) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }
    };
    Slick.prototype.changeSlide = function (event, dontAnimate) {
        var _ = this, $target = $(event.target), indexOffset, slideOffset, unevenOffset;
        if ($target.is('a')) {
            event.preventDefault();
        }
        if (!$target.is('li')) {
            $target = $target.closest('li');
        }
        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
        switch (event.data.message) {
            case'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;
            case'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;
            case'index':
                var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;
                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;
            default:
                return;
        }
    };
    Slick.prototype.checkNavigable = function (index) {
        var _ = this, navigables, prevNavigable;
        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }
        return index;
    };
    Slick.prototype.cleanUpEvents = function () {
        var _ = this;
        if (_.options.dots && _.$dots !== null) {
            $('li', _.$dots).off('click.slick', _.changeSlide);
            if (_.options.pauseOnDotsHover === true && _.options.autoplay === true) {
                $('li', _.$dots).off('mouseenter.slick', $.proxy(_.setPaused, _, true)).off('mouseleave.slick', $.proxy(_.setPaused, _, false));
            }
        }
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }
        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);
        _.$list.off('click.slick', _.clickHandler);
        $(document).off(_.visibilityChange, _.visibility);
        _.$list.off('mouseenter.slick', $.proxy(_.setPaused, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.setPaused, _, false));
        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }
        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
    };
    Slick.prototype.cleanUpRows = function () {
        var _ = this, originalSlides;
        if (_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.html(originalSlides);
        }
    };
    Slick.prototype.clickHandler = function (event) {
        var _ = this;
        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }
    };
    Slick.prototype.destroy = function (refresh) {
        var _ = this;
        _.autoPlayClear();
        _.touchObject = {};
        _.cleanUpEvents();
        $('.slick-cloned', _.$slider).detach();
        if (_.$dots) {
            _.$dots.remove();
        }
        if (_.options.arrows === true) {
            if (_.$prevArrow && _.$prevArrow.length) {
                _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css("display", "");
                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.remove();
                }
            }
            if (_.$nextArrow && _.$nextArrow.length) {
                _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css("display", "");
                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.remove();
                }
            }
        }
        if (_.$slides) {
            _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
                $(this).attr('style', $(this).data('originalStyling'));
            });
            _.$slideTrack.children(this.options.slide).detach();
            _.$slideTrack.detach();
            _.$list.detach();
            _.$slider.append(_.$slides);
        }
        _.cleanUpRows();
        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.unslicked = true;
        if (!refresh) {
            _.$slider.trigger('destroy', [_]);
        }
    };
    Slick.prototype.disableTransition = function (slide) {
        var _ = this, transition = {};
        transition[_.transitionType] = '';
        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };
    Slick.prototype.fadeSlide = function (slideIndex, callback) {
        var _ = this;
        if (_.cssTransitions === false) {
            _.$slides.eq(slideIndex).css({zIndex: _.options.zIndex});
            _.$slides.eq(slideIndex).animate({opacity: 1}, _.options.speed, _.options.easing, callback);
        } else {
            _.applyTransition(slideIndex);
            _.$slides.eq(slideIndex).css({opacity: 1, zIndex: _.options.zIndex});
            if (callback) {
                setTimeout(function () {
                    _.disableTransition(slideIndex);
                    callback.call();
                }, _.options.speed);
            }
        }
    };
    Slick.prototype.fadeSlideOut = function (slideIndex) {
        var _ = this;
        if (_.cssTransitions === false) {
            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);
        } else {
            _.applyTransition(slideIndex);
            _.$slides.eq(slideIndex).css({opacity: 0, zIndex: _.options.zIndex - 2});
        }
    };
    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {
        var _ = this;
        if (filter !== null) {
            _.unload();
            _.$slideTrack.children(this.options.slide).detach();
            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
            _.reinit();
        }
    };
    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
        var _ = this;
        return _.currentSlide;
    };
    Slick.prototype.getDotCount = function () {
        var _ = this;
        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;
        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToShow;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToShow;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }
        return pagerQty - 1;
    };
    Slick.prototype.getLeft = function (slideIndex) {
        var _ = this, targetLeft, verticalHeight, verticalOffset = 0, targetSlide;
        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);
        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }
        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }
        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }
        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }
        if (_.options.variableWidth === true) {
            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }
            targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            if (_.options.centerMode === true) {
                if (_.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }
        return targetLeft;
    };
    Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {
        var _ = this;
        return _.options[option];
    };
    Slick.prototype.getNavigableIndexes = function () {
        var _ = this, breakPoint = 0, counter = 0, indexes = [], max;
        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }
        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
        return indexes;
    };
    Slick.prototype.getSlick = function () {
        return this;
    };
    Slick.prototype.getSlideCount = function () {
        var _ = this, slidesTraversed, swipedSlide, centerOffset;
        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;
        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function (index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });
            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
            return slidesTraversed;
        } else {
            return _.options.slidesToScroll;
        }
    };
    Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {
        var _ = this;
        _.changeSlide({data: {message: 'index', index: parseInt(slide)}}, dontAnimate);
    };
    Slick.prototype.init = function (creation) {
        var _ = this;
        if (!$(_.$slider).hasClass('slick-initialized')) {
            $(_.$slider).addClass('slick-initialized');
            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
        }
        if (creation) {
            _.$slider.trigger('init', [_]);
        }
        if (_.options.accessibility === true) {
            _.initADA();
        }
    };
    Slick.prototype.initArrowEvents = function () {
        var _ = this;
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.on('click.slick', {message: 'previous'}, _.changeSlide);
            _.$nextArrow.on('click.slick', {message: 'next'}, _.changeSlide);
        }
    };
    Slick.prototype.initDotEvents = function () {
        var _ = this;
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {message: 'index'}, _.changeSlide);
        }
        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.options.autoplay === true) {
            $('li', _.$dots).on('mouseenter.slick', $.proxy(_.setPaused, _, true)).on('mouseleave.slick', $.proxy(_.setPaused, _, false));
        }
    };
    Slick.prototype.initializeEvents = function () {
        var _ = this;
        _.initArrowEvents();
        _.initDotEvents();
        _.$list.on('touchstart.slick mousedown.slick', {action: 'start'}, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {action: 'move'}, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {action: 'end'}, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {action: 'end'}, _.swipeHandler);
        _.$list.on('click.slick', _.clickHandler);
        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
        _.$list.on('mouseenter.slick', $.proxy(_.setPaused, _, true));
        _.$list.on('mouseleave.slick', $.proxy(_.setPaused, _, false));
        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }
        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);
    };
    Slick.prototype.initUI = function () {
        var _ = this;
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.show();
            _.$nextArrow.show();
        }
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            _.$dots.show();
        }
        if (_.options.autoplay === true) {
            _.autoPlay();
        }
    };
    Slick.prototype.keyHandler = function (event) {
        var _ = this;
        if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({data: {message: 'previous'}});
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({data: {message: 'next'}});
            }
        }
    };
    Slick.prototype.lazyLoad = function () {
        var _ = this, loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {
            $('img[data-lazy]', imagesScope).each(function () {
                var image = $(this), imageSource = $(this).attr('data-lazy'), imageToLoad = document.createElement('img');
                imageToLoad.onload = function () {
                    image.animate({opacity: 0}, 100, function () {
                        image.attr('src', imageSource).animate({opacity: 1}, 200, function () {
                            image.removeAttr('data-lazy').removeClass('slick-loading');
                        });
                    });
                };
                imageToLoad.src = imageSource;
            });
        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = rangeStart + _.options.slidesToShow;
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }
        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);
        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }
    };
    Slick.prototype.loadSlider = function () {
        var _ = this;
        _.setPosition();
        _.$slideTrack.css({opacity: 1});
        _.$slider.removeClass('slick-loading');
        _.initUI();
        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }
    };
    Slick.prototype.next = Slick.prototype.slickNext = function () {
        var _ = this;
        _.changeSlide({data: {message: 'next'}});
    };
    Slick.prototype.orientationChange = function () {
        var _ = this;
        _.checkResponsive();
        _.setPosition();
    };
    Slick.prototype.pause = Slick.prototype.slickPause = function () {
        var _ = this;
        _.autoPlayClear();
        _.paused = true;
    };
    Slick.prototype.play = Slick.prototype.slickPlay = function () {
        var _ = this;
        _.paused = false;
        _.autoPlay();
    };
    Slick.prototype.postSlide = function (index) {
        var _ = this;
        _.$slider.trigger('afterChange', [_, index]);
        _.animating = false;
        _.setPosition();
        _.swipeLeft = null;
        if (_.options.autoplay === true && _.paused === false) {
            _.autoPlay();
        }
        if (_.options.accessibility === true) {
            _.initADA();
        }
    };
    Slick.prototype.prev = Slick.prototype.slickPrev = function () {
        var _ = this;
        _.changeSlide({data: {message: 'previous'}});
    };
    Slick.prototype.preventDefault = function (e) {
        e.preventDefault();
    };
    Slick.prototype.progressiveLazyLoad = function () {
        var _ = this, imgCount, targetImage;
        imgCount = $('img[data-lazy]', _.$slider).length;
        if (imgCount > 0) {
            targetImage = $('img[data-lazy]', _.$slider).first();
            targetImage.attr('src', targetImage.attr('data-lazy')).removeClass('slick-loading').load(function () {
                targetImage.removeAttr('data-lazy');
                _.progressiveLazyLoad();
                if (_.options.adaptiveHeight === true) {
                    _.setPosition();
                }
            }).error(function () {
                targetImage.removeAttr('data-lazy');
                _.progressiveLazyLoad();
            });
        }
    };
    Slick.prototype.refresh = function (initializing) {
        var _ = this, currentSlide = _.currentSlide;
        _.destroy(true);
        $.extend(_, _.initials, {currentSlide: currentSlide});
        _.init();
        if (!initializing) {
            _.changeSlide({data: {message: 'index', index: currentSlide}}, false);
        }
    };
    Slick.prototype.registerBreakpoints = function () {
        var _ = this, breakpoint, currentBreakpoint, l, responsiveSettings = _.options.responsive || null;
        if ($.type(responsiveSettings) === "array" && responsiveSettings.length) {
            _.respondTo = _.options.respondTo || 'window';
            for (breakpoint in responsiveSettings) {
                l = _.breakpoints.length - 1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    while (l >= 0) {
                        if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                            _.breakpoints.splice(l, 1);
                        }
                        l--;
                    }
                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
                }
            }
            _.breakpoints.sort(function (a, b) {
                return (_.options.mobileFirst) ? a - b : b - a;
            });
        }
    };
    Slick.prototype.reinit = function () {
        var _ = this;
        _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');
        _.slideCount = _.$slides.length;
        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }
        _.registerBreakpoints();
        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.checkResponsive(false, true);
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }
        _.setSlideClasses(0);
        _.setPosition();
        _.$slider.trigger('reInit', [_]);
        if (_.options.autoplay === true) {
            _.focusHandler();
        }
    };
    Slick.prototype.resize = function () {
        var _ = this;
        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function () {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if (!_.unslicked) {
                    _.setPosition();
                }
            }, 50);
        }
    };
    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {
        var _ = this;
        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }
        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }
        _.unload();
        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }
        _.$slides = _.$slideTrack.children(this.options.slide);
        _.$slideTrack.children(this.options.slide).detach();
        _.$slideTrack.append(_.$slides);
        _.$slidesCache = _.$slides;
        _.reinit();
    };
    Slick.prototype.setCSS = function (position) {
        var _ = this, positionProps = {}, x, y;
        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
        positionProps[_.positionProp] = position;
        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }
    };
    Slick.prototype.setDimensions = function () {
        var _ = this;
        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({padding: ('0px ' + _.options.centerPadding)});
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({padding: (_.options.centerPadding + ' 0px')});
            }
        }
        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();
        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));
        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }
        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
    };
    Slick.prototype.setFade = function () {
        var _ = this, targetLeft;
        _.$slides.each(function (index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });
        _.$slides.eq(_.currentSlide).css({zIndex: _.options.zIndex - 1, opacity: 1});
    };
    Slick.prototype.setHeight = function () {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }
    };
    Slick.prototype.setOption = Slick.prototype.slickSetOption = function (option, value, refresh) {
        var _ = this, l, item;
        if (option === "responsive" && $.type(value) === "array") {
            for (item in value) {
                if ($.type(_.options.responsive) !== "array") {
                    _.options.responsive = [value[item]];
                } else {
                    l = _.options.responsive.length - 1;
                    while (l >= 0) {
                        if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
                            _.options.responsive.splice(l, 1);
                        }
                        l--;
                    }
                    _.options.responsive.push(value[item]);
                }
            }
        } else {
            _.options[option] = value;
        }
        if (refresh === true) {
            _.unload();
            _.reinit();
        }
    };
    Slick.prototype.setPosition = function () {
        var _ = this;
        _.setDimensions();
        _.setHeight();
        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }
        _.$slider.trigger('setPosition', [_]);
    };
    Slick.prototype.setProps = function () {
        var _ = this, bodyStyle = document.body.style;
        _.positionProp = _.options.vertical === true ? 'top' : 'left';
        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }
        if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }
        if (_.options.fade) {
            if (typeof _.options.zIndex === 'number') {
                if (_.options.zIndex < 3) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }
        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = (_.animType !== null && _.animType !== false);
    };
    Slick.prototype.setSlideClasses = function (index) {
        var _ = this, centerOffset, allSlides, indexOffset, remainder;
        allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');
        _.$slides.eq(index).addClass('slick-current');
        if (_.options.centerMode === true) {
            centerOffset = Math.floor(_.options.slidesToShow / 2);
            if (_.options.infinite === true) {
                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides.slice(index - centerOffset, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
                } else {
                    indexOffset = _.options.slidesToShow + index;
                    allSlides.slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
                }
                if (index === 0) {
                    allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
                } else if (index === _.slideCount - 1) {
                    allSlides.eq(_.options.slidesToShow).addClass('slick-center');
                }
            }
            _.$slides.eq(index).addClass('slick-center');
        } else {
            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {
                _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
            } else if (allSlides.length <= _.options.slidesToShow) {
                allSlides.addClass('slick-active').attr('aria-hidden', 'false');
            } else {
                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {
                    allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
                } else {
                    allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
                }
            }
        }
        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }
    };
    Slick.prototype.setupInfinite = function () {
        var _ = this, i, slideIndex, infiniteCount;
        if (_.options.fade === true) {
            _.options.centerMode = false;
        }
        if (_.options.infinite === true && _.options.fade === false) {
            slideIndex = null;
            if (_.slideCount > _.options.slidesToShow) {
                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }
                for (i = _.slideCount; i > (_.slideCount - infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
                    $(this).attr('id', '');
                });
            }
        }
    };
    Slick.prototype.setPaused = function (paused) {
        var _ = this;
        if (_.options.autoplay === true && _.options.pauseOnHover === true) {
            _.paused = paused;
            if (!paused) {
                _.autoPlay();
            } else {
                _.autoPlayClear();
            }
        }
    };
    Slick.prototype.selectHandler = function (event) {
        var _ = this;
        var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');
        var index = parseInt(targetElement.attr('data-slick-index'));
        if (!index) index = 0;
        if (_.slideCount <= _.options.slidesToShow) {
            _.setSlideClasses(index);
            _.asNavFor(index);
            return;
        }
        _.slideHandler(index);
    };
    Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null, _ = this;
        sync = sync || false;
        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }
        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }
        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }
        if (sync === false) {
            _.asNavFor(index);
        }
        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);
        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }
        if (_.options.autoplay === true) {
            clearInterval(_.autoPlayTimer);
        }
        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }
        _.animating = true;
        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);
        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;
        _.setSlideClasses(_.currentSlide);
        _.updateDots();
        _.updateArrows();
        if (_.options.fade === true) {
            if (dontAnimate !== true) {
                _.fadeSlideOut(oldSlide);
                _.fadeSlide(animSlide, function () {
                    _.postSlide(animSlide);
                });
            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }
        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function () {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }
    };
    Slick.prototype.startLoad = function () {
        var _ = this;
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.hide();
            _.$nextArrow.hide();
        }
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            _.$dots.hide();
        }
        _.$slider.addClass('slick-loading');
    };
    Slick.prototype.swipeDirection = function () {
        var xDist, yDist, r, swipeAngle, _ = this;
        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);
        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }
        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'left';
            } else {
                return 'right';
            }
        }
        return 'vertical';
    };
    Slick.prototype.swipeEnd = function (event) {
        var _ = this, slideCount;
        _.dragging = false;
        _.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;
        if (_.touchObject.curX === undefined) {
            return false;
        }
        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger('edge', [_, _.swipeDirection()]);
        }
        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
            switch (_.swipeDirection()) {
                case'left':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
                    _.slideHandler(slideCount);
                    _.currentDirection = 0;
                    _.touchObject = {};
                    _.$slider.trigger('swipe', [_, 'left']);
                    break;
                case'right':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
                    _.slideHandler(slideCount);
                    _.currentDirection = 1;
                    _.touchObject = {};
                    _.$slider.trigger('swipe', [_, 'right']);
                    break;
            }
        } else {
            if (_.touchObject.startX !== _.touchObject.curX) {
                _.slideHandler(_.currentSlide);
                _.touchObject = {};
            }
        }
    };
    Slick.prototype.swipeHandler = function (event) {
        var _ = this;
        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }
        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
        _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;
        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
        }
        switch (event.data.action) {
            case'start':
                _.swipeStart(event);
                break;
            case'move':
                _.swipeMove(event);
                break;
            case'end':
                _.swipeEnd(event);
                break;
        }
    };
    Slick.prototype.swipeMove = function (event) {
        var _ = this, edgeWasHit = false, curLeft, swipeDirection, swipeLength, positionOffset, touches;
        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;
        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }
        curLeft = _.getLeft(_.currentSlide);
        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
        _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }
        swipeDirection = _.swipeDirection();
        if (swipeDirection === 'vertical') {
            return;
        }
        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }
        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }
        swipeLength = _.touchObject.swipeLength;
        _.touchObject.edgeHit = false;
        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }
        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }
        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }
        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }
        _.setCSS(_.swipeLeft);
    };
    Slick.prototype.swipeStart = function (event) {
        var _ = this, touches;
        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }
        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }
        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
        _.dragging = true;
    };
    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
        var _ = this;
        if (_.$slidesCache !== null) {
            _.unload();
            _.$slideTrack.children(this.options.slide).detach();
            _.$slidesCache.appendTo(_.$slideTrack);
            _.reinit();
        }
    };
    Slick.prototype.unload = function () {
        var _ = this;
        $('.slick-cloned', _.$slider).remove();
        if (_.$dots) {
            _.$dots.remove();
        }
        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }
        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }
        _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
    };
    Slick.prototype.unslick = function (fromBreakpoint) {
        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();
    };
    Slick.prototype.updateArrows = function () {
        var _ = this, centerOffset;
        centerOffset = Math.floor(_.options.slidesToShow / 2);
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            if (_.currentSlide === 0) {
                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            }
        }
    };
    Slick.prototype.updateDots = function () {
        var _ = this;
        if (_.$dots !== null) {
            _.$dots.find('li').removeClass('slick-active').attr('aria-hidden', 'true');
            _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active').attr('aria-hidden', 'false');
        }
    };
    Slick.prototype.visibility = function () {
        var _ = this;
        if (document[_.hidden]) {
            _.paused = true;
            _.autoPlayClear();
        } else {
            if (_.options.autoplay === true) {
                _.paused = false;
                _.autoPlay();
            }
        }
    };
    Slick.prototype.initADA = function () {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({'tabindex': '-1'});
        _.$slideTrack.attr('role', 'listbox');
        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
            $(this).attr({'role': 'option', 'aria-describedby': 'slick-slide' + _.instanceUid + i + ''});
        });
        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function (i) {
                $(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + _.instanceUid + i + '',
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            }).first().attr('aria-selected', 'true').end().find('button').attr('role', 'button').end().closest('div').attr('role', 'toolbar');
        }
        _.activateADA();
    };
    Slick.prototype.activateADA = function () {
        var _ = this, _isSlideOnFocus = _.$slider.find('*').is(':focus');
        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false',
            'tabindex': '0'
        }).find('a, input, button, select').attr({'tabindex': '0'});
        (_isSlideOnFocus) && _.$slideTrack.find('.slick-active').focus();
    };
    Slick.prototype.focusHandler = function () {
        var _ = this;
        _.$slider.on('focus.slick blur.slick', '*', function (event) {
            event.stopImmediatePropagation();
            var sf = $(this);
            setTimeout(function () {
                if (_.isPlay) {
                    if (sf.is(':focus')) {
                        _.autoPlayClear();
                        _.paused = true;
                    } else {
                        _.paused = false;
                        _.autoPlay();
                    }
                }
            }, 0);
        });
    };
    $.fn.slick = function () {
        var _ = this, opt = arguments[0], args = Array.prototype.slice.call(arguments, 1), l = _.length, i = 0, ret;
        for (i; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt); else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined')return ret;
        }
        return _;
    };
}));
;(function ($) {
    $.rating = function (e, o) {
        this.options = $.extend({
            fx: 'float',
            image: '/images/stars.png',
            stars: 5,
            minimal: 0,
            titles: ['голос', 'голоса', 'голосов'],
            readOnly: false,
            url: '',
            type: 'post',
            loader: '/images/ajax-loader.gif',
            click: function () {
            },
            callback: function () {
            }
        }, o || {});
        this.el = $(e);
        this.left = 0;
        this.width = 0;
        this.height = 0;
        this._data = {};
        var self = this;
        this.el.find(':hidden').each(function () {
            var $this = $(this);
            self._data[$this.attr('name')] = $this.val();
        });
        this._data.val = parseFloat(this._data.val) || 0;
        this._data.votes = parseFloat(this._data.votes) || '';
        if (this._data.val > this.options.stars) this._data.val = this.options.stars;
        if (this._data.val < 0) this._data.val = 0;
        this.old = this._data.val;
        this.vote_wrap = $('<div class="vote-wrap"></div>');
        this.vote_block = $('<div class="vote-block"></div>');
        this.vote_hover = $('<div class="vote-hover"></div>');
        this.vote_stars = $('<div class="vote-stars"></div>');
        this.vote_active = $('<div class="vote-active"></div>');
        this.vote_result = $('<div class="vote-result"></div>');
        this.vote_success = $('<div class="vote-success"></div>');
        this.loader = $('<img src="' + this.options.loader + '" alt="load...">');
        this.el.html(this.loader);
        var img = new Image();
        img.src = this.options.image;
        img.onload = function () {
            self.width = this.width;
            self.height = this.height / 3;
            self.init();
        };
    };
    var $r = $.rating;
    $r.fn = $r.prototype = {rating: '2.0'};
    $r.fn.extend = $r.extend = $.extend;
    $r.fn.extend({
        init: function () {
            this.render();
            if (this.options.readOnly)return;
            var self = this, left = 0, width = 0;
            this.vote_hover.bind('mousemove mouseover', function (e) {
                if (self.options.readOnly)return;
                var $this = $(this), score = 0;
                left = e.clientX > 0 ? e.clientX : e.pageX;
                width = left - $this.offset().left - 2;
                var max = self.width * self.options.stars, min = self.options.minimal * self.width;
                if (width > max) width = max;
                if (width < min) width = min;
                score = Math.round(width / self.width * 10) / 10;
                if (self.options.fx == 'half') {
                    width = Math.ceil(width / self.width * 2) * self.width / 2;
                } else if (self.options.fx != 'float') {
                    width = Math.ceil(width / self.width) * self.width;
                }
                score = Math.round(width / self.width * 10) / 10;
                self.vote_active.css({'width': width, 'background-position': 'left center'});
                self.vote_success.html('Ваша оценка:' + score);
            }).bind('mouseout', function () {
                if (self.options.readOnly)return;
                self.reset();
                self.vote_success.empty();
            }).bind('click.rating', function () {
                if (self.options.readOnly)return;
                var score = Math.round(width / self.width * 10) / 10;
                if (score > self.options.stars) score = self.options.stars;
                if (score < 0) score = 0;
                self.old = self._data.val;
                self._data.val = (self._data.val * self._data.votes + score) / (self._data.votes + 1);
                self._data.val = Math.round(self._data.val * 100) / 100;
                self._data.score = score;
                self.vote_success.html('Ваша оценка:' + score);
                if (self.options.url != '') {
                    self.send();
                }
                self.options.readOnly = true;
                self.options.click.apply(this, [score]);
            });
        }, set: function () {
            this.vote_active.css({'width': this._data.val * this.width, 'background-position': 'left bottom'});
        }, reset: function () {
            this.vote_active.css({'width': this.old * this.width, 'background-position': 'left bottom'});
        }, setvoters: function () {
            this.vote_result.html(this.declOfNum(this._data.votes));
        }, render: function () {
            this.el.html(this.vote_wrap.append(this.vote_hover.css({
                padding: '0 4px',
                height: this.height,
                width: this.width * this.options.stars
            }), this.vote_result.text(this.declOfNum(this._data.votes)), this.vote_success));
            this.vote_block.append(this.vote_stars.css({
                height: this.height,
                width: this.width * this.options.stars,
                background: "url('" + this.options.image + "') left top"
            }), this.vote_active.css({
                height: this.height,
                width: this._data.val * this.width,
                background: "url('" + this.options.image + "') left bottom"
            })).appendTo(this.vote_hover);
        }, send: function (score) {
            var self = this;
            this.vote_result.html(this.loader);
            this._data.votes++;
            $.ajax({
                url: self.options.url,
                type: self.options.type,
                data: this._data,
                dataType: 'json',
                success: function (data) {
                    if (data.status == 'OK') {
                        self.set();
                    } else {
                        self._data.votes--;
                        self.reset();
                    }
                    self.setvoters();
                    if (data.msg) self.vote_success.html(data.msg);
                    if (typeof self.options.callback == 'function') {
                        self.options.callback.apply(self, [data]);
                    }
                }
            });
        }, declOfNum: function (number) {
            if (number <= 0)return '';
            number = Math.abs(Math.floor(number));
            cases = [2, 0, 1, 1, 1, 2];
            return number + ' ' + this.options.titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
        }
    });
    $.fn.rating = function (o) {
        if (typeof o == 'string') {
            var instance = $(this).data('rating'), args = Array.prototype.slice.call(arguments, 1);
            return instance[o].apply(instance, args);
        } else {
            return this.each(function () {
                var instance = $(this).data('rating');
                if (instance) {
                    if (o) {
                        $.extend(instance.options, o);
                    }
                    instance.init();
                } else {
                    $(this).data('rating', new $r(this, o));
                }
            });
        }
    };
})(jQuery);
;(function ($, document, window, navigator, undefined) {
    "use strict";
    var plugin_count = 0;
    var is_old_ie = (function () {
        var n = navigator.userAgent, r = /msie\s\d+/i, v;
        if (n.search(r) > 0) {
            v = r.exec(n).toString();
            v = v.split(" ")[1];
            if (v < 9) {
                $("html").addClass("lt-ie9");
                return true;
            }
        }
        return false;
    }());
    if (!Function.prototype.bind) {
        Function.prototype.bind = function bind(that) {
            var target = this;
            var slice = [].slice;
            if (typeof target != "function") {
                throw new TypeError();
            }
            var args = slice.call(arguments, 1), bound = function () {
                if (this instanceof bound) {
                    var F = function () {
                    };
                    F.prototype = target.prototype;
                    var self = new F();
                    var result = target.apply(self, args.concat(slice.call(arguments)));
                    if (Object(result) === result) {
                        return result;
                    }
                    return self;
                } else {
                    return target.apply(that, args.concat(slice.call(arguments)));
                }
            };
            return bound;
        };
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (searchElement, fromIndex) {
            var k;
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var O = Object(this);
            var len = O.length >>> 0;
            if (len === 0) {
                return -1;
            }
            var n = +fromIndex || 0;
            if (Math.abs(n) === Infinity) {
                n = 0;
            }
            if (n >= len) {
                return -1;
            }
            k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
            while (k < len) {
                if (k in O && O[k] === searchElement) {
                    return k;
                }
                k++;
            }
            return -1;
        };
    }
    var base_html = '<span class="irs">' + '<span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span>' + '<span class="irs-min">0</span><span class="irs-max">1</span>' + '<span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span>' + '</span>' + '<span class="irs-grid"></span>' + '<span class="irs-bar"></span>';
    var single_html = '<span class="irs-bar-edge"></span>' + '<span class="irs-shadow shadow-single"></span>' + '<span class="irs-slider single"></span>';
    var double_html = '<span class="irs-shadow shadow-from"></span>' + '<span class="irs-shadow shadow-to"></span>' + '<span class="irs-slider from"></span>' + '<span class="irs-slider to"></span>';
    var disable_html = '<span class="irs-disable-mask"></span>';
    var IonRangeSlider = function (input, options, plugin_count) {
        this.VERSION = "2.0.13";
        this.input = input;
        this.plugin_count = plugin_count;
        this.current_plugin = 0;
        this.calc_count = 0;
        this.update_tm = 0;
        this.old_from = 0;
        this.old_to = 0;
        this.raf_id = null;
        this.dragging = false;
        this.force_redraw = false;
        this.is_key = false;
        this.is_update = false;
        this.is_start = true;
        this.is_finish = false;
        this.is_active = false;
        this.is_resize = false;
        this.is_click = false;
        this.$cache = {
            win: $(window),
            body: $(document.body),
            input: $(input),
            cont: null,
            rs: null,
            min: null,
            max: null,
            from: null,
            to: null,
            single: null,
            bar: null,
            line: null,
            s_single: null,
            s_from: null,
            s_to: null,
            shad_single: null,
            shad_from: null,
            shad_to: null,
            edge: null,
            grid: null,
            grid_labels: []
        };
        var $inp = this.$cache.input;
        var data = {
            type: $inp.data("type"),
            min: $inp.data("min"),
            max: $inp.data("max"),
            from: $inp.data("from"),
            to: $inp.data("to"),
            step: $inp.data("step"),
            min_interval: $inp.data("minInterval"),
            max_interval: $inp.data("maxInterval"),
            drag_interval: $inp.data("dragInterval"),
            values: $inp.data("values"),
            from_fixed: $inp.data("fromFixed"),
            from_min: $inp.data("fromMin"),
            from_max: $inp.data("fromMax"),
            from_shadow: $inp.data("fromShadow"),
            to_fixed: $inp.data("toFixed"),
            to_min: $inp.data("toMin"),
            to_max: $inp.data("toMax"),
            to_shadow: $inp.data("toShadow"),
            prettify_enabled: $inp.data("prettifyEnabled"),
            prettify_separator: $inp.data("prettifySeparator"),
            force_edges: $inp.data("forceEdges"),
            keyboard: $inp.data("keyboard"),
            keyboard_step: $inp.data("keyboardStep"),
            grid: $inp.data("grid"),
            grid_margin: $inp.data("gridMargin"),
            grid_num: $inp.data("gridNum"),
            grid_snap: $inp.data("gridSnap"),
            hide_min_max: $inp.data("hideMinMax"),
            hide_from_to: $inp.data("hideFromTo"),
            prefix: $inp.data("prefix"),
            postfix: $inp.data("postfix"),
            max_postfix: $inp.data("maxPostfix"),
            decorate_both: $inp.data("decorateBoth"),
            values_separator: $inp.data("valuesSeparator"),
            disable: $inp.data("disable")
        };
        data.values = data.values && data.values.split(",");
        var val = $inp.prop("value");
        if (val) {
            val = val.split(";");
            if (val[0] && val[0] == +val[0]) {
                val[0] = +val[0];
            }
            if (val[1] && val[1] == +val[1]) {
                val[1] = +val[1];
            }
            if (options && options.values && options.values.length) {
                data.from = val[0] && options.values.indexOf(val[0]);
                data.to = val[1] && options.values.indexOf(val[1]);
            } else {
                data.from = val[0] && +val[0];
                data.to = val[1] && +val[1];
            }
        }
        options = $.extend(data, options);
        this.options = $.extend({
            type: "single",
            min: 10,
            max: 100,
            from: null,
            to: null,
            step: 1,
            min_interval: 0,
            max_interval: 0,
            drag_interval: false,
            values: [],
            p_values: [],
            from_fixed: false,
            from_min: null,
            from_max: null,
            from_shadow: false,
            to_fixed: false,
            to_min: null,
            to_max: null,
            to_shadow: false,
            prettify_enabled: true,
            prettify_separator: " ",
            prettify: null,
            force_edges: false,
            keyboard: false,
            keyboard_step: 5,
            grid: false,
            grid_margin: true,
            grid_num: 4,
            grid_snap: false,
            hide_min_max: false,
            hide_from_to: false,
            prefix: "",
            postfix: "",
            max_postfix: "",
            decorate_both: true,
            values_separator: " — ",
            disable: false,
            onStart: null,
            onChange: null,
            onFinish: null,
            onUpdate: null
        }, options);
        this.validate();
        this.result = {
            input: this.$cache.input,
            slider: null,
            min: this.options.min,
            max: this.options.max,
            from: this.options.from,
            from_percent: 0,
            from_value: null,
            to: this.options.to,
            to_percent: 0,
            to_value: null
        };
        this.coords = {
            x_gap: 0,
            x_pointer: 0,
            w_rs: 0,
            w_rs_old: 0,
            w_handle: 0,
            p_gap: 0,
            p_gap_left: 0,
            p_gap_right: 0,
            p_step: 0,
            p_pointer: 0,
            p_handle: 0,
            p_single: 0,
            p_single_real: 0,
            p_from: 0,
            p_from_real: 0,
            p_to: 0,
            p_to_real: 0,
            p_bar_x: 0,
            p_bar_w: 0,
            grid_gap: 0,
            big_num: 0,
            big: [],
            big_w: [],
            big_p: [],
            big_x: []
        };
        this.labels = {
            w_min: 0,
            w_max: 0,
            w_from: 0,
            w_to: 0,
            w_single: 0,
            p_min: 0,
            p_max: 0,
            p_from: 0,
            p_from_left: 0,
            p_to: 0,
            p_to_left: 0,
            p_single: 0,
            p_single_left: 0
        };
        this.init();
    };
    IonRangeSlider.prototype = {
        init: function (is_update) {
            this.coords.p_step = this.options.step / ((this.options.max - this.options.min) / 100);
            this.target = "base";
            this.toggleInput();
            this.append();
            this.setMinMax();
            if (is_update) {
                this.force_redraw = true;
                this.calc(true);
                this.callOnUpdate();
            } else {
                this.force_redraw = true;
                this.calc(true);
                this.callOnStart();
            }
            this.updateScene();
        }, append: function () {
            var container_html = '<span class="irs js-irs-' + this.plugin_count + '"></span>';
            this.$cache.input.before(container_html);
            this.$cache.input.prop("readonly", true);
            this.$cache.cont = this.$cache.input.prev();
            this.result.slider = this.$cache.cont;
            this.$cache.cont.html(base_html);
            this.$cache.rs = this.$cache.cont.find(".irs");
            this.$cache.min = this.$cache.cont.find(".irs-min");
            this.$cache.max = this.$cache.cont.find(".irs-max");
            this.$cache.from = this.$cache.cont.find(".irs-from");
            this.$cache.to = this.$cache.cont.find(".irs-to");
            this.$cache.single = this.$cache.cont.find(".irs-single");
            this.$cache.bar = this.$cache.cont.find(".irs-bar");
            this.$cache.line = this.$cache.cont.find(".irs-line");
            this.$cache.grid = this.$cache.cont.find(".irs-grid");
            if (this.options.type === "single") {
                this.$cache.cont.append(single_html);
                this.$cache.edge = this.$cache.cont.find(".irs-bar-edge");
                this.$cache.s_single = this.$cache.cont.find(".single");
                this.$cache.from[0].style.visibility = "hidden";
                this.$cache.to[0].style.visibility = "hidden";
                this.$cache.shad_single = this.$cache.cont.find(".shadow-single");
            } else {
                this.$cache.cont.append(double_html);
                this.$cache.s_from = this.$cache.cont.find(".from");
                this.$cache.s_to = this.$cache.cont.find(".to");
                this.$cache.shad_from = this.$cache.cont.find(".shadow-from");
                this.$cache.shad_to = this.$cache.cont.find(".shadow-to");
                this.setTopHandler();
            }
            if (this.options.hide_from_to) {
                this.$cache.from[0].style.display = "none";
                this.$cache.to[0].style.display = "none";
                this.$cache.single[0].style.display = "none";
            }
            this.appendGrid();
            if (this.options.disable) {
                this.appendDisableMask();
                this.$cache.input[0].disabled = true;
            } else {
                this.$cache.cont.removeClass("irs-disabled");
                this.$cache.input[0].disabled = false;
                this.bindEvents();
            }
        }, setTopHandler: function () {
            var min = this.options.min, max = this.options.max, from = this.options.from, to = this.options.to;
            if (from > min && to === max) {
                this.$cache.s_from.addClass("type_last");
            } else if (to < max) {
                this.$cache.s_to.addClass("type_last");
            }
        }, appendDisableMask: function () {
            this.$cache.cont.append(disable_html);
            this.$cache.cont.addClass("irs-disabled");
        }, remove: function () {
            this.$cache.cont.remove();
            this.$cache.cont = null;
            this.$cache.line.off("keydown.irs_" + this.plugin_count);
            this.$cache.body.off("touchmove.irs_" + this.plugin_count);
            this.$cache.body.off("mousemove.irs_" + this.plugin_count);
            this.$cache.win.off("touchend.irs_" + this.plugin_count);
            this.$cache.win.off("mouseup.irs_" + this.plugin_count);
            if (is_old_ie) {
                this.$cache.body.off("mouseup.irs_" + this.plugin_count);
                this.$cache.body.off("mouseleave.irs_" + this.plugin_count);
            }
            this.$cache.grid_labels = [];
            this.coords.big = [];
            this.coords.big_w = [];
            this.coords.big_p = [];
            this.coords.big_x = [];
            cancelAnimationFrame(this.raf_id);
        }, bindEvents: function () {
            this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this));
            this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this));
            this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this));
            this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));
            this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
            this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
            if (this.options.drag_interval && this.options.type === "double") {
                this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"));
                this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"));
            } else {
                this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
            }
            if (this.options.type === "single") {
                this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
            } else {
                this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
                this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
                this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
                this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
                this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
            }
            if (this.options.keyboard) {
                this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard"));
            }
            if (is_old_ie) {
                this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));
                this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this));
            }
        }, pointerMove: function (e) {
            if (!this.dragging) {
                return;
            }
            var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
            this.coords.x_pointer = x - this.coords.x_gap;
            this.calc();
        }, pointerUp: function (e) {
            if (this.current_plugin !== this.plugin_count) {
                return;
            }
            if (this.is_active) {
                this.is_active = false;
            } else {
                return;
            }
            if ($.contains(this.$cache.cont[0], e.target) || this.dragging) {
                this.is_finish = true;
                this.callOnFinish();
            }
            this.$cache.cont.find(".state_hover").removeClass("state_hover");
            this.force_redraw = true;
            this.dragging = false;
            if (is_old_ie) {
                $("*").prop("unselectable", false);
            }
            this.updateScene();
        }, changeLevel: function (target) {
            switch (target) {
                case"single":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single);
                    break;
                case"from":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from);
                    this.$cache.s_from.addClass("state_hover");
                    this.$cache.s_from.addClass("type_last");
                    this.$cache.s_to.removeClass("type_last");
                    break;
                case"to":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to);
                    this.$cache.s_to.addClass("state_hover");
                    this.$cache.s_to.addClass("type_last");
                    this.$cache.s_from.removeClass("type_last");
                    break;
                case"both":
                    this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from);
                    this.coords.p_gap_right = this.toFixed(this.coords.p_to - this.coords.p_pointer);
                    this.$cache.s_to.removeClass("type_last");
                    this.$cache.s_from.removeClass("type_last");
                    break;
            }
        }, pointerDown: function (target, e) {
            e.preventDefault();
            var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
            if (e.button === 2) {
                return;
            }
            this.current_plugin = this.plugin_count;
            this.target = target;
            this.is_active = true;
            this.dragging = true;
            this.coords.x_gap = this.$cache.rs.offset().left;
            this.coords.x_pointer = x - this.coords.x_gap;
            this.calcPointer();
            this.changeLevel(target);
            if (is_old_ie) {
                $("*").prop("unselectable", true);
            }
            this.$cache.line.trigger("focus");
            this.updateScene();
        }, pointerClick: function (target, e) {
            e.preventDefault();
            var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
            if (e.button === 2) {
                return;
            }
            this.current_plugin = this.plugin_count;
            this.target = target;
            this.is_click = true;
            this.coords.x_gap = this.$cache.rs.offset().left;
            this.coords.x_pointer = +(x - this.coords.x_gap).toFixed();
            this.force_redraw = true;
            this.calc();
            this.$cache.line.trigger("focus");
        }, key: function (target, e) {
            if (this.current_plugin !== this.plugin_count || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) {
                return;
            }
            switch (e.which) {
                case 83:
                case 65:
                case 40:
                case 37:
                    e.preventDefault();
                    this.moveByKey(false);
                    break;
                case 87:
                case 68:
                case 38:
                case 39:
                    e.preventDefault();
                    this.moveByKey(true);
                    break;
            }
            return true;
        }, moveByKey: function (right) {
            var p = this.coords.p_pointer;
            if (right) {
                p += this.options.keyboard_step;
            } else {
                p -= this.options.keyboard_step;
            }
            this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * p);
            this.is_key = true;
            this.calc();
        }, setMinMax: function () {
            if (!this.options) {
                return;
            }
            if (this.options.hide_min_max) {
                this.$cache.min[0].style.display = "none";
                this.$cache.max[0].style.display = "none";
                return;
            }
            if (this.options.values.length) {
                this.$cache.min.html(this.decorate(this.options.p_values[this.options.min]));
                this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));
            } else {
                this.$cache.min.html(this.decorate(this._prettify(this.options.min), this.options.min));
                this.$cache.max.html(this.decorate(this._prettify(this.options.max), this.options.max));
            }
            this.labels.w_min = this.$cache.min.outerWidth(false);
            this.labels.w_max = this.$cache.max.outerWidth(false);
        }, calc: function (update) {
            if (!this.options) {
                return;
            }
            this.calc_count++;
            if (this.calc_count === 10 || update) {
                this.calc_count = 0;
                this.coords.w_rs = this.$cache.rs.outerWidth(false);
                if (this.options.type === "single") {
                    this.coords.w_handle = this.$cache.s_single.outerWidth(false);
                } else {
                    this.coords.w_handle = this.$cache.s_from.outerWidth(false);
                }
            }
            if (!this.coords.w_rs) {
                return;
            }
            this.calcPointer();
            this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100);
            var real_width = 100 - this.coords.p_handle, real_x = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
            if (this.target === "click") {
                this.coords.p_gap = this.coords.p_handle / 2;
                real_x = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
                this.target = this.chooseHandle(real_x);
            }
            if (real_x < 0) {
                real_x = 0;
            } else if (real_x > real_width) {
                real_x = real_width;
            }
            switch (this.target) {
                case"base":
                    var w = (this.options.max - this.options.min) / 100, f = (this.result.from - this.options.min) / w, t = (this.result.to - this.options.min) / w;
                    this.coords.p_single_real = this.toFixed(f);
                    this.coords.p_from_real = this.toFixed(f);
                    this.coords.p_to_real = this.toFixed(t);
                    this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);
                    this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                    this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
                    this.coords.p_single = this.toFixed(f - (this.coords.p_handle / 100 * f));
                    this.coords.p_from = this.toFixed(f - (this.coords.p_handle / 100 * f));
                    this.coords.p_to = this.toFixed(t - (this.coords.p_handle / 100 * t));
                    this.target = null;
                    break;
                case"single":
                    if (this.options.from_fixed) {
                        break;
                    }
                    this.coords.p_single_real = this.calcWithStep(real_x / real_width * 100);
                    this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);
                    this.coords.p_single = this.toFixed(this.coords.p_single_real / 100 * real_width);
                    break;
                case"from":
                    if (this.options.from_fixed) {
                        break;
                    }
                    this.coords.p_from_real = this.calcWithStep(real_x / real_width * 100);
                    if (this.coords.p_from_real > this.coords.p_to_real) {
                        this.coords.p_from_real = this.coords.p_to_real;
                    }
                    this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                    this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
                    this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
                    this.coords.p_from = this.toFixed(this.coords.p_from_real / 100 * real_width);
                    break;
                case"to":
                    if (this.options.to_fixed) {
                        break;
                    }
                    this.coords.p_to_real = this.calcWithStep(real_x / real_width * 100);
                    if (this.coords.p_to_real < this.coords.p_from_real) {
                        this.coords.p_to_real = this.coords.p_from_real;
                    }
                    this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
                    this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
                    this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
                    this.coords.p_to = this.toFixed(this.coords.p_to_real / 100 * real_width);
                    break;
                case"both":
                    if (this.options.from_fixed || this.options.to_fixed) {
                        break;
                    }
                    real_x = this.toFixed(real_x + (this.coords.p_handle * 0.1));
                    this.coords.p_from_real = this.calcWithStep((real_x - this.coords.p_gap_left) / real_width * 100);
                    this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                    this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
                    this.coords.p_from = this.toFixed(this.coords.p_from_real / 100 * real_width);
                    this.coords.p_to_real = this.calcWithStep((real_x + this.coords.p_gap_right) / real_width * 100);
                    this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
                    this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
                    this.coords.p_to = this.toFixed(this.coords.p_to_real / 100 * real_width);
                    break;
            }
            if (this.options.type === "single") {
                this.coords.p_bar_x = (this.coords.p_handle / 2);
                this.coords.p_bar_w = this.coords.p_single;
                this.result.from_percent = this.coords.p_single_real;
                this.result.from = this.calcReal(this.coords.p_single_real);
                if (this.options.values.length) {
                    this.result.from_value = this.options.values[this.result.from];
                }
            } else {
                this.coords.p_bar_x = this.toFixed(this.coords.p_from + (this.coords.p_handle / 2));
                this.coords.p_bar_w = this.toFixed(this.coords.p_to - this.coords.p_from);
                this.result.from_percent = this.coords.p_from_real;
                this.result.from = this.calcReal(this.coords.p_from_real);
                this.result.to_percent = this.coords.p_to_real;
                this.result.to = this.calcReal(this.coords.p_to_real);
                if (this.options.values.length) {
                    this.result.from_value = this.options.values[this.result.from];
                    this.result.to_value = this.options.values[this.result.to];
                }
            }
            this.calcMinMax();
            this.calcLabels();
        }, calcPointer: function () {
            if (!this.coords.w_rs) {
                this.coords.p_pointer = 0;
                return;
            }
            if (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer)) {
                this.coords.x_pointer = 0;
            } else if (this.coords.x_pointer > this.coords.w_rs) {
                this.coords.x_pointer = this.coords.w_rs;
            }
            this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100);
        }, chooseHandle: function (real_x) {
            if (this.options.type === "single") {
                return "single";
            } else {
                var m_point = this.coords.p_from_real + ((this.coords.p_to_real - this.coords.p_from_real) / 2);
                if (real_x >= m_point) {
                    return this.options.to_fixed ? "from" : "to";
                } else {
                    return this.options.from_fixed ? "to" : "from";
                }
            }
        }, calcMinMax: function () {
            if (!this.coords.w_rs) {
                return;
            }
            this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100;
            this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100;
        }, calcLabels: function () {
            if (!this.coords.w_rs || this.options.hide_from_to) {
                return;
            }
            if (this.options.type === "single") {
                this.labels.w_single = this.$cache.single.outerWidth(false);
                this.labels.p_single = this.labels.w_single / this.coords.w_rs * 100;
                this.labels.p_single_left = this.coords.p_single + (this.coords.p_handle / 2) - (this.labels.p_single / 2);
                this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single);
            } else {
                this.labels.w_from = this.$cache.from.outerWidth(false);
                this.labels.p_from = this.labels.w_from / this.coords.w_rs * 100;
                this.labels.p_from_left = this.coords.p_from + (this.coords.p_handle / 2) - (this.labels.p_from / 2);
                this.labels.p_from_left = this.toFixed(this.labels.p_from_left);
                this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from);
                this.labels.w_to = this.$cache.to.outerWidth(false);
                this.labels.p_to = this.labels.w_to / this.coords.w_rs * 100;
                this.labels.p_to_left = this.coords.p_to + (this.coords.p_handle / 2) - (this.labels.p_to / 2);
                this.labels.p_to_left = this.toFixed(this.labels.p_to_left);
                this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to);
                this.labels.w_single = this.$cache.single.outerWidth(false);
                this.labels.p_single = this.labels.w_single / this.coords.w_rs * 100;
                this.labels.p_single_left = ((this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to) / 2) - (this.labels.p_single / 2);
                this.labels.p_single_left = this.toFixed(this.labels.p_single_left);
                this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single);
            }
        }, updateScene: function () {
            if (this.raf_id) {
                cancelAnimationFrame(this.raf_id);
                this.raf_id = null;
            }
            clearTimeout(this.update_tm);
            this.update_tm = null;
            if (!this.options) {
                return;
            }
            this.drawHandles();
            if (this.is_active) {
                this.raf_id = requestAnimationFrame(this.updateScene.bind(this));
            } else {
                this.update_tm = setTimeout(this.updateScene.bind(this), 300);
            }
        }, drawHandles: function () {
            this.coords.w_rs = this.$cache.rs.outerWidth(false);
            if (!this.coords.w_rs) {
                return;
            }
            if (this.coords.w_rs !== this.coords.w_rs_old) {
                this.target = "base";
                this.is_resize = true;
            }
            if (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) {
                this.setMinMax();
                this.calc(true);
                this.drawLabels();
                if (this.options.grid) {
                    this.calcGridMargin();
                    this.calcGridLabels();
                }
                this.force_redraw = true;
                this.coords.w_rs_old = this.coords.w_rs;
                this.drawShadow();
            }
            if (!this.coords.w_rs) {
                return;
            }
            if (!this.dragging && !this.force_redraw && !this.is_key) {
                return;
            }
            if (this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) {
                this.drawLabels();
                this.$cache.bar[0].style.left = this.coords.p_bar_x + "%";
                this.$cache.bar[0].style.width = this.coords.p_bar_w + "%";
                if (this.options.type === "single") {
                    this.$cache.s_single[0].style.left = this.coords.p_single + "%";
                    this.$cache.single[0].style.left = this.labels.p_single_left + "%";
                    if (this.options.values.length) {
                        this.$cache.input.prop("value", this.result.from_value);
                        this.$cache.input.data("from", this.result.from_value);
                    } else {
                        this.$cache.input.prop("value", this.result.from);
                        this.$cache.input.data("from", this.result.from);
                    }
                } else {
                    this.$cache.s_from[0].style.left = this.coords.p_from + "%";
                    this.$cache.s_to[0].style.left = this.coords.p_to + "%";
                    if (this.old_from !== this.result.from || this.force_redraw) {
                        this.$cache.from[0].style.left = this.labels.p_from_left + "%";
                    }
                    if (this.old_to !== this.result.to || this.force_redraw) {
                        this.$cache.to[0].style.left = this.labels.p_to_left + "%";
                    }
                    this.$cache.single[0].style.left = this.labels.p_single_left + "%";
                    if (this.options.values.length) {
                        this.$cache.input.prop("value", this.result.from_value + ";" + this.result.to_value);
                        this.$cache.input.data("from", this.result.from_value);
                        this.$cache.input.data("to", this.result.to_value);
                    } else {
                        this.$cache.input.prop("value", this.result.from + ";" + this.result.to);
                        this.$cache.input.data("from", this.result.from);
                        this.$cache.input.data("to", this.result.to);
                    }
                }
                if ((this.old_from !== this.result.from || this.old_to !== this.result.to) && !this.is_start) {
                    this.$cache.input.trigger("change");
                }
                this.old_from = this.result.from;
                this.old_to = this.result.to;
                if (!this.is_resize && !this.is_update && !this.is_start && !this.is_finish) {
                    this.callOnChange();
                }
                if (this.is_key || this.is_click) {
                    this.callOnFinish();
                }
                this.is_update = false;
                this.is_resize = false;
                this.is_finish = false;
            }
            this.is_start = false;
            this.is_key = false;
            this.is_click = false;
            this.force_redraw = false;
        }, callOnStart: function () {
            if (this.options.onStart && typeof this.options.onStart === "function") {
                this.options.onStart(this.result);
            }
        }, callOnChange: function () {
            if (this.options.onChange && typeof this.options.onChange === "function") {
                this.options.onChange(this.result);
            }
        }, callOnFinish: function () {
            if (this.options.onFinish && typeof this.options.onFinish === "function") {
                this.options.onFinish(this.result);
            }
        }, callOnUpdate: function () {
            if (this.options.onUpdate && typeof this.options.onUpdate === "function") {
                this.options.onUpdate(this.result);
            }
        }, drawLabels: function () {
            if (!this.options) {
                return;
            }
            var values_num = this.options.values.length, p_values = this.options.p_values, text_single, text_from, text_to;
            if (this.options.hide_from_to) {
                return;
            }
            if (this.options.type === "single") {
                if (values_num) {
                    text_single = this.decorate(p_values[this.result.from]);
                    this.$cache.single.html(text_single);
                } else {
                    text_single = this.decorate(this._prettify(this.result.from), this.result.from);
                    this.$cache.single.html(text_single);
                }
                this.calcLabels();
                if (this.labels.p_single_left < this.labels.p_min + 1) {
                    this.$cache.min[0].style.visibility = "hidden";
                } else {
                    this.$cache.min[0].style.visibility = "visible";
                }
                if (this.labels.p_single_left + this.labels.p_single > 100 - this.labels.p_max - 1) {
                    this.$cache.max[0].style.visibility = "hidden";
                } else {
                    this.$cache.max[0].style.visibility = "visible";
                }
            } else {
                if (values_num) {
                    if (this.options.decorate_both) {
                        text_single = this.decorate(p_values[this.result.from]);
                        text_single += this.options.values_separator;
                        text_single += this.decorate(p_values[this.result.to]);
                    } else {
                        text_single = this.decorate(p_values[this.result.from] + this.options.values_separator + p_values[this.result.to]);
                    }
                    text_from = this.decorate(p_values[this.result.from]);
                    text_to = this.decorate(p_values[this.result.to]);
                    this.$cache.single.html(text_single);
                    this.$cache.from.html(text_from);
                    this.$cache.to.html(text_to);
                } else {
                    if (this.options.decorate_both) {
                        text_single = this.decorate(this._prettify(this.result.from), this.result.from);
                        text_single += this.options.values_separator;
                        text_single += this.decorate(this._prettify(this.result.to), this.result.to);
                    } else {
                        text_single = this.decorate(this._prettify(this.result.from) + this.options.values_separator + this._prettify(this.result.to), this.result.to);
                    }
                    text_from = this.decorate(this._prettify(this.result.from), this.result.from);
                    text_to = this.decorate(this._prettify(this.result.to), this.result.to);
                    this.$cache.single.html(text_single);
                    this.$cache.from.html(text_from);
                    this.$cache.to.html(text_to);
                }
                this.calcLabels();
                var min = Math.min(this.labels.p_single_left, this.labels.p_from_left), single_left = this.labels.p_single_left + this.labels.p_single, to_left = this.labels.p_to_left + this.labels.p_to, max = Math.max(single_left, to_left);
                if (this.labels.p_from_left + this.labels.p_from >= this.labels.p_to_left) {
                    this.$cache.from[0].style.visibility = "hidden";
                    this.$cache.to[0].style.visibility = "hidden";
                    this.$cache.single[0].style.visibility = "visible";
                    if (this.result.from === this.result.to) {
                        this.$cache.from[0].style.visibility = "visible";
                        this.$cache.single[0].style.visibility = "hidden";
                        max = to_left;
                    } else {
                        this.$cache.from[0].style.visibility = "hidden";
                        this.$cache.single[0].style.visibility = "visible";
                        max = Math.max(single_left, to_left);
                    }
                } else {
                    this.$cache.from[0].style.visibility = "visible";
                    this.$cache.to[0].style.visibility = "visible";
                    this.$cache.single[0].style.visibility = "hidden";
                }
                if (min < this.labels.p_min + 1) {
                    this.$cache.min[0].style.visibility = "hidden";
                } else {
                    this.$cache.min[0].style.visibility = "visible";
                }
                if (max > 100 - this.labels.p_max - 1) {
                    this.$cache.max[0].style.visibility = "hidden";
                } else {
                    this.$cache.max[0].style.visibility = "visible";
                }
            }
        }, drawShadow: function () {
            var o = this.options, c = this.$cache, is_from_min = typeof o.from_min === "number" && !isNaN(o.from_min), is_from_max = typeof o.from_max === "number" && !isNaN(o.from_max), is_to_min = typeof o.to_min === "number" && !isNaN(o.to_min), is_to_max = typeof o.to_max === "number" && !isNaN(o.to_max), from_min, from_max, to_min, to_max;
            if (o.type === "single") {
                if (o.from_shadow && (is_from_min || is_from_max)) {
                    from_min = this.calcPercent(is_from_min ? o.from_min : o.min);
                    from_max = this.calcPercent(is_from_max ? o.from_max : o.max) - from_min;
                    from_min = this.toFixed(from_min - (this.coords.p_handle / 100 * from_min));
                    from_max = this.toFixed(from_max - (this.coords.p_handle / 100 * from_max));
                    from_min = from_min + (this.coords.p_handle / 2);
                    c.shad_single[0].style.display = "block";
                    c.shad_single[0].style.left = from_min + "%";
                    c.shad_single[0].style.width = from_max + "%";
                } else {
                    c.shad_single[0].style.display = "none";
                }
            } else {
                if (o.from_shadow && (is_from_min || is_from_max)) {
                    from_min = this.calcPercent(is_from_min ? o.from_min : o.min);
                    from_max = this.calcPercent(is_from_max ? o.from_max : o.max) - from_min;
                    from_min = this.toFixed(from_min - (this.coords.p_handle / 100 * from_min));
                    from_max = this.toFixed(from_max - (this.coords.p_handle / 100 * from_max));
                    from_min = from_min + (this.coords.p_handle / 2);
                    c.shad_from[0].style.display = "block";
                    c.shad_from[0].style.left = from_min + "%";
                    c.shad_from[0].style.width = from_max + "%";
                } else {
                    c.shad_from[0].style.display = "none";
                }
                if (o.to_shadow && (is_to_min || is_to_max)) {
                    to_min = this.calcPercent(is_to_min ? o.to_min : o.min);
                    to_max = this.calcPercent(is_to_max ? o.to_max : o.max) - to_min;
                    to_min = this.toFixed(to_min - (this.coords.p_handle / 100 * to_min));
                    to_max = this.toFixed(to_max - (this.coords.p_handle / 100 * to_max));
                    to_min = to_min + (this.coords.p_handle / 2);
                    c.shad_to[0].style.display = "block";
                    c.shad_to[0].style.left = to_min + "%";
                    c.shad_to[0].style.width = to_max + "%";
                } else {
                    c.shad_to[0].style.display = "none";
                }
            }
        }, toggleInput: function () {
            this.$cache.input.toggleClass("irs-hidden-input");
        }, calcPercent: function (num) {
            var w = (this.options.max - this.options.min) / 100, percent = (num - this.options.min) / w;
            return this.toFixed(percent);
        }, calcReal: function (percent) {
            var min = this.options.min, max = this.options.max, min_decimals = min.toString().split(".")[1], max_decimals = max.toString().split(".")[1], min_length, max_length, avg_decimals = 0, abs = 0;
            if (percent === 0) {
                return this.options.min;
            }
            if (percent === 100) {
                return this.options.max;
            }
            if (min_decimals) {
                min_length = min_decimals.length;
                avg_decimals = min_length;
            }
            if (max_decimals) {
                max_length = max_decimals.length;
                avg_decimals = max_length;
            }
            if (min_length && max_length) {
                avg_decimals = (min_length >= max_length) ? min_length : max_length;
            }
            if (min < 0) {
                abs = Math.abs(min);
                min = +(min + abs).toFixed(avg_decimals);
                max = +(max + abs).toFixed(avg_decimals);
            }
            var number = ((max - min) / 100 * percent) + min, string = this.options.step.toString().split(".")[1], result;
            if (string) {
                number = +number.toFixed(string.length);
            } else {
                number = number / this.options.step;
                number = number * this.options.step;
                number = +number.toFixed(0);
            }
            if (abs) {
                number -= abs;
            }
            if (string) {
                result = +number.toFixed(string.length);
            } else {
                result = this.toFixed(number);
            }
            if (result < this.options.min) {
                result = this.options.min;
            } else if (result > this.options.max) {
                result = this.options.max;
            }
            return result;
        }, calcWithStep: function (percent) {
            var rounded = Math.round(percent / this.coords.p_step) * this.coords.p_step;
            if (rounded > 100) {
                rounded = 100;
            }
            if (percent === 100) {
                rounded = 100;
            }
            return this.toFixed(rounded);
        }, checkMinInterval: function (p_current, p_next, type) {
            var o = this.options, current, next;
            if (!o.min_interval) {
                return p_current;
            }
            current = this.calcReal(p_current);
            next = this.calcReal(p_next);
            if (type === "from") {
                if (next - current < o.min_interval) {
                    current = next - o.min_interval;
                }
            } else {
                if (current - next < o.min_interval) {
                    current = next + o.min_interval;
                }
            }
            return this.calcPercent(current);
        }, checkMaxInterval: function (p_current, p_next, type) {
            var o = this.options, current, next;
            if (!o.max_interval) {
                return p_current;
            }
            current = this.calcReal(p_current);
            next = this.calcReal(p_next);
            if (type === "from") {
                if (next - current > o.max_interval) {
                    current = next - o.max_interval;
                }
            } else {
                if (current - next > o.max_interval) {
                    current = next + o.max_interval;
                }
            }
            return this.calcPercent(current);
        }, checkDiapason: function (p_num, min, max) {
            var num = this.calcReal(p_num), o = this.options;
            if (typeof min !== "number") {
                min = o.min;
            }
            if (typeof max !== "number") {
                max = o.max;
            }
            if (num < min) {
                num = min;
            }
            if (num > max) {
                num = max;
            }
            return this.calcPercent(num);
        }, toFixed: function (num) {
            num = num.toFixed(9);
            return +num;
        }, _prettify: function (num) {
            if (!this.options.prettify_enabled) {
                return num;
            }
            if (this.options.prettify && typeof this.options.prettify === "function") {
                return this.options.prettify(num);
            } else {
                return this.prettify(num);
            }
        }, prettify: function (num) {
            var n = num.toString();
            return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator);
        }, checkEdges: function (left, width) {
            if (!this.options.force_edges) {
                return this.toFixed(left);
            }
            if (left < 0) {
                left = 0;
            } else if (left > 100 - width) {
                left = 100 - width;
            }
            return this.toFixed(left);
        }, validate: function () {
            var o = this.options, r = this.result, v = o.values, vl = v.length, value, i;
            if (typeof o.min === "string") o.min = +o.min;
            if (typeof o.max === "string") o.max = +o.max;
            if (typeof o.from === "string") o.from = +o.from;
            if (typeof o.to === "string") o.to = +o.to;
            if (typeof o.step === "string") o.step = +o.step;
            if (typeof o.from_min === "string") o.from_min = +o.from_min;
            if (typeof o.from_max === "string") o.from_max = +o.from_max;
            if (typeof o.to_min === "string") o.to_min = +o.to_min;
            if (typeof o.to_max === "string") o.to_max = +o.to_max;
            if (typeof o.keyboard_step === "string") o.keyboard_step = +o.keyboard_step;
            if (typeof o.grid_num === "string") o.grid_num = +o.grid_num;
            if (o.max <= o.min) {
                if (o.min) {
                    o.max = o.min * 2;
                } else {
                    o.max = o.min + 1;
                }
                o.step = 1;
            }
            if (vl) {
                o.p_values = [];
                o.min = 0;
                o.max = vl - 1;
                o.step = 1;
                o.grid_num = o.max;
                o.grid_snap = true;
                for (i = 0; i < vl; i++) {
                    value = +v[i];
                    if (!isNaN(value)) {
                        v[i] = value;
                        value = this._prettify(value);
                    } else {
                        value = v[i];
                    }
                    o.p_values.push(value);
                }
            }
            if (typeof o.from !== "number" || isNaN(o.from)) {
                o.from = o.min;
            }
            if (typeof o.to !== "number" || isNaN(o.from)) {
                o.to = o.max;
            }
            if (o.type === "single") {
                if (o.from < o.min) {
                    o.from = o.min;
                }
                if (o.from > o.max) {
                    o.from = o.max;
                }
            } else {
                if (o.from < o.min || o.from > o.max) {
                    o.from = o.min;
                }
                if (o.to > o.max || o.to < o.min) {
                    o.to = o.max;
                }
                if (o.from > o.to) {
                    o.from = o.to;
                }
            }
            if (typeof o.step !== "number" || isNaN(o.step) || !o.step || o.step < 0) {
                o.step = 1;
            }
            if (typeof o.keyboard_step !== "number" || isNaN(o.keyboard_step) || !o.keyboard_step || o.keyboard_step < 0) {
                o.keyboard_step = 5;
            }
            if (typeof o.from_min === "number" && o.from < o.from_min) {
                o.from = o.from_min;
            }
            if (typeof o.from_max === "number" && o.from > o.from_max) {
                o.from = o.from_max;
            }
            if (typeof o.to_min === "number" && o.to < o.to_min) {
                o.to = o.to_min;
            }
            if (typeof o.to_max === "number" && o.from > o.to_max) {
                o.to = o.to_max;
            }
            if (r) {
                if (r.min !== o.min) {
                    r.min = o.min;
                }
                if (r.max !== o.max) {
                    r.max = o.max;
                }
                if (r.from < r.min || r.from > r.max) {
                    r.from = o.from;
                }
                if (r.to < r.min || r.to > r.max) {
                    r.to = o.to;
                }
            }
            if (typeof o.min_interval !== "number" || isNaN(o.min_interval) || !o.min_interval || o.min_interval < 0) {
                o.min_interval = 0;
            }
            if (typeof o.max_interval !== "number" || isNaN(o.max_interval) || !o.max_interval || o.max_interval < 0) {
                o.max_interval = 0;
            }
            if (o.min_interval && o.min_interval > o.max - o.min) {
                o.min_interval = o.max - o.min;
            }
            if (o.max_interval && o.max_interval > o.max - o.min) {
                o.max_interval = o.max - o.min;
            }
        }, decorate: function (num, original) {
            var decorated = "", o = this.options;
            if (o.prefix) {
                decorated += o.prefix;
            }
            decorated += num;
            if (o.max_postfix) {
                if (o.values.length && num === o.p_values[o.max]) {
                    decorated += o.max_postfix;
                    if (o.postfix) {
                        decorated += " ";
                    }
                } else if (original === o.max) {
                    decorated += o.max_postfix;
                    if (o.postfix) {
                        decorated += " ";
                    }
                }
            }
            if (o.postfix) {
                decorated += o.postfix;
            }
            return decorated;
        }, updateFrom: function () {
            this.result.from = this.options.from;
            this.result.from_percent = this.calcPercent(this.result.from);
            if (this.options.values) {
                this.result.from_value = this.options.values[this.result.from];
            }
        }, updateTo: function () {
            this.result.to = this.options.to;
            this.result.to_percent = this.calcPercent(this.result.to);
            if (this.options.values) {
                this.result.to_value = this.options.values[this.result.to];
            }
        }, updateResult: function () {
            this.result.min = this.options.min;
            this.result.max = this.options.max;
            this.updateFrom();
            this.updateTo();
        }, appendGrid: function () {
            if (!this.options.grid) {
                return;
            }
            var o = this.options, i, z, total = o.max - o.min, big_num = o.grid_num, big_p = 0, big_w = 0, small_max = 4, local_small_max, small_p, small_w = 0, result, html = '';
            this.calcGridMargin();
            if (o.grid_snap) {
                big_num = total / o.step;
                big_p = this.toFixed(o.step / (total / 100));
            } else {
                big_p = this.toFixed(100 / big_num);
            }
            if (big_num > 4) {
                small_max = 3;
            }
            if (big_num > 7) {
                small_max = 2;
            }
            if (big_num > 14) {
                small_max = 1;
            }
            if (big_num > 28) {
                small_max = 0;
            }
            for (i = 0; i < big_num + 1; i++) {
                local_small_max = small_max;
                big_w = this.toFixed(big_p * i);
                if (big_w > 100) {
                    big_w = 100;
                    local_small_max -= 2;
                    if (local_small_max < 0) {
                        local_small_max = 0;
                    }
                }
                this.coords.big[i] = big_w;
                small_p = (big_w - (big_p * (i - 1))) / (local_small_max + 1);
                for (z = 1; z <= local_small_max; z++) {
                    if (big_w === 0) {
                        break;
                    }
                    small_w = this.toFixed(big_w - (small_p * z));
                    html += '<span class="irs-grid-pol small" style="left: ' + small_w + '%"></span>';
                }
                html += '<span class="irs-grid-pol" style="left: ' + big_w + '%"></span>';
                result = this.calcReal(big_w);
                if (o.values.length) {
                    result = o.p_values[result];
                } else {
                    result = this._prettify(result);
                }
                html += '<span class="irs-grid-text js-grid-text-' + i + '" style="left: ' + big_w + '%">' + result + '</span>';
            }
            this.coords.big_num = Math.ceil(big_num + 1);
            this.$cache.cont.addClass("irs-with-grid");
            this.$cache.grid.html(html);
            this.cacheGridLabels();
        }, cacheGridLabels: function () {
            var $label, i, num = this.coords.big_num;
            for (i = 0; i < num; i++) {
                $label = this.$cache.grid.find(".js-grid-text-" + i);
                this.$cache.grid_labels.push($label);
            }
            this.calcGridLabels();
        }, calcGridLabels: function () {
            var i, label, start = [], finish = [], num = this.coords.big_num;
            for (i = 0; i < num; i++) {
                this.coords.big_w[i] = this.$cache.grid_labels[i].outerWidth(false);
                this.coords.big_p[i] = this.toFixed(this.coords.big_w[i] / this.coords.w_rs * 100);
                this.coords.big_x[i] = this.toFixed(this.coords.big_p[i] / 2);
                start[i] = this.toFixed(this.coords.big[i] - this.coords.big_x[i]);
                finish[i] = this.toFixed(start[i] + this.coords.big_p[i]);
            }
            if (this.options.force_edges) {
                if (start[0] < -this.coords.grid_gap) {
                    start[0] = -this.coords.grid_gap;
                    finish[0] = this.toFixed(start[0] + this.coords.big_p[0]);
                    this.coords.big_x[0] = this.coords.grid_gap;
                }
                if (finish[num - 1] > 100 + this.coords.grid_gap) {
                    finish[num - 1] = 100 + this.coords.grid_gap;
                    start[num - 1] = this.toFixed(finish[num - 1] - this.coords.big_p[num - 1]);
                    this.coords.big_x[num - 1] = this.toFixed(this.coords.big_p[num - 1] - this.coords.grid_gap);
                }
            }
            this.calcGridCollision(2, start, finish);
            this.calcGridCollision(4, start, finish);
            for (i = 0; i < num; i++) {
                label = this.$cache.grid_labels[i][0];
                label.style.marginLeft = -this.coords.big_x[i] + "%";
            }
        }, calcGridCollision: function (step, start, finish) {
            var i, next_i, label, num = this.coords.big_num;
            for (i = 0; i < num; i += step) {
                next_i = i + (step / 2);
                if (next_i >= num) {
                    break;
                }
                label = this.$cache.grid_labels[next_i][0];
                if (finish[i] <= start[next_i]) {
                    label.style.visibility = "visible";
                } else {
                    label.style.visibility = "hidden";
                }
            }
        }, calcGridMargin: function () {
            if (!this.options.grid_margin) {
                return;
            }
            this.coords.w_rs = this.$cache.rs.outerWidth(false);
            if (!this.coords.w_rs) {
                return;
            }
            if (this.options.type === "single") {
                this.coords.w_handle = this.$cache.s_single.outerWidth(false);
            } else {
                this.coords.w_handle = this.$cache.s_from.outerWidth(false);
            }
            this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100);
            this.coords.grid_gap = this.toFixed((this.coords.p_handle / 2) - 0.1);
            this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%";
            this.$cache.grid[0].style.left = this.coords.grid_gap + "%";
        }, update: function (options) {
            if (!this.input) {
                return;
            }
            this.is_update = true;
            this.options.from = this.result.from;
            this.options.to = this.result.to;
            this.options = $.extend(this.options, options);
            this.validate();
            this.updateResult(options);
            this.toggleInput();
            this.remove();
            this.init(true);
        }, reset: function () {
            if (!this.input) {
                return;
            }
            this.updateResult();
            this.update();
        }, destroy: function () {
            if (!this.input) {
                return;
            }
            this.toggleInput();
            this.$cache.input.prop("readonly", false);
            $.data(this.input, "ionRangeSlider", null);
            this.remove();
            this.input = null;
            this.options = null;
        }
    };
    $.fn.ionRangeSlider = function (options) {
        return this.each(function () {
            if (!$.data(this, "ionRangeSlider")) {
                $.data(this, "ionRangeSlider", new IonRangeSlider(this, options, plugin_count++));
            }
        });
    };
    (function () {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
        }
        if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
        if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
    }());
}(jQuery, document, window, navigator));
function initRating() {
    $('.rating_1').rating({
        fx: 'full',
        image: '/frontend/images/stars2.png',
        loader: '/frontend/images/ajax-loader.gif',
        url: '/rate',
        readOnly: true,
        callback: function (responce) {
            this.vote_success.fadeOut(2000);
        }
    });
    $('.rating_2').each(function () {
        var self = $(this);
        self.rating({
            fx: 'full',
            image: '/frontend/images/hover-stars.png',
            loader: '/frontend/images/ajax-loader.gif',
            url: '/rate',
            readOnly: true,
            callback: function (responce) {
                this.vote_success.fadeOut(2000);
            }
        });
    })
}
(function ($) {
    $(function () {
        $(function () {
            initRating();
        });
        $(document).ready(function () {
            $('.modal-trigger').leanModal();
            $('.tabs-wrapper').pushpin({top: $('.tabs-wrapper').offset().top});
            $('.collapsible').collapsible({accordion: false});
            $('ul.tabs').tabs();
        });
        $('.button-collapse').sideNav({menuWidth: 300});
        $(window).on('keyup', function (key) {
            if (key.keyCode === 13) {
                glide.jump(3, console.log('Wooo!'));
            }
            ;
        });
        $('.slider-arrow').on('click', function () {
            console.log(glide.current());
        });
        new WOW().init();
        jQuery(document).ready(function ($) {
            $('<style>' + '.scrollTop{ display:none; z-index:9999; position:fixed;' + 'bottom:30px; right:2%; width:50px; height:50px;' + 'background:url(/frontend/images/arrows-top.png) 0 0 no-repeat; }' + '.scrollTop:hover{ background-position:0 -60px;}' + '</style>').appendTo('body');
            var
                speed = 500, $scrollTop = $('<a href="#" class="scrollTop">').appendTo('body');
            $scrollTop.click(function (e) {
                e.preventDefault();
                $('html:not(:animated),body:not(:animated)').animate({scrollTop: 0}, speed);
            });
            function show_scrollTop() {
                ($(window).scrollTop() > 300) ? $scrollTop.fadeIn(600) : $scrollTop.fadeOut(600);
            }

            $(window).scroll(function () {
                show_scrollTop();
            });
            show_scrollTop();
        });
        var glide = $('.slider3').glide().data('api_glide');
        $(".slider3").css("display", "block");
        $('.slider2').glide({autoplay: 5000});
        var glide = $('.slider2').glide().data('api_glide');
        $('.slider2').glide({autoplay: 8000});
        $(".slider2").css("display", "block");
        $('select').material_select();
        $('.partners').slick({
            dots: true,
            speed: 300,
            autoplay: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            responsive: [{
                breakpoint: 993,
                settings: {slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true}
            }, {breakpoint: 800, settings: {slidesToShow: 3, slidesToScroll: 1}}, {
                breakpoint: 600,
                settings: {slidesToShow: 1, slidesToScroll: 1}
            }]
        });
        $('.responsive').slick({
            dots: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            responsive: [{
                breakpoint: 993,
                settings: {slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true}
            }, {breakpoint: 800, settings: {slidesToShow: 2, slidesToScroll: 2}}, {
                breakpoint: 600,
                settings: {slidesToShow: 1, slidesToScroll: 1}
            }]
        });
        $('.vertical-crousel').slick({
            infinite: false,
            vertical: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            responsive: [{breakpoint: 1155, settings: {slidesToShow: 3, slidesToScroll: 1}}]
        });
        $('.related-products').slick({
            dots: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 6000,
            responsive: [{
                breakpoint: 1200,
                settings: {slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: false}
            }, {
                breakpoint: 993,
                settings: {slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: false}
            }, {breakpoint: 600, settings: {slidesToShow: 1, slidesToScroll: 1}}, {
                breakpoint: 480,
                settings: {slidesToShow: 1, slidesToScroll: 1}
            }]
        });
    });
})(jQuery);
;(function(c){"function"===typeof define&&define.amd?define(["jquery"],c):"object"===typeof exports?module.exports=c:c(jQuery)})(function(c){function l(b){var a=b||window.event,h=[].slice.call(arguments,1),d=0,e=0,f=0,g=0,g=0;b=c.event.fix(a);b.type="mousewheel";a.wheelDelta&&(d=a.wheelDelta);a.detail&&(d=-1*a.detail);a.deltaY&&(d=f=-1*a.deltaY);a.deltaX&&(e=a.deltaX,d=-1*e);void 0!==a.wheelDeltaY&&(f=a.wheelDeltaY);void 0!==a.wheelDeltaX&&(e=-1*a.wheelDeltaX);g=Math.abs(d);if(!m||g<m)m=g;g=Math.max(Math.abs(f),Math.abs(e));if(!k||g<k)k=g;a=0<d?"floor":"ceil";d=Math[a](d/m);e=Math[a](e/k);f=Math[a](f/k);try{b.originalEvent.hasOwnProperty("wheelDelta")}catch(l){f=d}h.unshift(b,d,e,f);return(c.event.dispatch||c.event.handle).apply(this,h)}var n=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],m,k;if(c.event.fixHooks)for(var p=n.length;p;)c.event.fixHooks[n[--p]]=c.event.mouseHooks;c.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var b=h.length;b;)this.addEventListener(h[--b],l,!1);else this.onmousewheel=l},teardown:function(){if(this.removeEventListener)for(var b=h.length;b;)this.removeEventListener(h[--b],l,!1);else this.onmousewheel=null}};c.fn.extend({mousewheel:function(b){return b?this.bind("mousewheel",b):this.trigger("mousewheel")},unmousewheel:function(b){return this.unbind("mousewheel",b)}})});
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(s,H,f,w){var K=f("html"),q=f(s),p=f(H),b=f.fancybox=function(){b.open.apply(this,arguments)},J=navigator.userAgent.match(/msie/i),C=null,t=H.createTouch!==w,u=function(a){return a&&a.hasOwnProperty&&a instanceof f},r=function(a){return a&&"string"===f.type(a)},F=function(a){return r(a)&&0<a.indexOf("%")},m=function(a,d){var e=parseInt(a,10)||0;d&&F(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},x=function(a,b){return m(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!t,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(J?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=u(a)?f(a).get():[a]),f.each(a,function(e,c){var l={},g,h,k,n,m;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),u(c)?(l={href:c.data("fancybox-href")||c.attr("href"),title:f("<div/>").text(c.data("fancybox-title")||c.attr("title")).html(),isDom:!0,element:c},
f.metadata&&f.extend(!0,l,c.metadata())):l=c);g=d.href||l.href||(r(c)?c:null);h=d.title!==w?d.title:l.title||"";n=(k=d.content||l.content)?"html":d.type||l.type;!n&&l.isDom&&(n=c.data("fancybox-type"),n||(n=(n=c.prop("class").match(/fancybox\.(\w+)/))?n[1]:null));r(g)&&(n||(b.isImage(g)?n="image":b.isSWF(g)?n="swf":"#"===g.charAt(0)?n="inline":r(c)&&(n="html",k=c)),"ajax"===n&&(m=g.split(/\s+/,2),g=m.shift(),m=m.shift()));k||("inline"===n?g?k=f(r(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):l.isDom&&(k=c):
"html"===n?k=g:n||g||!l.isDom||(n="inline",k=c));f.extend(l,{href:g,type:n,content:k,title:h,selector:m});a[e]=l}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==w&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1===b.trigger("onCancel")||(b.hideLoading(),a&&(b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),
b.coming=null,b.current||b._afterZoomOut(a)))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(b.isOpen&&!0!==a?(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]()):(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&
(b.player.timer=setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};!0===a||!b.player.isActive&&!1!==a?b.current&&(b.current.loop||b.current.index<b.group.length-1)&&(b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")):c()},next:function(a){var d=b.current;d&&(r(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=
b.current;d&&(r(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=m(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==w&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,l;c&&(l=b._getPosition(d),a&&"scroll"===a.type?(delete l.position,c.stop(!0,!0).animate(l,200)):(c.css(l),e.pos=f.extend({},e.dim,l)))},
update:function(a){var d=a&&a.originalEvent&&a.originalEvent.type,e=!d||"orientationchange"===d;e&&(clearTimeout(C),C=null);b.isOpen&&!C&&(C=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),C=null)},e&&!t?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,t&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),
b.trigger("onUpdate")),b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){27===(a.which||a.keyCode)&&(a.preventDefault(),b.cancel())});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}));b.trigger("onLoading")},getViewport:function(){var a=b.current&&
b.current.locked||!1,d={x:q.scrollLeft(),y:q.scrollTop()};a&&a.length?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=t&&s.innerWidth?s.innerWidth:q.width(),d.h=t&&s.innerHeight?s.innerHeight:q.height());return d},unbindEvents:function(){b.wrap&&u(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");q.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(q.bind("orientationchange.fb"+(t?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=
e.which||e.keyCode,l=e.target||e.srcElement;if(27===c&&b.coming)return!1;e.ctrlKey||e.altKey||e.shiftKey||e.metaKey||l&&(l.type||f(l).is("[contenteditable]"))||f.each(d,function(d,l){if(1<a.group.length&&l[c]!==w)return b[d](l[c]),e.preventDefault(),!1;if(-1<f.inArray(c,l))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,l,g){for(var h=f(d.target||null),k=!1;h.length&&!(k||h.is(".fancybox-skin")||h.is(".fancybox-wrap"));)k=h[0]&&!(h[0].style.overflow&&
"hidden"===h[0].style.overflow)&&(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();0!==c&&!k&&1<b.group.length&&!a.canShrink&&(0<g||0<l?b.prev(0<g?"down":"left"):(0>g||0>l)&&b.next(0>g?"up":"right"),d.preventDefault())}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&
b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,{},b.helpers[d].defaults,e),c)})}p.trigger(a)},isImage:function(a){return r(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return r(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=m(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,
c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===
c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=!0);"iframe"===c&&t&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(t?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,x(d.padding[a]))});b.trigger("onReady");
if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=
this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,
d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",t?"auto":a.iframe.scrolling).attr("src",a.href);f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);t||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||
b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,l,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
b.unbindEvents();e=a.content;c=a.type;l=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):u(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",
!1)}));break;case "image":e=a.tpl.image.replace(/\{href\}/g,g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}u(e)&&e.parent().is(a.inner)||a.inner.append(e);b.trigger("beforeShow");
a.inner.css("overflow","yes"===l?"scroll":"no"===l?"hidden":l);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(!b.isOpened)f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();else if(d.prevMethod)b.transitions[d.prevMethod]();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,l=b.skin,g=b.inner,h=b.current,c=h.width,k=h.height,n=h.minWidth,v=h.minHeight,p=h.maxWidth,
q=h.maxHeight,t=h.scrolling,r=h.scrollOutside?h.scrollbarWidth:0,y=h.margin,z=m(y[1]+y[3]),s=m(y[0]+y[2]),w,A,u,D,B,G,C,E,I;e.add(l).add(g).width("auto").height("auto").removeClass("fancybox-tmp");y=m(l.outerWidth(!0)-l.width());w=m(l.outerHeight(!0)-l.height());A=z+y;u=s+w;D=F(c)?(a.w-A)*m(c)/100:c;B=F(k)?(a.h-u)*m(k)/100:k;if("iframe"===h.type){if(I=h.content,h.autoHeight&&1===I.data("ready"))try{I[0].contentWindow.document.location&&(g.width(D).height(9999),G=I.contents().find("body"),r&&G.css("overflow-x",
"hidden"),B=G.outerHeight(!0))}catch(H){}}else if(h.autoWidth||h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(D),h.autoHeight||g.height(B),h.autoWidth&&(D=g.width()),h.autoHeight&&(B=g.height()),g.removeClass("fancybox-tmp");c=m(D);k=m(B);E=D/B;n=m(F(n)?m(n,"w")-A:n);p=m(F(p)?m(p,"w")-A:p);v=m(F(v)?m(v,"h")-u:v);q=m(F(q)?m(q,"h")-u:q);G=p;C=q;h.fitToView&&(p=Math.min(a.w-A,p),q=Math.min(a.h-u,q));A=a.w-z;s=a.h-s;h.aspectRatio?(c>p&&(c=p,k=m(c/E)),k>q&&(k=q,c=m(k*E)),c<n&&(c=n,k=m(c/
E)),k<v&&(k=v,c=m(k*E))):(c=Math.max(n,Math.min(c,p)),h.autoHeight&&"iframe"!==h.type&&(g.width(c),k=g.height()),k=Math.max(v,Math.min(k,q)));if(h.fitToView)if(g.width(c).height(k),e.width(c+y),a=e.width(),z=e.height(),h.aspectRatio)for(;(a>A||z>s)&&c>n&&k>v&&!(19<d++);)k=Math.max(v,Math.min(q,k-10)),c=m(k*E),c<n&&(c=n,k=m(c/E)),c>p&&(c=p,k=m(c/E)),g.width(c).height(k),e.width(c+y),a=e.width(),z=e.height();else c=Math.max(n,Math.min(c,c-(a-A))),k=Math.max(v,Math.min(k,k-(z-s)));r&&"auto"===t&&k<B&&
c+y+r<A&&(c+=r);g.width(c).height(k);e.width(c+y);a=e.width();z=e.height();e=(a>A||z>s)&&c>n&&k>v;c=h.aspectRatio?c<G&&k<C&&c<D&&k<B:(c<G||k<C)&&(c<D||k<B);f.extend(h,{dim:{width:x(a),height:x(z)},origWidth:D,origHeight:B,canShrink:e,canExpand:c,wPadding:y,hPadding:w,wrapSpace:z-l.outerHeight(!0),skinSpace:l.height()-k});!I&&h.autoHeight&&k>v&&k<q&&!c&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",
top:c[0],left:c[3]};d.autoCenter&&d.fixed&&!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=x(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=x(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&((b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){f(d.target).is("a")||f(d.target).parent().is("a")||
(d.preventDefault(),b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),a.loop||a.index!==a.group.length-1)?b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play(!0)):b.play(!1))},
_afterZoomOut:function(a){a=a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,k=a.wPadding,n=b.getViewport();!e&&a.isDom&&d.is(":visible")&&(e=d.find("img:first"),e.length||(e=d));u(e)?(c=e.offset(),e.is("img")&&
(f=e.outerWidth(),g=e.outerHeight())):(c.top=n.y+(n.h-g)*a.topRatio,c.left=n.x+(n.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=n.y,c.left-=n.x;return c={top:x(c.top-h*a.topRatio),left:x(c.left-k*a.leftRatio),width:x(f+k),height:x(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](m("width"===
f?c:c-g*e)),b.inner[f](m("width"===f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,l=f.extend({opacity:1},d);delete l.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(l,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&
(c.opacity=0.1));b.wrap.animate(c,{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=x(m(e[g])-200),c[g]="+=200px"):(e[g]=x(m(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},
changeOut:function(){var a=b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!t,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){var d;a=f.extend({},this.defaults,a);this.overlay&&
this.close();d=b.coming?b.coming.parent:a.parent;this.overlay=f('<div class="fancybox-overlay"></div>').appendTo(d&&d.lenth?d:"body");this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(q.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",
function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){q.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),this.el.removeClass("fancybox-lock"),q.scrollTop(this.scrollV).scrollLeft(this.scrollH));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");
J?(b=Math.max(H.documentElement.offsetWidth,H.body.offsetWidth),p.width()>b&&(a=p.width())):p.width()>q.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&this.fixed&&b.fixed&&(b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){b.locked&&!this.el.hasClass("fancybox-lock")&&(!1!==this.fixPosition&&f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin"),this.scrollV=q.scrollTop(),this.scrollH=q.scrollLeft(),this.el.addClass("fancybox-lock"),q.scrollTop(this.scrollV).scrollLeft(this.scrollH));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",
position:"bottom"},beforeShow:function(a){var d=b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(r(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),J&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(m(d.css("margin-bottom")))}d["top"===a.position?"prependTo":
"appendTo"](c)}}};f.fn.fancybox=function(a){var d,e=f(this),c=this.selector||"",l=function(g){var h=f(this).blur(),k=d,l,m;g.ctrlKey||g.altKey||g.shiftKey||g.metaKey||h.is(".fancybox-wrap")||(l=a.groupAttr||"data-fancybox-group",m=h.attr(l),m||(l="rel",m=h.get(0)[l]),m&&""!==m&&"nofollow"!==m&&(h=c.length?f(c):e,h=h.filter("["+l+'="'+m+'"]'),k=h.index(this)),a.index=k,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;c&&!1!==a.live?p.undelegate(c,"click.fb-start").delegate(c+":not('.fancybox-item, .fancybox-nav')",
"click.fb-start",l):e.unbind("click.fb-start").bind("click.fb-start",l);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===w&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});f.support.fixedPosition===w&&(f.support.fixedPosition=function(){var a=f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
b=20===a[0].offsetTop||15===a[0].offsetTop;a.remove();return b}());f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(s).width();K.addClass("fancybox-lock-test");d=f(s).width();K.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);
$(document).ready(function () {
    $(".fancybox").fancybox();
    $(".various").fancybox({
        maxWidth: 500,
        maxHeight: 300,
        fitToView: false,
        width: "70%",
        height: "50%",
        autoSize: false,
        closeClick: false,
        openEffect: "none",
        closeEffect: "none"
    });
    $(".various1").fancybox({
        maxWidth: 500,
        maxHeight: 800,
        fitToView: false,
        width: "70%",
        height: "90%",
        autoSize: false,
        closeClick: false,
        openEffect: "none",
        closeEffect: "none"
    });
    $(".oneClick").fancybox({
        maxWidth: 500,
        maxHeight: 600,
        fitToView: false,
        width: "70%",
        height: "70%",
        autoSize: false,
        closeClick: false,
        openEffect: "none",
        closeEffect: "none"
    });
    setTimeout(function () {
        var partner = document.getElementById("partner");
        partner.style.display = "block";
    }, 1000);

});
var disabled = $(".disabled").prop("disabled", true);
$("._disabled").click(function () {
    return false;
});
function printsite() {
    if (navigator.platform == "Win32") {
        window.print();
    } else {
        alert("print out this page by hitting command + p");
    }
}
$("body").on("click", ".buy", function () {
    var productId = $(this).attr("data-productid"), token = $("#token").val();
    $.post("/add_to_cart", {productId: productId, _token: token}).done(function (data) {
        $("#_cart").find(".qty").html(data.count);
        $("#_cart").find(".qty-items").html(data.count);
        $("#_cart").find("._sum").html(data.total);
        $(".cart_empty").hide();
        $(".cart_filled").show();
    });
    $(this).val("В корзине");
    $(this).parents(".item").find(".buy").val("В корзине");
    setTimeout(function () {
        $("#otvet").click();
    }, 1500);
});
$("body").on("click", ".buyKol", function () {
    var productId = $(this).attr("data-productid"), qty = $("#colichestvo").val(), token = $("#token").val();
    $.post("/addKol_to_cart", {productId: productId, qty: qty, _token: token}).done(function (data) {
        $("#_cart").find(".qty").html(data.count);
        $("#_cart").find(".qty-items").html(data.count);
        $("#_cart").find("._sum").html(data.total);
        $(".cart_empty").hide();
        $(".cart_filled").show();
    });
    $(this).val("В корзине");
    $(this).parents(".item").find(".buy").val("В корзине");
    setTimeout(function () {
        $("#otvet").click();
    }, 1500);
});
$(".buySet").click(function () {
    var stockId = $(this).attr("data-stockid"), token = $("#token").val();
    $.post("/add_set_to_cart", {stockId: stockId, _token: token}).done(function (data) {
        $("#_cart").find(".qty").html(data.count);
        $("#_cart").find(".qty-items").html(data.count);
        $("#_cart").find("._sum").html(data.total);
        $(".cart_empty").hide();
        $(".cart_filled").show();
    });
    $(this).val("В корзине");
    $(this).parents(".item").find(".buy").val("В корзине");
});
$("body").on("click", ".compare", function () {
    var productId = $(this).attr("data-productid");
    var token = $("#token").val();
    $.post("/add_to_compare", {productId: productId, _token: token}).done(function (data) {
        $("#com_count").html(data.count);
    });
    $(this).val("В сравнении");
    $(this).parents(".item").find(".compare").val("В сравнении");
});
$("body").on("click", ".video-review", function (e) {
    e.preventDefault();
    var video = $(this).siblings("._video").html();
    $("#video").find(".video-container").html(video);
});
$("#range").ionRangeSlider({
    type: "double",
    min: 0,
    max: maxPrice,
    from: 0,
    to: filtrPrice,
    prefix: "",
    step: 100,
    onFinish: function (data) {
        $("#filter").change();
    },
    prettify: function (num) {
        var endSign = "";
        return (num) + " грн." + endSign;
    }
});
var getParameterByName = function (name, href) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(!!href ? href : location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};
$("#filter").on("change", filterProducts);
setTimeout(function () {
    filterProducts(false);
}, 100);
$(".orderBy").change(function () {
    var $this = this;
    $("select.orderBy").each(function (i, sel) {
        sel.selectedIndex = $this.selectedIndex;
        $(".select-dropdown").val(sel.options[sel.selectedIndex].innerHTML);
    });
    filterProducts(true);
});
function filterProducts(filcl, page) {
    $("#isDirty").val(1);
    if (isNaN(page)) {
        page = 1;
    }
    var data = $(".orderBy").serialize(), filters = $("#filter");
    if (filters.length > 0) {
        data = filters.serialize();
    }
    if (!!getParameterByName("search")) {
        data += "&search=" + getParameterByName("search");
    }
    if (filcl) {
        data = data + "&click=true";
    }
    $.ajax({
        url: location.href, method: "GET", cache: false, data: data + "&page=" + page, beforeSend: function () {
            $("#products").html("<div align='center'><img src='/frontend/images/loading.gif'></div>");
        }, success: function (response) {
            $("#products").html(response.products);
            $("._pagination").html(response.pagination);
            initRating();
        }
    });
}
$("body").on("click", "._pagination a", function (event) {
    event.preventDefault();
    $("html, body").animate({scrollTop: 0}, 0);
    var href = $(this).attr("href"), page = parseInt(getParameterByName("page", href));
    filterProducts(true, page);
});
$("#range").change(function () {
    return false;
});
$("#rating_3").rating({
    fx: "full",
    image: "/frontend/images/stars2.png",
    loader: "/frontend/images/loading.gif",
    url: location.href,
    type: "GET",
    readOnly: !!$("#check").val(),
    callback: function (responce) {
        this._data.val = Math.round(responce);
        this.set();
        this.vote_success.fadeOut(2000);
    }
});
setTimeout(function () {
    $(".compare-list").each(function () {
        var min_height = 0;
        var parent = this;
        $(parent).find(".compare_product").each(function () {
            var height = $(this).outerHeight();
            if (min_height <= height) {
                min_height = height;
            }
        });
        $(parent).find(".compare_product").each(function () {
            $(this).height(min_height);
        });
    });
}, 1000);
//# sourceMappingURL=all.js.map
