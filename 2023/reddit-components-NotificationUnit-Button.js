// https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.2213d5bbc5a89f6a3d6e.js
// Retrieved at 3/6/2023, 9:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-NotificationUnit-Button"], {
		"./node_modules/lodash/map.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_arrayMap.js"),
				n = s("./node_modules/lodash/_baseIteratee.js"),
				r = s("./node_modules/lodash/_baseMap.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (i(e) ? o : r)(e, n(t, 3))
			}
		},
		"./src/chat/actions/notifications.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return f
			})), s.d(t, "a", (function() {
				return v
			}));
			var o = s("./node_modules/lodash/noop.js"),
				n = s.n(o),
				r = s("./src/lib/notifications/token.ts"),
				i = s("./src/lib/notifications/index.ts"),
				a = s("./src/lib/notifications/constants.ts"),
				c = s("./src/chat/selectors/app.ts"),
				d = s("./src/chat/tracking/fields/common.ts"),
				l = s("./src/reddit/helpers/trackers/chat.ts"),
				u = s("./src/reddit/selectors/telemetry.ts"),
				p = s("./src/telemetry/index.ts"),
				m = s("./src/telemetry/models/Event.ts");
			const b = e => ({
					...Object(u.o)(e),
					geo: Object(u.t)(e)
				}),
				h = e => ({
					...Object(d.a)(e),
					noun: "desktop_notification_permissions"
				}),
				_ = (e, t, s) => ({
					...Object(d.a)(e),
					actionInfo: {
						success: t,
						reason: s
					},
					noun: "push_token"
				}),
				f = (e, t) => async (s, o, d) => {
					if (Object(c.g)(o())) return;
					(e => {
						Object(p.a)({
							..._(e, !0),
							action: m.c.Request,
							source: m.b.Notification
						})
					})(o()), Object(i.b)(e, t, () => {
						s(Object(a.s)()), s(Object(a.q)()), (e => {
							Object(p.a)({
								...h(e),
								action: m.c.View,
								source: m.b.Popup
							})
						})(o())
					}, (e, t) => {
						s(Object(a.o)()), e && (t ? (e => {
							Object(p.a)({
								...h(e),
								action: m.c.Block,
								source: m.b.Popup
							})
						})(o()) : (e => {
							Object(p.a)({
								...h(e),
								action: m.c.Close,
								source: m.b.Popup
							})
						})(o()))
					}, () => {
						s(Object(a.p)()), Object(r.b)(d.gqlContext), (e => {
							Object(p.a)({
								...h(e),
								action: m.c.Allow,
								source: m.b.Popup
							})
						})(o())
					}, n.a, n.a)
				}, v = e => async (t, s) => {
					((e, t) => Object(p.a)(Object(l.a)({
						source: m.b.InboxNotification,
						action: m.a.Click,
						noun: "create_chat",
						...b(e),
						chat: {
							recipient_user_id: t
						}
					})))(s(), e)
				}
		},
		"./src/lib/notifications/token.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			}));
			var o = s("./src/config.ts"),
				n = s("./src/redditGQL/operations/RegisterWebPushToken.json"),
				r = s("./src/lib/makeGqlRequest/index.ts"),
				i = s("./src/lib/serviceWorker/index.ts"),
				a = s("./src/lib/timezone/index.ts"),
				c = e => {
					const t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
						s = window.atob(t),
						o = new Uint8Array(s.length);
					for (let n = 0; n < s.length; ++n) o[n] = s.charCodeAt(n);
					return o
				};
			var d;
			! function(e) {
				e[e.Success = 0] = "Success", e[e.FailedGeneric = 1] = "FailedGeneric", e[e.FailedResponse = 2] = "FailedResponse", e[e.FailedGqlReponse = 3] = "FailedGqlReponse", e[e.FailedNoServiceWorker = 4] = "FailedNoServiceWorker", e[e.FailedNoSubscription = 5] = "FailedNoSubscription"
			}(d || (d = {}));
			const l = async e => {
				try {
					const t = await Object(i.a)();
					if (!t) return d.FailedNoServiceWorker;
					let s = await t.pushManager.getSubscription();
					if (!s) {
						const e = {
							userVisibleOnly: !0,
							applicationServerKey: c(o.a.pushNotificationApplicationServerKey)
						};
						s = await t.pushManager.subscribe(e)
					}
					if (!s) return d.FailedNoSubscription;
					const l = await ((e, t) => {
						const s = {
							pushToken: JSON.stringify(t),
							timezoneName: Object(a.b)() || a.a,
							timestamp: (new Date).toISOString(),
							language: "en_us"
						};
						return Object(r.a)(e(), {
							...n,
							variables: s
						})
					})(e, s);
					if (l && !l.ok) return d.FailedResponse;
					const u = null == l ? void 0 : l.body.data.registerWebPushToken;
					return u && !u.ok ? d.FailedGqlReponse : d.Success
				} catch (t) {
					return console.error(t), d.FailedGeneric
				}
			}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var o, n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/actions/chat/toggle.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(o || (o = {}));
			const u = e => {
				let {
					onStartChat: t,
					text: s,
					className: n,
					sendEvent: i,
					contextId: a,
					priority: c,
					Icon: u,
					redditStyle: p,
					isFullWidth: m,
					eventSource: b,
					onClick: h,
					onAddUserToQuickReplyList: _,
					children: f,
					style: v,
					pageType: O,
					userId: x
				} = e;
				return r.a.createElement(d.t, {
					onClick: e => {
						if (h && h(e), t(O), b === o.awardNotification) return _();
						i(Object(l.b)(a)), i(Object(l.c)(x, a))
					},
					className: n,
					text: s,
					priority: c,
					Icon: u,
					redditStyle: p,
					isFullWidth: m,
					style: v
				}, f)
			};
			u.displayName = "ChatButton";
			const p = Object(i.b)(null, (e, t) => {
				let {
					contextId: s,
					userId: o
				} = t;
				return {
					onStartChat: t => {
						e(Object(a.b)(o, s, t))
					},
					onAddUserToQuickReplyList: () => {
						e(Object(a.a)(o))
					}
				}
			});
			t.b = p(Object(c.c)(u))
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return _
			})), s.d(t, "a", (function() {
				return f
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = s("./src/reddit/selectors/tooltip.ts"),
				l = s("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = s.n(l),
				p = s("./src/lib/lessComponent.tsx");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const b = p.a.div("Text", u.a),
				h = p.a.div("BottomText", u.a),
				_ = e => n.a.createElement(b, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				f = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return n.a.createElement(h, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				v = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(d.b)(s)(e)
					}
				}),
				O = Object(c.a)(f, [a.a.Click, a.a.Keydown]),
				x = Object(c.a)(_, [a.a.Click, a.a.Keydown]),
				y = Object(r.b)(v);
			t.c = y(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? n.a.createElement(O, m({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : n.a.createElement(x, m({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/NotificationUnit/Button.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/makeCommentsPageKey/index.ts"),
				c = s("./src/chat/actions/notifications.ts"),
				d = s("./src/reddit/actions/comment/authoring.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/reddit/components/ChatButton/index.tsx"),
				p = s("./src/reddit/constants/things.ts");
			const m = /^\/(r|user)\/(\w+)\/(?:(?:comments\/)(\w+)\/(?:(?:\w+\/)(\w+)\/?)?)?/;
			var b = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/helpers/graphql/helpers.ts"),
				_ = s("./src/reddit/helpers/trackers/inbox.ts"),
				f = s("./src/reddit/icons/fonts/index.tsx"),
				v = s("./src/reddit/models/NotificationInbox/index.ts"),
				O = s("./src/reddit/models/Toast/index.ts"),
				x = s("./src/reddit/components/NotificationUnit/index.m.less"),
				y = s.n(x);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), I = {
				kind: O.b.Error,
				text: j._("Sorry, this content is no longer available.", null, {
					hk: "3q5siu"
				}),
				duration: l.a
			};
			t.default = e => {
				var t, s, o, O, x, R, g, S, k, w;
				const N = Object(r.d)(),
					{
						context: C,
						deeplinkUrl: T,
						isFullWidth: E,
						isUnread: A,
						isNightMode: F,
						notificationId: L,
						onEvent: P
					} = e,
					D = null == C ? void 0 : C.messageType,
					U = D === v.a.CommentReply,
					B = D === v.a.SubredditRecommendation,
					M = D === v.a.LifecyclePostSuggestions,
					W = null === (t = null == C ? void 0 : C.post) || void 0 === t ? void 0 : t.permalink;
				let V = null === (s = null == C ? void 0 : C.comment) || void 0 === s ? void 0 : s.id,
					G = (null === (o = null == C ? void 0 : C.post) || void 0 === o ? void 0 : o.id) || (null === (x = null === (O = null == C ? void 0 : C.comment) || void 0 === O ? void 0 : O.postInfo) || void 0 === x ? void 0 : x.id);
				const H = null === (R = null == C ? void 0 : C.subreddit) || void 0 === R ? void 0 : R.id,
					K = null === (S = null === (g = null == C ? void 0 : C.awarding) || void 0 === g ? void 0 : g.award) || void 0 === S ? void 0 : S.id,
					q = null === (w = null === (k = null == C ? void 0 : C.awarding) || void 0 === k ? void 0 : k.awarder) || void 0 === w ? void 0 : w.id;
				if (D === v.a.CommentFollow || D === v.a.PostFollow) {
					const e = (e => {
						const t = {},
							{
								pathname: s
							} = new URL(e);
						if (!s) return t;
						const o = s.match(m);
						if (!o) return t;
						const [n, r, i, a] = o.slice(1);
						return r && "r" === n && (t.subredditName = r), i && (t.postId = `${p.b}${i}`), a && (t.commentId = `${p.a}${a}`), t
					})(T);
					G = e.postId, V = e.commentId
				} else D !== v.a.PostReply && D !== v.a.LifecyclePostSuggestions || (V = L);
				const J = e => {
					if (G && V) {
						const e = Object(a.a)(G, V, Object(h.c)(T)),
							t = {
								parentCommentId: V,
								commentsPageKey: e
							};
						N(Object(d.h)(t)), P({
							position: _.d.SECOND
						})
					} else e.preventDefault(), N(Object(l.f)(I))
				};
				return (() => {
					switch (D) {
						case v.a.HFNSubredditInterestingPost:
						case v.a.LifecyclePostSuggestions:
						case v.a.SubredditRecommendation: {
							const e = M;
							if (!B && !e) return null;
							const t = e => {
									W ? P({
										position: _.d.SECOND,
										postId: G,
										subredditId: H
									}) : (e.preventDefault(), N(Object(l.f)(I)))
								},
								s = j._("Check It Out", null, {
									hk: "3mzMCI"
								});
							return n.a.createElement(b.t, {
								onClick: t,
								isFullWidth: E,
								priority: b.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(y.a.notificationButton, {
									[y.a.isUnread]: A,
									[y.a.isNightMode]: F,
									[y.a.isFullWidth]: E
								})
							}, n.a.createElement(f.a, {
								name: "text_post",
								className: y.a.postIcon
							}), j._("{check out button}", [j._param("check out button", s)], {
								hk: "4DDMme"
							}))
						}
						case v.a.PostReply:
						case v.a.CommentReply:
						case v.a.PostFollow:
						case v.a.CommentFollow: {
							const e = U;
							return U || e ? n.a.createElement(b.t, {
								onClick: J,
								kind: b.b.InternalLink,
								to: T,
								isFullWidth: E,
								priority: b.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(y.a.notificationButton, {
									[y.a.isUnread]: A,
									[y.a.isNightMode]: F,
									[y.a.isFullWidth]: E
								})
							}, n.a.createElement(f.a, {
								name: "reply",
								className: y.a.replyIcon
							}), j._("Reply Back", null, {
								hk: "3JWTvx"
							})) : null
						}
						case v.a.AwardReceived: {
							if (!q) return null;
							const e = e => {
								e.preventDefault(), q ? P({
									position: _.d.SECOND,
									awardId: K
								}) : N(Object(l.f)(I)), N(Object(c.a)(q))
							};
							return n.a.createElement(u.b, {
								userId: q,
								contextId: q,
								onClick: e,
								isFullWidth: E,
								priority: b.c.Tertiary,
								redditStyle: !0,
								eventSource: u.a.awardNotification,
								className: Object(i.a)(y.a.notificationButton, {
									[y.a.isUnread]: A,
									[y.a.isNightMode]: F,
									[y.a.isFullWidth]: E
								}),
								pageType: "notification"
							}, n.a.createElement(f.a, {
								name: "chat_new",
								className: y.a.replyIcon
							}), j._("Say thanks", null, {
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
						default:
							return null
					}
				})()
			}
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/higherOrderComponents/asTooltip.tsx"),
				i = s("./src/reddit/constants/elementIds.ts"),
				a = s("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const s = Object(r.a)(e, t);
				class o extends n.a.PureComponent {
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
						return n.a.createElement(s, c({}, this.props, {
							container: this.state.container || this.props.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(o)
			}
		},
		"./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			}));
			var o = s("./src/lib/constants/index.ts"),
				n = s("./src/reddit/helpers/isComment.ts"),
				r = s("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
				a = e => !0 === e ? i.a.upvoted : !1 === e ? i.a.downvoted : i.a.notVoted,
				c = s("./src/reddit/models/Comment/index.ts");
			t.a = e => {
				const t = {
					approvedAtUTC: e.approved_at_utc,
					approvedBy: e.approved_by,
					author: e.author,
					authorId: e.author_fullname,
					bannedAtUTC: e.banned_at_utc,
					bannedBy: e.banned_by,
					body: e.body_html,
					bodyMD: e.body,
					collapsed: e.collapsed,
					collapsedReason: e.collapsed_reason,
					collapsedReasonCode: e.collapsed_reason_code,
					collapsedBecauseCrowdControl: e.collapsed_because_crowd_control,
					commentType: e.comment_type,
					created: e.created_utc,
					deletedBy: l(e),
					distinguishType: e.distinguished || "",
					editedAt: null,
					id: e.name,
					ignoreReports: e.ignore_reports,
					isAdmin: "admin" === e.distinguished,
					isAuthorPremium: !!e.author_premium,
					isApproved: e.approved,
					isDeleted: e.author === o.H,
					isGildable: e.can_gild,
					isLocked: e.locked,
					isMod: "moderator" === e.distinguished,
					isOp: e.is_submitter,
					isRemoved: e.removed,
					isScoreHidden: e.score_hidden,
					isSpam: e.spam,
					isStickied: e.stickied,
					isSaved: e.isSaved,
					isSystem: !1,
					subredditId: e.subreddit_id,
					markdown: e.body,
					media: {
						mediaMetadata: e.media_metadata,
						type: "rtjson",
						richtextContent: d(e.rtjson),
						rteMode: e.rte_mode
					},
					modReports: e.mod_reports,
					modReportsDismissed: e.mod_reports_dismissed,
					numReports: e.num_reports,
					parentId: Object(n.a)(e.parent_id) ? e.parent_id : null,
					permalink: e.permalink,
					postAuthor: e.link_author || null,
					postId: e.link_id,
					postTitle: e.link_title || null,
					sendReplies: e.send_replies,
					score: e.score,
					treatmentTags: e.treatment_tags,
					userReports: e.user_reports,
					userReportsDismissed: e.user_reports_dismissed,
					voteState: a(e.likes)
				};
				return e.all_awardings && (t.allAwardings = Object(r.a)(e.all_awardings)), e.awarders && (t.awarders = e.awarders), e.associated_award && (t.associatedAwardId = e.associated_award.id, t.associatedAward = Object(r.b)(e.associated_award)), t
			};
			const d = e => "string" == typeof e ? JSON.parse(e) : e,
				l = e => e.author !== o.H ? null : e.body === o.I ? c.c.User : e.body === o.Rb ? c.c.Moderator : null
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			}));
			var o = s("./src/lib/constants/index.ts");
			const n = e => {
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
						type: n(t.json.errors),
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
		"./src/reddit/selectors/experiments/commentSearchPdp.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./node_modules/reselect/es/index.js");
			const i = Object(r.a)(e => Object(n.c)(e, {
				experimentEligibilitySelector: n.a,
				experimentName: o.rb
			}), e => ({
				bucketed: e === o.Xc.ExpandedSearch || e === o.Xc.CollapsedSearch,
				collapsed: e === o.Xc.CollapsedSearch,
				expanded: e === o.Xc.ExpandedSearch
			}))
		},
		"./src/redditGQL/operations/RegisterWebPushToken.json": function(e) {
			e.exports = JSON.parse('{"id":"197650c1946c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.2213d5bbc5a89f6a3d6e.js.map