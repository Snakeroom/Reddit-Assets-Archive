// https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.8e07423768b2f9b77c6c.js
// Retrieved at 1/4/2023, 2:50:06 PM by Reddit Dataminer v1.0.0
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
					redditStyle: p,
					isFullWidth: m,
					eventSource: h,
					onClick: _,
					onAddUserToQuickReplyList: b,
					children: f,
					style: v
				} = e;
				return r.a.createElement(c.t, {
					onClick: e => {
						if (_ && _(e), t(), h === o.awardNotification) return b();
						i(Object(l.b)(a))
					},
					className: n,
					text: s,
					priority: d,
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
					onStartChat: () => {
						e(Object(a.b)(o, s))
					},
					onAddUserToQuickReplyList: () => {
						e(Object(a.a)(o))
					}
				}
			});
			t.b = p(Object(d.c)(u))
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
				return f
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
			const h = p.a.div("Text", u.a),
				_ = p.a.div("BottomText", u.a),
				b = e => n.a.createElement(h, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				f = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return n.a.createElement(_, {
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
						return Object(c.b)(s)(e)
					}
				}),
				x = Object(d.a)(f, [a.a.Click, a.a.Keydown]),
				y = Object(d.a)(b, [a.a.Click, a.a.Keydown]),
				O = Object(r.b)(v);
			t.c = O(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? n.a.createElement(x, m({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : n.a.createElement(y, m({}, e, {
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
			const p = /^\/(r|user)\/(\w+)\/(?:(?:comments\/)(\w+)\/(?:(?:\w+\/)(\w+)\/?)?)?/;
			var m = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/helpers/graphql/helpers.ts"),
				_ = s("./src/reddit/helpers/trackers/inbox.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				f = s("./src/reddit/models/NotificationInbox/index.ts"),
				v = s("./src/reddit/models/Toast/index.ts"),
				x = s("./src/reddit/selectors/experiments/inAppNotification.ts"),
				y = s("./src/reddit/components/NotificationUnit/index.m.less"),
				O = s.n(y);
			const {
				fbt: I
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = {
				kind: v.b.Error,
				text: I._("Sorry, this content is no longer available.", null, {
					hk: "3q5siu"
				}),
				duration: c.a
			};
			t.default = e => {
				var t, s, o, v, y, N, R, S, j, k;
				const T = Object(r.d)(),
					w = Object(r.e)(x.d),
					{
						context: g,
						deeplinkUrl: E,
						isFullWidth: A,
						isUnread: L,
						isInAppNotification: D,
						isNightMode: P,
						notificationId: U,
						onEvent: F
					} = e,
					B = null == g ? void 0 : g.messageType,
					M = B === f.a.CommentReply,
					W = B === f.a.SubredditRecommendation,
					V = B === f.a.LifecyclePostSuggestions,
					H = null === (t = null == g ? void 0 : g.post) || void 0 === t ? void 0 : t.permalink;
				let J = null === (s = null == g ? void 0 : g.comment) || void 0 === s ? void 0 : s.id,
					K = (null === (o = null == g ? void 0 : g.post) || void 0 === o ? void 0 : o.id) || (null === (y = null === (v = null == g ? void 0 : g.comment) || void 0 === v ? void 0 : v.postInfo) || void 0 === y ? void 0 : y.id);
				const z = null === (N = null == g ? void 0 : g.subreddit) || void 0 === N ? void 0 : N.id,
					Q = null === (S = null === (R = null == g ? void 0 : g.awarding) || void 0 === R ? void 0 : R.award) || void 0 === S ? void 0 : S.id,
					q = null === (k = null === (j = null == g ? void 0 : g.awarding) || void 0 === j ? void 0 : j.awarder) || void 0 === k ? void 0 : k.id;
				if (B === f.a.CommentFollow || B === f.a.PostFollow) {
					const e = (e => {
						const t = {},
							{
								pathname: s
							} = new URL(e);
						if (!s) return t;
						const o = s.match(p);
						if (!o) return t;
						const [n, r, i, a] = o.slice(1);
						return r && "r" === n && (t.subredditName = r), i && (t.postId = `${u.b}${i}`), a && (t.commentId = `${u.a}${a}`), t
					})(E);
					K = e.postId, J = e.commentId
				} else B !== f.a.PostReply && B !== f.a.LifecyclePostSuggestions || (J = U);
				const G = e => {
					if (K && J) {
						const e = Object(a.a)(K, J, Object(h.c)(E)),
							t = {
								parentCommentId: J,
								commentsPageKey: e
							};
						T(Object(d.h)(t)), F({
							position: _.d.SECOND
						})
					} else e.preventDefault(), T(Object(c.f)(C))
				};
				return (() => {
					switch (B) {
						case f.a.HFNSubredditInterestingPost:
						case f.a.LifecyclePostSuggestions:
						case f.a.SubredditRecommendation: {
							const e = V;
							if (!(W || e || w && D)) return null;
							const t = e => {
									H ? F({
										position: _.d.SECOND,
										postId: K,
										subredditId: z
									}) : (e.preventDefault(), T(Object(c.f)(C)))
								},
								s = I._("Check It Out", null, {
									hk: "3mzMCI"
								});
							return n.a.createElement(m.t, {
								onClick: t,
								isFullWidth: A,
								priority: m.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(O.a.notificationButton, {
									[O.a.isUnread]: L && !D,
									[O.a.isNightMode]: P,
									[O.a.inAppNotification]: D,
									[O.a.isFullWidth]: A && !D
								})
							}, !D && n.a.createElement(b.a, {
								name: "text_post",
								className: O.a.postIcon
							}), I._("{check out button}", [I._param("check out button", s)], {
								hk: "4DDMme"
							}))
						}
						case f.a.PostReply:
						case f.a.CommentReply:
						case f.a.PostFollow:
						case f.a.CommentFollow: {
							const e = M;
							return M || e || w && D ? n.a.createElement(m.t, {
								onClick: G,
								kind: m.b.InternalLink,
								to: E,
								isFullWidth: A,
								priority: m.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(O.a.notificationButton, {
									[O.a.isUnread]: L && !D,
									[O.a.isNightMode]: P,
									[O.a.inAppNotification]: D,
									[O.a.isFullWidth]: A && !D
								})
							}, !D && n.a.createElement(b.a, {
								name: "reply",
								className: O.a.replyIcon
							}), I._("Reply Back", null, {
								hk: "3JWTvx"
							})) : null
						}
						case f.a.AwardReceived: {
							if (!q) return null;
							const e = e => {
								e.preventDefault(), q ? F({
									position: _.d.SECOND,
									awardId: Q
								}) : T(Object(c.f)(C))
							};
							return n.a.createElement(l.b, {
								userId: q,
								contextId: q,
								onClick: e,
								isFullWidth: A,
								priority: m.c.Tertiary,
								redditStyle: !0,
								eventSource: l.a.awardNotification,
								className: Object(i.a)(O.a.notificationButton, {
									[O.a.isUnread]: L && !D,
									[O.a.isNightMode]: P,
									[O.a.inAppNotification]: D,
									[O.a.isFullWidth]: A && !D
								})
							}, !D && n.a.createElement(b.a, {
								name: "chat_new",
								className: O.a.replyIcon
							}), I._("Say thanks", null, {
								hk: "2FzJoo"
							}))
						}
						case f.a.UpvotePost:
						case f.a.UpvoteComment:
						case f.a.UsernameMention:
						case f.a.PrivateMessage:
						case f.a.UserNewFollower:
						case f.a.ChatMessage:
						case f.a.CakeDay:
						case f.a.ChatRequest:
						case f.a.ChatAcceptInvite:
						case f.a.HFNSubredditInterestingPost:
						case f.a.OneOff:
						case f.a.ModeratedSrViralCommentPost:
						case f.a.TalkLive: {
							if (!D) return null;
							const e = e => {
								switch (e) {
									case f.a.HFNSubredditInterestingPost:
									case f.a.OneOff:
									case f.a.UpvotePost:
									case f.a.ModeratedSrViralCommentPost:
										return I._("See Post", null, {
											hk: "mGXS5"
										});
									case f.a.UpvoteComment:
										return I._("See Comment", null, {
											hk: "3FUtJF"
										});
									case f.a.ChatRequest:
									case f.a.ChatAcceptInvite:
										return I._("Start Chat", null, {
											hk: "iQZfe"
										});
									case f.a.ChatMessage:
										return I._("Open Chat", null, {
											hk: "2jV0mi"
										});
									case f.a.CakeDay:
									case f.a.UserNewFollower:
										return I._("See Profile", null, {
											hk: "2Wj94t"
										});
									case f.a.TalkLive:
										return I._("Join", null, {
											hk: "1PvPkd"
										});
									default:
										return I._("Reply", null, {
											hk: "zBpwB"
										})
								}
							};
							return n.a.createElement(m.t, {
								onClick: () => F({
									position: _.d.SECOND
								}),
								isFullWidth: A,
								priority: m.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(O.a.notificationButton, {
									[O.a.isNightMode]: P,
									[O.a.inAppNotification]: !0
								})
							}, e(B))
						}
						default:
							return w && D ? n.a.createElement(m.t, {
								onClick: () => F({
									position: _.d.SECOND
								}),
								isFullWidth: A,
								priority: m.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(O.a.notificationButton, {
									[O.a.isNightMode]: P,
									[O.a.inAppNotification]: !0
								})
							}, I._("See more", null, {
								hk: "3QLc3"
							})) : null
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
				l = e => e.author !== o.H ? null : e.body === o.I ? d.c.User : e.body === o.Qb ? d.c.Moderator : null
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
				experimentName: o.qb
			}), e => ({
				bucketed: e === o.Wc.ExpandedSearch || e === o.Wc.CollapsedSearch,
				collapsed: e === o.Wc.CollapsedSearch,
				expanded: e === o.Wc.ExpandedSearch
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.8e07423768b2f9b77c6c.js.map