// https://www.redditstatic.com/desktop2x/FramedModal.f4b63472cbf0b4410b37.js
// Retrieved at 3/3/2021, 12:10:07 PM by Reddit Dataminer v1.0.0
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
		"./src/reddit/components/ReportFlow/new.tsx": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return n
			}));
			var r = t("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = t("./src/reddit/constants/colors.ts");
			const i = {
					backgroundColor: o.b.overlayReportFlow
				},
				n = Object(r.a)({
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
				return n
			}));
			var r, o, i;
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			! function(e) {
				e.All = "all", e.Comment = "comment", e.Post = "post"
			}(r || (r = {})),
			function(e) {
				e.HARASSMENT_AT_ME = "HARASSMENT_AT_ME", e.HARASSMENT_AT_SOMEONE_ELSE = "HARASSSOMEONE_ELSENT_AT_ME", e.VIOLENCE_AT_ME = "VIOLENCE_AT_ME", e.VIOLENCE_AT_SOMEONE_ELSE = "VIOLENCE_AT_SOMEONE_ELSE", e.HATE_CONTENT = "HATE_CONTENT", e.MINOR_SEXUALIZATION = "HARASSMENT_AT_ME", e.PII_ABOUT_ME = "PII_ABOUT_ME", e.PII_ABOUT_SOMEONE_ELSE = "PII_ABOUT_SOMEONE_ELSE", e.INVOLUNTARY_PORN_SELF = "INVOLUNTARY_PORN_SELF", e.INVOLUNTARY_PORN_OTHER = "INVOLUNTARY_PORN_OTHER", e.PROHIBITED_SALES = "PROHIBITED_SALES", e.REPORT_BUTTON_ABUSE = "REPORT_BUTTON_ABUSE", e.IMPERSONATION_SELF = "IMPERSONATION_SELF", e.IMPERSONATION_OTHER = "IMPERSONATION_OTHER", e.COPYRIGHT_SELF = "COPYRIGHT_SELF", e.COPYRIGHT_OTHER = "COPYRIGHT_OTHER", e.TRADEMARK_SELF = "TRADEMARK_SELF", e.TRADEMARK_OTHER = "TRADEMARK_OTHER", e.NETZDG = "NETZDG", e.SELF_HARM = "SELF_HARM", e.SPAM_LINK_FARMING = "SPAM_LINK_FARMING", e.SPAM_UNSOLICITED_PMS = "SPAM_UNSOLICITED_PMS", e.SPAM_COMMENT_FLOODING = "SPAM_COMMENT_FLOODING", e.SPAM_MALWARE = "SPAM_MALWARE", e.SPAM_BOTS = "SPAM_BOTS", e.MISINFORMATION_HEALTH = "MISINFORMATION_HEALTH", e.MISINFORMATION_POLITICS = "MISINFORMATION_POLITICS", e.MISINFORMATION_FABRICATION = "MISINFORMATION_FABRICATION", e.MISINFORMATION_CONSPIRACY = "MISINFORMATION_CONSPIRACY", e.BAN_EVASION = "BAN_EVASION", e.VOTE_MANIPULATION = "VOTE_MANIPULATION"
			}(o || (o = {})),
			function(e) {
				e.R2 = "R2"
			}(i || (i = {}));
			const n = new Set(Object.values(i))
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
				i = t("./node_modules/react/index.js"),
				n = t.n(i),
				a = t("./src/lib/extractQueryParams/index.ts"),
				d = t("./src/lib/postParentMessage/index.ts"),
				l = t("./src/reddit/pages/FramedModalPage/index.m.less"),
				c = t.n(l),
				_ = t("./src/reddit/components/CrisisFlow/async.tsx"),
				m = t("./src/reddit/components/ReportFlow/new.tsx"),
				h = t("./src/reddit/models/ReportFlow/index.ts"),
				O = t("./src/reddit/pages/PaypalFinishPage/async.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var t = arguments[s];
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
					}
					return e
				}).apply(this, arguments)
			}
			const A = /(.*\.reddit\.com|.*(staging|dev)\.snooguts\.net|.*reddit\.local)$/,
				E = "framedmodal",
				R = {
					PARENT_ORIGIN: "_o"
				},
				N = {
					CTL: "ctl",
					PAYPAL_FINISH: "paypal-finish",
					REPORT: "report"
				};
			class u extends n.a.Component {
				constructor(e) {
					if (super(e), this.element = null, this.iframeWidth = null, this.iframeHeight = null, this.onContentResize = () => {
							this.maybeResize()
						}, this.modalType = e.match.params.type, this.modalType !== N.CTL && this.modalType !== N.PAYPAL_FINISH && this.modalType !== N.REPORT) throw new Error("Unknown modal page type: " + e.match.params.type);
					this.queryParams = o()([...Object(a.a)(this.props.location.search)]);
					const s = this.queryParams[R.PARENT_ORIGIN];
					if (!A.test(s)) throw new Error("Invalid parent origin: " + s);
					this.parentOrigin = s
				}
				postMessage(e) {
					Object(d.a)(e, E, this.parentOrigin, window.opener || window.parent)
				}
				componentForIframe() {
					switch (this.modalType) {
						case N.CTL:
							return n.a.createElement(_.a, p({
								iframed: !0,
								username: this.queryParams.author,
								onCloseReportFlow: () => this.postMessage({
									type: "close"
								}),
								postMessage: e => this.postMessage(e)
							}, this.queryParams));
						case N.PAYPAL_FINISH:
							return n.a.createElement(O.a, {
								params: this.queryParams,
								postMessage: e => this.postMessage(e)
							});
						case N.REPORT: {
							const e = this.queryParams.host_app_name;
							return n.a.createElement(m.b, {
								hostAppName: h.b.has(e) ? e : void 0,
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
					return n.a.createElement("div", {
						className: c.a.fullScreen,
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
			s.default = u
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FramedModal.f4b63472cbf0b4410b37.js.map