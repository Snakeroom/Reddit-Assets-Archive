// https://www.redditstatic.com/desktop2x/FramedModal.cb496a1b24101e9fd394.js
// Retrieved at 5/29/2020, 11:10:05 AM by Reddit Dataminer v1.0.0
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
				o = t.n(r),
				i = t("./node_modules/react/index.js"),
				a = t.n(i),
				n = t("./src/lib/extractQueryParams/index.ts"),
				d = t("./src/lib/messageIframeParent/index.ts"),
				l = t("./src/reddit/pages/FramedModalPage/index.m.less"),
				c = t.n(l),
				m = t("./src/reddit/components/CrisisFlow/async.tsx"),
				p = t("./src/reddit/pages/FramedModalPage/async.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var t = arguments[s];
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
					}
					return e
				}).apply(this, arguments)
			}
			const u = /.*\.reddit\.(com|local)$|.*staging\.snooguts\.net$/,
				g = "framedmodal",
				y = {
					PARENT_ORIGIN: "_o"
				},
				P = {
					SUPPORT: "support",
					CTL: "ctl"
				};
			class f extends a.a.Component {
				constructor(e) {
					if (super(e), this.element = null, this.iframeWidth = null, this.iframeHeight = null, this.modalType = e.match.params.type, this.modalType !== P.SUPPORT && this.modalType !== P.CTL) throw new Error("Unknown modal page type: " + e.match.params.type);
					this.queryParams = o()([...Object(n.a)(this.props.location.search)]);
					const s = this.queryParams[y.PARENT_ORIGIN];
					if (!u.test(s)) throw new Error("Invalid parent origin: " + s);
					this.parentOrigin = s
				}
				postMessage(e) {
					Object(d.a)(e, g, this.parentOrigin)
				}
				render() {
					return a.a.createElement("div", {
						className: c.a.fullScreen,
						ref: e => this.setElement(e)
					}, this.modalType === P.SUPPORT && a.a.createElement(p.a, {
						params: this.queryParams,
						onClose: () => this.postMessage({
							type: "close"
						}),
						postMessage: e => this.postMessage(e)
					}), this.modalType === P.CTL && a.a.createElement(m.a, h({
						iframed: !0,
						username: this.queryParams.author,
						onCloseReportFlow: () => this.postMessage({
							type: "close"
						}),
						postMessage: e => this.postMessage(e)
					}, this.queryParams)))
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
					this.element = e, new MutationObserver(() => {
						this.maybeResize()
					}).observe(e, {
						attributes: !0,
						childList: !0,
						subtree: !0
					})
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
		}
	}
]);
//# sourceMappingURL=FramedModal.cb496a1b24101e9fd394.js.map