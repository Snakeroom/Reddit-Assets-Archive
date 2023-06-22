// https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.4935af6ab7444831d58b.js
// Retrieved at 6/22/2023, 6:10:04 PM by Reddit Dataminer v1.0.0
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
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var o, n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/actions/chat/toggle.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
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
					priority: d,
					Icon: u,
					redditStyle: m,
					isFullWidth: p,
					eventSource: _,
					onClick: h,
					onAddUserToQuickReplyList: b,
					children: v,
					style: x,
					pageType: f,
					userId: y
				} = e;
				return r.a.createElement(c.t, {
					onClick: e => {
						if (h && h(e), t(f), _ === o.awardNotification) return b();
						i(Object(l.b)(a))
					},
					className: n,
					text: s,
					priority: d,
					Icon: u,
					redditStyle: m,
					isFullWidth: p,
					style: x
				}, v)
			};
			u.displayName = "ChatButton";
			const m = Object(i.b)(null, (e, t) => {
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
			t.b = m(Object(d.c)(u))
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
				return b
			})), s.d(t, "a", (function() {
				return v
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = s("./src/reddit/selectors/tooltip.ts"),
				l = s("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = s.n(l),
				m = s("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = m.a.div("Text", u.a),
				h = m.a.div("BottomText", u.a),
				b = e => n.a.createElement(_, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				v = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return n.a.createElement(h, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				x = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(c.b)(s)(e)
					}
				}),
				f = Object(d.a)(v, [a.a.Click, a.a.Keydown]),
				y = Object(d.a)(b, [a.a.Click, a.a.Keydown]),
				I = Object(r.b)(x);
			t.c = I(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? n.a.createElement(f, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : n.a.createElement(y, p({}, e, {
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
				d = s("./src/reddit/actions/comment/authoring.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/components/ChatButton/index.tsx"),
				u = s("./src/reddit/constants/things.ts");
			const m = /^\/(r|user)\/(\w+)\/(?:(?:comments\/)(\w+)\/(?:(?:\w+\/)(\w+)\/?)?)?/;
			var p = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/helpers/graphql/helpers.ts"),
				h = s("./src/reddit/helpers/trackers/inbox.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				v = s("./src/reddit/models/NotificationInbox/index.ts"),
				x = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/components/NotificationUnit/index.m.less"),
				y = s.n(f);
			const {
				fbt: I
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = {
				kind: x.b.Error,
				text: I._("Sorry, this content is no longer available.", null, {
					hk: "3q5siu"
				}),
				duration: c.a
			};
			t.default = e => {
				var t, s, o, x, f, R, g, C, T, j;
				const w = Object(r.d)(),
					{
						context: E,
						deeplinkUrl: N,
						isFullWidth: S,
						isUnread: A,
						isNightMode: k,
						notificationId: D,
						onEvent: U
					} = e,
					P = null == E ? void 0 : E.messageType,
					F = P === v.a.CommentReply,
					B = P === v.a.SubredditRecommendation,
					L = P === v.a.LifecyclePostSuggestions,
					K = null === (t = null == E ? void 0 : E.post) || void 0 === t ? void 0 : t.permalink;
				let M = null === (s = null == E ? void 0 : E.comment) || void 0 === s ? void 0 : s.id,
					V = (null === (o = null == E ? void 0 : E.post) || void 0 === o ? void 0 : o.id) || (null === (f = null === (x = null == E ? void 0 : E.comment) || void 0 === x ? void 0 : x.postInfo) || void 0 === f ? void 0 : f.id);
				const H = null === (R = null == E ? void 0 : E.subreddit) || void 0 === R ? void 0 : R.id,
					W = null === (C = null === (g = null == E ? void 0 : E.awarding) || void 0 === g ? void 0 : g.award) || void 0 === C ? void 0 : C.id,
					J = null === (j = null === (T = null == E ? void 0 : E.awarding) || void 0 === T ? void 0 : T.awarder) || void 0 === j ? void 0 : j.id;
				if (P === v.a.CommentFollow || P === v.a.PostFollow) {
					const e = (e => {
						const t = {},
							{
								pathname: s
							} = new URL(e);
						if (!s) return t;
						const o = s.match(m);
						if (!o) return t;
						const [n, r, i, a] = o.slice(1);
						return r && "r" === n && (t.subredditName = r), i && (t.postId = `${u.b}${i}`), a && (t.commentId = `${u.a}${a}`), t
					})(N);
					V = e.postId, M = e.commentId
				} else P !== v.a.PostReply && P !== v.a.LifecyclePostSuggestions || (M = D);
				const z = e => {
					if (V && M) {
						const e = Object(a.a)(V, M, Object(_.c)(N)),
							t = {
								parentCommentId: M,
								commentsPageKey: e
							};
						w(Object(d.h)(t)), U({
							position: h.d.SECOND
						})
					} else e.preventDefault(), w(Object(c.f)(O))
				};
				return (() => {
					switch (P) {
						case v.a.HFNSubredditInterestingPost:
						case v.a.LifecyclePostSuggestions:
						case v.a.SubredditRecommendation: {
							const e = L;
							if (!B && !e) return null;
							const t = e => {
									K ? U({
										position: h.d.SECOND,
										postId: V,
										subredditId: H
									}) : (e.preventDefault(), w(Object(c.f)(O)))
								},
								s = I._("Check It Out", null, {
									hk: "3mzMCI"
								});
							return n.a.createElement(p.t, {
								onClick: t,
								isFullWidth: S,
								priority: p.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(y.a.notificationButton, {
									[y.a.isUnread]: A,
									[y.a.isNightMode]: k,
									[y.a.isFullWidth]: S
								})
							}, n.a.createElement(b.a, {
								name: "text_post",
								className: y.a.postIcon
							}), I._("{check out button}", [I._param("check out button", s)], {
								hk: "4DDMme"
							}))
						}
						case v.a.PostReply:
						case v.a.CommentReply:
						case v.a.PostFollow:
						case v.a.CommentFollow: {
							const e = F;
							return F || e ? n.a.createElement(p.t, {
								onClick: z,
								kind: p.b.InternalLink,
								to: N,
								isFullWidth: S,
								priority: p.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(y.a.notificationButton, {
									[y.a.isUnread]: A,
									[y.a.isNightMode]: k,
									[y.a.isFullWidth]: S
								})
							}, n.a.createElement(b.a, {
								name: "reply",
								className: y.a.replyIcon
							}), I._("Reply Back", null, {
								hk: "3JWTvx"
							})) : null
						}
						case v.a.AwardReceived: {
							if (!J) return null;
							const e = e => {
								e.preventDefault(), J ? U({
									position: h.d.SECOND,
									awardId: W
								}) : w(Object(c.f)(O))
							};
							return n.a.createElement(l.b, {
								userId: J,
								contextId: J,
								onClick: e,
								isFullWidth: S,
								priority: p.c.Tertiary,
								redditStyle: !0,
								eventSource: l.a.awardNotification,
								className: Object(i.a)(y.a.notificationButton, {
									[y.a.isUnread]: A,
									[y.a.isNightMode]: k,
									[y.a.isFullWidth]: S
								}),
								pageType: "notification"
							}, n.a.createElement(b.a, {
								name: "chat_new",
								className: y.a.replyIcon
							}), I._("Say thanks", null, {
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
				return c
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/higherOrderComponents/asTooltip.tsx"),
				i = s("./src/reddit/constants/elementIds.ts"),
				a = s("./src/reddit/contexts/InsideOverlay.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e, t) {
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
						return n.a.createElement(s, d({}, this.props, {
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
				return c
			}));
			var o = s("./src/lib/constants/index.ts"),
				n = s("./src/reddit/helpers/isComment.ts"),
				r = s("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
				a = e => !0 === e ? i.a.upvoted : !1 === e ? i.a.downvoted : i.a.notVoted,
				d = s("./src/reddit/models/Comment/index.ts");
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
					isDeleted: e.author === o.G,
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
						richtextContent: c(e.rtjson),
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
			const c = e => "string" == typeof e ? JSON.parse(e) : e,
				l = e => e.author !== o.G ? null : e.body === o.H ? d.c.User : e.body === o.Rb ? d.c.Moderator : null
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
							case o.K.NO_STRIPE_SUBSCRIPTION:
							case o.K.USER_DOESNT_EXIST:
							case o.K.USER_REQUIRED_ERROR:
							case o.K.VALIDATION_ERROR:
								return e;
							case o.K.NO_USER:
							case o.K.NO_TEXT:
							case o.K.NO_URL:
								return o.K.VALIDATION_ERROR;
							case o.K.CREDIT_CARD_FAILURE:
							case o.K.CREDIT_CARD_FAILURE_GENERIC:
								return o.K.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return o.K.SUBMIT_VALIDATION_ERROR
						}
					}
					return o.K.VALIDATION_ERROR
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
				experimentName: o.Ab
			}), e => ({
				bucketed: e === o.gd.ExpandedSearch || e === o.gd.CollapsedSearch,
				collapsed: e === o.gd.CollapsedSearch,
				expanded: e === o.gd.ExpandedSearch
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.4935af6ab7444831d58b.js.map