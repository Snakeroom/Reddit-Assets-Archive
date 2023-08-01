// https://www.redditstatic.com/desktop2x/FramedModal.f6cbe21f33bc68a3a74b.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FramedModal"], {
		"./src/reddit/components/CrisisFlow/_CrisisFlow.m.less": function(e, s, t) {
			e.exports = {
				Wrapper: "_26WybLHECnYPDgxRHgyjb5",
				wrapper: "_26WybLHECnYPDgxRHgyjb5",
				Component: "_3ewQ4qGp3uD69DWsgwx2rf",
				component: "_3ewQ4qGp3uD69DWsgwx2rf",
				CloseWrapper: "fSghm8X6VAASE0rdNsHuu",
				closeWrapper: "fSghm8X6VAASE0rdNsHuu",
				Close: "_3uL4G0VfRGDb9CgwKeHmT0",
				close: "_3uL4G0VfRGDb9CgwKeHmT0"
			}
		},
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
		"./src/reddit/components/ReportFlow/new.tsx": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return i
			}));
			var r = t("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = t("./src/reddit/constants/colors.ts");
			const n = {
					backgroundColor: o.a.overlayReportFlow
				},
				i = Object(r.a)({
					resolved: {},
					chunkName: () => "ReportFlow",
					isReady(e) {
						const s = this.resolve(e);
						return !1 !== this.resolved[s] && !!t.m[s]
					},
					importAsync: () => t.e("ReportFlow").then(t.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx")),
					requireAsync(e) {
						const s = this.resolve(e);
						return this.resolved[s] = !1, this.importAsync(e).then(e => (this.resolved[s] = !0, e))
					},
					requireSync(e) {
						const s = this.resolve(e);
						return t(s)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx"
					}
				}),
				a = Object(r.a)({
					resolved: {},
					chunkName: () => "ReportFlowNew",
					isReady(e) {
						const s = this.resolve(e);
						return !1 !== this.resolved[s] && !!t.m[s]
					},
					importAsync: () => t.e("ReportFlowNew").then(t.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx")),
					requireAsync(e) {
						const s = this.resolve(e);
						return this.resolved[s] = !1, this.importAsync(e).then(e => (this.resolved[s] = !0, e))
					},
					requireSync(e) {
						const s = this.resolve(e);
						return t(s)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx"
					}
				});
			s.b = a
		},
		"./src/reddit/models/ReportFlow/index.ts": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return r
			})), t.d(s, "b", (function() {
				return i
			}));
			var r, o, n;
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			! function(e) {
				e.All = "all", e.Comment = "comment", e.Post = "post"
			}(r || (r = {})),
			function(e) {
				e.HARASSMENT_AT_ME = "HARASSMENT_AT_ME", e.HARASSMENT_AT_SOMEONE_ELSE = "HARASSSOMEONE_ELSENT_AT_ME", e.VIOLENCE_AT_ME = "VIOLENCE_AT_ME", e.VIOLENCE_AT_SOMEONE_ELSE = "VIOLENCE_AT_SOMEONE_ELSE", e.HATE_CONTENT = "HATE_CONTENT", e.MINOR_SEXUALIZATION = "HARASSMENT_AT_ME", e.PII_ABOUT_ME = "PII_ABOUT_ME", e.PII_ABOUT_SOMEONE_ELSE = "PII_ABOUT_SOMEONE_ELSE", e.INVOLUNTARY_PORN_SELF = "INVOLUNTARY_PORN_SELF", e.INVOLUNTARY_PORN_OTHER = "INVOLUNTARY_PORN_OTHER", e.PROHIBITED_SALES = "PROHIBITED_SALES", e.REPORT_BUTTON_ABUSE = "REPORT_BUTTON_ABUSE", e.IMPERSONATION_SELF = "IMPERSONATION_SELF", e.IMPERSONATION_OTHER = "IMPERSONATION_OTHER", e.COPYRIGHT_SELF = "COPYRIGHT_SELF", e.COPYRIGHT_OTHER = "COPYRIGHT_OTHER", e.TRADEMARK_SELF = "TRADEMARK_SELF", e.TRADEMARK_OTHER = "TRADEMARK_OTHER", e.NETZDG = "NETZDG", e.SELF_HARM = "SELF_HARM", e.SPAM_LINK_FARMING = "SPAM_LINK_FARMING", e.SPAM_UNSOLICITED_PMS = "SPAM_UNSOLICITED_PMS", e.SPAM_COMMENT_FLOODING = "SPAM_COMMENT_FLOODING", e.SPAM_MALWARE = "SPAM_MALWARE", e.SPAM_BOTS = "SPAM_BOTS", e.MISINFORMATION_HEALTH = "MISINFORMATION_HEALTH", e.MISINFORMATION_POLITICS = "MISINFORMATION_POLITICS", e.MISINFORMATION_FABRICATION = "MISINFORMATION_FABRICATION", e.MISINFORMATION_CONSPIRACY = "MISINFORMATION_CONSPIRACY", e.BAN_EVASION = "BAN_EVASION", e.VOTE_MANIPULATION = "VOTE_MANIPULATION"
			}(o || (o = {})),
			function(e) {
				e.R2 = "R2", e.MWEB = "MWEB", e.D2X = "D2X"
			}(n || (n = {}));
			const i = new Set(Object.values(n))
		},
		"./src/reddit/pages/FramedModalPage/index.m.less": function(e, s, t) {
			e.exports = {
				fullScreen: "_1pL8RMJmuOdTXSiyWiJOca"
			}
		},
		"./src/reddit/pages/FramedModalPage/index.tsx": function(e, s, t) {
			"use strict";
			t.r(s);
			var r = t("./node_modules/lodash/fromPairs.js"),
				o = t.n(r),
				n = t("./node_modules/react/index.js"),
				i = t.n(n),
				a = t("./src/lib/extractQueryParams/index.ts"),
				l = t("./src/lib/lessComponent.tsx"),
				d = t("./src/lib/postParentMessage/index.ts"),
				c = t("./src/reddit/components/CrisisFlow/_CrisisFlow.m.less"),
				p = t.n(c),
				m = t("./src/reddit/icons/svgs/Close/index.tsx"),
				_ = t("./src/reddit/pages/FramedModalPage/index.m.less"),
				E = t.n(_),
				h = t("./src/reddit/components/CrisisFlow/async.tsx"),
				A = t("./src/reddit/components/ReportFlow/new.tsx"),
				O = t("./src/reddit/models/ReportFlow/index.ts"),
				u = t("./src/reddit/pages/PaypalFinishPage/async.tsx");

			function R() {
				return (R = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var t = arguments[s];
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
					}
					return e
				}).apply(this, arguments)
			}
			const N = l.a.div("Wrapper", E.a),
				I = l.a.div("CloseWrapper", p.a),
				T = l.a.wrapped(m.a, "Close", p.a),
				M = /(.*\.reddit\.com|.*(staging|dev)\.snooguts\.net|.*reddit\.local|.*\.snoo\.dev)$/,
				S = "framedmodal",
				P = {
					PARENT_ORIGIN: "_o"
				},
				F = {
					CTL: "ctl",
					PAYPAL_FINISH: "paypal-finish",
					REPORT: "report"
				};
			class y extends i.a.Component {
				constructor(e) {
					if (super(e), this.element = null, this.iframeWidth = null, this.iframeHeight = null, this.onContentResize = () => {
							this.maybeResize()
						}, this.modalType = e.match.params.type, this.modalType !== F.CTL && this.modalType !== F.PAYPAL_FINISH && this.modalType !== F.REPORT) throw new Error("Unknown modal page type: " + e.match.params.type);
					this.queryParams = o()([...Object(a.a)(this.props.location.search)]);
					const s = this.queryParams[P.PARENT_ORIGIN];
					if (!M.test(s)) throw new Error("Invalid parent origin: " + s);
					this.parentOrigin = s
				}
				postMessage(e) {
					Object(d.a)(e, S, this.parentOrigin, window.opener || window.parent)
				}
				componentForIframe() {
					switch (this.modalType) {
						case F.CTL:
							return i.a.createElement(N, null, i.a.createElement(I, {
								onClick: () => this.postMessage({
									type: "close"
								})
							}, i.a.createElement(T, null)), i.a.createElement(h.a, R({
								iframed: !0,
								username: this.queryParams.author,
								onCloseReportFlow: () => this.postMessage({
									type: "close"
								}),
								postMessage: e => this.postMessage(e)
							}, this.queryParams)));
						case F.PAYPAL_FINISH:
							return i.a.createElement(u.a, {
								params: this.queryParams,
								postMessage: e => this.postMessage(e)
							});
						case F.REPORT: {
							const e = this.queryParams.host_app_name;
							return i.a.createElement(A.b, {
								hostAppName: O.b.has(e) ? e : void 0,
								postId: this.queryParams.post_id,
								commentId: this.queryParams.comment_id,
								messageId: this.queryParams.message_id,
								author: this.queryParams.author,
								onCloseReportModal: () => this.postMessage({
									type: "close"
								}),
								postMessage: e => this.postMessage(e),
								onResize: this.onContentResize
							})
						}
						default:
							return null
					}
				}
				render() {
					return i.a.createElement("div", {
						className: E.a.fullScreen,
						ref: e => this.setElement(e)
					}, this.componentForIframe())
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
			s.default = y
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FramedModal.f6cbe21f33bc68a3a74b.js.map