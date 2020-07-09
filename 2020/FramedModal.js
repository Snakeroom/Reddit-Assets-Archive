// https://www.redditstatic.com/desktop2x/FramedModal.178425ae5bb41080de1d.js
// Retrieved at 7/9/2020, 4:30:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FramedModal"], {
		"./src/reddit/components/CrisisFlow/async.tsx": function(e, s, t) {
			"use strict";
			var i = t("./node_modules/@loadable/component/dist/loadable.esm.js");
			s.a = Object(i.a)({
				resolved: {},
				chunkName: () => "reddit-components-CrisisFlow-CrisisFlowPage",
				isReady(e) {
					const s = this.resolve(e);
					return !1 !== this.resolved[s] && !!t.m[s]
				},
				importAsync: () => t.e("reddit-components-CrisisFlow-CrisisFlowPage").then(t.bind(null, "./src/reddit/components/CrisisFlow/CrisisFlowPage.tsx")),
				requireAsync(e) {
					const s = this.resolve(e);
					return this.resolved[s] = !1, this.importAsync(e).then(e => (this.resolved[s] = !0, e))
				},
				requireSync(e) {
					const s = this.resolve(e);
					return t(s)
				},
				resolve() {
					return "./src/reddit/components/CrisisFlow/CrisisFlowPage.tsx"
				}
			})
		},
		"./src/reddit/pages/FramedModalPage/index.m.less": function(e, s, t) {
			e.exports = {
				fullScreen: "_1pL8RMJmuOdTXSiyWiJOca"
			}
		},
		"./src/reddit/pages/FramedModalPage/index.tsx": function(e, s, t) {
			"use strict";
			t.r(s);
			t("./node_modules/core-js/modules/es6.regexp.search.js"), t("./node_modules/core-js/modules/es6.regexp.match.js");
			var i = t("./node_modules/lodash/fromPairs.js"),
				r = t.n(i),
				a = t("./node_modules/react/index.js"),
				n = t.n(a),
				o = t("./src/lib/extractQueryParams/index.ts"),
				d = t("./src/lib/postParentMessage/index.ts"),
				l = t("./src/reddit/pages/FramedModalPage/index.m.less"),
				c = t.n(l),
				h = t("./src/reddit/components/CrisisFlow/async.tsx"),
				m = t("./src/reddit/pages/PaypalFinishPage/async.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var t = arguments[s];
						for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
					}
					return e
				}).apply(this, arguments)
			}
			const u = /.*\.reddit\.(com|local)$|.*(staging|dev)\.snooguts\.net$/,
				g = "framedmodal",
				y = {
					PARENT_ORIGIN: "_o"
				},
				P = {
					CTL: "ctl",
					PAYPAL_FINISH: "paypal-finish"
				};
			class f extends n.a.Component {
				constructor(e) {
					if (super(e), this.element = null, this.iframeWidth = null, this.iframeHeight = null, this.modalType = e.match.params.type, this.modalType !== P.CTL && this.modalType !== P.PAYPAL_FINISH) throw new Error("Unknown modal page type: " + e.match.params.type);
					this.queryParams = r()([...Object(o.a)(this.props.location.search)]);
					const s = this.queryParams[y.PARENT_ORIGIN];
					if (!u.test(s)) throw new Error("Invalid parent origin: " + s);
					this.parentOrigin = s
				}
				postMessage(e) {
					Object(d.a)(e, g, this.parentOrigin, window.opener || window.parent)
				}
				render() {
					return n.a.createElement("div", {
						className: c.a.fullScreen,
						ref: e => this.setElement(e)
					}, this.modalType === P.CTL && n.a.createElement(h.a, p({
						iframed: !0,
						username: this.queryParams.author,
						onCloseReportFlow: () => this.postMessage({
							type: "close"
						}),
						postMessage: e => this.postMessage(e)
					}, this.queryParams)), this.modalType === P.PAYPAL_FINISH && n.a.createElement(m.a, {
						params: this.queryParams,
						postMessage: e => this.postMessage(e)
					}))
				}
				componentDidMount() {
					this.postMessage({
						type: "loaded"
					}), this.maybeResize()
				}
				componentDidUpdate() {
					this.maybeResize()
				}
				setElement(e) {
					if (this.element = e, e) {
						new MutationObserver(() => {
							this.maybeResize()
						}).observe(e, {
							attributes: !0,
							childList: !0,
							subtree: !0
						})
					}
				}
				maybeResize() {
					const e = this.element && this.element.firstElementChild;
					if (!e) return;
					const s = e.offsetWidth,
						t = e.offsetHeight;
					s && t && (this.iframeWidth !== s || this.iframeHeight !== t) && (this.iframeWidth = s, this.iframeHeight = t, this.postMessage({
						type: "resize",
						data: {
							width: s,
							height: t
						}
					}))
				}
			}
			s.default = f
		},
		"./src/reddit/pages/PaypalFinishPage/async.tsx": function(e, s, t) {
			"use strict";
			var i = t("./node_modules/@loadable/component/dist/loadable.esm.js");
			s.a = Object(i.a)({
				resolved: {},
				chunkName: () => "reddit-pages-PaypalFinishPage",
				isReady(e) {
					const s = this.resolve(e);
					return !1 !== this.resolved[s] && !!t.m[s]
				},
				importAsync: () => t.e("reddit-pages-PaypalFinishPage").then(t.bind(null, "./src/reddit/pages/PaypalFinishPage/index.tsx")),
				requireAsync(e) {
					const s = this.resolve(e);
					return this.resolved[s] = !1, this.importAsync(e).then(e => (this.resolved[s] = !0, e))
				},
				requireSync(e) {
					const s = this.resolve(e);
					return t(s)
				},
				resolve() {
					return "./src/reddit/pages/PaypalFinishPage/index.tsx"
				}
			})
		}
	}
]);
//# sourceMappingURL=FramedModal.178425ae5bb41080de1d.js.map