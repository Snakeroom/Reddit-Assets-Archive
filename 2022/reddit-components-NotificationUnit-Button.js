// https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.b40d70cdbb50f30d22d7.js
// Retrieved at 11/14/2022, 7:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-NotificationUnit-Button"], {
		"./node_modules/lodash/map.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayMap.js"),
				s = n("./node_modules/lodash/_baseIteratee.js"),
				r = n("./node_modules/lodash/_baseMap.js"),
				i = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (i(e) ? o : r)(e, s(t, 3))
			}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var o, s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
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
					sendEvent: i,
					contextId: a,
					priority: c,
					Icon: u,
					redditStyle: m,
					isFullWidth: p,
					eventSource: h,
					onClick: f,
					onAddUserToQuickReplyList: x,
					children: v,
					style: b
				} = e;
				return r.a.createElement(d.t, {
					onClick: e => {
						if (f && f(e), t(), h === o.awardNotification) return x();
						i(Object(l.b)(a))
					},
					className: s,
					text: n,
					priority: c,
					Icon: u,
					redditStyle: m,
					isFullWidth: p,
					style: b
				}, v)
			};
			u.displayName = "ChatButton";
			const m = Object(i.b)(null, (e, t) => {
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
				return x
			})), n.d(t, "a", (function() {
				return v
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
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
				x = e => s.a.createElement(h, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				v = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return s.a.createElement(f, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				b = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(d.b)(n)(e)
					}
				}),
				O = Object(c.a)(v, [a.a.Click, a.a.Keydown]),
				I = Object(c.a)(x, [a.a.Click, a.a.Keydown]),
				_ = Object(r.b)(b);
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
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/makeCommentsPageKey/index.ts"),
				c = n("./src/reddit/actions/comment/authoring.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/components/ChatButton/index.tsx"),
				u = n("./src/reddit/constants/things.ts");
			const m = /^\/(r|user)\/(\w+)\/(?:(?:comments\/)(\w+)\/(?:(?:\w+\/)(\w+)\/?)?)?/;
			var p = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/graphql/helpers.ts"),
				f = n("./src/reddit/helpers/trackers/inbox.ts"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				v = n("./src/reddit/models/NotificationInbox/index.ts"),
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
				var t, n, o, b, I, C, R, j, E, S;
				const T = Object(r.d)(),
					k = Object(r.e)(O.d),
					{
						context: g,
						deeplinkUrl: L,
						isFullWidth: A,
						isUnread: w,
						isInAppNotification: P,
						isNightMode: D,
						notificationId: U,
						onEvent: F
					} = e,
					B = null == g ? void 0 : g.messageType,
					M = B === v.a.CommentReply,
					V = B === v.a.SubredditRecommendation,
					W = B === v.a.LifecyclePostSuggestions,
					H = null === (t = null == g ? void 0 : g.post) || void 0 === t ? void 0 : t.permalink;
				let J = null === (n = null == g ? void 0 : g.comment) || void 0 === n ? void 0 : n.id,
					K = (null === (o = null == g ? void 0 : g.post) || void 0 === o ? void 0 : o.id) || (null === (I = null === (b = null == g ? void 0 : g.comment) || void 0 === b ? void 0 : b.postInfo) || void 0 === I ? void 0 : I.id);
				const Q = null === (C = null == g ? void 0 : g.subreddit) || void 0 === C ? void 0 : C.id,
					z = null === (j = null === (R = null == g ? void 0 : g.awarding) || void 0 === R ? void 0 : R.award) || void 0 === j ? void 0 : j.id,
					X = null === (S = null === (E = null == g ? void 0 : g.awarding) || void 0 === E ? void 0 : E.awarder) || void 0 === S ? void 0 : S.id;
				if (B === v.a.CommentFollow || B === v.a.PostFollow) {
					const e = (e => {
						const t = {},
							{
								pathname: n
							} = new URL(e);
						if (!n) return t;
						const o = n.match(m);
						if (!o) return t;
						const [s, r, i, a] = o.slice(1);
						return r && "r" === s && (t.subredditName = r), i && (t.postId = `${u.b}${i}`), a && (t.commentId = `${u.a}${a}`), t
					})(L);
					K = e.postId, J = e.commentId
				} else B !== v.a.PostReply && B !== v.a.LifecyclePostSuggestions || (J = U);
				const Z = e => {
					if (K && J) {
						const e = Object(a.a)(K, J, Object(h.c)(L)),
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
						case v.a.HFNSubredditInterestingPost:
						case v.a.LifecyclePostSuggestions:
						case v.a.SubredditRecommendation: {
							const e = W;
							if (!(V || e || k && P)) return null;
							const t = e => {
									H ? F({
										position: f.d.SECOND,
										postId: K,
										subredditId: Q
									}) : (e.preventDefault(), T(Object(d.f)(N)))
								},
								n = y._("Check It Out", null, {
									hk: "3mzMCI"
								});
							return s.a.createElement(p.t, {
								onClick: t,
								isFullWidth: A,
								priority: p.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(_.a.notificationButton, {
									[_.a.isUnread]: w && !P,
									[_.a.isNightMode]: D,
									[_.a.inAppNotification]: P,
									[_.a.isFullWidth]: A && !P
								})
							}, !P && s.a.createElement(x.a, {
								name: "text_post",
								className: _.a.postIcon
							}), y._("{check out button}", [y._param("check out button", n)], {
								hk: "4DDMme"
							}))
						}
						case v.a.PostReply:
						case v.a.CommentReply:
						case v.a.PostFollow:
						case v.a.CommentFollow: {
							const e = M;
							return M || e || k && P ? s.a.createElement(p.t, {
								onClick: Z,
								kind: p.b.InternalLink,
								to: L,
								isFullWidth: A,
								priority: p.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(_.a.notificationButton, {
									[_.a.isUnread]: w && !P,
									[_.a.isNightMode]: D,
									[_.a.inAppNotification]: P,
									[_.a.isFullWidth]: A && !P
								})
							}, !P && s.a.createElement(x.a, {
								name: "reply",
								className: _.a.replyIcon
							}), y._("Reply Back", null, {
								hk: "3JWTvx"
							})) : null
						}
						case v.a.AwardReceived: {
							if (!X) return null;
							const e = e => {
								e.preventDefault(), X ? F({
									position: f.d.SECOND,
									awardId: z
								}) : T(Object(d.f)(N))
							};
							return s.a.createElement(l.b, {
								userId: X,
								contextId: X,
								onClick: e,
								isFullWidth: A,
								priority: p.c.Tertiary,
								redditStyle: !0,
								eventSource: l.a.awardNotification,
								className: Object(i.a)(_.a.notificationButton, {
									[_.a.isUnread]: w && !P,
									[_.a.isNightMode]: D,
									[_.a.inAppNotification]: P,
									[_.a.isFullWidth]: A && !P
								})
							}, !P && s.a.createElement(x.a, {
								name: "chat_new",
								className: _.a.replyIcon
							}), y._("Say thanks", null, {
								hk: "2FzJoo"
							}))
						}
						case v.a.UpvotePost:
						case v.a.UpvoteComment:
						case v.a.UsernameMention:
						case v.a.PrivateMessage:
						case v.a.UserNewFollower:
						case v.a.ChatMessage:
						case v.a.CakeDay:
						case v.a.ChatRequest:
						case v.a.ChatAcceptInvite:
						case v.a.HFNSubredditInterestingPost:
						case v.a.OneOff:
						case v.a.ModeratedSrViralCommentPost:
						case v.a.TalkLive: {
							if (!P) return null;
							const e = e => {
								switch (e) {
									case v.a.HFNSubredditInterestingPost:
									case v.a.OneOff:
									case v.a.UpvotePost:
									case v.a.ModeratedSrViralCommentPost:
										return y._("See Post", null, {
											hk: "mGXS5"
										});
									case v.a.UpvoteComment:
										return y._("See Comment", null, {
											hk: "3FUtJF"
										});
									case v.a.ChatRequest:
									case v.a.ChatAcceptInvite:
										return y._("Start Chat", null, {
											hk: "iQZfe"
										});
									case v.a.ChatMessage:
										return y._("Open Chat", null, {
											hk: "2jV0mi"
										});
									case v.a.CakeDay:
									case v.a.UserNewFollower:
										return y._("See Profile", null, {
											hk: "2Wj94t"
										});
									case v.a.TalkLive:
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
								isFullWidth: A,
								priority: p.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(_.a.notificationButton, {
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
								isFullWidth: A,
								priority: p.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(_.a.notificationButton, {
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
				r = n("./src/higherOrderComponents/asTooltip.tsx"),
				i = n("./src/reddit/constants/elementIds.ts"),
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
				const n = Object(r.a)(e, t);
				class o extends s.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(i.e);
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
				return i
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
				r = e => {
					const t = e.body;
					return {
						type: s(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				i = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: r(e)
					} : e
				};
			t.a = r
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = o.gb
		},
		"./src/reddit/selectors/experiments/commentSearchPdp.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./node_modules/reselect/es/index.js");
			const i = Object(r.a)(e => Object(s.c)(e, {
				experimentEligibilitySelector: s.a,
				experimentName: o.ub
			}), e => ({
				bucketed: e === o.Rc.ExpandedSearch || e === o.Rc.CollapsedSearch,
				collapsed: e === o.Rc.CollapsedSearch,
				expanded: e === o.Rc.ExpandedSearch
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.b40d70cdbb50f30d22d7.js.map