// https://www.redditstatic.com/desktop2x/SubredditWiki~reddit-components-Wiki-ModHubWikiManagement.4a02b343bce4780e697a.js
// Retrieved at 12/2/2021, 10:50:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"], {
		"./node_modules/autosize/dist/autosize.js": function(e, t, i) {
			var n, s, o;
			s = [t, e], void 0 === (o = "function" == typeof(n = function(e, t) {
				"use strict";
				var i, n, s = "function" == typeof Map ? new Map : (i = [], n = [], {
						has: function(e) {
							return i.indexOf(e) > -1
						},
						get: function(e) {
							return n[i.indexOf(e)]
						},
						set: function(e, t) {
							-1 === i.indexOf(e) && (i.push(e), n.push(t))
						},
						delete: function(e) {
							var t = i.indexOf(e);
							t > -1 && (i.splice(t, 1), n.splice(t, 1))
						}
					}),
					o = function(e) {
						return new Event(e, {
							bubbles: !0
						})
					};
				try {
					new Event("test")
				} catch (l) {
					o = function(e) {
						var t = document.createEvent("Event");
						return t.initEvent(e, !0, !1), t
					}
				}

				function a(e) {
					if (e && e.nodeName && "TEXTAREA" === e.nodeName && !s.has(e)) {
						var t, i = null,
							n = e.clientWidth,
							a = null,
							r = function() {
								e.clientWidth !== n && m()
							},
							d = function(t) {
								window.removeEventListener("resize", r, !1), e.removeEventListener("input", m, !1), e.removeEventListener("keyup", m, !1), e.removeEventListener("autosize:destroy", d, !1), e.removeEventListener("autosize:update", m, !1), Object.keys(t).forEach((function(i) {
									e.style[i] = t[i]
								})), s.delete(e)
							}.bind(e, {
								height: e.style.height,
								resize: e.style.resize,
								overflowY: e.style.overflowY,
								overflowX: e.style.overflowX,
								wordWrap: e.style.wordWrap
							});
						e.addEventListener("autosize:destroy", d, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", m, !1), window.addEventListener("resize", r, !1), e.addEventListener("input", m, !1), e.addEventListener("autosize:update", m, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", s.set(e, {
							destroy: d,
							update: m
						}), "vertical" === (t = window.getComputedStyle(e, null)).resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), i = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(i) && (i = 0), m()
					}

					function c(t) {
						var i = e.style.width;
						e.style.width = "0px", e.offsetWidth, e.style.width = i, e.style.overflowY = t
					}

					function l() {
						var t = e.style.height,
							s = function(e) {
								for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
									node: e.parentNode,
									scrollTop: e.parentNode.scrollTop
								}), e = e.parentNode;
								return t
							}(e),
							o = document.documentElement && document.documentElement.scrollTop;
						e.style.height = "auto";
						var a = e.scrollHeight + i;
						0 !== e.scrollHeight ? (e.style.height = a + "px", n = e.clientWidth, s.forEach((function(e) {
							e.node.scrollTop = e.scrollTop
						})), o && (document.documentElement.scrollTop = o)) : e.style.height = t
					}

					function m() {
						l();
						var t = Math.round(parseFloat(e.style.height)),
							i = window.getComputedStyle(e, null),
							n = "content-box" === i.boxSizing ? Math.round(parseFloat(i.height)) : e.offsetHeight;
						if (n !== t ? "hidden" === i.overflowY && (c("scroll"), l(), n = "content-box" === i.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== i.overflowY && (c("hidden"), l(), n = "content-box" === i.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), a !== n) {
							a = n;
							var s = o("autosize:resized");
							try {
								e.dispatchEvent(s)
							} catch (r) {}
						}
					}
				}

				function r(e) {
					var t = s.get(e);
					t && t.destroy()
				}

				function d(e) {
					var t = s.get(e);
					t && t.update()
				}
				var c = null;
				"undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((c = function(e) {
					return e
				}).destroy = function(e) {
					return e
				}, c.update = function(e) {
					return e
				}) : ((c = function(e, t) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], (function(e) {
						return a(e)
					})), e
				}).destroy = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], r), e
				}, c.update = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], d), e
				}), t.exports = c
			}) ? n.apply(t, s) : n) || (e.exports = o)
		},
		"./node_modules/computed-style/dist/computedStyle.commonjs.js": function(e, t) {
			e.exports = function(e, t, i) {
				return ((i = window.getComputedStyle) ? i(e) : e.currentStyle)[t.replace(/-(\w)/gi, (function(e, t) {
					return t.toUpperCase()
				}))]
			}
		},
		"./node_modules/line-height/lib/line-height.js": function(e, t, i) {
			var n = i("./node_modules/computed-style/dist/computedStyle.commonjs.js");
			e.exports = function(e) {
				var t = n(e, "line-height"),
					i = parseFloat(t, 10);
				if (t === i + "") {
					var s = e.style.lineHeight;
					e.style.lineHeight = t + "em", t = n(e, "line-height"), i = parseFloat(t, 10), s ? e.style.lineHeight = s : delete e.style.lineHeight
				}
				if (-1 !== t.indexOf("pt") ? (i *= 4, i /= 3) : -1 !== t.indexOf("mm") ? (i *= 96, i /= 25.4) : -1 !== t.indexOf("cm") ? (i *= 96, i /= 2.54) : -1 !== t.indexOf("in") ? i *= 96 : -1 !== t.indexOf("pc") && (i *= 16), i = Math.round(i), "normal" === t) {
					var o = e.nodeName,
						a = document.createElement(o);
					a.innerHTML = "&nbsp;", "TEXTAREA" === o.toUpperCase() && a.setAttribute("rows", "1");
					var r = n(e, "font-size");
					a.style.fontSize = r, a.style.padding = "0px", a.style.border = "0px";
					var d = document.body;
					d.appendChild(a), i = a.offsetHeight, d.removeChild(a)
				}
				return i
			}
		},
		"./node_modules/react-autosize-textarea/lib/TextareaAutosize.js": function(e, t, i) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var n, s, o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				},
				a = function() {
					function e(e, t) {
						for (var i = 0; i < t.length; i++) {
							var n = t[i];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, i, n) {
						return i && e(t.prototype, i), n && e(t, n), t
					}
				}(),
				r = m(i("./node_modules/react/index.js")),
				d = m(i("./node_modules/react-autosize-textarea/node_modules/prop-types/index.js")),
				c = m(i("./node_modules/autosize/dist/autosize.js")),
				l = m(i("./node_modules/line-height/lib/line-height.js"));

			function m(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function u(e, t) {
				var i = {};
				for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (i[n] = e[n]);
				return i
			}

			function p(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}
			var h = (s = n = function(e) {
				function t() {
					var e, i, n;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					for (var s = arguments.length, a = Array(s), r = 0; r < s; r++) a[r] = arguments[r];
					return i = n = p(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), n.state = {
						lineHeight: null
					}, n.dispatchEvent = function(e) {
						var t = document.createEvent("Event");
						t.initEvent(e, !0, !1), n.textarea.dispatchEvent(t)
					}, n.getValue = function(e) {
						var t = e.valueLink,
							i = e.value;
						return t ? t.value : i
					}, n.updateLineHeight = function() {
						n.setState({
							lineHeight: (0, l.default)(n.textarea)
						})
					}, n.onChange = function(e) {
						n.currentValue = e.target.value, n.props.onChange && n.props.onChange(e)
					}, n.saveDOMNodeRef = function(e) {
						var t = n.props.innerRef;
						t && t(e), n.textarea = e
					}, n.getLocals = function() {
						var e = n,
							t = e.props,
							i = (t.onResize, t.maxRows),
							s = (t.onChange, t.style),
							a = (t.innerRef, u(t, ["onResize", "maxRows", "onChange", "style", "innerRef"])),
							r = e.state.lineHeight,
							d = e.saveDOMNodeRef,
							c = i && r ? r * i : null;
						return o({}, a, {
							saveDOMNodeRef: d,
							style: c ? o({}, s, {
								maxHeight: c
							}) : s,
							onChange: n.onChange
						})
					}, p(n, i)
				}
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(t, e), a(t, [{
					key: "componentDidMount",
					value: function() {
						var e = this,
							t = this.props,
							i = t.onResize;
						"number" == typeof t.maxRows ? (this.updateLineHeight(), setTimeout((function() {
							return (0, c.default)(e.textarea)
						}))) : (0, c.default)(this.textarea), i && this.textarea.addEventListener("autosize:resized", this.props.onResize)
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						this.props.onResize && this.textarea.removeEventListener("autosize:resized", this.props.onResize), this.dispatchEvent("autosize:destroy")
					}
				}, {
					key: "render",
					value: function() {
						var e = this.getLocals(),
							t = e.children,
							i = e.saveDOMNodeRef,
							n = u(e, ["children", "saveDOMNodeRef"]);
						return r.default.createElement("textarea", o({}, n, {
							ref: i
						}), t)
					}
				}, {
					key: "componentDidUpdate",
					value: function() {
						this.getValue(this.props) !== this.currentValue && this.dispatchEvent("autosize:update")
					}
				}]), t
			}(r.default.Component), n.defaultProps = {
				rows: 1
			}, s);
			t.default = h, h.propTypes = {
				rows: d.default.number,
				maxRows: d.default.number,
				onResize: d.default.func,
				innerRef: d.default.func
			}
		},
		"./node_modules/react-autosize-textarea/lib/index.js": function(e, t, i) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var n, s = i("./node_modules/react-autosize-textarea/lib/TextareaAutosize.js"),
				o = (n = s) && n.__esModule ? n : {
					default: n
				};
			t.default = o.default
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}

			function o() {}
			o.resetWarningCache = s, e.exports = function() {
				function e(e, t, i, s, o, a) {
					if (a !== n) {
						var r = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw r.name = "Invariant Violation", r
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var i = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: t,
					element: e,
					elementType: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t,
					checkPropTypes: o,
					resetWarningCache: s
				};
				return i.PropTypes = i, i
			}
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/index.js": function(e, t, i) {
			e.exports = i("./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, i) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.m.less": function(e, t, i) {
			e.exports = {
				editorWrapper: "VBa-xDMEbFi3vsO4id4OC",
				textareaAutosize: "_6Ej82J4aTDK36LLOcpFbC",
				mIsFullHeight: "aZb6a46diyLdUQJynW3aD"
			}
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/react/index.js"),
				s = i.n(n),
				o = i("./node_modules/react-autosize-textarea/lib/index.js"),
				a = i.n(o),
				r = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/components/ResizableAutosizeTextarea/index.m.less"),
				c = i.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = ({
					className: e,
					children: t,
					editorWrapperRef: i,
					initialHeight: n
				}) => s.a.createElement("div", {
					className: Object(r.a)(c.a.editorWrapper, e),
					style: n ? {
						height: n
					} : void 0,
					ref: i
				}, t),
				u = ({
					isFullHeight: e,
					textAreaRef: t,
					...i
				}) => s.a.createElement(a.a, l({
					className: Object(r.a)(c.a.textareaAutosize, {
						[c.a.mIsFullHeight]: e
					}),
					innerRef: t
				}, i));
			class p extends s.a.Component {
				constructor(e) {
					super(e), this.editorHeight = null, this.editorRef = null, this.editorStyleMutationObserver = null, this.onEditorStyleChanged = () => {
						if (!this.editorRef) return;
						const {
							isResized: e
						} = this.state;
						e || this.setState({
							isResized: !0
						});
						const t = this.editorRef.style.height ? Number.parseInt(this.editorRef.style.height) : null;
						this.editorHeight !== t && (this.editorHeight = t, t && this.props.onEditorResize && this.props.onEditorResize(t))
					}, this.setEditorWrapperRef = e => this.editorRef = e, this.state = {
						initialHeight: e.initialHeight,
						isResized: !!e.initialHeight
					}
				}
				componentDidMount() {
					this.editorRef && (this.editorStyleMutationObserver = new MutationObserver(this.onEditorStyleChanged), this.editorStyleMutationObserver.observe(this.editorRef, {
						attributes: !0,
						attributeFilter: ["style"]
					}))
				}
				componentWillUnmount() {
					this.editorStyleMutationObserver && (this.editorStyleMutationObserver.disconnect(), this.editorStyleMutationObserver = null)
				}
				render() {
					const {
						className: e,
						initialHeight: t,
						innerRef: i,
						onEditorResize: n,
						...o
					} = this.props, {
						isResized: a
					} = this.state;
					return s.a.createElement(m, {
						className: e,
						editorWrapperRef: this.setEditorWrapperRef,
						initialHeight: t
					}, s.a.createElement(u, l({}, o, {
						children: !0,
						isFullHeight: !!a,
						textAreaRef: i
					})))
				}
			}
			t.a = p
		},
		"./src/reddit/components/Wiki/RevisionsHistory/index.m.less": function(e, t, i) {
			e.exports = {
				container: "ce8AyHVPoXK2ammlk4dfU",
				mModHub: "lPFQHGq7ZJKxOjbVRcUdL",
				content: "_1VN7jDMwPO-3f4G4d4Uy64",
				pageTitle: "V22-y0iI914ak74zxkV1a",
				pageTitleText: "_3BCuy1seZbIJ-Vw-iWJCTG",
				compareBar: "sT-SyQpGKrzgwl4yACquP",
				compareButton: "_1Mw_9r88mDyglkMA5Pp5Ms",
				table: "_2Lg_uTkZH6amYWXVr49IWM",
				colHeaderCheckbox: "_3qPtBJYDKp7pfTfAUKAzlI",
				colHeaderTime: "_3pBaYFkqpMeop0hSx3HG-b",
				colHeaderPage: "_1n5DuAwDmS92cPgdXSZ0VO",
				colHeaderUser: "_1hHgxs8vZyaUp-aaXVfveR",
				colHeaderReason: "_2eOOtPq7Dwb8YjxxasuXgN",
				colHeaderActions: "_2KyULn42zdubuWRRe3ofMX",
				row: "_1n6bCdFzFTcMb8nbcUVbiz",
				mHidden: "_3MGUJlnTJODLOgfuo6ps3N",
				revertButton: "r_5uSGcfTRKw2BrjrMAR6",
				cellPage: "RApPXNo2Wc734CFMKUP9W",
				wikiPageLink: "_3CiqT117augUjPWWrx2TW0",
				usernameLink: "RxzK_7t17mU6YV5lKPTX-",
				cellReason: "_181zFMPLOrQCybR7mpAjDS",
				reasonTextWrapper: "_2k1ikYAtkuItWLnM2v1FoJ",
				mExpanded: "_2Ek11A--oU1fiuOX4icZFo",
				reasonText: "_3rkoZiwX9xBWbnUj8KdDg_",
				moreButton: "MlwbIZHA-n0l6pJotytjr",
				buttons: "_2NPnlVPBDNk-5rZwESZ9B9",
				viewButton: "_1QQV3g6raY4DMIZmGWf_EB",
				active: "Jkkj0xIEOc5nizoeloGlN",
				cellCheckbox: "_2jHe0kuo-s2zjj9AFEoKIR",
				checkbox: "_2z1fkA5gXEWTIixh5mc5Mu",
				loadingRow: "_1twsCmeo_Rv87GnJLkvjOG",
				loadingShimmer: "_2OTytxS0mfmxAGAw4qKI6K",
				mShowActionButtons: "_3ZOwuRsjzzqragH4DDY3Au"
			}
		},
		"./src/reddit/components/Wiki/RevisionsHistory/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return Q
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/react/index.js"),
				o = i.n(s),
				a = i("./node_modules/react-redux/es/index.js"),
				r = i("./node_modules/reselect/es/index.js"),
				d = i("./src/lib/classNames/index.ts"),
				c = i("./src/reddit/actions/modal.ts"),
				l = i("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				m = i("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				u = i("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				p = i("./src/reddit/components/TrackingHelper/index.tsx"),
				h = i("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				b = i("./src/reddit/controls/Button/index.tsx"),
				g = i("./src/reddit/helpers/trackers/subredditWiki.ts"),
				f = i("./src/lib/addQueryParams/index.ts"),
				k = i("./src/reddit/constants/parameters.ts"),
				v = i("./src/reddit/helpers/wiki/wikiRevision.ts");

			function x(e, t) {
				const {
					revision: i,
					revisionToCompare: n
				} = t;
				if (!i && !n) return e;
				const s = {};
				return i && (s[k.D] = Object(v.b)(i)), n && (s[k.E] = Object(v.b)(n)), Object(f.a)(e, s)
			}
			var w = i("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				E = i("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				_ = i("./src/reddit/selectors/activeModalId.ts"),
				N = i("./src/reddit/selectors/moderatorPermissions.ts"),
				y = i("./src/reddit/selectors/subreddit.ts"),
				P = i("./src/reddit/selectors/subredditWiki.ts"),
				R = i("./node_modules/lodash/times.js"),
				C = i.n(R),
				T = i("./src/reddit/helpers/styles/mixins/loading.ts"),
				j = i("./src/reddit/components/Wiki/RevisionsHistory/index.m.less"),
				O = i.n(j);
			var W = () => {
					const e = s.createElement("div", {
						className: Object(d.a)(O.a.loadingShimmer, Object(T.b)({
							isLoading: !0
						}))
					});
					return s.createElement("div", null, C()(4, t => s.createElement("div", {
						key: t,
						className: O.a.loadingRow
					}, e)))
				},
				M = i("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			class L extends o.a.Component {
				constructor() {
					super(...arguments), this.isIntersecting = !1, this.handleChange = e => {
						this.isIntersecting = e.isIntersecting, this.triggerLoadMoreIfNeeded()
					}, this.triggerLoadMoreIfNeeded = () => {
						const {
							isLoading: e,
							hasError: t
						} = this.props;
						!this.isIntersecting || e || t || this.props.onLoadMore()
					}
				}
				componentDidMount() {
					this.triggerLoadMoreIfNeeded()
				}
				componentDidUpdate() {
					this.triggerLoadMoreIfNeeded()
				}
				render() {
					return o.a.createElement(M.a, {
						onChange: this.handleChange
					}, o.a.createElement("div", null))
				}
			}
			var H = i("./node_modules/lodash/noop.js"),
				S = i.n(H),
				I = i("./src/reddit/components/AuthorLink/index.tsx"),
				z = i("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				A = i("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				B = i("./src/reddit/controls/Checkbox/index.tsx"),
				U = i("./src/reddit/controls/InternalLink/index.tsx"),
				D = i("./node_modules/lodash/forEach.js"),
				F = i.n(D),
				V = i("./src/lib/fastdom/index.ts");

			function G(e) {
				V.a.read(() => {
					F()(e, e => {
						if (e instanceof HTMLElement && e.parentElement) {
							const t = e.offsetWidth < e.scrollWidth,
								i = e.parentElement,
								n = "true" === i.dataset.textOverflow;
							t !== n && V.a.write(() => {
								i.dataset.textOverflow = String(t)
							})
						}
					})
				})
			}
			const q = Object(r.c)({
				revision: P.n
			});
			class K extends o.a.Component {
				constructor() {
					super(...arguments), this.reasonElementRef = o.a.createRef(), this.state = {}, this.onToggleHiddenClick = async () => {
						const {
							revision: e,
							revisionId: t,
							subredditName: i
						} = this.props, n = e.isHidden;
						this.props.sendEvent(Object(g.l)(n)), this.setState({
							isHideRequestPending: !0
						}), await this.props.toggleIsHidden({
							revisionId: t,
							subredditName: i,
							wikiPageName: e.page.name
						}), this.setState({
							isHideRequestPending: !1
						})
					}, this.onRevertClick = () => {
						this.props.onRevertClick(this.props.revision)
					}, this.onShowMoreButtonClick = () => {
						this.setState({
							expanded: !0
						})
					}, this.onCheckboxToggle = () => {
						this.props.onCheckboxToggle(this.props.revisionId)
					}, this.onViewClick = () => {
						this.props.sendEvent(g.q)
					}
				}
				componentDidMount() {
					this.reasonElementRef.current && G([this.reasonElementRef.current])
				}
				render() {
					const {
						hasWikiModPerms: e,
						isCheckboxSelected: t,
						isModHub: i,
						isRecentRevisionMode: s,
						revision: a,
						subredditName: r
					} = this.props, c = a.page.name, l = a.isHidden, {
						expanded: m
					} = this.state, u = a.authorInfo && a.authorInfo.name, p = Object(E.a)({
						subredditName: r,
						wikiPageName: c
					}, i), h = x(p, {
						revision: a.id
					}), g = !s && e, f = c.split("/").slice(-1)[0];
					return o.a.createElement("tr", {
						className: Object(d.a)(O.a.row, l ? O.a.mHidden : null)
					}, !s && o.a.createElement("td", {
						className: O.a.cellCheckbox
					}, o.a.createElement(B.a, {
						className: O.a.checkbox,
						isCheckboxSelected: t,
						toggleCheckbox: this.onCheckboxToggle
					})), o.a.createElement("td", {
						className: O.a.cellTime
					}, Object(A.b)(a)), s && o.a.createElement("td", {
						className: O.a.cellPage
					}, o.a.createElement(U.a, {
						className: O.a.wikiPageLink,
						title: `/${c}`,
						to: p
					}, f)), o.a.createElement("td", {
						className: O.a.cellUser
					}, u && o.a.createElement(z.a, {
						sendHoverCardEvent: S.a,
						tooltipId: `revision-${a.id}`,
						user: u
					}, o.a.createElement(I.a, {
						author: u,
						className: O.a.usernameLink
					}, u))), o.a.createElement("td", {
						className: O.a.cellReason
					}, o.a.createElement("div", {
						className: Object(d.a)(O.a.reasonTextWrapper, m ? O.a.mExpanded : null)
					}, o.a.createElement("div", {
						ref: this.reasonElementRef,
						className: O.a.reasonText
					}, a.reason), !m && o.a.createElement(b.i, {
						className: O.a.moreButton,
						onClick: this.onShowMoreButtonClick
					}, n.fbt._("more", null, {
						hk: "2IGYPS"
					})))), o.a.createElement("td", null, o.a.createElement("div", {
						className: O.a.buttons
					}, o.a.createElement(b.s, {
						className: O.a.viewButton,
						onClick: this.onViewClick,
						to: h
					}, n.fbt._("View", null, {
						hk: "4imNnh"
					})), g && o.a.createElement(o.a.Fragment, null, o.a.createElement(b.r, {
						className: O.a.hideShowButton,
						disabled: this.state.isHideRequestPending,
						onClick: this.onToggleHiddenClick
					}, l ? n.fbt._("Show", null, {
						hk: "3YKyhU"
					}) : n.fbt._("Hide", null, {
						hk: "30nwHP"
					})), o.a.createElement(b.r, {
						className: O.a.revertButton,
						onClick: this.onRevertClick
					}, n.fbt._("Revert", null, {
						hk: "5mbFS"
					}))))))
				}
			}
			var J = Object(a.b)(q, e => ({
				toggleIsHidden: t => e(Object(l.b)(t))
			}))(K);

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Z = Object(r.c)({
				hasError: P.o,
				hasWikiModPerms: (e, t) => {
					const i = Object(y.v)(e, t);
					return !!i && Object(N.i)(e, {
						subredditId: i.id
					})
				},
				isPending: P.q,
				isRevertConfirmationModalOpen: Object(_.b)("wiki-revert-confirmation"),
				listingInfo: P.p
			});
			class X extends o.a.Component {
				constructor() {
					super(...arguments), this.containerRef = o.a.createRef(), this.state = {
						selectedRevisions: []
					}, this.onRevertConfirmed = () => {
						const {
							subredditName: e
						} = this.props, {
							revertRevision: t
						} = this.state;
						t && (this.props.sendEvent(g.k), this.props.onRevertToRevision({
							revisionId: t.id,
							subredditName: e,
							wikiPageName: t.page.name
						}))
					}, this.onCompareClick = () => {
						this.props.sendEvent(g.d)
					}, this.onRevertButtonClick = e => {
						this.setState({
							revertRevision: e
						}), this.props.toggleRevetConfirmationModal()
					}, this.handleResize = () => {
						this.containerRef.current && function(e) {
							G(e.getElementsByClassName(O.a.reasonText))
						}(this.containerRef.current)
					}, this.onLoadMore = () => {
						this.props.onLoadMoreRevisions()
					}, this.onCheckboxToggle = e => {
						const {
							listingInfo: t
						} = this.props, i = t && t.ids || [];
						this.setState(t => {
							let n = t.selectedRevisions;
							return 2 === (n = n.includes(e) ? n.filter(t => t !== e) : n.length < 2 ? [...n, e] : [e]).length && i.indexOf(n[0]) < i.indexOf(n[1]) && n.reverse(), {
								selectedRevisions: n
							}
						})
					}, this.renderRowItem = (e, t) => {
						const {
							hasWikiModPerms: i,
							subredditName: n
						} = this.props, {
							selectedRevisions: s
						} = this.state;
						return o.a.createElement(J, {
							key: e,
							hasWikiModPerms: i,
							isCheckboxSelected: s.includes(e),
							isModHub: this.props.isModHub,
							isRecentRevisionMode: this.props.isRecentRevisionsMode,
							onCheckboxToggle: this.onCheckboxToggle,
							onRevertClick: this.onRevertButtonClick,
							revisionId: e,
							sendEvent: this.props.sendEvent,
							subredditName: n
						})
					}
				}
				componentDidMount() {
					window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					const {
						hasError: e,
						hasWikiModPerms: t,
						isModHub: i,
						isPending: s,
						isRecentRevisionsMode: a,
						isRevertConfirmationModalOpen: r,
						listingInfo: c,
						subredditName: l,
						wikiPageName: p
					} = this.props, {
						selectedRevisions: g
					} = this.state, f = c && c.ids || [], k = c && c.pageInfo.hasNextPage;
					let v = "",
						w = "#";
					p && (v = Object(E.a)({
						subredditName: l,
						wikiPageName: p
					}, i), 2 === g.length && (w = x(v, {
						revision: g[0],
						revisionToCompare: g[1]
					})));
					const _ = !a && t;
					return o.a.createElement("div", {
						ref: this.containerRef,
						className: Object(d.a)(O.a.container, {
							[O.a.mModHub]: i,
							[O.a.mShowActionButtons]: _
						})
					}, o.a.createElement(h.a, {
						buttonText: a ? void 0 : n.fbt._("Go to wiki page", null, {
							hk: "3tJUXk"
						}),
						buttonLink: v,
						className: O.a.pageTitle,
						title: o.a.createElement("span", {
							className: O.a.pageTitleText
						}, a ? n.fbt._("Recent revisions", null, {
							hk: "VsZfq"
						}) : n.fbt._("Page history for {pageName}", [n.fbt._param("pageName", `/${p}`)], {
							hk: "y2LqH"
						}))
					}), o.a.createElement("div", {
						className: O.a.content
					}, !a && o.a.createElement("div", {
						className: O.a.compareBar
					}, o.a.createElement(b.s, {
						className: O.a.compareButton,
						disabled: g.length < 2,
						onClick: this.onCompareClick,
						to: w
					}, n.fbt._("Compare", null, {
						hk: "3grtKa"
					})), n.fbt._("{selectedCnt}/2 selected to compare", [n.fbt._param("selectedCnt", g.length.toString())], {
						hk: "1PfMOM"
					})), o.a.createElement("table", {
						className: O.a.table
					}, o.a.createElement("thead", null, o.a.createElement("tr", null, !a && o.a.createElement("th", {
						className: O.a.colHeaderCheckbox
					}), o.a.createElement("th", {
						className: O.a.colHeaderTime
					}, n.fbt._("time", null, {
						hk: "231ZTq"
					})), a && o.a.createElement("th", {
						className: O.a.colHeaderPage
					}, n.fbt._("Wiki page", null, {
						hk: "2CzzvU"
					})), o.a.createElement("th", {
						className: O.a.colHeaderUser
					}, n.fbt._("Username", null, {
						hk: "3dJxeH"
					})), o.a.createElement("th", {
						className: O.a.colHeaderReason
					}, n.fbt._("Revision Reason", null, {
						hk: "3Z0slk"
					})), o.a.createElement("th", {
						className: O.a.colHeaderActions
					}, _ && o.a.createElement(o.a.Fragment, null, n.fbt._("Actions", null, {
						hk: "1V50p1"
					}), o.a.createElement(u.a, null, n.fbt._("View: View current version", null, {
						hk: "1Wp1Qa"
					}), o.a.createElement("br", null), n.fbt._("Hide: Hide revision from page history", null, {
						hk: "1G574c"
					}), o.a.createElement("br", null), n.fbt._("Revert: Revert page to an older version", null, {
						hk: "2IMILE"
					})))))), o.a.createElement("tbody", {
						className: O.a.tableBody
					}, f.map(this.renderRowItem))), s && o.a.createElement(W, null), k && o.a.createElement(L, {
						hasError: e,
						isLoading: s,
						onLoadMore: this.onLoadMore
					})), r && o.a.createElement(m.a, {
						actionText: n.fbt._("Revert", null, {
							hk: "qQOSa"
						}),
						headerText: n.fbt._("Revert wiki page", null, {
							hk: "2ZNWTL"
						}),
						modalText: n.fbt._("Are you sure you wish to change this wiki page to a previously saved version?", null, {
							hk: "4yhcAG"
						}),
						onConfirm: this.onRevertConfirmed,
						toggleModal: this.props.toggleRevetConfirmationModal,
						withOverlay: !0
					}))
				}
			}
			const $ = Object(a.b)(Z, (e, t) => ({
				toggleRevetConfirmationModal: () => e(Object(c.i)("wiki-revert-confirmation")),
				onRevertToRevision: t => e(Object(l.a)(t)),
				onLoadMoreRevisions: () => e(Object(l.c)({
					...t,
					canLoadMore: !0,
					canShowFailToast: !0,
					isRecent: !!t.isRecentRevisionsMode
				}))
			}))(Object(p.c)(X));

			function Q(e) {
				const t = !!e.isRecentRevisionsMode,
					i = Object(w.a)({
						...e,
						isRecent: t
					});
				return o.a.createElement($, Y({
					key: i,
					listingKey: i
				}, e))
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/PageContent/index.m.less": function(e, t, i) {
			e.exports = {
				container: "kuIrk7ySqHYuv5Gt8MVk7",
				automodContent: "_1FI4zcF0t1ECf8oc18uKd0",
				automodInfoBanner: "_2cLJCh1PnBUPaTO1HveGgo",
				wikiHtmlContent: "_1r4JJnDJUTKPWFmsi-Is_u",
				revisionInfo: "_3n6jRoJzvGVG7cvZDrvW1G"
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/PagesListing/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_2knUS3S97xMYycQVxOi0Yd",
				link: "_2uut3Ijozr0WkSh-oLVTkt"
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_3kIjxjzGVq5UfR6Bjiovd",
				hideIcon: "_2G1CaoG-VN3IjmyXMjpIfp"
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/index.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/react/index.js"),
				o = i.n(s),
				a = i("./node_modules/react-redux/es/index.js"),
				r = i("./node_modules/reselect/es/index.js"),
				d = i("./src/lib/classNames/index.ts"),
				c = i("./src/reddit/components/TrackingHelper/index.tsx"),
				l = i("./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx"),
				m = i("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				u = i("./src/reddit/constants/componentSizes.ts"),
				p = i("./src/reddit/constants/wiki.ts"),
				h = i("./src/reddit/contexts/PageLayer/index.tsx"),
				b = i("./src/reddit/helpers/trackers/subredditWiki.ts"),
				g = i("./src/reddit/helpers/wiki/validatePageName.ts"),
				f = i("./src/reddit/icons/svgs/Hide/index.tsx"),
				k = i("./src/reddit/models/SubredditWikiPage/index.ts"),
				v = i("./src/reddit/selectors/subredditWiki.ts"),
				x = i("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				w = i("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				E = i("./src/telemetry/models/Outbound.ts"),
				_ = i("./node_modules/react-router-dom/esm/react-router-dom.js"),
				N = i("./src/reddit/helpers/wiki/buildWikiPagesTree.ts"),
				y = i("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				P = i("./src/reddit/components/Wiki/WikiPageContent/PagesListing/index.m.less"),
				R = i.n(P);
			const C = e => {
				const {
					item: t,
					subredditName: i,
					isModHub: n
				} = e, o = t.isPagePresent && Object(y.a)({
					subredditName: i,
					wikiPageName: t.path
				}, n);
				return s.createElement("li", null, o ? s.createElement(_.a, {
					className: R.a.link,
					to: o
				}, t.name) : s.createElement("span", null, t.name), !!t.children.length && s.createElement("ul", null, t.children.map(e => s.createElement(C, {
					isModHub: n,
					item: e,
					key: e.path,
					subredditName: i
				}))))
			};
			var T = e => {
					const {
						isModHub: t,
						subredditName: i,
						wikiDirectory: o
					} = e, a = Object(N.a)(o.pageTree || []);
					return s.createElement("div", {
						className: R.a.container
					}, s.createElement("h1", null, n.fbt._("Viewing pages for {subredditName}", [n.fbt._param("subredditName", i)], {
						hk: "1f0dHX"
					})), s.createElement("h2", null, n.fbt._("Below is a list of pages in this wiki visible to you in this subreddit.", null, {
						hk: "3ywypD"
					})), s.createElement("ul", null, a.map(e => s.createElement(C, {
						isModHub: t,
						item: e,
						key: e.path,
						subredditName: i
					}))))
				},
				j = i("./src/reddit/components/Wiki/WikiPageContent/PageContent/index.m.less"),
				O = i.n(j);
			const {
				fbt: W
			} = i("./node_modules/fbt/lib/FbtPublic.js");

			function M(e) {
				const {
					className: t,
					isModHub: i,
					showRevisionInfo: n,
					subredditName: s,
					wikiDirectory: a,
					wikiPage: r,
					wikiPageName: c
				} = e;
				let l = null;
				return a && c === p.j ? l = o.a.createElement(T, {
					isModHub: i,
					subredditName: s,
					wikiDirectory: a
				}) : r && r.content && c === p.h ? l = o.a.createElement("div", {
					className: O.a.automodContent
				}, r.content.markdown) : r && r.content && (l = o.a.createElement(x.a, {
					className: O.a.wikiHtmlContent,
					html: r.content.html,
					sourceElement: E.SourceElement.Wiki
				})), o.a.createElement("div", {
					className: Object(d.a)(t, O.a.container)
				}, c === p.h && o.a.createElement("div", {
					className: O.a.automodInfoBanner
				}, W._("This page is used to configure AutoModerator for the subreddit, please see the {=full documentation} for information", [W._param("=full documentation", o.a.createElement("a", {
					href: "/wiki/automoderator/full-documentation"
				}, W._("full documentation", null, {
					hk: "1iIGFO"
				})))], {
					hk: "C2ew1"
				})), l, n && r && r.revision && o.a.createElement("div", {
					className: O.a.revisionInfo
				}, o.a.createElement(w.a, {
					showTimeAgo: !0,
					isLastRevision: !0,
					revision: r.revision
				})))
			}
			var L = i("./src/reddit/components/Wiki/WikiPageContent/index.m.less"),
				H = i.n(L);
			const S = Object(a.b)(() => Object(r.c)({
					pending: v.a,
					wikiDirectory: v.b,
					wikiPage: v.c
				})),
				I = Object(h.u)();
			class z extends s.Component {
				constructor() {
					super(...arguments), this.onEditButtonClick = () => {
						this.props.sendEvent(Object(b.f)())
					}, this.isListingPage = () => this.props.wikiPageName === p.j, this.reloadPage = () => {
						window.location.reload()
					}
				}
				componentDidMount() {
					this.scrollToHash()
				}
				componentDidUpdate(e) {
					const t = this.props.pageLayer !== e.pageLayer,
						i = this.props.wikiPage !== e.wikiPage;
					(t || i) && this.scrollToHash()
				}
				scrollToHash() {
					const e = window.location.hash.slice(1),
						t = e ? document.getElementById(e) : null;
					if (t) {
						let e = u.f + 10;
						this.props.isModHub && (e += u.j + u.k);
						const i = window.scrollY + t.getBoundingClientRect().top - e;
						window.scrollTo(0, i)
					}
				}
				getWikiPageStatus() {
					const {
						wikiDirectory: e,
						wikiPage: t
					} = this.props;
					return this.isListingPage() ? e && e.status : t && t.status
				}
				renderPageContents() {
					const {
						isModHub: e = !1,
						pending: t,
						showRevisionInfo: i,
						subredditName: o,
						wikiDirectory: a,
						wikiPage: r,
						wikiPageName: d
					} = this.props, c = this.getWikiPageStatus(), u = d === p.i, h = this.props.isModHub ? `/r/${this.props.subredditName}/about/wiki` : `/r/${this.props.subredditName}/wiki`, b = `${h}/index`, v = u ? void 0 : n.fbt._("Wiki home", null, {
						hk: "1E1oVk"
					});
					if (t || !c) return s.createElement(m.a, {
						showTitle: !0
					});
					if (c === k.b.Unknown || c === k.b.PageNotCreated) {
						if (Object(g.b)(d)) return s.createElement(l.a, {
							buttonLink: b,
							buttonText: v,
							description: n.fbt._("This page uses a restricted URL and can not be used as a wiki page", null, {
								hk: "VYLjZ"
							}),
							title: n.fbt._('"{pageName}" does not exist', [n.fbt._param("pageName", d)], {
								hk: "33IIrL"
							})
						})
					}
					switch (c) {
						case k.b.Valid:
							return !(!r || !r.content || r.content.markdown) ? s.createElement(l.a, {
								buttonLink: `${h}/edit/${d}`,
								buttonText: n.fbt._("Edit page", null, {
									hk: "2I8ztD"
								}),
								description: n.fbt._("Edit it to add some content", null, {
									hk: "13lGpZ"
								}),
								title: n.fbt._("This page is empty", null, {
									hk: "r0I6D"
								})
							}) : s.createElement(M, {
								isModHub: e,
								showRevisionInfo: i,
								subredditName: o,
								wikiDirectory: a,
								wikiPage: r,
								wikiPageName: d
							});
						case k.b.PageNotCreated:
							return s.createElement(l.a, {
								buttonLink: `${h}/create/${d}`,
								buttonText: n.fbt._("Create page", null, {
									hk: "2JH7OE"
								}),
								description: n.fbt._("Create a wiki page from this URL", null, {
									hk: "NY4dz"
								}),
								title: n.fbt._('"{pageName}" does not exist', [n.fbt._param("pageName", d)], {
									hk: "33IIrL"
								})
							});
						case k.b.Unknown:
							return s.createElement(l.a, {
								buttonText: n.fbt._("Reload page", null, {
									hk: "1L70ii"
								}),
								onButtonClick: this.reloadPage,
								title: n.fbt._("An unknown error occurred", null, {
									hk: "3BhfEB"
								})
							});
						case k.b.RestrictedPage:
							return s.createElement(l.a, {
								buttonLink: b,
								buttonText: v,
								description: n.fbt._("This page uses a restricted URL and can not be used as a wiki page", null, {
									hk: "VYLjZ"
								}),
								title: n.fbt._('"{pageName}" does not exist', [n.fbt._param("pageName", d)], {
									hk: "33IIrL"
								})
							});
						case k.b.MayNotView:
							return s.createElement(l.a, {
								buttonLink: b,
								buttonText: v,
								description: n.fbt._("The mods of this community have disabled this wiki page", null, {
									hk: "y3LOU"
								}),
								icon: s.createElement(f.a, {
									className: H.a.hideIcon
								}),
								title: n.fbt._("This page has been disabled", null, {
									hk: "1v13Nq"
								})
							});
						case k.b.WikiDisabled:
							return s.createElement(l.a, {
								buttonLink: `/r/${o}/`,
								buttonText: n.fbt._("Continue to r/{subredditName}", [n.fbt._param("subredditName", o)], {
									hk: "1oJQF7"
								}),
								description: n.fbt._("The mods of this community have disabled their wiki", null, {
									hk: "3qHJ8v"
								}),
								icon: s.createElement(f.a, {
									className: H.a.hideIcon
								}),
								title: n.fbt._("This wiki has been disabled", null, {
									hk: "3tfoag"
								})
							});
						case k.b.PageNotFound:
							return s.createElement(l.a, {
								buttonLink: b,
								buttonText: v,
								title: n.fbt._('"{pageName}" does not exist', [n.fbt._param("pageName", d)], {
									hk: "4o8Kt8"
								})
							});
						default:
							return null
					}
				}
				render() {
					const {
						className: e
					} = this.props;
					return s.createElement("div", {
						className: Object(d.a)(e, H.a.container)
					}, this.renderPageContents())
				}
			}
			t.a = I(S(Object(c.c)(z)))
		},
		"./src/reddit/components/Wiki/WikiPageDiff/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_38GE9wiaoDeBwytESxgurW",
				mModHub: "FOp_mrprAjmysKAwsxZhy",
				content: "_1FDDEmz6LhrlUvB4ha670Y",
				pageTitle: "_1M_2BWIe9pJyTSD3ZNzB2C",
				loadingPlaceholder: "_2eJGN5qzU3dzM10INVODCG",
				loadingSection: "_97ug2ZsHOzZBsGZ98Mqwl",
				diffWrapper: "_1EwbfNO_skwriCJJeOOslG"
			}
		},
		"./src/reddit/components/Wiki/WikiPageDiff/index.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/react/index.js"),
				o = i("./node_modules/react-redux/es/index.js"),
				a = i("./node_modules/reselect/es/index.js"),
				r = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				c = i("./src/reddit/constants/wiki.ts"),
				l = i("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				m = i("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				u = i("./src/reddit/selectors/subredditWiki.ts"),
				p = i("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				h = i("./src/reddit/components/Wiki/WikiPageDiff/index.m.less"),
				b = i.n(h);
			var g = () => s.createElement("div", {
				className: b.a.loadingPlaceholder
			}, s.createElement("div", {
				className: b.a.loadingSection
			}, s.createElement(p.a, {
				paragraphsCount: 1
			})), s.createElement("div", {
				className: b.a.loadingSection
			}, s.createElement(p.a, {
				paragraphsCount: 1
			})));
			const f = Object(a.c)({
					diffInfo: (e, t) => {
						const i = Object(l.a)(t);
						return Object(u.i)(e, {
							key: i
						})
					}
				}),
				k = Object(o.b)(f);
			class v extends s.Component {
				render() {
					const {
						className: e,
						isModHub: t = !1,
						subredditName: i,
						diffInfo: o,
						wikiPageName: a
					} = this.props;
					let l = null;
					l = !o || o.pending ? s.createElement(g, null) : o.error ? n.fbt._("Could not load comparison diff", null, {
						hk: "4mrAev"
					}) : s.createElement("div", {
						className: b.a.diffWrapper,
						dangerouslySetInnerHTML: {
							__html: o.htmlDiff || ""
						}
					});
					const u = Object(m.a)({
						subredditName: i,
						wikiPageName: a,
						wikiSubRoute: c.m.Revisions
					}, t);
					return s.createElement("div", {
						className: Object(r.a)(e, b.a.container, t ? b.a.mModHub : null)
					}, s.createElement(d.a, {
						buttonText: n.fbt._("Go to page history", null, {
							hk: "9szz2"
						}),
						buttonLink: u,
						className: b.a.pageTitle,
						title: n.fbt._("Comparing revisions for /{pageName}", [n.fbt._param("pageName", a)], {
							hk: "DGV1Y"
						})
					}), s.createElement("div", {
						className: b.a.content
					}, l))
				}
			}
			t.a = k(v)
		},
		"./src/reddit/components/Wiki/WikiPageEditor/AddRevisionReasonModal/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_1pXEnZ4uzz3OUpnXwRJCtz",
				modalHeader: "_3K-huH_Qa4D32ZPqAH9Ky",
				contentBlock: "N3HQ_fD9TZ7_Mk0iUMrkY",
				labelText: "_12y9PvK2L1LCL-P6PdoQ_B",
				reasonInput: "_3ZAhhe9gmKBwxW31xEmhKG",
				details: "_28OX1xAAmItegIE7yXUOxo",
				modalFooter: "NGYee0xeXDoBFshm7Ad-A",
				loadingIcon: "_2dRNmLURJShL28WViqaeCk"
			}
		},
		"./src/reddit/components/Wiki/WikiPageEditor/index.m.less": function(e, t, i) {
			e.exports = {
				topBar: "an_IeG33-UK9pts_JjqgQ",
				content: "_38SkvHzrhjQ7cSy7R0Lar1",
				resizableTextarea: "jtUB91J6tX7NTsovNabut",
				modHubTopBarExp: "BGubyqJMSlwQ45Xw5I-AT"
			}
		},
		"./src/reddit/components/Wiki/WikiPageEditor/index.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/react/index.js"),
				o = i.n(s),
				a = i("./node_modules/react-redux/es/index.js"),
				r = i("./node_modules/reselect/es/index.js"),
				d = i("./src/lib/classNames/index.ts"),
				c = i("./src/reddit/actions/modal.ts"),
				l = i("./node_modules/react-router-redux/es/index.js"),
				m = i("./src/lib/makeActionCreator/index.ts"),
				u = i("./src/reddit/actions/pages/subredditWiki/index.ts"),
				p = i("./src/reddit/actions/toaster.ts"),
				h = i("./src/reddit/constants/wiki.ts"),
				b = i("./src/lib/constants/index.ts"),
				g = i("./src/lib/makeApiRequest/index.ts"),
				f = i("./src/lib/omitHeaders/index.ts"),
				k = i("./src/reddit/constants/headers.ts");
			var v = e => Object(g.a)(Object(f.a)(e.context, [k.a]), {
					endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/edit`,
					method: b.jb.POST,
					data: {
						content: e.pageContent,
						page: e.wikiPageName,
						previous: e.previousRevision,
						reason: e.revisionReason
					}
				}),
				x = i("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				w = i("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				E = i("./src/reddit/models/Toast/index.ts"),
				_ = i("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				N = i("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const y = Object(m.a)(N.a);
			var P = i("./src/reddit/components/BlockNavigation/index.tsx"),
				R = i("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				C = i("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				T = i("./src/reddit/components/TrackingHelper/index.tsx"),
				j = i("./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx"),
				O = i("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				W = i("./src/reddit/contexts/NavbarExp.ts"),
				M = i("./src/reddit/controls/Button/index.tsx"),
				L = i("./src/reddit/helpers/trackers/subredditWiki.ts"),
				H = i("./src/reddit/helpers/wiki/validatePageName.ts"),
				S = i("./src/reddit/models/SubredditWikiPage/index.ts"),
				I = i("./src/reddit/selectors/activeModalId.ts"),
				z = i("./src/reddit/selectors/platform.ts"),
				A = i("./src/reddit/selectors/subredditWiki.ts"),
				B = i("./src/higherOrderComponents/asModal/index.tsx"),
				U = i("./src/reddit/components/ModalStyledComponents/index.tsx"),
				D = i("./src/reddit/controls/LoadingIcon/index.tsx"),
				F = i("./src/reddit/controls/TextButton/index.tsx"),
				V = i("./src/reddit/components/Wiki/WikiPageEditor/AddRevisionReasonModal/index.m.less"),
				G = i.n(V);
			class q extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						text: ""
					}, this.onSaveButtonClick = async () => {
						const {
							text: e
						} = this.state;
						this.props.onSave(e)
					}, this.onTextChange = e => {
						this.setState({
							text: e.target.value
						})
					}
				}
				render() {
					const {
						isPending: e
					} = this.props, {
						text: t
					} = this.state, i = h.g - t.length;
					return o.a.createElement("div", {
						className: G.a.container
					}, o.a.createElement(U.i, {
						className: G.a.modalHeader
					}, o.a.createElement(U.q, null, n.fbt._("Add a reason for your revision", null, {
						hk: "3ozq8e"
					})), o.a.createElement(F.a, {
						onClick: this.props.onCancel
					}, o.a.createElement(U.b, null))), o.a.createElement("div", {
						className: G.a.contentBlock
					}, o.a.createElement("label", null, o.a.createElement("span", {
						className: G.a.labelText
					}, n.fbt._("Revision reason", null, {
						hk: "W55mK"
					})), o.a.createElement("input", {
						autoFocus: !0,
						className: G.a.reasonInput,
						maxLength: h.g,
						onChange: this.onTextChange,
						placeholder: n.fbt._("Ex: Added source to appendix", null, {
							hk: "KB2dD"
						}),
						value: t
					})), o.a.createElement("div", {
						className: G.a.details
					}, n.fbt._({
						"*": "{number} characters left",
						_1: "1 character left"
					}, [n.fbt._plural(i, "number")], {
						hk: "1Ra9c8"
					}))), o.a.createElement(U.g, {
						className: G.a.modalFooter
					}, o.a.createElement(U.a, {
						onClick: this.props.onCancel
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(M.l, {
						onClick: this.onSaveButtonClick,
						disabled: e
					}, e ? o.a.createElement(D.a, {
						className: G.a.loadingIcon,
						sizePx: 10
					}) : n.fbt._("Save", null, {
						hk: "4yMsMq"
					}))))
				}
			}
			var K = Object(B.a)(q),
				J = i("./src/reddit/components/Wiki/WikiPageEditor/index.m.less"),
				Y = i.n(J);
			const Z = "Discard-wiki-page-changes",
				X = "Add-wiki-revision-reason",
				$ = 2,
				Q = (e, t, i) => {
					const s = t.status,
						o = {
							[H.a.InvalidPageName]: n.fbt._("Page name is invalid", null, {
								hk: "3Ogzsc"
							}),
							[H.a.MaxLengthExceed]: n.fbt._("Page name must be shorter than {maxPageLen} characters", [n.fbt._param("maxPageLen", `${h.d}`)], {
								hk: "11HwWR"
							}),
							[H.a.PageAlreadyExists]: n.fbt._("Page with this name already exists", null, {
								hk: "3WRlhT"
							}),
							[H.a.RestrictedPageName]: n.fbt._("This page uses a restricted URL and can not be used as a wiki page", null, {
								hk: "BQtR2"
							})
						};
					if (e) {
						if (s === S.b.Valid) return o[H.a.PageAlreadyExists];
						if (s === S.b.PageNotFound) return n.fbt._("You do not have permission to create this page", null, {
							hk: "423aTf"
						});
						if (i) return o[i]
					} else if (s === S.b.Valid && !t.isRevisable) return n.fbt._("You do not have permission to edit this page", null, {
						hk: "1bUgsZ"
					})
				},
				ee = Object(r.c)({
					allowNavigationCallback: z.a,
					isRevisionReasonModalOpen: Object(I.b)(X),
					isSaveBeforeLeaveModalOpen: Object(I.b)(Z),
					wikiPage: A.c
				}),
				te = Object(a.b)(ee, (e, t) => ({
					onSaveWikiPage: (i, s) => e((({
						pageContent: e,
						wikiPageName: t,
						revisionReason: i,
						subredditName: s
					}) => async (o, a, r) => {
						const d = await v({
							context: r.apiContext(),
							pageContent: e,
							revisionReason: i,
							subredditName: s,
							wikiPageName: t
						});
						if (d.ok) o(y({
							pageKey: Object(w.a)({
								subredditName: s,
								wikiPageName: t
							}),
							pageRevisionsListingKey: Object(x.a)({
								subredditName: s,
								wikiPageName: t,
								isRecent: !1
							}),
							recentRevisionsListingKey: Object(x.a)({
								subredditName: s,
								wikiPageName: t,
								isRecent: !0
							})
						})), await o(Object(u.fetchSubredditWikiData)({
							includeDirectory: !0,
							includePageData: !0,
							subredditName: s,
							wikiPageName: t
						}));
						else {
							let e = n.fbt._("Something went wrong", null, {
								hk: "4oNh1E"
							});
							d.body && "RESTRICTED_PAGE" === d.body.reason && (e = n.fbt._("Cannot create/edit restricted page", null, {
								hk: "2pUIkm"
							})), o(Object(p.f)({
								kind: E.b.Error,
								text: e
							}))
						}
						return d.ok
					})({
						pageContent: i,
						revisionReason: s,
						subredditName: t.subredditName,
						wikiPageName: t.wikiPageName
					})),
					onFinishWikiEdit: t => e(((e = !1) => async (t, i) => {
						const n = i().platform.currentPage,
							s = n.locationState && n.locationState[h.a];
						if (e && s) t(Object(l.a)());
						else {
							const {
								subredditName: e,
								wikiPageName: i
							} = n.urlParams, s = Object(_.a)(n.url, {
								subredditName: e,
								wikiPageName: i
							});
							t(Object(l.c)(s))
						}
					})(t)),
					closeAllModals: () => e(Object(c.f)()),
					toggleModal: t => e(Object(c.i)(t))
				}));
			class ie extends o.a.Component {
				constructor(e) {
					super(e), this.isUnmounted = !1, this.onSaveWithReason = async e => {
						const {
							markdown: t
						} = this.state;
						this.setState({
							isSavePending: !0
						}), this.props.sendEvent(Object(L.m)(this.props.isCreation));
						const i = await this.props.onSaveWikiPage(t, e);
						this.isUnmounted || (this.setState({
							isSavePending: !1
						}), i ? this.setState({
							disableBlocking: !0
						}, () => {
							this.props.onFinishWikiEdit()
						}) : this.finishPendingNavTransition(!1))
					}, this.onLeavePageConfirmed = () => {
						this.finishPendingNavTransition(!0)
					}, this.onAbortLeavingPage = () => {
						this.finishPendingNavTransition(!1), this.props.closeAllModals()
					}, this.onCancelAddingRevisionReason = () => {
						this.finishPendingNavTransition(!1), this.props.closeAllModals()
					}, this.showRevisionReasonModal = () => {
						this.props.isRevisionReasonModalOpen || this.props.toggleModal(X)
					}, this.onCancel = () => {
						this.props.onFinishWikiEdit(!0)
					}, this.onTextChange = e => {
						this.setState({
							markdown: e.target.value
						})
					}, this.renderWikiPageEditor = e => {
						const {
							isCreation: t,
							isRevisionReasonModalOpen: i,
							isSaveBeforeLeaveModalOpen: s,
							wikiPage: a,
							wikiPageName: r
						} = this.props, {
							disableBlocking: c,
							isSavePending: l,
							markdown: m
						} = this.state, u = a && a.content && a.content.markdown || "", p = !m.trim(), h = m !== u, b = t && a ? Object(H.b)(a.name) : void 0, g = !(!a || a.status !== S.b.PageNotCreated || b), f = !(!a || a.status !== S.b.Valid || !a.isRevisable), k = t ? g : f, v = k && h && !p && !l && !b;
						return o.a.createElement("div", {
							className: Object(d.a)(Y.a.container, this.props.className)
						}, o.a.createElement("div", {
							className: Object(d.a)(this.props.topBarClassName, Y.a.topBar, {
								[Y.a.modHubTopBarExp]: e
							})
						}, o.a.createElement(M.o, {
							onClick: this.onCancel,
							disabled: l
						}, n.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})), o.a.createElement(M.l, {
							disabled: !v,
							onClick: this.showRevisionReasonModal
						}, n.fbt._("Save", null, {
							hk: "4yMsMq"
						}))), o.a.createElement("div", {
							className: Object(d.a)(this.props.contentClassName, Y.a.content)
						}, a ? k ? o.a.createElement(C.a, {
							autoFocus: !0,
							className: Y.a.resizableTextarea,
							disabled: l,
							onChange: this.onTextChange,
							placeholder: n.fbt._("Add page content here", null, {
								hk: "4fxFCc"
							}),
							value: m
						}) : o.a.createElement(j.a, {
							description: Q(t, a, b),
							title: t ? n.fbt._('"{pageName}" cannot be created', [n.fbt._param("pageName", r)], {
								hk: "235tfC"
							}) : n.fbt._('"{pageName}" cannot be edited', [n.fbt._param("pageName", r)], {
								hk: "4qKJob"
							})
						}) : o.a.createElement(O.a, {
							paragraphsCount: $
						})), i && o.a.createElement(K, {
							withOverlay: !0,
							onCancel: this.onCancelAddingRevisionReason,
							onSave: this.onSaveWithReason,
							isPending: l
						}), o.a.createElement(P.a, {
							blockOnBeforeUnload: !0,
							dialogId: Z,
							enabled: h && !c
						}), s && o.a.createElement(R.a, {
							actionText: n.fbt._("Discard", null, {
								hk: "1SiwLl"
							}),
							headerText: n.fbt._("Discard changes before leaving?", null, {
								hk: "354NTe"
							}),
							modalText: n.fbt._("You have made some changes to your wiki page, do you wish to discard the changes?", null, {
								hk: "4sMjD7"
							}),
							onCancel: this.onAbortLeavingPage,
							onClose: this.onAbortLeavingPage,
							onConfirm: this.onLeavePageConfirmed,
							withOverlay: !0
						}))
					};
					const t = e.wikiPage && e.wikiPage.content ? e.wikiPage.content.markdown : "";
					this.state = {
						isSavePending: !1,
						markdown: t
					}
				}
				componentDidUpdate(e) {
					const {
						wikiPage: t
					} = this.props;
					if (t && !e.wikiPage) {
						const e = t.content && t.content.markdown || "";
						this.setState({
							markdown: e
						})
					}
				}
				componentWillUnmount() {
					this.isUnmounted = !0, this.finishPendingNavTransition(!1)
				}
				finishPendingNavTransition(e) {
					this.props.allowNavigationCallback && this.props.allowNavigationCallback(e)
				}
				render() {
					return o.a.createElement(W.a.Consumer, null, this.renderWikiPageEditor)
				}
			}
			t.a = te(Object(T.c)(ie))
		},
		"./src/reddit/components/Wiki/WikiPageSource/index.m.less": function(e, t, i) {
			e.exports = {
				container: "hFkZVSvr5ZCDtsUNvUe0t",
				mModHub: "OTGEcq8eHMW4w8Jk_xUB_",
				content: "jB-E_8PuDLsGMGUcJ38Ed",
				pageTitle: "_7mpqbmAh_bdv9eJPLzJkl",
				headerRow: "_24xr0pCtEq8smcGh9hy-iC",
				pageSource: "_3FGoxkytIqYAnG5hdqa8Uq"
			}
		},
		"./src/reddit/components/Wiki/WikiPageSource/index.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/react/index.js"),
				o = i("./node_modules/react-redux/es/index.js"),
				a = i("./node_modules/reselect/es/index.js"),
				r = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				c = i("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				l = i("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				m = i("./src/reddit/constants/wiki.ts"),
				u = i("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				p = i("./src/reddit/models/SubredditWikiPage/index.ts"),
				h = i("./src/reddit/selectors/subredditWiki.ts"),
				b = i("./src/reddit/components/Wiki/WikiPageSource/index.m.less"),
				g = i.n(b);
			const f = Object(a.c)({
					pending: h.a,
					revision: (e, {
						revisionId: t
					}) => t ? Object(h.n)(e, {
						revisionId: t
					}) : void 0,
					wikiPage: h.c
				}),
				k = Object(o.b)(f);
			class v extends s.Component {
				render() {
					const {
						className: e,
						isModHub: t = !1,
						pending: i,
						revision: o,
						revisionId: a,
						subredditName: h,
						wikiPage: b,
						wikiPageName: f
					} = this.props;
					let k = null;
					k = i ? s.createElement(d.a, null) : b ? b.status === p.b.Valid ? b.content && b.content.markdown : n.fbt._("Cannot show page content", null, {
						hk: "pwCwd"
					}) : n.fbt._("Page not found", null, {
						hk: "26hzSO"
					});
					const v = o || b && b.revision,
						x = !a,
						w = Object(u.a)({
							subredditName: h,
							wikiPageName: f,
							wikiSubRoute: x ? void 0 : m.m.Revisions
						}, t);
					return s.createElement("div", {
						className: Object(r.a)(e, g.a.container, t ? g.a.mModHub : null)
					}, s.createElement(c.a, {
						buttonText: x ? n.fbt._("Go to wiki page", null, {
							hk: "3tJUXk"
						}) : n.fbt._("Go to page history", null, {
							hk: "9szz2"
						}),
						buttonLink: w,
						className: g.a.pageTitle,
						title: !x && v ? n.fbt._("Revision from {timeAgo}", [n.fbt._param("timeAgo", Object(l.b)(v))], {
							hk: "36r4TU"
						}) : n.fbt._("Page source", null, {
							hk: "33sFXM"
						})
					}), s.createElement("div", {
						className: g.a.content
					}, s.createElement("div", {
						className: g.a.headerRow
					}, v && s.createElement(l.a, {
						isLastRevision: x,
						revision: v,
						showReason: !0,
						showTimeAgo: !1
					})), s.createElement("div", {
						className: g.a.pageSource
					}, k)))
				}
			}
			t.a = k(v)
		},
		"./src/reddit/components/Wiki/WikiPageTopBar/OverflowMenu/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_3m-pL3lGJRyo7pWckPUL_d",
				dropdown: "_3IUuipl8jTmMnjXR0NDisP",
				row: "_25Y1JThsMmw5VNvhFFLb0j"
			}
		},
		"./src/reddit/components/Wiki/WikiPageTopBar/index.m.less": function(e, t, i) {
			e.exports = {
				container: "I0T583ZtOWVEpRWsa0kbu",
				button: "_2IOi-lonN6Hy4pTcjFTLBp",
				revisionInfo: "Ln6UHsxFeDZdhv1yRUL0F",
				flexSpacer: "meAs5YnW58CX9i8rWjZQL"
			}
		},
		"./src/reddit/components/Wiki/WikiPageTopBar/index.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/history/esm/history.js"),
				o = i("./node_modules/react/index.js"),
				a = i.n(o),
				r = i("./node_modules/react-redux/es/index.js"),
				d = i("./node_modules/reselect/es/index.js"),
				c = i("./src/lib/classNames/index.ts"),
				l = i("./src/lib/copyToClipboard/index.ts"),
				m = i("./src/reddit/actions/toaster.ts"),
				u = i("./src/reddit/components/TrackingHelper/index.tsx"),
				p = i("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				h = i("./src/reddit/constants/wiki.ts"),
				b = i("./src/reddit/controls/Button/index.tsx"),
				g = i("./src/reddit/models/SubredditWikiPage/index.ts"),
				f = i("./src/reddit/models/Toast/index.ts"),
				k = i("./src/reddit/selectors/moderatorPermissions.ts"),
				v = i("./src/reddit/selectors/subreddit.ts"),
				x = i("./src/reddit/selectors/subredditWiki.ts"),
				w = i("./src/config.ts"),
				E = i("./src/reddit/components/OverflowMenu/index.tsx"),
				_ = i("./src/reddit/constants/parameters.ts"),
				N = i("./src/reddit/controls/Dropdown/Row.tsx"),
				y = i("./src/reddit/helpers/trackers/subredditWiki.ts"),
				P = i("./src/reddit/components/Wiki/WikiPageTopBar/OverflowMenu/index.m.less"),
				R = i.n(P);
			const C = ["right", "bottom"],
				T = ["right", "top"];
			class j extends a.a.Component {
				constructor() {
					super(...arguments), this.onViewPageSourceClick = () => {
						this.props.sendEvent(y.r)
					}, this.onCopyPageUrl = () => {
						const {
							subredditName: e,
							wikiPageName: t
						} = this.props, i = `${w.a.redditUrl}/r/${e}/wiki/${t}`;
						this.props.onCopyPageUrl(i), this.props.sendEvent(y.e)
					}
				}
				render() {
					const {
						className: e,
						dropdownId: t,
						isModHub: i,
						subredditName: s,
						wikiPage: o,
						wikiPageName: r
					} = this.props, d = i ? `/r/${s}/about/wiki` : `/r/${s}/wiki`;
					return a.a.createElement(E.b, {
						className: Object(c.a)(e, R.a.container),
						dropdownClassName: R.a.dropdown,
						dropdownId: t,
						targetPosition: C,
						tooltipPosition: T
					}, o && a.a.createElement(N.b, {
						className: R.a.row,
						displayText: n.fbt._("View page history", null, {
							hk: "fy9yY"
						}),
						href: `${d}/revisions/${r}`
					}), o && a.a.createElement(N.b, {
						className: R.a.row,
						displayText: n.fbt._("View page source", null, {
							hk: "1d5vg5"
						}),
						href: `${d}/${r}?${_.F}`,
						onClick: this.onViewPageSourceClick
					}), i && a.a.createElement(N.b, {
						className: R.a.row,
						displayText: n.fbt._("View in community", null, {
							hk: "mSFod"
						}),
						href: `/r/${s}/wiki/${r}`
					}), a.a.createElement(N.b, {
						className: R.a.row,
						displayText: n.fbt._("Copy URL", null, {
							hk: "3yBYUk"
						}),
						onClick: this.onCopyPageUrl
					}))
				}
			}
			var O = j,
				W = i("./src/reddit/components/Wiki/WikiPageTopBar/index.m.less"),
				M = i.n(W);
			const L = Object(d.c)({
					hasWikiModPerms: (e, t) => {
						const i = Object(v.v)(e, t);
						return !!i && Object(k.i)(e, {
							subredditId: i.id
						})
					},
					wikiPage: x.c
				}),
				H = Object(r.b)(L, e => ({
					onCopyPageUrl: t => e((e => async t => {
						Object(l.a)(e) && t(Object(m.f)(Object(m.e)(n.fbt._("Copied page URL", null, {
							hk: "4qKWjj"
						}), f.b.SuccessCommunity)))
					})(t))
				}));
			class S extends a.a.Component {
				render() {
					const {
						hasWikiModPerms: e,
						isModHub: t,
						wikiPage: i,
						wikiPageName: o,
						subredditName: r,
						className: d
					} = this.props, l = !!i && i.status === g.b.Valid, m = !!i && i.isRevisable, u = e && m && l, f = t ? `/r/${r}/about/wiki/edit/${o}` : `/r/${r}/wiki/edit/${o}`;
					return a.a.createElement("div", {
						className: Object(c.a)(d, M.a.container)
					}, t && i && i.revision && a.a.createElement(p.a, {
						showTimeAgo: !0,
						className: M.a.revisionInfo,
						isLastRevision: !0,
						revision: i.revision
					}), a.a.createElement("div", {
						className: M.a.flexSpacer
					}), u && a.a.createElement(b.q, {
						className: M.a.button,
						to: `/r/${r}/about/wiki/settings/${o}`
					}, n.fbt._("Page settings", null, {
						hk: "2IAvWU"
					})), l && m && a.a.createElement(b.n, {
						className: M.a.button,
						to: Object(s.c)(f, {
							[h.a]: !0
						})
					}, n.fbt._("Edit", null, {
						hk: "1nftDt"
					})), l && a.a.createElement(O, {
						className: M.a.overflowMenu,
						dropdownId: `wikiPage-OverflowMenu-${o}-${t}`,
						isModHub: t,
						onCopyPageUrl: this.props.onCopyPageUrl,
						sendEvent: this.props.sendEvent,
						subredditName: r,
						wikiPage: i,
						wikiPageName: o
					}))
				}
			}
			t.a = H(Object(u.c)(S))
		},
		"./src/reddit/components/Wiki/common/ContentPlaceholder/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_3Av0UmXioR3Vgw-lpzfBWu",
				button: "_2hFu9bCtEjS60NjZM3F_UE",
				description: "_2c02P9rTnnEw2KuDpY8JxB",
				title: "_3rol4SGAf0n5-e8EENfrur"
			}
		},
		"./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			var n = i("./node_modules/react/index.js"),
				s = i("./src/reddit/controls/Button/index.tsx"),
				o = i("./src/reddit/components/Wiki/common/ContentPlaceholder/index.m.less"),
				a = i.n(o);

			function r(e) {
				const {
					buttonLink: t,
					buttonText: i,
					description: o,
					icon: r,
					onButtonClick: d,
					title: c
				} = e;
				let l = null;
				return i && t ? l = n.createElement(s.n, {
					className: a.a.button,
					onClick: e.onButtonClick,
					to: t
				}, i) : i && d && (l = n.createElement(s.l, {
					className: a.a.button,
					onClick: e.onButtonClick
				}, i)), n.createElement("div", {
					className: a.a.container
				}, r, c && n.createElement("div", {
					className: a.a.title
				}, c), o && n.createElement("div", {
					className: a.a.description
				}, o), l)
			}
		},
		"./src/reddit/components/Wiki/common/LoadingPlaceholder/index.m.less": function(e, t, i) {
			e.exports = {
				placeholderTitle: "XK5I3_2arHFpfmDn6iUGt",
				placeholderParagraph: "_3Rhsg99h5kjE-u1Pp-Uk8P",
				placeholderTextLine: "_5pG9RcI-AYalqG5z6osMT"
			}
		},
		"./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/lodash/range.js"),
				s = i.n(n),
				o = i("./node_modules/react/index.js"),
				a = i("./src/lib/classNames/index.ts"),
				r = i("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = i("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.m.less"),
				c = i.n(d);
			const l = e => o.createElement("div", {
				className: Object(a.a)(e.className, Object(r.b)({
					isLoading: !0
				}))
			});
			t.a = e => o.createElement(o.Fragment, null, e.showTitle && o.createElement(l, {
				className: c.a.placeholderTitle
			}), s()(e.paragraphsCount || 6).map(e => o.createElement("div", {
				className: c.a.placeholderParagraph,
				key: e
			}, s()(10).map(e => o.createElement(l, {
				className: c.a.placeholderTextLine,
				key: e
			})))))
		},
		"./src/reddit/components/Wiki/common/PageTitle/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_2NCACehu2vXVQzdHocg7Rq",
				linkButton: "_28uXMdKULX2ygqCKM5Apfz",
				active: "_2DijTkAaakBaDtqxBeulFO"
			}
		},
		"./src/reddit/components/Wiki/common/PageTitle/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return c
			}));
			var n = i("./node_modules/react/index.js"),
				s = i.n(n),
				o = i("./src/lib/classNames/index.ts"),
				a = i("./src/reddit/controls/Button/index.tsx"),
				r = i("./src/reddit/components/Wiki/common/PageTitle/index.m.less"),
				d = i.n(r);

			function c(e) {
				const {
					buttonLink: t,
					buttonText: i,
					className: n,
					title: r
				} = e;
				return s.a.createElement("div", {
					className: Object(o.a)(n, d.a.container)
				}, r, i && t && s.a.createElement(a.s, {
					className: d.a.linkButton,
					to: t
				}, i))
			}
		},
		"./src/reddit/components/Wiki/common/RevisionInfo/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_2b8IWktp8nbHqDKTRFWebW",
				authorLink: "IY5BT71vlrhwNnwInSc2f"
			}
		},
		"./src/reddit/components/Wiki/common/RevisionInfo/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return _
			})), i.d(t, "a", (function() {
				return N
			}));
			var n = i("./node_modules/lodash/noop.js"),
				s = i.n(n),
				o = i("./node_modules/react/index.js"),
				a = i.n(o),
				r = i("./src/higherOrderComponents/asTooltip.tsx"),
				d = i("./src/lib/classNames/index.ts"),
				c = i("./src/lib/constants/index.ts"),
				l = i("./src/lib/timeAgo/index.ts"),
				m = i("./src/reddit/components/AuthorLink/index.tsx"),
				u = i("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				p = i("./src/reddit/components/HumanDate/index.tsx"),
				h = i("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = i("./src/reddit/helpers/graphql/helpers.ts"),
				g = i("./src/reddit/models/Post/index.ts"),
				f = i("./src/reddit/components/Wiki/common/RevisionInfo/index.m.less"),
				k = i.n(f);
			const {
				fbt: v
			} = i("./node_modules/fbt/lib/FbtPublic.js"), x = ["center", "top"], w = ["center", "bottom"], E = Object(r.a)(h.b), _ = e => {
				const t = new Date(Object(b.e)(e.revisedAt));
				return Object(l.d)(t.valueOf() / 1e3)
			};
			class N extends a.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						showTooltip: !1
					}
				}
				render() {
					const {
						className: e,
						isLastRevision: t,
						revision: i,
						showReason: n = !1,
						showTimeAgo: o = !1
					} = this.props, {
						showTooltip: r
					} = this.state, l = i.authorInfo && i.authorInfo.name || c.E, h = new Date(Object(b.e)(i.revisedAt)), f = a.a.createElement(u.a, {
						tooltipId: "wikipage-revision-author",
						user: l,
						sendHoverCardEvent: s.a
					}, a.a.createElement(m.a, {
						className: k.a.authorLink,
						author: l,
						isAuthorDeleted: Object(g.o)(l),
						isUnstyled: !0
					}, l));
					return a.a.createElement("span", {
						className: Object(d.a)(e, k.a.container)
					}, t ? v._("Last revised by {username}", [v._param("username", f)], {
						hk: "jNOhx"
					}) : v._("Revised by {username}", [v._param("username", f)], {
						hk: "2Q35rs"
					}), o && a.a.createElement("span", {
						ref: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, " - ", a.a.createElement(p.d, {
						seconds: h.valueOf() / c.Rb
					}), a.a.createElement(E, {
						text: h.toString(),
						isOpen: r,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: x,
						tooltipPosition: w
					})), n && i.reason && a.a.createElement("span", null, " - ", i.reason))
				}
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditWiki~reddit-components-Wiki-ModHubWikiManagement.4a02b343bce4780e697a.js.map