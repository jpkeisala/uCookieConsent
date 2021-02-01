! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.postscribe = t() : e.postscribe = t()
}(this, function () {
    return function (e) {
        function t(r) {
            if (o[r]) return o[r].exports;
            var n = o[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports
        }
        var o = {};
        return t.m = e, t.c = o, t.p = "", t(0)
    }([function (e, t, o) {
        "use strict";
        var r = o(1),
            n = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r);
        e.exports = n.default
    }, function (e, t, o) {
        "use strict";

        function r() { }

        function n() {
            var e = f.shift();
            if (e) {
                var t = _.last(e);
                t.afterDequeue(), e.stream = i.apply(void 0, e), t.afterStreamStart()
            }
        }

        function i(e, t, o) {
            function i(e) {
                e = o.beforeWrite(e), v.write(e), o.afterWrite(e)
            }
            v = new c.default(e, o), v.id = u++, v.name = o.name || v.id, s.streams[v.name] = v;
            var d = e.ownerDocument,
                p = {
                    close: d.close,
                    open: d.open,
                    write: d.write,
                    writeln: d.writeln
                };
            a(d, {
                close: r,
                open: r,
                write: function () {
                    for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                    return i(t.join(""))
                },
                writeln: function () {
                    for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                    return i(t.join("") + "\n")
                }
            });
            var _ = v.win.onerror || r;
            return v.win.onerror = function (e, t, r) {
                o.error({
                    msg: e + " - " + t + ": " + r
                }), _.apply(v.win, [e, t, r])
            }, v.write(t, function () {
                a(d, p), v.win.onerror = _, o.done(), v = null, n()
            }), v
        }

        function s(e, t, o) {
            if (_.isFunction(o)) o = {
                done: o
            };
            else if ("clear" === o) return f = [], v = null, void (u = 0);
            o = _.defaults(o, l), e = /^#/.test(e) ? window.document.getElementById(e.substr(1)) : e.jquery ? e[0] : e;
            var i = [e, t, o];
            return e.postscribe = {
                cancel: function () {
                    i.stream ? i.stream.abort() : i[1] = r
                }
            }, o.beforeEnqueue(i), f.push(i), v || n(), e.postscribe
        }
        t.__esModule = !0;
        var a = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
            }
            return e
        };
        t.default = s;
        var d = o(2),
            c = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(d),
            p = o(4),
            _ = function (e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t.default = e, t
            }(p),
            l = {
                afterAsync: r,
                afterDequeue: r,
                afterStreamStart: r,
                afterWrite: r,
                autoFix: !0,
                beforeEnqueue: r,
                beforeWriteToken: function (e) {
                    return e
                },
                beforeWrite: function (e) {
                    return e
                },
                done: r,
                error: function (e) {
                    throw new Error(e.msg)
                },
                releaseAsync: !1
            },
            u = 0,
            f = [],
            v = null;
        a(s, {
            streams: {},
            queue: f,
            WriteStream: c.default
        })
    }, function (e, t, o) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function n(e, t) {
            var o = _ + t,
                r = e.getAttribute(o);
            return p.existy(r) ? String(r) : r
        }

        function i(e, t) {
            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                r = _ + t;
            p.existy(o) && "" !== o ? e.setAttribute(r, o) : e.removeAttribute(r)
        }
        t.__esModule = !0;
        var s = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
            }
            return e
        },
            a = o(3),
            d = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a),
            c = o(4),
            p = function (e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t.default = e, t
            }(c),
            _ = "data-ps-",
            l = "ps-style",
            u = "ps-script",
            f = function () {
                function e(t) {
                    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    r(this, e), this.root = t, this.options = o, this.doc = t.ownerDocument, this.win = this.doc.defaultView || this.doc.parentWindow, this.parser = new d.default("", {
                        autoFix: o.autoFix
                    }), this.actuals = [t], this.proxyHistory = "", this.proxyRoot = this.doc.createElement(t.nodeName), this.scriptStack = [], this.writeQueue = [], i(this.proxyRoot, "proxyof", 0)
                }
                return e.prototype.write = function () {
                    var e;
                    for ((e = this.writeQueue).push.apply(e, arguments); !this.deferredRemote && this.writeQueue.length;) {
                        var t = this.writeQueue.shift();
                        p.isFunction(t) ? this._callFunction(t) : this._writeImpl(t)
                    }
                }, e.prototype._callFunction = function (e) {
                    var t = {
                        type: "function",
                        value: e.name || e.toString()
                    };
                    this._onScriptStart(t), e.call(this.win, this.doc), this._onScriptDone(t)
                }, e.prototype._writeImpl = function (e) {
                    this.parser.append(e);
                    for (var t = void 0, o = void 0, r = void 0, n = [];
                        (t = this.parser.readToken()) && !(o = p.isScript(t)) && !(r = p.isStyle(t));)(t = this.options.beforeWriteToken(t)) && n.push(t);
                    n.length > 0 && this._writeStaticTokens(n), o && this._handleScriptToken(t), r && this._handleStyleToken(t)
                }, e.prototype._writeStaticTokens = function (e) {
                    var t = this._buildChunk(e);
                    return t.actual ? (t.html = this.proxyHistory + t.actual, this.proxyHistory += t.proxy, this.proxyRoot.innerHTML = t.html, this._walkChunk(), t) : null
                }, e.prototype._buildChunk = function (e) {
                    for (var t = this.actuals.length, o = [], r = [], n = [], i = e.length, s = 0; s < i; s++) {
                        var a = e[s],
                            d = a.toString();
                        if (o.push(d), a.attrs) {
                            if (!/^noscript$/i.test(a.tagName)) {
                                var c = t++;
                                r.push(d.replace(/(\/?>)/, " " + _ + "id=" + c + " $1")), a.attrs.id !== u && a.attrs.id !== l && n.push("atomicTag" === a.type ? "" : "<" + a.tagName + " " + _ + "proxyof=" + c + (a.unary ? " />" : ">"))
                            }
                        } else r.push(d), n.push("endTag" === a.type ? d : "")
                    }
                    return {
                        tokens: e,
                        raw: o.join(""),
                        actual: r.join(""),
                        proxy: n.join("")
                    }
                }, e.prototype._walkChunk = function () {
                    for (var e = void 0, t = [this.proxyRoot]; p.existy(e = t.shift());) {
                        var o = 1 === e.nodeType;
                        if (!(o && n(e, "proxyof"))) {
                            o && (this.actuals[n(e, "id")] = e, i(e, "id"));
                            var r = e.parentNode && n(e.parentNode, "proxyof");
                            r && this.actuals[r].appendChild(e)
                        }
                        t.unshift.apply(t, p.toArray(e.childNodes))
                    }
                }, e.prototype._handleScriptToken = function (e) {
                    var t = this,
                        o = this.parser.clear();
                    o && this.writeQueue.unshift(o), e.src = e.attrs.src || e.attrs.SRC, (e = this.options.beforeWriteToken(e)) && (e.src && this.scriptStack.length ? this.deferredRemote = e : this._onScriptStart(e), this._writeScriptToken(e, function () {
                        t._onScriptDone(e)
                    }))
                }, e.prototype._handleStyleToken = function (e) {
                    var t = this.parser.clear();
                    t && this.writeQueue.unshift(t), e.type = e.attrs.type || e.attrs.TYPE || "text/css", e = this.options.beforeWriteToken(e), e && this._writeStyleToken(e), t && this.write()
                }, e.prototype._writeStyleToken = function (e) {
                    var t = this._buildStyle(e);
                    this._insertCursor(t, l), e.content && (t.styleSheet && !t.sheet ? t.styleSheet.cssText = e.content : t.appendChild(this.doc.createTextNode(e.content)))
                }, e.prototype._buildStyle = function (e) {
                    var t = this.doc.createElement(e.tagName);
                    return t.setAttribute("type", e.type), p.eachKey(e.attrs, function (e, o) {
                        t.setAttribute(e, o)
                    }), t
                }, e.prototype._insertCursor = function (e, t) {
                    this._writeImpl('<span id="' + t + '"/>');
                    var o = this.doc.getElementById(t);
                    o && o.parentNode.replaceChild(e, o)
                }, e.prototype._onScriptStart = function (e) {
                    e.outerWrites = this.writeQueue, this.writeQueue = [], this.scriptStack.unshift(e)
                }, e.prototype._onScriptDone = function (e) {
                    return e !== this.scriptStack[0] ? void this.options.error({
                        msg: "Bad script nesting or script finished twice"
                    }) : (this.scriptStack.shift(), this.write.apply(this, e.outerWrites), void (!this.scriptStack.length && this.deferredRemote && (this._onScriptStart(this.deferredRemote), this.deferredRemote = null)))
                }, e.prototype._writeScriptToken = function (e, t) {
                    var o = this._buildScript(e),
                        r = this._shouldRelease(o),
                        n = this.options.afterAsync;
                    e.src && (o.src = e.src, this._scriptLoadHandler(o, r ? n : function () {
                        t(), n()
                    }));
                    try {
                        this._insertCursor(o, u), o.src && !r || t()
                    } catch (e) {
                        this.options.error(e), t()
                    }
                }, e.prototype._buildScript = function (e) {
                    var t = this.doc.createElement(e.tagName);
                    return p.eachKey(e.attrs, function (e, o) {
                        t.setAttribute(e, o)
                    }), e.content && (t.text = e.content), t
                }, e.prototype._scriptLoadHandler = function (e, t) {
                    function o() {
                        e = e.onload = e.onreadystatechange = e.onerror = null
                    }

                    function r() {
                        o(), null != t && t(), t = null
                    }

                    function n(e) {
                        o(), a(e), null != t && t(), t = null
                    }

                    function i(e, t) {
                        var o = e["on" + t];
                        null != o && (e["_on" + t] = o)
                    }
                    var a = this.options.error;
                    i(e, "load"), i(e, "error"), s(e, {
                        onload: function () {
                            if (e._onload) try {
                                e._onload.apply(this, Array.prototype.slice.call(arguments, 0))
                            } catch (t) {
                                n({
                                    msg: "onload handler failed " + t + " @ " + e.src
                                })
                            }
                            r()
                        },
                        onerror: function () {
                            if (e._onerror) try {
                                e._onerror.apply(this, Array.prototype.slice.call(arguments, 0))
                            } catch (t) {
                                return void n({
                                    msg: "onerror handler failed " + t + " @ " + e.src
                                })
                            }
                            n({
                                msg: "remote script failed " + e.src
                            })
                        },
                        onreadystatechange: function () {
                            /^(loaded|complete)$/.test(e.readyState) && r()
                        }
                    })
                }, e.prototype._shouldRelease = function (e) {
                    return !/^script$/i.test(e.nodeName) || !!(this.options.releaseAsync && e.src && e.hasAttribute("async"))
                }, e
            }();
        t.default = f
    }, function (e, t, o) {
        ! function (t, o) {
            e.exports = function () {
                return function (e) {
                    function t(r) {
                        if (o[r]) return o[r].exports;
                        var n = o[r] = {
                            exports: {},
                            id: r,
                            loaded: !1
                        };
                        return e[r].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports
                    }
                    var o = {};
                    return t.m = e, t.c = o, t.p = "", t(0)
                }([function (e, t, o) {
                    "use strict";
                    var r = o(1),
                        n = function (e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        }(r);
                    e.exports = n.default
                }, function (e, t, o) {
                    "use strict";

                    function r(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t.default = e, t
                    }

                    function n(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }
                    t.__esModule = !0;
                    var i = o(2),
                        s = r(i),
                        a = o(3),
                        d = r(a),
                        c = o(6),
                        p = function (e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        }(c),
                        _ = o(5),
                        l = {
                            comment: /^<!--/,
                            endTag: /^<\//,
                            atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                            startTag: /^</,
                            chars: /^[^<]/
                        },
                        u = function () {
                            function e() {
                                var t = this,
                                    o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                n(this, e), this.stream = o;
                                var i = !1,
                                    a = {};
                                for (var d in s) s.hasOwnProperty(d) && (r.autoFix && (a[d + "Fix"] = !0), i = i || a[d + "Fix"]);
                                i ? (this._readToken = (0, p.default)(this, a, function () {
                                    return t._readTokenImpl()
                                }), this._peekToken = (0, p.default)(this, a, function () {
                                    return t._peekTokenImpl()
                                })) : (this._readToken = this._readTokenImpl, this._peekToken = this._peekTokenImpl)
                            }
                            return e.prototype.append = function (e) {
                                this.stream += e
                            }, e.prototype.prepend = function (e) {
                                this.stream = e + this.stream
                            }, e.prototype._readTokenImpl = function () {
                                var e = this._peekTokenImpl();
                                if (e) return this.stream = this.stream.slice(e.length), e
                            }, e.prototype._peekTokenImpl = function () {
                                for (var e in l)
                                    if (l.hasOwnProperty(e) && l[e].test(this.stream)) {
                                        var t = d[e](this.stream);
                                        if (t) return "startTag" === t.type && /script|style/i.test(t.tagName) ? null : (t.text = this.stream.substr(0, t.length), t)
                                    }
                            }, e.prototype.peekToken = function () {
                                return this._peekToken()
                            }, e.prototype.readToken = function () {
                                return this._readToken()
                            }, e.prototype.readTokens = function (e) {
                                for (var t = void 0; t = this.readToken();)
                                    if (e[t.type] && !1 === e[t.type](t)) return
                            }, e.prototype.clear = function () {
                                var e = this.stream;
                                return this.stream = "", e
                            }, e.prototype.rest = function () {
                                return this.stream
                            }, e
                        }();
                    t.default = u, u.tokenToString = function (e) {
                        return e.toString()
                    }, u.escapeAttributes = function (e) {
                        var t = {};
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = (0, _.escapeQuotes)(e[o], null));
                        return t
                    }, u.supports = s;
                    for (var f in s) s.hasOwnProperty(f) && (u.browserHasFlaw = u.browserHasFlaw || !s[f] && f)
                }, function (e, t) {
                    "use strict";
                    t.__esModule = !0;
                    var o = !1,
                        r = !1,
                        n = window.document.createElement("div");
                    try {
                        var i = "<P><I></P></I>";
                        n.innerHTML = i, t.tagSoup = o = n.innerHTML !== i
                    } catch (e) {
                        t.tagSoup = o = !1
                    }
                    try {
                        n.innerHTML = "<P><i><P></P></i></P>", t.selfClose = r = 2 === n.childNodes.length
                    } catch (e) {
                        t.selfClose = r = !1
                    }
                    n = null, t.tagSoup = o, t.selfClose = r
                }, function (e, t, o) {
                    "use strict";

                    function r(e) {
                        var t = e.indexOf("--\x3e");
                        if (t >= 0) return new c.CommentToken(e.substr(4, t - 1), t + 3)
                    }

                    function n(e) {
                        var t = e.indexOf("<");
                        return new c.CharsToken(t >= 0 ? t : e.length)
                    }

                    function i(e) {
                        if (-1 !== e.indexOf(">")) {
                            var t = e.match(p.startTag);
                            if (t) {
                                var o = function () {
                                    var e = {},
                                        o = {},
                                        r = t[2];
                                    return t[2].replace(p.attr, function (t, n) {
                                        arguments[2] || arguments[3] || arguments[4] || arguments[5] ? arguments[5] ? (e[arguments[5]] = "", o[arguments[5]] = !0) : e[n] = arguments[2] || arguments[3] || arguments[4] || p.fillAttr.test(n) && n || "" : e[n] = "", r = r.replace(t, "")
                                    }), {
                                        v: new c.StartTagToken(t[1], t[0].length, e, o, !!t[3], r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""))
                                    }
                                }();
                                if ("object" === (void 0 === o ? "undefined" : d(o))) return o.v
                            }
                        }
                    }

                    function s(e) {
                        var t = i(e);
                        if (t) {
                            var o = e.slice(t.length);
                            if (o.match(new RegExp("</\\s*" + t.tagName + "\\s*>", "i"))) {
                                var r = o.match(new RegExp("([\\s\\S]*?)</\\s*" + t.tagName + "\\s*>", "i"));
                                if (r) return new c.AtomicTagToken(t.tagName, r[0].length + t.length, t.attrs, t.booleanAttrs, r[1])
                            }
                        }
                    }

                    function a(e) {
                        var t = e.match(p.endTag);
                        if (t) return new c.EndTagToken(t[1], t[0].length)
                    }
                    t.__esModule = !0;
                    var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    };
                    t.comment = r, t.chars = n, t.startTag = i, t.atomicTag = s, t.endTag = a;
                    var c = o(4),
                        p = {
                            startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                            endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                            attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
                            fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i
                        }
                }, function (e, t, o) {
                    "use strict";

                    function r(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }
                    t.__esModule = !0, t.EndTagToken = t.AtomicTagToken = t.StartTagToken = t.TagToken = t.CharsToken = t.CommentToken = t.Token = void 0;
                    var n = o(5),
                        i = (t.Token = function e(t, o) {
                            r(this, e), this.type = t, this.length = o, this.text = ""
                        }, t.CommentToken = function () {
                            function e(t, o) {
                                r(this, e), this.type = "comment", this.length = o || (t ? t.length : 0), this.text = "", this.content = t
                            }
                            return e.prototype.toString = function () {
                                return "\x3c!--" + this.content
                            }, e
                        }(), t.CharsToken = function () {
                            function e(t) {
                                r(this, e), this.type = "chars", this.length = t, this.text = ""
                            }
                            return e.prototype.toString = function () {
                                return this.text
                            }, e
                        }(), t.TagToken = function () {
                            function e(t, o, n, i, s) {
                                r(this, e), this.type = t, this.length = n, this.text = "", this.tagName = o, this.attrs = i, this.booleanAttrs = s, this.unary = !1, this.html5Unary = !1
                            }
                            return e.formatTag = function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                    o = "<" + e.tagName;
                                for (var r in e.attrs)
                                    if (e.attrs.hasOwnProperty(r)) {
                                        o += " " + r;
                                        var i = e.attrs[r];
                                        void 0 !== e.booleanAttrs && void 0 !== e.booleanAttrs[r] || (o += '="' + (0, n.escapeQuotes)(i) + '"')
                                    } return e.rest && (o += " " + e.rest), o += e.unary && !e.html5Unary ? "/>" : ">", void 0 !== t && null !== t && (o += t + "</" + e.tagName + ">"), o
                            }, e
                        }());
                    t.StartTagToken = function () {
                        function e(t, o, n, i, s, a) {
                            r(this, e), this.type = "startTag", this.length = o, this.text = "", this.tagName = t, this.attrs = n, this.booleanAttrs = i, this.html5Unary = !1, this.unary = s, this.rest = a
                        }
                        return e.prototype.toString = function () {
                            return i.formatTag(this)
                        }, e
                    }(), t.AtomicTagToken = function () {
                        function e(t, o, n, i, s) {
                            r(this, e), this.type = "atomicTag", this.length = o, this.text = "", this.tagName = t, this.attrs = n, this.booleanAttrs = i, this.unary = !1, this.html5Unary = !1, this.content = s
                        }
                        return e.prototype.toString = function () {
                            return i.formatTag(this, this.content)
                        }, e
                    }(), t.EndTagToken = function () {
                        function e(t, o) {
                            r(this, e), this.type = "endTag", this.length = o, this.text = "", this.tagName = t
                        }
                        return e.prototype.toString = function () {
                            return "</" + this.tagName + ">"
                        }, e
                    }()
                }, function (e, t) {
                    "use strict";

                    function o(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        return e ? e.replace(/([^"]*)"/g, function (e, t) {
                            return /\\/.test(t) ? t + '"' : t + '\\"'
                        }) : t
                    }
                    t.__esModule = !0, t.escapeQuotes = o
                }, function (e, t) {
                    "use strict";

                    function o(e) {
                        return e && "startTag" === e.type && (e.unary = a.test(e.tagName) || e.unary, e.html5Unary = !/\/>$/.test(e.text)), e
                    }

                    function r(e, t) {
                        var r = e.stream,
                            n = o(t());
                        return e.stream = r, n
                    }

                    function n(e, t) {
                        var o = t.pop();
                        e.prepend("</" + o.tagName + ">")
                    }

                    function i() {
                        var e = [];
                        return e.last = function () {
                            return this[this.length - 1]
                        }, e.lastTagNameEq = function (e) {
                            var t = this.last();
                            return t && t.tagName && t.tagName.toUpperCase() === e.toUpperCase()
                        }, e.containsTagName = function (e) {
                            for (var t, o = 0; t = this[o]; o++)
                                if (t.tagName === e) return !0;
                            return !1
                        }, e
                    }

                    function s(e, t, s) {
                        function a() {
                            var t = r(e, s);
                            t && p[t.type] && p[t.type](t)
                        }
                        var c = i(),
                            p = {
                                startTag: function (o) {
                                    var r = o.tagName;
                                    "TR" === r.toUpperCase() && c.lastTagNameEq("TABLE") ? (e.prepend("<TBODY>"), a()) : t.selfCloseFix && d.test(r) && c.containsTagName(r) ? c.lastTagNameEq(r) ? n(e, c) : (e.prepend("</" + o.tagName + ">"), a()) : o.unary || c.push(o)
                                },
                                endTag: function (o) {
                                    c.last() ? t.tagSoupFix && !c.lastTagNameEq(o.tagName) ? n(e, c) : c.pop() : t.tagSoupFix && (s(), a())
                                }
                            };
                        return function () {
                            return a(), o(s())
                        }
                    }
                    t.__esModule = !0, t.default = s;
                    var a = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                        d = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i
                }])
            }()
        }()
    }, function (e, t) {
        "use strict";

        function o(e) {
            return void 0 !== e && null !== e
        }

        function r(e) {
            return "function" == typeof e
        }

        function n(e, t, o) {
            var r = void 0,
                n = e && e.length || 0;
            for (r = 0; r < n; r++) t.call(o, e[r], r)
        }

        function i(e, t, o) {
            for (var r in e) e.hasOwnProperty(r) && t.call(o, r, e[r])
        }

        function s(e, t) {
            return e = e || {}, i(t, function (t, r) {
                o(e[t]) || (e[t] = r)
            }), e
        }

        function a(e) {
            try {
                return Array.prototype.slice.call(e)
            } catch (o) {
                var t = function () {
                    var t = [];
                    return n(e, function (e) {
                        t.push(e)
                    }), {
                        v: t
                    }
                }();
                if ("object" === (void 0 === t ? "undefined" : l(t))) return t.v
            }
        }

        function d(e) {
            return e[e.length - 1]
        }

        function c(e, t) {
            return !(!e || "startTag" !== e.type && "atomicTag" !== e.type || !("tagName" in e) || !~e.tagName.toLowerCase().indexOf(t))
        }

        function p(e) {
            return c(e, "script")
        }

        function _(e) {
            return c(e, "style")
        }
        t.__esModule = !0;
        var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        t.existy = o, t.isFunction = r, t.each = n, t.eachKey = i, t.defaults = s, t.toArray = a, t.last = d, t.isTag = c, t.isScript = p, t.isStyle = _
    }])
}),
    function (e) {
        var t = {
            common: {
                init: function () {
                    "use strict";
                    //  LoadCookie();
                    function t(e) {
                        try {
                            new URLSearchParams(window.location.search).has("gdpr_dbg") && console.warn(e)
                        } catch (e) {
                            console.warn(e)
                        }
                    }

                    function o() {
                        e.post(uCookie_frontend_gdpr_scripts.ajaxurl, {
                            action: "uCookie_gdpr_remove_php_cookies"
                        }, function (e) {
                            t("dbg - cookies removed")
                        })
                    }

                    function r() {
                        o(), e.post(uCookie_frontend_gdpr_scripts.ajaxurl, {
                            action: "uCookie_gdpr_get_scripts",
                            strict: 0,
                            thirdparty: 0,
                            advanced: 0
                        }, function (e) {
                            var t = {};
                            t.strict = 1, t.thirdparty = 0, t.advanced = 0, n("script_inject", t)
                        })
                    }

                    function n(e, t) {
                        try {
                            jQuery().gdpr_cookie_compliance_analytics(e, t)
                        } catch (e) { }
                    }

                    function i(e) {
                        try {
                            jQuery().gdpr_cookie_compliance_consent_log(e)
                        } catch (e) { }
                    }

                    function s() {
                        var e = f("uCookie_gdpr_popup"),
                            t = {};
                        return t.strict = "0", t.thirdparty = "0", t.advanced = "0", e && (e = JSON.parse(e), t.strict = e.strict, t.thirdparty = e.thirdparty, t.advanced = e.advanced, p(t), n("script_inject", e)), void 0 !== uCookie_frontend_gdpr_scripts.ifbc ? ("strict" === uCookie_frontend_gdpr_scripts.ifbc && e && 1 === parseInt(e.strict) && a(), "thirdparty" === uCookie_frontend_gdpr_scripts.ifbc && e && 1 === parseInt(e.thirdparty) && a(), "advanced" === uCookie_frontend_gdpr_scripts.ifbc && e && 1 === parseInt(e.advanced) && a()) : "1" !== uCookie_frontend_gdpr_scripts.strict_init && a(), t
                    }

                    function a() {
                        e(document).find("iframe[data-gdpr-iframesrc]").each(function () {
                            e(this).attr("src", e(this).attr("data-gdpr-iframesrc"))
                        })
                    }

                    function d(e) {
                        u("uCookie_gdpr_popup", JSON.stringify({
                            strict: "1",
                            thirdparty: "1",
                            advanced: "1"
                        }), y), c("enabled-all"), n("accept_all", "")
                    }

                    function c(o) {
                        var r = !1;
                        try {
                            void 0 !== uCookie_frontend_gdpr_scripts.force_reload && "true" === uCookie_frontend_gdpr_scripts.force_reload && (r = !0)
                        } catch (e) { }
                        var i = s(),
                            a = uCookie_frontend_gdpr_scripts.enabled_default.third_party,
                            d = uCookie_frontend_gdpr_scripts.enabled_default.advanced;
                        if (document.cookie.indexOf("uCookie_gdpr_popup") >= 0 || 1 == a || 1 == d) {
                            var c = f("uCookie_gdpr_popup");
                            1 == a && (S.strict = 1, S.thirdparty = a), 1 == d && (S.strict = 1, S.advanced = d), S && (parseInt(i.strict) - parseInt(S.strict) < 0 && (r = !0), parseInt(i.thirdparty) - parseInt(S.thirdparty) < 0 && (r = !0), parseInt(i.advanced) - parseInt(S.advanced) < 0 && (r = !0))
                        }
                        if (r) c = {
                            strict: 0,
                            thirdparty: 0,
                            advanced: 0
                        }, n("script_inject", c), location.reload(!0);
                        else {
                            var p = f("uCookie_gdpr_popup");
                            t("dbg - inject - 4"), v(p), _(), e("#uCookie_gdpr_save_popup_settings_button").show()
                        }
                    }

                    function p(t) {
                        t && (n("script_inject", t), 1 === parseInt(t.strict) ? e("#uCookie_gdpr_strict_cookies").is(":checked") || (e("#uCookie_gdpr_strict_cookies").click(), e("#third_party_cookies fieldset, #third_party_cookies .gdpr-cc-form-fieldset").removeClass("fl-disabled"), e("#uCookie_gdpr_performance_cookies").prop("disabled", !1), e("#third_party_cookies .uCookie-gdpr-strict-secondary-warning-message").slideUp(), e("#advanced-cookies fieldset, #advanced-cookies .gdpr-cc-form-fieldset").removeClass("fl-disabled"), e("#advanced-cookies .uCookie-gdpr-strict-secondary-warning-message").slideUp(), e("#uCookie_gdpr_advanced_cookies").prop("disabled", !1)) : e("#uCookie_gdpr_strict_cookies").is(":checked") && (e("#uCookie_gdpr_strict_cookies").click().prop("checked", !0), e("#third_party_cookies fieldset, #third_party_cookies .gdpr-cc-form-fieldset").addClass("fl-disabled").closest(".uCookie-gdpr-status-bar").removeClass("checkbox-selected"), e("#uCookie_gdpr_performance_cookies").prop("disabled", !0).prop("checked", !1), e("#advanced-cookies fieldset, #advanced-cookies .gdpr-cc-form-fieldset").addClass("fl-disabled").closest(".uCookie-gdpr-status-bar").removeClass("checkbox-selected"), e("#uCookie_gdpr_advanced_cookies").prop("disabled", !0).prop("checked", !1)), 1 === parseInt(t.thirdparty) ? e("#uCookie_gdpr_performance_cookies").is(":checked") || e("#uCookie_gdpr_performance_cookies").click() : e("#uCookie_gdpr_performance_cookies").is(":checked") && e("#uCookie_gdpr_performance_cookies").click(), 1 === parseInt(t.advanced) ? e("#uCookie_gdpr_advanced_cookies").is(":checked") || e("#uCookie_gdpr_advanced_cookies").click() : e("#uCookie_gdpr_advanced_cookies").is(":checked") && e("#uCookie_gdpr_advanced_cookies").click(), e('input[data-name="uCookie_gdpr_performance_cookies"]').prop("checked", e("#uCookie_gdpr_performance_cookies").is(":checked")), e('input[data-name="uCookie_gdpr_strict_cookies"]').prop("checked", e("#uCookie_gdpr_strict_cookies").is(":checked")), e('input[data-name="uCookie_gdpr_advanced_cookies"]').prop("checked", e("#uCookie_gdpr_advanced_cookies").is(":checked")))
                    }

                    function _() {
                        e("#uCookie_gdpr_cookie_info_bar").length > 0 && (e("#uCookie_gdpr_cookie_info_bar").addClass("uCookie-gdpr-info-bar-hidden"), e("body").removeClass("gdpr-infobar-visible"))
                    }

                    function l() {
                        var o = !0;
                        if ("undefined" != typeof sessionStorage && 1 === parseInt(sessionStorage.getItem("gdpr_infobar_hidden")) && (o = !1), void 0 !== uCookie_frontend_gdpr_scripts.display_cookie_banner && o) {
                            if ("true" === uCookie_frontend_gdpr_scripts.display_cookie_banner) e("#uCookie_gdpr_cookie_info_bar").length > 0 && (e("#uCookie_gdpr_cookie_info_bar").removeClass("uCookie-gdpr-info-bar-hidden"), e("#uCookie_gdpr_save_popup_settings_button:not(.button-visible)").hide(), e("body").addClass("gdpr-infobar-visible"), n("show_infobar", ""));
                            else if (e("#uCookie_gdpr_cookie_info_bar").length > 0) {
                                e("#uCookie_gdpr_cookie_info_bar").addClass("uCookie-gdpr-info-bar-hidden"), e("body").removeClass("gdpr-infobar-visible");
                                var r = {
                                    strict: 1,
                                    thirdparty: 1,
                                    advanced: 1
                                };
                                t("dbg - inject - 5"), v(JSON.stringify(r))
                            }
                        } else e("#uCookie_gdpr_cookie_info_bar").length > 0 && o && (e("#uCookie_gdpr_cookie_info_bar").removeClass("uCookie-gdpr-info-bar-hidden"), e("#uCookie_gdpr_save_popup_settings_button:not(.button-visible)").hide(), e("body").addClass("gdpr-infobar-visible"), n("show_infobar", ""))
                    }

                    function u(e, o, r) {
                        var n;
                        if (r > 0) {
                            var s = new Date;
                            s.setTime(s.getTime() + 24 * r * 60 * 60 * 1e3), n = "; expires=" + s.toGMTString()
                        } else n = "";
                        try {
                            var a = "SameSite=Lax";
                            void 0 !== uCookie_frontend_gdpr_scripts.cookie_attributes && (a = uCookie_frontend_gdpr_scripts.cookie_attributes), void 0 !== uCookie_frontend_gdpr_scripts.gdpr_consent_version && (o = JSON.parse(o), o.version = uCookie_frontend_gdpr_scripts.gdpr_consent_version, o = JSON.stringify(o)), document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(o) + n + "; path=/; " + a, i(o)
                        } catch (e) {
                            t("error - uCookie_gdpr_create_cookie: " + e)
                        }
                    }

                    function f(e) {
                        for (var t = encodeURIComponent(e) + "=", o = document.cookie.split(";"), r = 0; r < o.length; r++) {
                            for (var n = o[r];
                                " " === n.charAt(0);) n = n.substring(1, n.length);
                            if (0 === n.indexOf(t)) {
                                var i = decodeURIComponent(n.substring(t.length, n.length)),
                                    s = JSON.parse(i);
                                if (void 0 !== s.version) {
                                    if (void 0 !== uCookie_frontend_gdpr_scripts.gdpr_consent_version) {
                                        var a = uCookie_frontend_gdpr_scripts.gdpr_consent_version;
                                        if (parseFloat(a) > parseFloat(s.version)) return document.cookie = e + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;", null
                                    }
                                } else if (void 0 !== uCookie_frontend_gdpr_scripts.gdpr_consent_version && parseFloat(uCookie_frontend_gdpr_scripts.gdpr_consent_version) > 1) return document.cookie = e + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;", null;
                                return i
                            }
                        }
                        return null
                    }

                    function v(t) {
                        if (S = s(), t) {
                            var o = t;
                            t = JSON.parse(t);
                            s();
                            if (!1 !== x) {
                                var i = JSON.parse(x);
                                1 === parseInt(i.thirdparty) && 1 === parseInt(t.thirdparty) && (t.thirdparty = "0"), 1 === parseInt(i.advanced) && 1 === parseInt(t.advanced) && (t.advanced = "0")
                            }
                            if (n("script_inject", t), C = !0, void 0 !== uCookie_frontend_gdpr_scripts.ifbc ? ("strict" === uCookie_frontend_gdpr_scripts.ifbc && t && 1 === parseInt(t.strict) && a(), "thirdparty" === uCookie_frontend_gdpr_scripts.ifbc && t && 1 === parseInt(t.thirdparty) && a(), "advanced" === uCookie_frontend_gdpr_scripts.ifbc && t && 1 === parseInt(t.advanced) && a()) : 1 === parseInt(t.strict) && a(), void 0 !== uCookie_frontend_gdpr_scripts.scripts_defined) try {
                                var d = JSON.parse(uCookie_frontend_gdpr_scripts.scripts_defined);
                                if (1 === parseInt(t.strict)) 1 === parseInt(t.thirdparty) && void 0 === k.thirdparty && (d.thirdparty.header && postscribe(document.head, d.thirdparty.header), d.thirdparty.body && e(d.thirdparty.body).prependTo(document.body), d.thirdparty.footer && postscribe(document.body, d.thirdparty.footer), k.thirdparty = !0), 1 === parseInt(t.advanced) && void 0 === k.advanced && (d.advanced.header && postscribe(document.head, d.advanced.header), d.advanced.body && e(d.advanced.body).prependTo(document.body), d.advanced.footer && postscribe(document.body, d.advanced.footer), k.advanced = !0);
                                else {
                                    var t = f("uCookie_gdpr_popup");
                                    t && (h(), r())
                                }
                            } catch (e) {
                                console.error(e)
                            } else void 0 !== k.thirdparty && void 0 !== k.advanced || (1 === t.thirdparty && (k.thirdparty = !0), 1 === t.advanced && (k.advanced = !0), e.post(uCookie_frontend_gdpr_scripts.ajaxurl, {
                                action: "uCookie_gdpr_get_scripts",
                                strict: t.strict,
                                thirdparty: t.thirdparty,
                                advanced: t.advanced
                            }, function (r) {
                                x = o, n("script_inject", t);
                                try {
                                    var i = JSON.parse(r);
                                    i.header && postscribe(document.head, i.header), i.body && e(i.body).prependTo(document.body), i.footer && postscribe(document.body, i.footer)
                                }
                                catch (ex) {

                                }
                            }))
                        } else l()
                    }

                    function m() {
                        var t = !0;
                        e(document).find("#uCookie_gdpr_cookie_modal input[type=checkbox]").each(function () {
                            e(this).is(":checked") || (t = !1)
                        }), t ? (e(".uCookie-gdpr-button-holder .uCookie-gdpr-modal-allow-all").removeClass("button-visible").hide(), e(".uCookie-gdpr-button-holder .uCookie-gdpr-modal-save-settings").addClass("button-visible").show()) : e(".uCookie-gdpr-button-holder .uCookie-gdpr-modal-allow-all").removeClass("button-visible").show()
                    }

                    function h() {
                        var e = document.cookie.split("; ");
                        try {
                            for (var o = 0; o < e.length; o++)
                                for (var r = window.location.hostname.split("."); r.length > 0;) {
                                    var n = encodeURIComponent(e[o].split(";")[0].split("=")[0]) + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT;SameSite=Lax; domain=" + r.join(".") + " ; path=";
                                    E(e[o].split(";")[0].split("=")[0]);
                                    var i = location.pathname.split("/");
                                    for (document.cookie = n + "/"; i.length > 0;) document.cookie = n + i.join("/"), i.pop();
                                    r.shift()
                                }
                        } catch (e) {
                            t("error in gdpr_delete_all_cookies: " + e)
                        }
                        "undefined" != typeof sessionStorage && sessionStorage.removeItem("gdpr_session")
                    }

                    function g() {
                        var t = f("uCookie_gdpr_popup");
                        h(), o();
                        var r = "0",
                            n = "0",
                            i = "0",
                            s = !1;
                        t && (t = JSON.parse(t), r = t.strict, n = t.advanced, i = t.thirdparty), e("#uCookie_gdpr_strict_cookies").length > 0 ? e("#uCookie_gdpr_strict_cookies").is(":checked") ? (r = "1", s = !0) : r = "0" : (s = !0, r = "1"), e("#uCookie_gdpr_performance_cookies").is(":checked") ? (i = "1", s = !0) : i = "0", e("#uCookie_gdpr_advanced_cookies").is(":checked") ? (n = "1", s = !0) : n = "0", !t && s ? (u("uCookie_gdpr_popup", JSON.stringify({
                            strict: r,
                            thirdparty: i,
                            advanced: n
                        }), y), _(), e("#uCookie_gdpr_save_popup_settings_button").show()) : t && u("uCookie_gdpr_popup", JSON.stringify({
                            strict: r,
                            thirdparty: i,
                            advanced: n
                        }), y);
                        var t = f("uCookie_gdpr_popup");
                        t && (t = JSON.parse(t), "0" == t.strict && "0" == t.advanced && "0" == t.thirdparty && h())
                    }
                    var y = 365,
                        k = [];
                    void 0 !== uCookie_frontend_gdpr_scripts.cookie_expiration && (y = uCookie_frontend_gdpr_scripts.cookie_expiration),

                        e(document).on("click", '#uCookie_gdpr_cookie_info_bar .uCookie-gdpr-infobar-reject-btn, [href*="#gdpr-reject-cookies"]', function (t) {
                            t.preventDefault(), h(), r(), e("#uCookie_gdpr_cookie_info_bar").length > 0 && (e("#uCookie_gdpr_cookie_info_bar").addClass("uCookie-gdpr-info-bar-hidden"), e("body").removeClass("gdpr-infobar-visible"), e("#uCookie_gdpr_save_popup_settings_button").show()),
                                setTimeout(function () {
                                    document.cookie = "";
                                    //u("uCookie_gdpr_popup", JSON.stringify({
                                    //    strict: "1",
                                    //    thirdparty: "0",
                                    //    advanced: "0"
                                    //}), y)
                                }, 500)
                        });
                    var b = !1,
                        w = e(".uCookie_gdpr_modal_theme_v2 .uCookie-gdpr-tab-main").first(),
                        T = e(".uCookie_gdpr_modal_theme_v2 .uCookie-gdpr-tab-main").first();
                    e(document).on("keydown", function (t) {
                        if (e("body").hasClass("uCookie_gdpr_overflow") && e(".uCookie-gdpr-modal-content").hasClass("uCookie_gdpr_modal_theme_v1")) {
                            if (38 == t.keyCode) {
                                t.preventDefault();
                                var o = e("#uCookie-gdpr-menu li.menu-item-selected"),
                                    r = o.prev();
                                0 === r.length && (r = e("#uCookie-gdpr-menu li").last()), r.find(".uCookie-gdpr-tab-nav:visible").click(), e(".uCookie-gdpr-tab-main:visible").focus()
                            }
                            if (40 == t.keyCode || 9 == t.keyCode) {
                                t.preventDefault();
                                var o = e("#uCookie-gdpr-menu li.menu-item-selected"),
                                    n = o.next();
                                0 === n.length && (n = e("#uCookie-gdpr-menu li").first()), n.find(".uCookie-gdpr-tab-nav:visible").click(), e(".uCookie-gdpr-tab-main:visible").focus()
                            }
                            if (32 == t.keyCode) {
                                t.preventDefault();
                                var i = e(".uCookie-gdpr-tab-main:visible").find(".uCookie-gdpr-status-bar input[type=checkbox]");
                                i.click()
                            }
                            13 == t.keyCode && (t.preventDefault(), e(".uCookie-gdpr-modal-save-settings").click())
                        }
                        if (e("body").hasClass("uCookie_gdpr_overflow") && e(".uCookie-gdpr-modal-content").hasClass("uCookie_gdpr_modal_theme_v2")) {
                            if (38 == t.keyCode) {
                                t.preventDefault();
                                var o = e("#uCookie-gdpr-menu li.menu-item-selected"),
                                    r = o.prev();
                                0 === r.length && (r = e("#uCookie-gdpr-menu li").last()), r.find(".uCookie-gdpr-tab-nav:visible").click(), e(".uCookie-gdpr-tab-main:visible").focus()
                            }
                            if (40 == t.keyCode) {
                                t.preventDefault();
                                var o = e("#uCookie-gdpr-menu li.menu-item-selected"),
                                    n = o.next();
                                0 === n.length && (n = e("#uCookie-gdpr-menu li").first()), n.find(".uCookie-gdpr-tab-nav:visible").click(), e(".uCookie-gdpr-tab-main:visible").focus()
                            }
                            if (32 == t.keyCode) {
                                t.preventDefault();
                                var i = e(".uCookie-gdpr-tab-main-content").find(".focus-g");
                                i.click()
                            }
                            if (9 == t.keyCode) {
                                t.preventDefault(), e(".cookie-switch").removeClass("focus-g");
                                var n = w.next();
                                w = n, 0 === n.length && (n = T, w = T), n.find(".cookie-switch").focus().addClass("focus-g")
                            }
                            13 == t.keyCode && (t.preventDefault(), e(".uCookie-gdpr-modal-save-settings").click())
                        }
                    }), e.fn.uCookie_gdpr_read_cookies = function (e) {
                        var t = f("uCookie_gdpr_popup"),
                            o = {};
                        return o.strict = "0", o.thirdparty = "0", o.advanced = "0", t && (t = JSON.parse(t), o.strict = t.strict, o.thirdparty = t.thirdparty, o.advanced = t.advanced), o
                    };

                    LoadCookies();
                    var S = s(),
                        x = !1,
                        C = !1;
                    if (e.fn.uCookie_gdpr_save_cookie = function (t) {
                        var o = f("uCookie_gdpr_popup"),
                            i = e(window).scrollTop();
                        if (!o) {
                            if (t.thirdParty) var s = "1";
                            else var s = "0";
                            if (t.advanced) var d = "1";
                            else var d = "0";
                            if (t.scrollEnable) {
                                var c = t.scrollEnable;
                                e(window).scroll(function () {
                                    !C && e(this).scrollTop() - i > c && ("undefined" === t.thirdparty && "undefined" === t.advanced || (u("uCookie_gdpr_popup", JSON.stringify({
                                        strict: "1",
                                        thirdparty: s,
                                        advanced: d
                                    }), y), o = JSON.parse(o), p(o)))
                                })
                            } else "undefined" === t.thirdparty && "undefined" === t.advanced || (u("uCookie_gdpr_popup", JSON.stringify({
                                strict: "1",
                                thirdparty: s,
                                advanced: d
                            }), y), o = JSON.parse(o), p(o));
                            if (o = f("uCookie_gdpr_popup"))
                                if (o = JSON.parse(o), n("script_inject", o), C = !0, void 0 !== uCookie_frontend_gdpr_scripts.ifbc ? ("strict" === uCookie_frontend_gdpr_scripts.ifbc && o && 1 === parseInt(o.strict) && a(), "thirdparty" === uCookie_frontend_gdpr_scripts.ifbc && o && 1 === parseInt(o.thirdparty) && a(), "advanced" === uCookie_frontend_gdpr_scripts.ifbc && o && 1 === parseInt(o.advanced) && a()) : 1 === parseInt(o.strict) && a(), void 0 !== uCookie_frontend_gdpr_scripts.scripts_defined) try {
                                    var _ = JSON.parse(uCookie_frontend_gdpr_scripts.scripts_defined);
                                    if (1 === parseInt(o.strict)) 1 === parseInt(o.thirdparty) && void 0 === k.thirdparty && (_.thirdparty.header && postscribe(document.head, _.thirdparty.header), _.thirdparty.body && e(_.thirdparty.body).prependTo(document.body), _.thirdparty.footer && postscribe(document.body, _.thirdparty.footer), k.thirdparty = !0), 1 === parseInt(o.advanced) && void 0 === k.advanced && (_.advanced.header && postscribe(document.head, _.advanced.header), _.advanced.body && e(_.advanced.body).prependTo(document.body), _.advanced.footer && postscribe(document.body, _.advanced.footer), k.advanced = !0);
                                    else {
                                        var o = f("uCookie_gdpr_popup");
                                        o && (h(), r())
                                    }
                                } catch (e) {
                                    console.error(e)
                                } else void 0 !== k.thirdparty && void 0 !== k.advanced || (1 === o.thirdparty && (k.thirdparty = !0), 1 === o.advanced && (k.advanced = !0), e.post(uCookie_frontend_gdpr_scripts.ajaxurl, {
                                    action: "uCookie_gdpr_get_scripts",
                                    strict: o.strict,
                                    thirdparty: o.thirdparty,
                                    advanced: o.advanced
                                }, function (t) {
                                    x = cookie_input, n("script_inject", o);
                                    var r = JSON.parse(t);
                                    r.header && postscribe(document.head, r.header), r.body && e(r.body).prependTo(document.body), r.footer && postscribe(document.body, r.footer)
                                }))
                        }
                    }, "undefined" == typeof lity && "true" === uCookie_frontend_gdpr_scripts.load_lity) {
                        var N = uCookie_frontend_gdpr_scripts.plugin_dir + "/scripts/lity.js",
                            I = uCookie_frontend_gdpr_scripts.plugin_dir + "/css/lity.css";
                        postscribe(document.body, '<script src="' + N + '"><\/script>'), postscribe(document.head, '<link href="' + I + '" rel="stylesheet">')
                    }
                    var O = "",
                        j = !1;
                    if (window.location.hash) {
                        var A = window.location.hash.substring(1);
                        "uCookie_gdpr_cookie_modal" === A && (j = !0, n("opened_modal_from_link", ""), setTimeout(function () {
                            e("#uCookie_gdpr_cookie_modal").length > 0 && (O = lity("#uCookie_gdpr_cookie_modal"), e("#uCookie_gdpr_strict_cookies").click().click(), e(".lity").addClass("uCookie_gdpr_cookie_modal_open"), e(document).uCookie_lity_open())
                        }, 500))
                    }
                    if (window.location.hash) {
                        var A = window.location.hash.substring(1);
                        "gdpr_cookie_modal" === A && (j = !0, n("opened_modal_from_link", ""), setTimeout(function () {
                            e("#uCookie_gdpr_cookie_modal").length > 0 && (O = lity("#uCookie_gdpr_cookie_modal"), e("#uCookie_gdpr_strict_cookies").click().click(), e(".lity").addClass("uCookie_gdpr_cookie_modal_open"), e(document).uCookie_lity_open())
                        }, 500))
                    }
                    e(document).on("click", "#uCookie_gdpr_cookie_info_bar .uCookie-gdpr-infobar-close-btn", function (t) {
                        t.preventDefault(), _(), e("#uCookie_gdpr_save_popup_settings_button").show(), "undefined" != typeof sessionStorage && sessionStorage.setItem("gdpr_infobar_hidden", 1)
                    }),
                        function () {
                            var o = (location.pathname, e(window).scrollTop());
                            e("#uCookie_gdpr_save_popup_settings_button").show();
                            var r = uCookie_frontend_gdpr_scripts.enabled_default.third_party,
                                n = uCookie_frontend_gdpr_scripts.enabled_default.advanced;
                            if (void 0 !== uCookie_frontend_gdpr_scripts.enable_on_scroll && "true" === uCookie_frontend_gdpr_scripts.enable_on_scroll && 1 !== parseInt(r) && 1 !== parseInt(n) && (r = 1, n = 1), document.cookie.indexOf("uCookie_gdpr_popup") >= 0 || 1 == r || 1 == n) {
                                var i = f("uCookie_gdpr_popup");
                                if (i) {
                                    var a = s();
                                    "0" == a.strict && "0" == a.advanced && "0" == a.thirdparty && (h(), l())
                                } else {
                                    var d = !1;
                                    if ("undefined" != typeof sessionStorage && (d = sessionStorage.getItem("gdpr_session")), void 0 !== uCookie_frontend_gdpr_scripts.enable_on_scroll && "true" === uCookie_frontend_gdpr_scripts.enable_on_scroll) {
                                        if (d) try {
                                            p(JSON.parse(d)), C = !0, t("dbg - inject - 1"), v(d), u("uCookie_gdpr_popup", d, y), _()
                                        } catch (e) { } else if ((!C && 1 == uCookie_frontend_gdpr_scripts.enabled_default.third_party || !C && 1 == uCookie_frontend_gdpr_scripts.enabled_default.advanced) && (i = {
                                            strict: 1,
                                            thirdparty: r,
                                            advanced: n
                                        }, p(i), i = JSON.stringify(i), b = !0, l(), t("dbg - default scroll inject")), void 0 !== uCookie_frontend_gdpr_scripts.gdpr_aos_hide && ("1" === uCookie_frontend_gdpr_scripts.gdpr_aos_hide || "true" === uCookie_frontend_gdpr_scripts.gdpr_aos_hide || "object" == typeof uCookie_frontend_gdpr_scripts.gdpr_aos_hide && uCookie_frontend_gdpr_scripts.gdpr_aos_hide.includes("1")) && (t("dbg - enable on scroll - enter"), e(window).scroll(function () {
                                            if ((!C || b) && e(this).scrollTop() - o > 200) {
                                                i = {
                                                    strict: 1,
                                                    thirdparty: r,
                                                    advanced: n
                                                }, f("uCookie_gdpr_popup") || "undefined" != typeof sessionStorage && ((d = sessionStorage.getItem("gdpr_session")) || (sessionStorage.setItem("gdpr_session", JSON.stringify(i)), d = sessionStorage.getItem("gdpr_session")));
                                                try {
                                                    p(i), i = JSON.stringify(i), l(), C = !0, t("dbg - inject - 2 - accept on scroll"), b || v(i), b = !1, u("uCookie_gdpr_popup", i, y), _(), c("check reload on scroll"), e("#uCookie_gdpr_save_popup_settings_button").show()
                                                } catch (e) { }
                                            }
                                        })), void 0 !== uCookie_frontend_gdpr_scripts.gdpr_aos_hide && ("2" === uCookie_frontend_gdpr_scripts.gdpr_aos_hide || "object" == typeof uCookie_frontend_gdpr_scripts.gdpr_aos_hide && uCookie_frontend_gdpr_scripts.gdpr_aos_hide.includes("2"))) {
                                            var m = 30;
                                            if (void 0 !== uCookie_frontend_gdpr_scripts.gdpr_aos_hide_seconds) var m = parseInt(uCookie_frontend_gdpr_scripts.gdpr_aos_hide_seconds);
                                            t("dbg - hidetimer - enter, seconds: " + m), setTimeout(function () {
                                                if (t("dbg - hidetimer - is_created: " + C), !C) {
                                                    i = {
                                                        strict: 1,
                                                        thirdparty: r,
                                                        advanced: n
                                                    };
                                                    var o = f("uCookie_gdpr_popup");
                                                    t("dbg - hidetimer - cookies_stored: " + o), o || "undefined" != typeof sessionStorage && ((d = sessionStorage.getItem("gdpr_session")) || (sessionStorage.setItem("gdpr_session", JSON.stringify(i)), d = sessionStorage.getItem("gdpr_session")));
                                                    try {
                                                        p(i), i = JSON.stringify(i), l(), C = !0, t("dbg - inject - 2a"), v(i), u("uCookie_gdpr_popup", i, y), c("check reload hidetimer")
                                                    } catch (e) { }
                                                }
                                                _(), e("#uCookie_gdpr_save_popup_settings_button").show()
                                            }, 1e3 * m)
                                        }
                                    } else i = {
                                        strict: 1,
                                        thirdparty: r,
                                        advanced: n
                                    }, p(i), i = JSON.stringify(i), l()
                                }
                                t("dbg - inject - 3"), v(i)
                            } else l()
                        }(), e(document).on("click", '[data-href*="#uCookie_gdpr_cookie_modal"],[href*="#uCookie_gdpr_cookie_modal"]', function (t) {
                            t.preventDefault(), e("#uCookie_gdpr_cookie_modal").length > 0 && (j = !0, O = lity("#uCookie_gdpr_cookie_modal"), e("#uCookie_gdpr_strict_cookies").click().click(), e(".lity").addClass("uCookie_gdpr_cookie_modal_open"), e(document).uCookie_lity_open(), n("opened_modal_from_link", ""))
                        }), e(document).on("click", '[data-href*="#gdpr_cookie_modal"],[href*="#gdpr_cookie_modal"]', function (t) {
                            t.preventDefault(), e("#uCookie_gdpr_cookie_modal").length > 0 && (j = !0, O = lity("#uCookie_gdpr_cookie_modal"), e("#uCookie_gdpr_strict_cookies").click().click(), e(".lity").addClass("uCookie_gdpr_cookie_modal_open"), e(document).uCookie_lity_open(), n("opened_modal_from_link", ""))
                        }), e(document).on("click", "#uCookie_gdpr_cookie_info_bar .uCookie-gdpr-close-modal-button a, #uCookie_gdpr_cookie_info_bar .uCookie-gdpr-close-modal-button button", function (e) {
                            e.preventDefault()
                        }), e(document).on("click", ".uCookie-gdpr-modal-close", function (t) {
                            t.preventDefault(), e(".lity .lity-close").click(), e(document).uCookie_lity_close()
                        }), e(document).on("click", "#uCookie-gdpr-menu .uCookie-gdpr-tab-nav", function (t) {
                            t.preventDefault(), t.stopPropagation(), e("#uCookie-gdpr-menu li").removeClass("menu-item-selected"), e(this).parent().addClass("menu-item-selected"), e(".uCookie-gdpr-tab-content .uCookie-gdpr-tab-main").hide(), e(e(this).attr("href")).show(), e(e(this).attr("data-href")).show(), n("clicked_to_tab", e(this).attr("data-href"))
                        }), e(document).on("lity:close", function (t, o) {
                            e(document).uCookie_lity_close()
                        }), e.fn.uCookie_lity_close = function (t) {
                            j && (e("body").removeClass("uCookie_gdpr_overflow"), j = !1)
                        }, e.fn.uCookie_lity_open = function (t) {
                            if (j) {
                                e("body").addClass("uCookie_gdpr_overflow");
                                var o = f("uCookie_gdpr_popup");
                                "none" === uCookie_frontend_gdpr_scripts.show_icons && e("body").addClass("gdpr-no-icons"), e(".uCookie-gdpr-status-bar input[type=checkbox]").each(function () {
                                    e(this).is(":checked") ? e(this).closest(".uCookie-gdpr-tab-main").find(".uCookie-gdpr-strict-warning-message").slideUp() : e(this).closest(".uCookie-gdpr-tab-main").find(".uCookie-gdpr-strict-warning-message").slideDown()
                                }), o && (o = JSON.parse(o), p(o)), e(".uCookie-gdpr-modal-save-settings").removeClass("button-visible").hide(), m()
                            }
                        }, e(document).on("lity:open", function (t, o) {
                            e(document).uCookie_lity_open()
                        }), e(document).on("click", ".fl-disabled", function (t) {
                            e("#uCookie_gdpr_cookie_modal .uCookie-gdpr-modal-content").is(".uCookie_gdpr_modal_theme_v2") ? (e("#uCookie_gdpr_strict_cookies").click(), e(this).click()) : e(this).closest(".uCookie-gdpr-tab-main-content").find(".uCookie-gdpr-strict-secondary-warning-message").slideDown()
                        }), e(document).on("change", ".uCookie-gdpr-status-bar input[type=checkbox]", function (t) {
                            e(".uCookie-gdpr-modal-save-settings").addClass("button-visible").show(), e(".uCookie-gdpr-modal-allow-all").removeClass("button-visible").hide();
                            var o = e(this).closest(".uCookie-gdpr-tab-main").attr("id");
                            e(this).closest(".uCookie-gdpr-status-bar").toggleClass("checkbox-selected"), e(this).closest(".uCookie-gdpr-tab-main").toggleClass("checkbox-selected"), e("#uCookie-gdpr-menu .menu-item-" + o).toggleClass("menu-item-off"), e(this).is(":checked") ? e(this).closest(".uCookie-gdpr-tab-main").find(".uCookie-gdpr-strict-warning-message").slideUp() : e(this).closest(".uCookie-gdpr-tab-main").find(".uCookie-gdpr-strict-warning-message").slideDown(), e(this).is("#uCookie_gdpr_strict_cookies") && (e(this).is(":checked") ? (e("#third_party_cookies fieldset, #third_party_cookies .gdpr-cc-form-fieldset").removeClass("fl-disabled"), e("#uCookie_gdpr_performance_cookies").prop("disabled", !1), e("#third_party_cookies .uCookie-gdpr-strict-secondary-warning-message").slideUp(), e("#advanced-cookies fieldset, #advanced-cookies .gdpr-cc-form-fieldset").removeClass("fl-disabled"), e("#advanced-cookies .uCookie-gdpr-strict-secondary-warning-message").slideUp(), e("#uCookie_gdpr_advanced_cookies").prop("disabled", !1)) : (e(".gdpr_cookie_settings_shortcode_content").find("input").each(function () {
                                e(this).prop("checked", !1)
                            }), e("#third_party_cookies fieldset, #third_party_cookies .gdpr-cc-form-fieldset").addClass("fl-disabled").closest(".uCookie-gdpr-status-bar").removeClass("checkbox-selected"), e("#uCookie_gdpr_performance_cookies").prop("disabled", !0).prop("checked", !1), e("#advanced-cookies fieldset, #advanced-cookies .gdpr-cc-form-fieldset").addClass("fl-disabled").closest(".uCookie-gdpr-status-bar").removeClass("checkbox-selected"), e("#uCookie_gdpr_advanced_cookies").prop("disabled", !0).prop("checked", !1))), e('input[data-name="' + e(this).attr("name") + '"]').prop("checked", e(this).is(":checked")), m()
                        }), e(document).on("click", ".gdpr_cookie_settings_shortcode_content a.gdpr-shr-save-settings", function (t) {
                            t.preventDefault(), g(), e(".lity .lity-close").click(), e(document).uCookie_lity_close(), c("modal-save-settings")
                        }), e(document).on("change", ".gdpr_cookie_settings_shortcode_content input[type=checkbox]", function (t) {
                            var o = e(this).attr("data-name"),
                                r = e("#" + o);
                            e(this).is(":checked") ? (e('input[data-name="' + o + '"]').prop("checked", !0), "uCookie_gdpr_strict_cookies" !== e(this).attr("data-name") && (e(this).closest(".gdpr_cookie_settings_shortcode_content").find('input[data-name="uCookie_gdpr_strict_cookies"]').is(":checked") || (e('input[data-name="' + o + '"]').prop("checked", !1), e('.gdpr_cookie_settings_shortcode_content input[data-name="uCookie_gdpr_strict_cookies"]').closest(".gdpr-shr-switch").css("transform", "scale(1.2)"), setTimeout(function () {
                                e('.gdpr_cookie_settings_shortcode_content input[data-name="uCookie_gdpr_strict_cookies"]').closest(".gdpr-shr-switch").css("transform", "scale(1)")
                            }, 300)))) : (e('input[data-name="' + o + '"]').prop("checked", e(this).is(":checked")), "uCookie_gdpr_strict_cookies" === e(this).attr("data-name") && e(".gdpr_cookie_settings_shortcode_content").find('input[type="checkbox"]').prop("checked", !1)), r.click()
                        }), e(document).on("click", '.uCookie-gdpr-modal-allow-all, [href*="#gdpr-accept-cookies"]', function (t) {
                            t.preventDefault(), e("#uCookie_gdpr_cookie_modal").find("input[type=checkbox]").each(function () {
                                var t = e(this);
                                t.is(":checked") || t.click()
                            }), d("enable_all enable-all-button"), e(".lity .lity-close").click(), _(), g(), e(document).uCookie_lity_close()
                        }), e(document).on("click", ".uCookie-gdpr-infobar-allow-all", function (e) {
                            e.preventDefault(), d("enable_all allow-btn"), LoadCookies()
                        }), e(document).on("click", ".uCookie-gdpr-modal-save-settings", function (t) {
                            t.preventDefault(), g(), e(".lity .lity-close").click(), e(document).uCookie_lity_close(), c("modal-save-settings")
                        });
                    var E = function (e) {
                        try {
                            document.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;SameSite=Lax"
                        } catch (e) {
                            t("error in delete_cookie: " + e)
                        }
                    }
                },
                finalize: function () { }
            }
        },
            o = {
                fire: function (e, o, r) {
                    var n, i = t;
                    o = void 0 === o ? "init" : o, n = "" !== e, n = n && i[e], (n = n && "function" == typeof i[e][o]) && i[e][o](r)
                },
                loadEvents: function () {
                    var t = !1;
                    void 0 !== uCookie_frontend_gdpr_scripts.geo_location && "true" === uCookie_frontend_gdpr_scripts.geo_location ? jQuery.post(uCookie_frontend_gdpr_scripts.ajaxurl, {
                        action: "uCookie_gdpr_localize_scripts"
                    }, function (e) {
                        var r = JSON.parse(e);
                        void 0 !== r.display_cookie_banner && (uCookie_frontend_gdpr_scripts.display_cookie_banner = r.display_cookie_banner), void 0 !== r.enabled_default && (uCookie_frontend_gdpr_scripts.enabled_default = r.enabled_default), t || (t = !0, o.fire("common"))
                    }) : o.fire("common"), e.each(document.body.className.replace(/-/g, "_").split(/\s+/), function (e, t) {
                        o.fire(t), o.fire(t, "finalize")
                    }), o.fire("common", "finalize")




                }
            };
        e(document).ready(o.loadEvents)
    }(jQuery);

var myIndex = 0
function LoadCookies() {
    if (myIndex == 0) {
        var cookies = null;

        if (document.cookie != "") {

            var cookieList = document.cookie.split(';');
            for (var i = 0; i < cookieList.length; i++) {
                if (cookieList[i].indexOf('uCookie_gdpr_popup') > -1) {
                    cookies = JSON.parse(decodeURIComponent(cookieList[i].replace('uCookie_gdpr_popup=', '')));
                    break;
                }
            }
            
            //if (cookies.thirdparty == "1") {
            jQuery.get("/umbraco/api/CookieData/get/1", function (res) {
                console.log(res);
                //AdditionalBodySection: ""
                //AdditionalFooterSection: ""
                //AdditionalHeaderSection: "1223123123"

                //ThrdPartyBodySection: ""
                //ThrdPartyFooterSection: ""
                //ThrdPartyHeaderSection: ""

                if (cookies.thirdparty == "1") {
                    if (res.ThrdPartyHeaderSection != "" && res.ThrdPartyHeaderSection != null) {
                        postscribe(document.head, res.ThrdPartyHeaderSection);
                    }

                    if (res.ThrdPartyBodySection != "" && res.ThrdPartyBodySection != null) {
                        $(res.ThrdPartyBodySection).prependTo(document.body);
                    }
                    
                    if (res.ThrdPartyFooterSection != "" && res.ThrdPartyFooterSection != null) {
                        postscribe(document.body, res.ThrdPartyFooterSection);
                    }
                    res.ThrdPartyFooterSection && postscribe(document.body, res.ThrdPartyFooterSection)
                }

                myIndex++;
            });
            // }
        }
    }
}