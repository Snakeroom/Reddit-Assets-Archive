// https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796.f8e9c3eb991b2d4f6ef4.js
// Retrieved at 6/23/2020, 2:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796"], {
		"./src/higherOrderComponents/withClickTracking.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "d", (function() {
				return x
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/omit.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				c = s.n(r),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/selectors/telemetry.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const u = (e, t, s) => (function() {
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return o => {
					const r = x(o.target, o.currentTarget);
					b(o.target, o.currentTarget, p.anchors) ? r && t && e(t(s, r)) : r && t && e(e => {
						const n = t(s, r)(e);
						let o;
						if (n && n.actionInfo) {
							const e = n.actionInfo,
								{
									pageType: t
								} = e;
							o = l(e, ["pageType"])
						}
						return Object.assign({}, n, {
							actionInfo: Object(i.previousPageActionInfo)(e, o)
						})
					}), b(o.target, o.currentTarget, p.anchorsAndButtons) && n(o)
				}
			});

			function m(e) {
				class t extends c.a.Component {
					constructor() {
						super(...arguments), this.cancelClick = !1
					}
					render() {
						const {
							sendEvent: t,
							eventFactory: s,
							clickTrackingId: n
						} = this.props;
						return c.a.createElement(e, d({}, o()(this.props, "sendEvent", "eventFactory", "clickTrackingId"), {
							afterClickTracking: u(t, s, n)
						}))
					}
				}
				return Object(a.c)(t)
			}
			const p = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				b = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && b(e.parentElement, t, s)),
				x = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && x(e.parentElement, t))
				}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/eventTools/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				u = s("./src/reddit/helpers/postEvent.ts"),
				m = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = s.n(m);
			const b = a.a.div("EventMetaWrapper", p.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					post: n
				} = e;
				if (!Object(u.a)(n)) return null;
				const a = n && n.eventInfo,
					m = Object(l.a)(n),
					x = a && Object(c.c)(a.eventStart, a.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(p.a.container, t, {
						[p.a.isCompact]: !!s
					})
				}, o.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, o.a.createElement(i.a, {
					post: n
				}), !m && x && o.a.createElement(d.a, {
					className: p.a.eventFollowButton,
					post: n,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/eventTools/index.ts"),
				c = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				a = s("./src/lib/constants/index.ts");

			function i(e) {
				return e.toLocaleDateString(void 0, {
					month: "numeric",
					day: "numeric"
				})
			}
			var d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				u = s("./src/reddit/icons/fonts/Live/index.tsx"),
				m = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				p = s.n(m),
				b = s("./src/lib/lessComponent.tsx");
			const x = b.a.span("PostEventFutureText", p.a),
				v = b.a.span("PostEventPastText", p.a),
				f = b.a.span("PostEventNowText", p.a),
				h = b.a.span("Container", p.a),
				E = b.a.wrapped(l.a, "CalendarIcon", p.a),
				k = b.a.wrapped(u.a, "LiveIcon", p.a),
				_ = b.a.div("LoadingState", p.a);
			class j extends n.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						post: t
					} = this.props, {
						eventInfo: s
					} = t;
					if (!s) return null;
					const {
						eventEnd: n,
						eventIsLive: l,
						eventStart: u
					} = s, m = Object(r.e)(u, n);
					let p, b;
					if (this.state.mounted || m === r.a.Live) p = function(e, t, s) {
						const n = Object(r.e)(e, t),
							o = new Date(e * a.Eb);
						let d;
						if (n === r.a.Live || s) return c.fbt._("Now", null, {
							hk: "Prpcg"
						});
						n === r.a.Future ? d = Object(r.d)(e) ? c.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(r.b)(e) >= 5 ? i(o) : o.toLocaleDateString(void 0, {
							weekday: "long"
						}) : n === r.a.Past && (d = Object(r.d)(e) ? c.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : i(o));
						const l = function(e) {
							return e.toLocaleTimeString(void 0, {
								hour12: !0,
								hour: "numeric",
								minute: "2-digit"
							}).replace(/ /g, "").toUpperCase()
						}(o);
						return "".concat(d, " @ ").concat(l)
					}(u, n, l);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						p = o.a.createElement(_, {
							className: e
						})
					}
					if (l) b = o.a.createElement(f, null, o.a.createElement(k, null), p);
					else if (m === r.a.Future) b = o.a.createElement(x, null, o.a.createElement(E, null), p);
					else {
						if (m !== r.a.Past) return null;
						b = o.a.createElement(v, null, o.a.createElement(E, null), p)
					}
					return o.a.createElement(h, {
						className: e
					}, b)
				}
			}
			t.a = j
		},
		"./src/reddit/components/GildModal/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts");
			const r = Object(n.a)({
				getComponent: () => Object(o.a)(() => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("FramedGild~GildModal"), s.e("GildModal")]).then(s.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = r
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, s) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				c = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/ModModeReports/index.m.less"),
				i = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = c.a.div("Text", i.a), u = c.a.div("Placeholder", i.a), m = () => r.a.createElement(u, null, r.a.createElement(l, null, d._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), p = Object(n.a)({
				resolved: {},
				chunkName: () => "ModerationDropdowns",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: r.a.createElement(m, null),
				ssr: !1
			});
			t.a = p
		},
		"./src/reddit/components/ModerationPrompts/Prompt.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				c = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/reportFlow.ts"),
				l = s("./src/reddit/components/Popup/index.tsx"),
				u = s("./src/reddit/components/Popup/Button.tsx"),
				m = s("./src/reddit/helpers/trackers/reportPrompt.ts"),
				p = s("./src/reddit/hooks/useTracking.ts"),
				b = s("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function x(e) {
				const {
					subredditName: t,
					post: s,
					isOverlay: x
				} = e, [v, f] = Object(o.useState)(!0), h = Object(b.b)(s.id, x), E = Object(c.c)(), k = Object(p.a)(), _ = Object(b.a)(s, x), j = (e, n) => k(Object(m.a)(t, s.id, e, n));
				Object(o.useEffect)(() => {
					_ && j("modal", "show")
				}, [_]);
				if (!_ || !v) return null;
				const O = n.fbt._("Help r/{subredditName} mods", [n.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return r.a.createElement(l.a, {
					id: h,
					title: O,
					onClose: () => {
						f(!1), j("close", "click"), E(Object(i.J)()), E(Object(i.U)({
							[s.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						E(Object(i.J)())
					}
				}, r.a.createElement("p", null, n.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [n.fbt._param("=Reddit", r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, n.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), n.fbt._param("=community", r.a.createElement(a.a, {
					to: "/r/".concat(t, "/about/rules"),
					target: "_blank"
				}, n.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), r.a.createElement(u.a, {
					onClick: () => (f(!1), j("report", "click"), void E(Object(d.j)(s.id)))
				}, n.fbt._("Report", null, {
					hk: "4oVcnd"
				})))
			}
		},
		"./src/reddit/components/ModerationPrompts/Survey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				c = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/reportFlow.ts"),
				u = s("./src/reddit/components/Popup/index.tsx"),
				m = s("./src/reddit/components/Popup/Button.tsx"),
				p = s("./src/reddit/helpers/trackers/reportPrompt.ts"),
				b = s("./src/reddit/hooks/useTracking.ts"),
				x = s("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function v(e) {
				const {
					subredditName: t,
					post: s,
					isOverlay: v
				} = e, [f, h] = Object(r.useState)(n.Survey), E = Object(x.b)(s.id, v), k = Object(a.c)(), _ = Object(b.a)(), j = Object(x.a)(s, v), O = (e, n) => _(Object(p.b)(t, s.id, e, n));
				Object(r.useEffect)(() => {
					j && O("modal", "show")
				}, [j]);
				const g = e => {
					h(n.Closed), O("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), k(Object(l.j)(s.id, void 0, void 0, e))
				};
				if (!j) return null;
				let y = null;
				const C = {
					id: E,
					title: o.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						h(n.Closed), O("close", "click"), k(Object(d.J)())
					},
					onClickOutside: () => {
						k(Object(d.J)())
					}
				};
				switch (f) {
					case n.Survey:
						y = c.a.createElement(u.a, C, c.a.createElement("p", null, o.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [o.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), c.a.createElement(m.a, {
							onClick: () => {
								h(n.OffTopic), O("off_topic", "click")
							}
						}, o.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), c.a.createElement(m.a, {
							onClick: () => {
								h(n.DontLike), O("dont_like", "click")
							}
						}, o.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), c.a.createElement(m.a, {
							onClick: () => {
								h(n.BreaksRules), O("breaks_rules", "click")
							}
						}, o.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case n.OffTopic:
						y = c.a.createElement(u.a, C, c.a.createElement("p", null, o.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case n.DontLike:
						y = c.a.createElement(u.a, C, c.a.createElement("p", null, o.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case n.BreaksRules:
						y = c.a.createElement(u.a, C, c.a.createElement("p", null, o.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [o.fbt._param("=Reddit", c.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, o.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), o.fbt._param("=community", c.a.createElement(i.a, {
							to: "/r/".concat(t, "/about/rules"),
							target: "_blank"
						}, o.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), c.a.createElement(m.a, {
							onClick: () => g("site")
						}, o.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), c.a.createElement(m.a, {
							onClick: () => g("community")
						}, o.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case n.Closed:
				}
				return y
			}! function(e) {
				e[e.Survey = 0] = "Survey", e[e.OffTopic = 1] = "OffTopic", e[e.DontLike = 2] = "DontLike", e[e.BreaksRules = 3] = "BreaksRules", e[e.Closed = 4] = "Closed"
			}(n || (n = {}))
		},
		"./src/reddit/components/Popup/Button.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/Popup/index.m.less"),
				c = s.n(r);

			function a(e) {
				return o.a.createElement("button", {
					className: c.a.popupButton,
					onClick: e.onClick
				}, e.children)
			}
		},
		"./src/reddit/components/Popup/index.m.less": function(e, t, s) {
			e.exports = {
				popup: "t5ViKDVyrrlzRbCpXvJu7",
				header: "preWelIDv3a0Fgtd5_QjN",
				title: "_3Xw5NRiOh-SAcOXIUMIm-l",
				closeButton: "_3oee1_5V2jOvP4BaO2LCQu",
				popupButton: "_3nddrgCBXpzDP5XYzrH3ZY"
			}
		},
		"./src/reddit/components/Popup/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/uuid/v4.js"),
				c = s.n(r),
				a = s("./src/reddit/hooks/useOnClickOutside.ts"),
				i = s("./src/reddit/components/Popup/index.m.less"),
				d = s.n(i);

			function l(e) {
				const {
					id: t = c()(),
					onClose: s,
					onClickOutside: n,
					title: r,
					children: i
				} = e;
				return Object(a.a)(t, n), o.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: d.a.popup,
					role: "dialog",
					tabIndex: -1
				}, o.a.createElement("h3", {
					className: d.a.header
				}, o.a.createElement("span", {
					className: d.a.title
				}, r), o.a.createElement("button", {
					className: d.a.closeButton,
					onClick: s
				}, "✕")), i)
			}
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, s) {
			e.exports = {
				adminIcon: "_1cje4rrmwL0yZgCOlGyBJ-",
				approveIcon: "_1knR9NIIXdSFC9IeFN11JL",
				automoderator: "_2etEb_0bRB9axAqF3uX28S",
				icon: "_3vju76MdF2FaGmELBeiJ_r",
				lockIcon: "_3wTfn3Meg1rXJ-qd2jUWMt",
				modIcon: "_SMl46gACTEszA_4A0Qfs",
				removeIcon: "_3yuF1RnBRJL4OS_STsoXcC",
				reportIcon: "_3guZWUAROueft8TPPGDZ-R",
				spamIcon: "_2BWw37nLL0rX6n7xcXciyD",
				stickyIcon: "NI8uZ-19oHf9gPO8jOvFu",
				isRemoved: "_27iLVqax1FuPWTymkSkKAq",
				archivedIcon: "_2WSiH2JwZq4bXuvrDn-cgU",
				addRemovalReason: "COGitU-ItwLZG_fP5rsdE",
				removalReason: "_16Ih3bzeELRlI6AWeW-nFy"
			}
		},
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				c = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				p = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/helpers/isRemoved.ts"),
				v = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				f = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				h = s("./src/reddit/models/Post/index.ts"),
				E = s("./src/reddit/selectors/posts.ts"),
				k = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				j = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				O = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				g = s("./src/reddit/icons/fonts/Report/index.tsx"),
				y = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				C = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				S = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				P = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				M = s("./src/reddit/components/PostBadges/index.m.less"),
				I = s.n(M);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const L = e => r.a.createElement("span", w({
					className: I.a.removalReason
				}, e), e.children),
				N = () => n.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				F = () => n.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				T = e => n.fbt._("Moderator of {community name}", [n.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				R = () => n.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				B = () => n.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				A = (e, t, s) => {
					const n = "PostBadges--".concat(e, "--").concat(t);
					return s ? "".concat(n, "--").concat(s) : n
				},
				H = Object(b.t)({
					isProfilePostListing: b.I,
					isSubreddit: b.K,
					pageLayer: e => e
				}),
				G = Object(a.c)({
					isPinned: (e, t) => {
						let {
							post: s
						} = t;
						return Object(E.u)(e, {
							postId: s.id
						})
					},
					modModeEnabled: b.P
				}),
				D = Object(c.b)(G, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(l.f)({
						tooltipId: t
					}))
				}));
			t.a = H(D(e => {
				let {
					className: t,
					displayText: s,
					isSubreddit: c,
					inSubredditOrProfile: a,
					isCompactPinnedPost: l,
					isPinned: b,
					isProfilePostListing: E,
					modModeEnabled: M,
					onHideTooltip: H,
					onOpenRemovalReasonModal: G,
					onShowTooltip: D,
					post: z,
					tooltipType: V
				} = e;
				const U = {
						caretOnTop: !1
					},
					W = z.isRemoved && !z.modRemovalReason && !z.modNote && z.belongsTo.type === p.a.SUBREDDIT,
					J = A("Approve", z.id, V),
					X = A("Archived", z.id, V),
					Z = A("Automod", z.id, V),
					K = A("Lock", z.id, V),
					q = A("Mod", z.id, V),
					Y = A("Remove", z.id, V),
					Q = A("Report", z.id, V),
					$ = A("Spam", z.id, V),
					ee = A("Sticky", z.id, V),
					te = A("Pinned", z.id, V);
				return r.a.createElement("div", {
					className: t
				}, a && s && z.distinguishType === d.C.MODERATOR && r.a.createElement(o.Fragment, null, r.a.createElement(P.a, {
					className: I.a.modIcon,
					desc: T(s),
					id: q,
					onMouseEnter: D(q),
					onMouseLeave: H
				}), r.a.createElement(u.c, w({
					tooltipId: q,
					text: T(s)
				}, U))), z.isArchived && r.a.createElement(o.Fragment, null, r.a.createElement(_.a, {
					className: I.a.archivedIcon,
					desc: N(),
					id: X,
					onMouseEnter: D(X),
					onMouseLeave: H
				}), r.a.createElement(u.c, w({
					tooltipId: X,
					text: N()
				}, U))), z.isLocked && r.a.createElement(o.Fragment, null, r.a.createElement(j.a, {
					className: I.a.lockIcon,
					desc: F(),
					id: K,
					onMouseEnter: D(K),
					onMouseLeave: H
				}), r.a.createElement(u.c, w({
					tooltipId: K,
					text: F()
				}, U))), c && Object(h.k)(z) && !l && r.a.createElement(o.Fragment, null, r.a.createElement(C.a, {
					className: I.a.stickyIcon,
					desc: R(),
					id: ee,
					onMouseEnter: D(ee),
					onMouseLeave: H
				}), r.a.createElement(u.c, w({
					tooltipId: ee,
					text: R()
				}, U))), E && b && r.a.createElement(o.Fragment, null, r.a.createElement(C.a, {
					className: I.a.stickyIcon,
					desc: B(),
					id: te,
					onMouseEnter: D(te),
					onMouseLeave: H
				}), r.a.createElement(u.c, w({
					tooltipId: te,
					text: B()
				}, U))), (z.isApproved || z.approvedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(k.a, {
					className: I.a.approveIcon,
					desc: Object(v.a)(z),
					id: J,
					onMouseEnter: D(J),
					onMouseLeave: H
				}), r.a.createElement(u.c, w({
					tooltipId: J,
					text: Object(v.a)(z)
				}, U))), Object(x.a)(z) && r.a.createElement(o.Fragment, null, r.a.createElement(O.a, {
					className: I.a.removeIcon,
					desc: Object(v.c)(z),
					id: Y,
					onMouseEnter: D(Y),
					onMouseLeave: H
				}), W && r.a.createElement(m.a, {
					className: I.a.addRemovalReason,
					onClick: G,
					text: n.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (z.modRemovalReason || z.modNote) && r.a.createElement(L, {
					onMouseEnter: D(Y),
					onMouseLeave: H
				}, n.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), r.a.createElement(u.c, w({
					tooltipId: Y,
					text: Object(v.c)(z)
				}, U))), z.bannedBy && z.isSpam && r.a.createElement(o.Fragment, null, r.a.createElement(y.a, {
					className: I.a.spamIcon,
					desc: Object(v.e)(z),
					id: $,
					onMouseEnter: D($),
					onMouseLeave: H
				}), r.a.createElement(u.c, w({
					tooltipId: $,
					text: Object(v.e)(z)
				}, U))), ("AutoModerator" === z.approvedBy || "AutoModerator" === z.bannedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(S.a, {
					className: Object(i.a)(I.a.automoderator, !!z.bannedBy && I.a.isRemoved),
					desc: v.b,
					id: Z,
					onMouseEnter: D(Z),
					onMouseLeave: H
				}), r.a.createElement(u.c, w({
					tooltipId: Z,
					text: v.b
				}, U))), Object(f.a)(z) && !M && r.a.createElement(o.Fragment, null, r.a.createElement(g.a, {
					className: I.a.reportIcon,
					desc: Object(v.d)(z.numReports),
					id: Q,
					onMouseEnter: D(Q),
					onMouseLeave: H
				}), r.a.createElement(u.c, w({
					tooltipId: Q,
					text: Object(v.d)(z.numReports)
				}, U))))
			}))
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/AdViewability/index.tsx"),
				a = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				i = s("./src/reddit/components/GildModal/Loader.tsx"),
				d = s("./src/reddit/connectors/PostViewable/index.ts"),
				l = s("./src/reddit/models/Media/index.ts"),
				u = s("./src/reddit/selectors/gild.ts"),
				m = s("./src/reddit/selectors/video.ts"),
				p = s("./src/lib/classNames/index.ts"),
				b = s("./src/higherOrderComponents/withClickTracking.tsx"),
				x = s("./src/reddit/components/PostContainer/index.m.less"),
				v = s.n(x);
			const f = Object(r.c)({
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					buffering: (e, t) => {
						let {
							post: s
						} = t;
						return Object(m.a)(e, {
							postId: s.id
						})
					},
					gildModalIsOpen: (e, t) => {
						let {
							isOverlay: s,
							post: n
						} = t;
						const o = Object(a.b)(n.postId, s);
						return Object(u.d)(e, o)
					},
					playing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(m.f)(e, {
							postId: s.id
						})
					},
					continuousViewingStartedAt: (e, t) => {
						let {
							post: s
						} = t;
						return Object(m.c)(e, {
							postId: s.id
						})
					}
				}),
				h = Object(d.a)(f),
				E = e => {
					const t = Object(b.d)(e.target, e.currentTarget),
						s = Object(b.b)(e.target, e.currentTarget, b.a.buttons);
					return "subreddit" !== t && s
				};
			class k extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						children: t,
						className: s,
						gildModalIsOpen: n,
						makePostContainerId: r,
						post: a,
						onClick: d,
						onPostContentClick: u,
						style: m,
						ref: b
					} = this.props, x = o.a.createElement("div", {
						style: m,
						ref: b,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && (e(() => d && d(t, a))(t), u && E(t) && u(t, a))
						},
						className: Object(p.a)(v.a.WrappedPost, s, "Post ".concat(a.id), {
							promotedlink: a.isSponsored
						}),
						id: r ? r(a.id) : a.id,
						tabIndex: -1
					}, t, n && o.a.createElement(i.a, null)), f = !!a.media && a.media.type === l.n.VIDEO;
					return a.isSponsored || f ? o.a.createElement(c.a, {
						post: a,
						trackDisplay: !0
					}, x) : x
				}
			}
			t.a = h(Object(b.c)(k))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				c = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/helpers/trackers/postCollection.ts"),
				m = s("./src/reddit/components/PostFollow/index.m.less"),
				p = s.n(m);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: n
							},
							sendEvent: o
						} = this.props, r = !!n;
						o(e ? Object(u.o)({
							postId: s,
							isFollowed: r
						}) : Object(u.g)({
							postId: s,
							isFollowed: r
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: s
					} = this.props, o = this.state.isHovered, c = s.isFollowed;
					let a = c ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return c && o && (a = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(i.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!s.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, a)
				}
			}
			const x = Object(c.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(d.F)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(l.c)(b))
		},
		"./src/reddit/components/SourceLink/index.m.less": function(e, t, s) {
			e.exports = {
				OutboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				outboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				SourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				sourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				"m-comment": "_1-PD0_zreH-KVwpFoCLvQF",
				mComment: "_1-PD0_zreH-KVwpFoCLvQF"
			}
		},
		"./src/reddit/components/SourceLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/getShortenedLink.ts"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				d = s("./src/reddit/components/SourceLink/index.m.less"),
				l = s.n(d),
				u = s("./src/lib/lessComponent.tsx");
			const m = u.a.wrapped(i.a, "OutboundLinkIcon", l.a),
				p = u.a.div("SourceLinkWrapper", l.a);
			t.a = e => {
				const {
					className: t,
					post: s,
					isCommentsPage: n
				} = e, {
					source: i,
					isSponsored: d
				} = s;
				return i ? o.a.createElement(p, {
					className: Object(r.a)({
						[l.a["m-comment"]]: n
					}, t)
				}, o.a.createElement(a.a, {
					href: i.url,
					isSponsored: d,
					postId: s.id,
					source: i
				}, Object(c.a)(s), o.a.createElement(m, null))) : null
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, s) {
			e.exports = {
				SubscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				subscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				UnsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				unsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				isLarge: "_2jGEuWB6HWtIbTjMG68OXY",
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA",
				unsubscribeButtonHoverStyles: "_1tZ_edPYFuF6jhuTr_iPEE",
				joinCleanupContent: "_3GS035a5A47X7LR9VSQYy6"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				u = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				m = s.n(u),
				p = s("./src/lib/classNames/index.ts"),
				b = s("./src/lib/lessComponent.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var v = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const f = b.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: s
					} = e, n = v(e, ["small", "shouldReverseColor"]);
					const r = s ? a.i : a.f;
					return o.a.createElement(r, x({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isLarge]: !t
						})
					}))
				}, "SubscribeInternalButton", m.a),
				h = b.a.wrapped(e => {
					var {
						small: t,
						belongsToType: s,
						shouldReverseColor: n
					} = e, r = v(e, ["small", "belongsToType", "shouldReverseColor"]);
					const c = n ? a.f : a.i;
					return o.a.createElement(c, x({}, r, {
						className: Object(p.a)(r.className, {
							[m.a.isLarge]: !t
						})
					}))
				}, "UnsubscribeButton", m.a),
				E = b.a.wrapped(i.a, "Checkmark", m.a),
				k = b.a.wrapped(d.a, "Plus", m.a),
				_ = b.a.div("ButtonSpacer", m.a);
			class j extends o.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const e = this.props,
						{
							className: t,
							identifier: s,
							onSubscribe: n,
							onUnsubscribe: r,
							postId: c,
							sendEvent: a,
							small: i = !1,
							userIsSubscriber: d,
							doNotHideOtherSubscribeButtons: u,
							getEventFactory: b,
							onSubscriptionsRequested: j
						} = e,
						O = v(e, ["className", "identifier", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
						g = this.state.isHovered;
					let y = d ? "subscribed" : "subscribe";
					d && g && (y = "unsubscribe");
					const C = Object(l.a)({
						type: s.type,
						key: y
					});
					return d ? this.state.hasJustSubscribed || u ? o.a.createElement(h, x({
						className: Object(p.a)(t, {
							[m.a.isLarge]: !i,
							[m.a.unsubscribeButtonHoverStyles]: !i
						}),
						onClick: this.onClick,
						small: i,
						belongsToType: s.type,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, O), i && o.a.createElement(E, null), !i && !g && o.a.createElement(E, null), !i && C) : i ? null : o.a.createElement(_, null) : o.a.createElement(o.a.Fragment, null, o.a.createElement(f, x({
						className: Object(p.a)(t, {
							[m.a.isLarge]: !i
						}),
						onClick: this.onClick,
						small: i
					}, O, {
						id: "subscribe-button-".concat(c),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}), o.a.createElement(k, null), !i && C))
				}
			}
			t.a = Object(c.a)(Object(r.c)(j))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const o = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				r = {
					subredditActions: {
						subscribe: () => n.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => n.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => n.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => n.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => n.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => n.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				c = e => {
					let {
						type: t,
						key: s
					} = e;
					return r[o({
						type: t
					})][s]()
				}
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				c = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(o.c)({
				userIsSubscriber: c.cb
			}), (e, t) => {
				let {
					identifier: s
				} = t;
				return {
					onSubscribe: () => e(r.d([s], !0)),
					onSubscriptionsRequested: () => e(r.e()),
					onUnsubscribe: () => e(r.d([s], !1))
				}
			})
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var i = e => o.a.createElement("svg", a({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), o.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, o.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, o.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				d = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.m.less"),
				u = s.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const b = e => t => {
					const {
						className: s,
						disabled: n,
						redditStyle: c,
						"data-redditstyle": a
					} = t, i = p(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), d = ((e, t, s) => {
						const n = !(!t && !s);
						let o = "";
						return o = e ? n ? u.a.mDisabledRedditStyle : u.a.mDisabled : n ? u.a.mActiveRedditStyle : u.a.mActive
					})(n, c, a);
					return o.a.createElement(e, m({
						className: Object(r.a)(u.a.Checkbox, d, s)
					}, i))
				},
				x = b(d.a),
				v = b(i);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? v : e.isCheckboxSelected ? x : c.a;
				return o.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, o.a.createElement(t, {
					className: Object(r.a)(u.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/trackers/reportPrompt.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, s, o) => r => ({
					source: "report_prompt",
					noun: s,
					action: o,
					subreddit: n.subredditByName(r, e),
					post: n.post(r, t)
				}),
				r = (e, t, s, o) => r => ({
					source: "report_survey",
					noun: s,
					action: o,
					subreddit: n.subredditByName(r, e),
					post: n.post(r, t)
				})
		},
		"./src/reddit/hooks/useOnClickOutside.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js");

			function o(e, t) {
				const s = Object(n.useCallback)(s => {
					if (!t) return;
					const n = document.getElementById(e);
					n && (n.contains(s.target) || t(s))
				}, [e, t]);
				Object(n.useEffect)(() => {
					if (t) return document.body.addEventListener("click", s), () => {
						document.body.removeEventListener("click", s)
					}
				}, [t, s])
			}
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("archived"), i.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(c.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, s) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = s.n(c);
			const i = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", a.a);
			t.a = i
		}
	}
]);
//# sourceMappingURL=reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796.f8e9c3eb991b2d4f6ef4.js.map