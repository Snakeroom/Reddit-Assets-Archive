// https://www.redditstatic.com/desktop2x/FramedModal.1496e6f9c07e048c8e2d.js
// Retrieved at 6/9/2020, 6:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FramedModal"], {
		"./src/reddit/components/CrisisFlow/async.tsx": function(e, s, t) {
			"use strict";
			var r = t("./node_modules/@loadable/component/dist/loadable.esm.js");
			s.a = Object(r.a)({
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
		"./src/reddit/pages/FramedModalPage/async.tsx": function(e, s, t) {
			"use strict";
			var r = t("./node_modules/@loadable/component/dist/loadable.esm.js");
			s.a = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-pages-FramedModalPage-SupportModal",
				isReady(e) {
					const s = this.resolve(e);
					return !1 !== this.resolved[s] && !!t.m[s]
				},
				importAsync: () => Promise.all([t.e("vendors~CoinsPurchaseModal~EconPowerupsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCo~264e7f7d"), t.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~d7fcad44"), t.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad34f221"), t.e("reddit-pages-FramedModalPage-SupportModal")]).then(t.bind(null, "./src/reddit/pages/FramedModalPage/SupportModal.tsx")),
				requireAsync(e) {
					const s = this.resolve(e);
					return this.resolved[s] = !1, this.importAsync(e).then(e => (this.resolved[s] = !0, e))
				},
				requireSync(e) {
					const s = this.resolve(e);
					return t(s)
				},
				resolve() {
					return "./src/reddit/pages/FramedModalPage/SupportModal.tsx"
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
			var r = t("./node_modules/lodash/fromPairs.js"),
				i = t.n(r),
				o = t("./node_modules/react/index.js"),
				a = t.n(o),
				n = t("./src/lib/extractQueryParams/index.ts"),
				d = t("./src/lib/postParentMessage/index.ts"),
				l = t("./src/reddit/pages/FramedModalPage/index.m.less"),
				c = t.n(l),
				m = t("./src/reddit/components/CrisisFlow/async.tsx"),
				p = t("./src/reddit/pages/PaypalFinishPage/async.tsx"),
				h = t("./src/reddit/pages/FramedModalPage/async.tsx");

			function u() {
				return (u = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var t = arguments[s];
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
					}
					return e
				}).apply(this, arguments)
			}
			const y = /.*\.reddit\.(com|local)$|.*(staging|dev)\.snooguts\.net$/,
				g = "framedmodal",
				P = {
					PARENT_ORIGIN: "_o"
				},
				v = {
					SUPPORT: "support",
					CTL: "ctl",
					PAYPAL_FINISH: "paypal-finish"
				};
			class f extends a.a.Component {
				constructor(e) {
					if (super(e), this.element = null, this.iframeWidth = null, this.iframeHeight = null, this.modalType = e.match.params.type, this.modalType !== v.SUPPORT && this.modalType !== v.CTL && this.modalType !== v.PAYPAL_FINISH) throw new Error("Unknown modal page type: " + e.match.params.type);
					this.queryParams = i()([...Object(n.a)(this.props.location.search)]);
					const s = this.queryParams[P.PARENT_ORIGIN];
					if (!y.test(s)) throw new Error("Invalid parent origin: " + s);
					this.parentOrigin = s
				}
				postMessage(e) {
					Object(d.a)(e, g, this.parentOrigin, window.opener || window.parent)
				}
				render() {
					return a.a.createElement("div", {
						className: c.a.fullScreen,
						ref: e => this.setElement(e)
					}, this.modalType === v.SUPPORT && a.a.createElement(h.a, {
						params: this.queryParams,
						onClose: () => this.postMessage({
							type: "close"
						}),
						postMessage: e => this.postMessage(e)
					}), this.modalType === v.CTL && a.a.createElement(m.a, u({
						iframed: !0,
						username: this.queryParams.author,
						onCloseReportFlow: () => this.postMessage({
							type: "close"
						}),
						postMessage: e => this.postMessage(e)
					}, this.queryParams)), this.modalType === v.PAYPAL_FINISH && a.a.createElement(p.a, {
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
			var r = t("./node_modules/@loadable/component/dist/loadable.esm.js");
			s.a = Object(r.a)({
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
//# sourceMappingURL=FramedModal.1496e6f9c07e048c8e2d.js.map