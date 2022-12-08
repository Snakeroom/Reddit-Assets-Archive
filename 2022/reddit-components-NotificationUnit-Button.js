// https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.8bb31d39f0ba44b384a4.js
// Retrieved at 12/8/2022, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-NotificationUnit-Button"], {
		"./node_modules/lodash/map.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayMap.js"),
				s = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseMap.js"),
				r = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (r(e) ? o : i)(e, s(t, 3))
			}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var o, s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/actions/chat/toggle.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(o || (o = {}));
			const u = e => {
				let {
					onStartChat: t,
					text: n,
					className: s,
					sendEvent: r,
					contextId: a,
					priority: c,
					Icon: u,
					redditStyle: m,
					isFullWidth: p,
					eventSource: h,
					onClick: f,
					onAddUserToQuickReplyList: v,
					children: x,
					style: b
				} = e;
				return i.a.createElement(d.t, {
					onClick: e => {
						if (f && f(e), t(), h === o.awardNotification) return v();
						r(Object(l.b)(a))
					},
					className: s,
					text: n,
					priority: c,
					Icon: u,
					redditStyle: m,
					isFullWidth: p,
					style: b
				}, x)
			};
			u.displayName = "ChatButton";
			const m = Object(r.b)(null, (e, t) => {
				let {
					contextId: n,
					userId: o
				} = t;
				return {
					onStartChat: () => {
						e(Object(a.b)(o, n))
					},
					onAddUserToQuickReplyList: () => {
						e(Object(a.a)(o))
					}
				}
			});
			t.b = m(Object(c.c)(u))
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return v
			})), n.d(t, "a", (function() {
				return x
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = n("./src/reddit/selectors/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const h = m.a.div("Text", u.a),
				f = m.a.div("BottomText", u.a),
				v = e => s.a.createElement(h, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				x = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return s.a.createElement(f, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				b = Object(r.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(d.b)(n)(e)
					}
				}),
				O = Object(c.a)(x, [a.a.Click, a.a.Keydown]),
				I = Object(c.a)(v, [a.a.Click, a.a.Keydown]),
				_ = Object(i.b)(b);
			t.c = _(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(O, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : s.a.createElement(I, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/NotificationUnit/Button.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/makeCommentsPageKey/index.ts"),
				c = n("./src/reddit/actions/comment/authoring.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/components/ChatButton/index.tsx"),
				u = n("./src/reddit/constants/things.ts");
			const m = /^\/(r|user)\/(\w+)\/(?:(?:comments\/)(\w+)\/(?:(?:\w+\/)(\w+)\/?)?)?/;
			var p = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/graphql/helpers.ts"),
				f = n("./src/reddit/helpers/trackers/inbox.ts"),
				v = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/models/NotificationInbox/index.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				O = n("./src/reddit/selectors/experiments/inAppNotification.ts"),
				I = n("./src/reddit/components/NotificationUnit/index.m.less"),
				_ = n.n(I);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), N = {
				kind: b.b.Error,
				text: y._("Sorry, this content is no longer available.", null, {
					hk: "3q5siu"
				}),
				duration: d.a
			};
			t.default = e => {
				var t, n, o, b, I, C, j, E, R, S;
				const T = Object(i.d)(),
					k = Object(i.e)(O.d),
					{
						context: g,
						deeplinkUrl: A,
						isFullWidth: w,
						isUnread: L,
						isInAppNotification: P,
						isNightMode: D,
						notificationId: U,
						onEvent: F
					} = e,
					B = null == g ? void 0 : g.messageType,
					M = B === x.a.CommentReply,
					V = B === x.a.SubredditRecommendation,
					W = B === x.a.LifecyclePostSuggestions,
					H = null === (t = null == g ? void 0 : g.post) || void 0 === t ? void 0 : t.permalink;
				let J = null === (n = null == g ? void 0 : g.comment) || void 0 === n ? void 0 : n.id,
					K = (null === (o = null == g ? void 0 : g.post) || void 0 === o ? void 0 : o.id) || (null === (I = null === (b = null == g ? void 0 : g.comment) || void 0 === b ? void 0 : b.postInfo) || void 0 === I ? void 0 : I.id);
				const X = null === (C = null == g ? void 0 : g.subreddit) || void 0 === C ? void 0 : C.id,
					Q = null === (E = null === (j = null == g ? void 0 : g.awarding) || void 0 === j ? void 0 : j.award) || void 0 === E ? void 0 : E.id,
					z = null === (S = null === (R = null == g ? void 0 : g.awarding) || void 0 === R ? void 0 : R.awarder) || void 0 === S ? void 0 : S.id;
				if (B === x.a.CommentFollow || B === x.a.PostFollow) {
					const e = (e => {
						const t = {},
							{
								pathname: n
							} = new URL(e);
						if (!n) return t;
						const o = n.match(m);
						if (!o) return t;
						const [s, i, r, a] = o.slice(1);
						return i && "r" === s && (t.subredditName = i), r && (t.postId = `${u.b}${r}`), a && (t.commentId = `${u.a}${a}`), t
					})(A);
					K = e.postId, J = e.commentId
				} else B !== x.a.PostReply && B !== x.a.LifecyclePostSuggestions || (J = U);
				const Z = e => {
					if (K && J) {
						const e = Object(a.a)(K, J, Object(h.c)(A)),
							t = {
								parentCommentId: J,
								commentsPageKey: e
							};
						T(Object(c.h)(t)), F({
							position: f.d.SECOND
						})
					} else e.preventDefault(), T(Object(d.f)(N))
				};
				return (() => {
					switch (B) {
						case x.a.HFNSubredditInterestingPost:
						case x.a.LifecyclePostSuggestions:
						case x.a.SubredditRecommendation: {
							const e = W;
							if (!(V || e || k && P)) return null;
							const t = e => {
									H ? F({
										position: f.d.SECOND,
										postId: K,
										subredditId: X
									}) : (e.preventDefault(), T(Object(d.f)(N)))
								},
								n = y._("Check It Out", null, {
									hk: "3mzMCI"
								});
							return s.a.createElement(p.t, {
								onClick: t,
								isFullWidth: w,
								priority: p.c.Tertiary,
								redditStyle: !0,
								className: Object(r.a)(_.a.notificationButton, {
									[_.a.isUnread]: L && !P,
									[_.a.isNightMode]: D,
									[_.a.inAppNotification]: P,
									[_.a.isFullWidth]: w && !P
								})
							}, !P && s.a.createElement(v.a, {
								name: "text_post",
								className: _.a.postIcon
							}), y._("{check out button}", [y._param("check out button", n)], {
								hk: "4DDMme"
							}))
						}
						case x.a.PostReply:
						case x.a.CommentReply:
						case x.a.PostFollow:
						case x.a.CommentFollow: {
							const e = M;
							return M || e || k && P ? s.a.createElement(p.t, {
								onClick: Z,
								kind: p.b.InternalLink,
								to: A,
								isFullWidth: w,
								priority: p.c.Tertiary,
								redditStyle: !0,
								className: Object(r.a)(_.a.notificationButton, {
									[_.a.isUnread]: L && !P,
									[_.a.isNightMode]: D,
									[_.a.inAppNotification]: P,
									[_.a.isFullWidth]: w && !P
								})
							}, !P && s.a.createElement(v.a, {
								name: "reply",
								className: _.a.replyIcon
							}), y._("Reply Back", null, {
								hk: "3JWTvx"
							})) : null
						}
						case x.a.AwardReceived: {
							if (!z) return null;
							const e = e => {
								e.preventDefault(), z ? F({
									position: f.d.SECOND,
									awardId: Q
								}) : T(Object(d.f)(N))
							};
							return s.a.createElement(l.b, {
								userId: z,
								contextId: z,
								onClick: e,
								isFullWidth: w,
								priority: p.c.Tertiary,
								redditStyle: !0,
								eventSource: l.a.awardNotification,
								className: Object(r.a)(_.a.notificationButton, {
									[_.a.isUnread]: L && !P,
									[_.a.isNightMode]: D,
									[_.a.inAppNotification]: P,
									[_.a.isFullWidth]: w && !P
								})
							}, !P && s.a.createElement(v.a, {
								name: "chat_new",
								className: _.a.replyIcon
							}), y._("Say thanks", null, {
								hk: "2FzJoo"
							}))
						}
						case x.a.UpvotePost:
						case x.a.UpvoteComment:
						case x.a.UsernameMention:
						case x.a.PrivateMessage:
						case x.a.UserNewFollower:
						case x.a.ChatMessage:
						case x.a.CakeDay:
						case x.a.ChatRequest:
						case x.a.ChatAcceptInvite:
						case x.a.HFNSubredditInterestingPost:
						case x.a.OneOff:
						case x.a.ModeratedSrViralCommentPost:
						case x.a.TalkLive: {
							if (!P) return null;
							const e = e => {
								switch (e) {
									case x.a.HFNSubredditInterestingPost:
									case x.a.OneOff:
									case x.a.UpvotePost:
									case x.a.ModeratedSrViralCommentPost:
										return y._("See Post", null, {
											hk: "mGXS5"
										});
									case x.a.UpvoteComment:
										return y._("See Comment", null, {
											hk: "3FUtJF"
										});
									case x.a.ChatRequest:
									case x.a.ChatAcceptInvite:
										return y._("Start Chat", null, {
											hk: "iQZfe"
										});
									case x.a.ChatMessage:
										return y._("Open Chat", null, {
											hk: "2jV0mi"
										});
									case x.a.CakeDay:
									case x.a.UserNewFollower:
										return y._("See Profile", null, {
											hk: "2Wj94t"
										});
									case x.a.TalkLive:
										return y._("Join", null, {
											hk: "1PvPkd"
										});
									default:
										return y._("Reply", null, {
											hk: "zBpwB"
										})
								}
							};
							return s.a.createElement(p.t, {
								onClick: () => F({
									position: f.d.SECOND
								}),
								isFullWidth: w,
								priority: p.c.Tertiary,
								redditStyle: !0,
								className: Object(r.a)(_.a.notificationButton, {
									[_.a.isNightMode]: D,
									[_.a.inAppNotification]: !0
								})
							}, e(B))
						}
						default:
							return k && P ? s.a.createElement(p.t, {
								onClick: () => F({
									position: f.d.SECOND
								}),
								isFullWidth: w,
								priority: p.c.Tertiary,
								redditStyle: !0,
								className: Object(r.a)(_.a.notificationButton, {
									[_.a.isNightMode]: D,
									[_.a.inAppNotification]: !0
								})
							}, y._("See more", null, {
								hk: "3QLc3"
							})) : null
					}
				})()
			}
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/higherOrderComponents/asTooltip.tsx"),
				r = n("./src/reddit/constants/elementIds.ts"),
				a = n("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const n = Object(i.a)(e, t);
				class o extends s.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(r.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return s.a.createElement(n, c({}, this.props, {
							container: this.state.container || this.props.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(o)
			}
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			}));
			var o = n("./src/lib/constants/index.ts");
			const s = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case o.L.NO_STRIPE_SUBSCRIPTION:
							case o.L.USER_DOESNT_EXIST:
							case o.L.USER_REQUIRED_ERROR:
							case o.L.VALIDATION_ERROR:
								return e;
							case o.L.NO_USER:
							case o.L.NO_TEXT:
							case o.L.NO_URL:
								return o.L.VALIDATION_ERROR;
							case o.L.CREDIT_CARD_FAILURE:
							case o.L.CREDIT_CARD_FAILURE_GENERIC:
								return o.L.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return o.L.SUBMIT_VALIDATION_ERROR
						}
					}
					return o.L.VALIDATION_ERROR
				},
				i = e => {
					const t = e.body;
					return {
						type: s(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				r = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: i(e)
					} : e
				};
			t.a = i
		},
		"./src/reddit/selectors/experiments/commentSearchPdp.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./node_modules/reselect/es/index.js");
			const r = Object(i.a)(e => Object(s.c)(e, {
				experimentEligibilitySelector: s.a,
				experimentName: o.sb
			}), e => ({
				bucketed: e === o.Xc.ExpandedSearch || e === o.Xc.CollapsedSearch,
				collapsed: e === o.Xc.CollapsedSearch,
				expanded: e === o.Xc.ExpandedSearch
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.8bb31d39f0ba44b384a4.js.map