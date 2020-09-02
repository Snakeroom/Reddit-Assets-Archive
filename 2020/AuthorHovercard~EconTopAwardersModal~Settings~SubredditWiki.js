// https://www.redditstatic.com/desktop2x/AuthorHovercard~EconTopAwardersModal~Settings~SubredditWiki.8cf6691c1bbeb8c8d1fc.js
// Retrieved at 9/2/2020, 6:30:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard~EconTopAwardersModal~Settings~SubredditWiki"], {
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/actions/chat/toggle.ts"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				i = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			const l = e => {
				let {
					onStartChat: t,
					children: r,
					className: n,
					sendEvent: a,
					contextId: o
				} = e;
				return s.a.createElement(i.f, {
					onClick: () => {
						t(), a(Object(d.b)(o))
					},
					className: n
				}, r)
			};
			l.displayName = "ChatButton";
			const u = Object(a.b)(null, (e, t) => {
				let {
					contextId: r,
					userId: n
				} = t;
				return {
					onStartChat: () => {
						e(Object(o.a)(n, r))
					}
				}
			});
			t.a = u(Object(c.c)(l))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/actions/tooltip.ts"),
				i = r("./src/reddit/models/User/index.ts"),
				d = r("./src/reddit/selectors/experiments/econAwardKarma.ts"),
				l = r("./src/reddit/selectors/gold/awardIcon.ts"),
				u = r("./src/reddit/selectors/gov.ts"),
				m = r("./src/reddit/selectors/meta.ts"),
				b = r("./src/reddit/selectors/moderatorPermissions.ts"),
				p = r("./src/reddit/selectors/tooltip.ts"),
				v = r("./src/reddit/selectors/user.ts"),
				h = r("./src/reddit/selectors/userFlair.ts"),
				f = r("./src/reddit/selectors/profile.ts"),
				I = r("./node_modules/fbt/lib/FbtPublic.js"),
				C = r("./src/config.ts"),
				x = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				E = r("./src/lib/lessComponent.tsx"),
				w = r("./src/lib/prettyPrintNumber/index.ts"),
				g = r("./src/lib/timeAgo/index.ts"),
				_ = r("./src/reddit/components/ChatButton/index.tsx"),
				L = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				j = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				N = r("./src/reddit/components/SubscribeButton/index.tsx"),
				O = r("./src/reddit/components/UserIcon/index.tsx"),
				y = r("./src/reddit/helpers/trackers/authorHovercard.ts"),
				H = r("./src/reddit/icons/fonts/Info/index.tsx"),
				k = r("./src/reddit/icons/svgs/Admin/index.tsx"),
				M = r("./src/reddit/icons/svgs/Karma/index.tsx"),
				U = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				A = r("./src/reddit/models/Gold/Award.ts"),
				T = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				S = r("./src/reddit/actions/inContextModeration.ts"),
				B = r("./src/reddit/actions/modal.ts"),
				K = r("./src/reddit/actions/subredditModeration.ts"),
				P = r("./src/reddit/constants/modals.ts"),
				F = r("./src/reddit/components/Hovercards/helpers.ts"),
				D = r("./src/reddit/icons/svgs/Ban/index.tsx"),
				Z = r("./src/reddit/icons/svgs/Mute/index.tsx"),
				R = r("./src/reddit/icons/svgs/Unban/index.tsx"),
				J = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Y = r("./src/reddit/selectors/subredditModeration.ts"),
				V = r("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				q = r.n(V);
			const {
				fbt: z
			} = r("./node_modules/fbt/lib/FbtPublic.js"), Q = E.a.wrapped(D.a, "BanIcon", q.a), W = E.a.wrapped(Z.a, "MuteIcon", q.a), G = E.a.wrapped(R.a, "UnbanIcon", q.a), X = Object(o.c)({
				hasModMailPermissions: Object(b.a)(J.c.mail),
				isUserBanned: (e, t) => !!Object(Y.g)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(v.eb)(e, {
					userName: t.username
				})
			});
			class $ extends s.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: r,
						isUserBanned: n,
						onUnbanUser: a,
						sendEvent: o,
						toggleBanModal: c,
						toggleMuteModal: i
					} = this.props;
					return s.a.createElement("div", {
						className: e
					}, n ? s.a.createElement(F.a, {
						role: "button",
						onClick: () => {
							a(this.props.user.id), o(y.e(t))
						}
					}, s.a.createElement(G, null), z._("Unban User", null, {
						hk: "1aASyW"
					})) : s.a.createElement(F.a, {
						role: "button",
						onClick: () => {
							c(), o(y.a(t))
						}
					}, s.a.createElement(Q, null), z._("Ban User", null, {
						hk: "3OhuLx"
					})), r && s.a.createElement(F.a, {
						role: "button",
						onClick: () => {
							i(), o(y.d(t))
						}
					}, s.a.createElement(W, null), z._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var ee = Object(a.b)(X, (e, t) => {
					let {
						username: r,
						subredditId: n,
						contextId: s
					} = t;
					return {
						onUnbanUser: t => e(Object(K.nb)(n, t)),
						requestUserBanInfo: () => e(Object(K.Z)(n, {
							username: r
						})),
						toggleBanModal: () => {
							e(Object(S.c)({
								username: r,
								subredditId: n,
								contextId: s
							})), e(Object(K.X)(n, r))
						},
						toggleMuteModal: () => {
							e(Object(S.d)({
								username: r,
								subredditId: n,
								contextId: s
							})), e(Object(B.i)(P.a.MUTE_USER))
						}
					}
				})($),
				te = r("./src/reddit/actions/userFlair.ts"),
				re = r("./src/reddit/icons/svgs/Tag/index.tsx"),
				ne = r("./src/reddit/components/Hovercards/AuthorHovercard/ModFlairActions.m.less"),
				se = r.n(ne);
			const {
				fbt: ae
			} = r("./node_modules/fbt/lib/FbtPublic.js"), oe = E.a.wrapped(re.a, "FlairIcon", se.a);
			var ce = Object(a.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(te.p)(t.subredditId, t.username))
				}))(e => s.a.createElement(F.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(y.c(e.contextId))
					}
				}, s.a.createElement(oe, null), ae._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				ie = r("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				de = r.n(ie);

			function le() {
				return (le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ue = E.a.wrapped(O.a, "UserIcon", de.a),
				me = E.a.wrapped(N.a, "SubscribeButton", de.a),
				be = E.a.wrapped(_.a, "ChatButton", de.a),
				pe = E.a.wrapped(M.a, "KarmaIcon", de.a),
				ve = E.a.wrapped(U.a, "PremiumIcon", de.a),
				he = E.a.wrapped(x.a, "UserNameLink", de.a),
				fe = E.a.div("UserNameMetaData", de.a),
				Ie = E.a.div("MetaDataItem", de.a),
				Ce = E.a.div("Bullet", de.a),
				xe = E.a.div("UserNameContainer", de.a),
				Ee = E.a.div("UserInfoContainer", de.a),
				we = E.a.div("PostKarma", de.a),
				ge = E.a.div("CommentKarma", de.a),
				_e = E.a.div("KarmaGrid", de.a),
				Le = E.a.div("GenericKarma", de.a),
				je = E.a.a("InfoLink", de.a),
				Ne = E.a.div("KarmaCount", de.a),
				Oe = E.a.div("KarmaLabel", de.a),
				ye = E.a.div("GenericKarmaLabel", de.a),
				He = E.a.div("BannerImage", de.a),
				ke = E.a.div("UserContainer", de.a),
				Me = E.a.div("BottomSpacer", de.a),
				Ue = E.a.div("Container", de.a),
				Ae = e => s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement(he, {
					to: "/user/".concat(e.userName, "/")
				}, "u/".concat(e.userName)), e.user.isEmployee && s.a.createElement(k.a, {
					className: de.a.adminIcon,
					title: I.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && s.a.createElement(x.a, {
					to: "/premium"
				}, s.a.createElement(ve, null))), s.a.createElement(fe, null, e.user.username && s.a.createElement(Ie, null, e.user.username, s.a.createElement(Ce, null, "•")), s.a.createElement(Ie, null, Object(g.d)(e.user.createdUtc || e.user.created)))),
				Te = e => {
					const {
						showAwardKarma: t,
						user: r
					} = e;
					return t ? s.a.createElement(_e, null, s.a.createElement(Le, null, s.a.createElement(Ne, null, Object(w.b)(r.postKarma)), s.a.createElement(ye, null, I.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [I.fbt._plural(r.postKarma)], {
						hk: "3K4oaH"
					}))), s.a.createElement(Le, null, s.a.createElement(Ne, null, Object(w.b)(r.commentKarma)), s.a.createElement(ye, null, I.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [I.fbt._plural(r.commentKarma)], {
						hk: "3gKRx9"
					}))), s.a.createElement(Le, null, s.a.createElement(Ne, null, Object(w.b)(r.awardeeKarma)), s.a.createElement(ye, null, I.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [I.fbt._plural(r.awardeeKarma)], {
						hk: "3nzm9q"
					}), s.a.createElement(je, {
						href: A.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(H.a, {
						className: de.a.infoIcon
					})))), s.a.createElement(Le, null, s.a.createElement(Ne, null, Object(w.b)(r.awarderKarma)), s.a.createElement(ye, null, I.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [I.fbt._plural(r.awarderKarma)], {
						hk: "4zXN3B"
					}), s.a.createElement(je, {
						href: A.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(H.a, {
						className: de.a.infoIcon
					}))))) : s.a.createElement(Ee, null, s.a.createElement(pe, null), s.a.createElement(we, null, s.a.createElement(Ne, null, Object(w.b)(r.postKarma)), s.a.createElement(Oe, null, I.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [I.fbt._plural(r.postKarma)], {
						hk: "3K4oaH"
					}))), s.a.createElement(ge, null, s.a.createElement(Ne, null, Object(w.b)(r.commentKarma)), s.a.createElement(Oe, null, I.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [I.fbt._plural(r.commentKarma)], {
						hk: "3gKRx9"
					}))))
				},
				Se = Object(j.a)(e => {
					const {
						className: t,
						contextId: r,
						hideNSFWPref: n,
						hoverId: a,
						isCurrentUser: o,
						isLoggedIn: c,
						origin: i,
						moderatorPermissions: d,
						sendEvent: l,
						showAwardKarma: u,
						style: m,
						subredditId: b,
						topAwardIcon: p,
						userName: v,
						user: h,
						userFlair: f,
						acceptChats: x
					} = e;
					if (!h) return s.a.createElement(Ue, {
						style: m
					});
					const E = h.isNSFW && n,
						w = h.accountIcon || "".concat(C.a.assetPath, "/img/snoo_user_placeholder.png"),
						g = d && d.flair,
						_ = d && d.access,
						j = f && f.templateIds && f.templateIds.length > 0,
						N = f && f.displaySettings && f.displaySettings.isEnabled,
						{
							awardedLastMonth: O
						} = h,
						H = E ? "".concat(C.a.assetPath, "/img/user-info-banner.png") : e.user.bannerImage;
					return s.a.createElement(Ue, {
						className: t,
						id: a,
						style: m
					}, H && s.a.createElement(He, {
						style: {
							backgroundImage: "url('".concat(H, "')")
						}
					}), s.a.createElement(ke, null, s.a.createElement(xe, null, s.a.createElement(ue, {
						iconUrl: w,
						isNSFW: h.isNSFW,
						userName: v
					}), s.a.createElement(Ae, {
						origin: i,
						user: h,
						userName: v
					})), s.a.createElement(Te, {
						showAwardKarma: u,
						user: h
					}), O && s.a.createElement(T.a, {
						recentAwardings: O,
						topAwardIcon: p,
						username: v
					}), c && !o && x && s.a.createElement(be, {
						contextId: r,
						userId: h.id
					}, I.fbt._("Start Chat", null, {
						hk: "2mfqRE"
					})), h.hasUserProfile && !o && s.a.createElement(me, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(y.g)(e ? "unfollow" : "follow", r),
						small: !0
					})), _ && r && !o && b && s.a.createElement(ee, {
						contextId: r,
						subredditId: b,
						sendEvent: l,
						username: v
					}), g && r && j && N && b && s.a.createElement(ce, {
						contextId: r,
						subredditId: b,
						sendEvent: l,
						username: v
					}), s.a.createElement(L.i, {
						contextId: r,
						subredditId: b,
						user: h
					}), !(_ || c) && s.a.createElement(Me, null))
				});
			var Be = e => {
				const t = e.activeTooltipId === e.tooltipId;
				return s.a.createElement(Se, le({
					isOpen: t
				}, e))
			};
			const Ke = Object(o.c)({
					tokenName: u.q,
					activeTooltipId: p.a,
					isCurrentUser: (e, t) => {
						const r = Object(v.i)(e);
						return !!r && Object(i.e)(r) === t.userName
					},
					isLoggedIn: v.H,
					hideNSFWPref: v.z,
					moderatorPermissions: (e, t) => {
						let {
							subredditId: r
						} = t;
						return r ? Object(b.j)(e, {
							subredditId: r
						}) : void 0
					},
					origin: m.l,
					showAwardKarma: (e, t) => {
						return Object(p.a)(e) === t.tooltipId && Object(d.a)(e)
					},
					topAwardIcon: (e, t) => {
						let {
							userName: r
						} = t;
						return Object(l.d)(e, {
							userName: r,
							minSize: 32
						})
					},
					user: v.eb,
					userFlair: (e, t) => {
						let {
							subredditId: r
						} = t;
						return r ? Object(h.c)(e, {
							subredditId: r
						}) : void 0
					},
					acceptChats: (e, t) => {
						const r = Object(f.h)(e, {
							profileName: t.userName
						});
						return !r || r.acceptChats
					}
				}),
				Pe = Object(a.b)(Ke, (e, t) => ({
					onHideTooltip: () => e(Object(c.i)())
				}));
			t.a = Pe(e => s.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, s.a.createElement(Be, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				isCurrentUser: e.isCurrentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				moderatorPermissions: e.moderatorPermissions,
				onHideTooltip: e.onHideTooltip,
				origin: e.origin,
				sendEvent: e.sendEvent,
				showAwardKarma: e.showAwardKarma,
				subredditId: e.subredditId,
				tokenName: e.tokenName,
				topAwardIcon: e.topAwardIcon,
				tooltipId: e.tooltipId,
				tooltipType: e.tooltipType,
				user: e.user,
				userFlair: e.userFlair,
				userName: e.userName,
				acceptChats: e.acceptChats
			})))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, r) {
			e.exports = {
				BanIcon: "_2g595huO3XJ8C5PGbnTIcH",
				banIcon: "_2g595huO3XJ8C5PGbnTIcH",
				MuteIcon: "_1qnIs5F_qVlqqqY9ZvtGHT",
				muteIcon: "_1qnIs5F_qVlqqqY9ZvtGHT",
				UnbanIcon: "_3gnOs3YMjVI2NyE6rZjyL3",
				unbanIcon: "_3gnOs3YMjVI2NyE6rZjyL3"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModFlairActions.m.less": function(e, t, r) {
			e.exports = {
				FlairIcon: "_2xaYvwRfHZMRW_6lyBpV4v",
				flairIcon: "_2xaYvwRfHZMRW_6lyBpV4v"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less": function(e, t, r) {
			e.exports = {
				ChatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				chatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				UserIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				userIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				SubscribeButton: "yFByQg8RzENoqoOt0ysAk",
				subscribeButton: "yFByQg8RzENoqoOt0ysAk",
				KarmaIcon: "_2XmHHGriP3EYLhv_9BG6OT",
				karmaIcon: "_2XmHHGriP3EYLhv_9BG6OT",
				PremiumIcon: "_3YJqiyvx8zFvv30tmg36S-",
				premiumIcon: "_3YJqiyvx8zFvv30tmg36S-",
				Token: "_2U0P3n4v75sHsDvQmSKNz3",
				token: "_2U0P3n4v75sHsDvQmSKNz3",
				UserNameLink: "_1oT4pd8QlZQZ1wGOk9VAaQ",
				userNameLink: "_1oT4pd8QlZQZ1wGOk9VAaQ",
				UserNameMetaData: "_1wu7a98opA-mU9WUQpJIuF",
				userNameMetaData: "_1wu7a98opA-mU9WUQpJIuF",
				GildedLastMonthDisplay: "_19NlUDUSw7ra6wC0luJwKV",
				gildedLastMonthDisplay: "_19NlUDUSw7ra6wC0luJwKV",
				Bullet: "_2dfF2p_dwLpL5C-8pAvdbL",
				bullet: "_2dfF2p_dwLpL5C-8pAvdbL",
				MetaDataItem: "RcL4UXH2ABHT3YpYzu3ms",
				metaDataItem: "RcL4UXH2ABHT3YpYzu3ms",
				UserNameContainer: "J9OjkO5NR8gsgJUQrk2Ft",
				userNameContainer: "J9OjkO5NR8gsgJUQrk2Ft",
				UserInfoContainer: "_3l7ptRjFJYo-fcXXajRpqn",
				userInfoContainer: "_3l7ptRjFJYo-fcXXajRpqn",
				PostKarma: "_2T3kavHwxOaL76xfa9id7",
				postKarma: "_2T3kavHwxOaL76xfa9id7",
				CommentKarma: "_1rFYsN1yoSDrDTRfqagI5r",
				commentKarma: "_1rFYsN1yoSDrDTRfqagI5r",
				KarmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				karmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				GenericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				genericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				KarmaCount: "_18aX_pAQub_mu1suz4-i8j",
				karmaCount: "_18aX_pAQub_mu1suz4-i8j",
				KarmaLabel: "_1b2tgHrvjFKgTLyFIQ9B6T",
				karmaLabel: "_1b2tgHrvjFKgTLyFIQ9B6T",
				GenericKarmaLabel: "EtlFWXCmzvjyd92eABb-5",
				genericKarmaLabel: "EtlFWXCmzvjyd92eABb-5",
				InfoLink: "_2qjqkYRKCjuqB4VRr2duCK",
				infoLink: "_2qjqkYRKCjuqB4VRr2duCK",
				BannerImage: "_1l9DXI5VaWcxjbz23v5b6X",
				bannerImage: "_1l9DXI5VaWcxjbz23v5b6X",
				UserContainer: "_m7PpFuKATP9fZF4xKf9R",
				userContainer: "_m7PpFuKATP9fZF4xKf9R",
				BottomSpacer: "_2D-HmwsbsNkTnIiPO4zcqb",
				bottomSpacer: "_2D-HmwsbsNkTnIiPO4zcqb",
				UserActionLink: "_1Sy8bDpK6p4JRHy1yB1Xyk",
				userActionLink: "_1Sy8bDpK6p4JRHy1yB1Xyk",
				Container: "_1sbZnfdaxhCOFVUCJ3Z75m",
				container: "_1sbZnfdaxhCOFVUCJ3Z75m",
				adminIcon: "_2aJuBKF3mo4YJS4YFkeU9a"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, r) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return x
			})), r.d(t, "b", (function() {
				return E
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/lessComponent.tsx"),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/actions/profile/index.ts"),
				d = r("./src/reddit/actions/tooltip.ts"),
				l = r("./src/reddit/selectors/tooltip.ts");
			const u = Object(c.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var m = Object(o.b)(u, (e, t) => ({
					onCloseUserDropdown: () => e(Object(d.i)()),
					onOpenUserDropdown: async () => {
						e(Object(d.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(i.d)(t.authorOrSubredditName))
					}
				})),
				b = r("./src/reddit/actions/subreddit.ts");
			const p = Object(c.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var v = Object(o.b)(p, (e, t) => ({
					onCloseUserDropdown: () => e(Object(d.i)()),
					onOpenUserDropdown: async () => {
						e(Object(d.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(b.t)(t.authorOrSubredditName))
					}
				})),
				h = r("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				f = r.n(h);
			class I extends s.a.Component {
				constructor() {
					super(...arguments), this.closeHovercardTimeoutId = 0, this.openHovercardTimeoutId = 0, this.isHovering = !1, this.hoverEl = void 0, this.onHoverElMouseEnter = () => {
						this.isHovering = !0
					}, this.onHoverElMouseLeave = () => {
						this.isHovering = !1
					}, this.onMouseEnter = e => {
						this.closeHovercardTimeoutId && clearTimeout(this.closeHovercardTimeoutId), this.openHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.dropdownIsOpen || (this.props.onOpenUserDropdown(), this.props.sendHoverEvent())
						}, 500)
					}, this.onMouseLeave = () => {
						this.openHovercardTimeoutId && clearTimeout(this.openHovercardTimeoutId), this.closeHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.onCloseUserDropdown()
						}, 300)
					}
				}
				componentDidMount() {
					const e = document.getElementById(this.props.hoverId);
					e && (this.hoverEl = e, this.addHoverListeners(this.hoverEl))
				}
				componentWillUnmount() {
					this.hoverEl && this.removeHoverListeners(this.hoverEl), this.hoverEl = void 0, this.openHovercardTimeoutId && window.clearTimeout(this.openHovercardTimeoutId)
				}
				addHoverListeners(e) {
					e.addEventListener("mouseenter", this.onHoverElMouseEnter), e.addEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				removeHoverListeners(e) {
					e.removeEventListener("mouseenter", this.onHoverElMouseEnter), e.removeEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				render() {
					const {
						children: e,
						className: t
					} = this.props;
					return s.a.createElement("div", {
						className: t,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, e)
				}
			}
			const C = a.a.wrapped(I, "HoverDiv", f.a),
				x = m(C),
				E = v(C)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, r) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/layout/row/Inline/index.tsx"),
				a = r("./src/reddit/components/Hovercards/helpers.m.less"),
				o = r.n(a);
			const c = n.a.wrapped(s.a, "UserActionItem", o.a),
				i = e => {
					const {
						author: t,
						itemId: r,
						subredditName: n,
						tooltipIdPrefix: s,
						tooltipType: a
					} = e;
					let o = s;
					return r && (o = "".concat(o, "--").concat(r)), a && (o = "".concat(o, "--").concat(a)), t && (o = "".concat(o, "--").concat(t)), n && (o = "".concat(o, "--").concat(n)), o
				}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/config.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				c = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				i = r.n(c);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class l extends s.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: r
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: n,
						totalCount: c
					} = t, l = n.description ? n.description : n.name;
					return s.a.createElement("a", {
						className: i.a.AwardedLastMonth,
						href: "".concat(a.a.oldRedditUrl, "/user/").concat(r, "/gilded")
					}, s.a.createElement("div", {
						className: i.a.iconColumn
					}, s.a.createElement("img", {
						alt: l,
						className: i.a.icon,
						src: e
					}), c > 1 && s.a.createElement("span", {
						className: i.a.count
					}, "+".concat(Object(o.b)(c - 1)))), s.a.createElement("div", {
						className: i.a.textColumn
					}, d._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [d._param("award-name", n.name), d._plural(c)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = l
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, r) {
			e.exports = {
				SnooIconWrapper: "_308WM6C-yV5iwS0Iy8nOfI",
				snooIconWrapper: "_308WM6C-yV5iwS0Iy8nOfI",
				actionItem: "_1l7CTV4NjDjmzX8DiiSgTL",
				AwardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				awardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				textColumn: "_wi1DtT7oN7k_x5oIV8zm",
				iconColumn: "_32tzMaZn7x3dfQC5MXndJn",
				icon: "_12jN4wdttUosp76WHzuieI",
				count: "_6xPPP5HdELF-SZJL8layH",
				awardIcon: "_2Eq8z6UD7I0ul3wnZ-YT80",
				adminIcon: "_1sNQxemH_0rq1jtZAMyAZd",
				button: "_2q1wcTx60QKM_bQ1Maev7b"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, r) {
			e.exports = {
				IconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				iconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				active: "_2FebEA49ReODemDlwzYHSR",
				SubscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				subscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				UnsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				unsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				isSmall: "_2ilDLNSvkCHD3Cs9duy9Q_",
				SubscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				subscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				UnsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				unsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				SubscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				subscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				UnsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				unsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return j
			}));
			r("./node_modules/core-js/modules/es6.symbol.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./src/reddit/constants/elementClassNames.ts"),
				c = r("./src/reddit/controls/Button/index.tsx"),
				i = r("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = r("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = r("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				u = r("./src/reddit/components/SubscribeButton/Base.m.less"),
				m = r.n(u),
				b = r("./src/lib/classNames/index.ts"),
				p = r("./src/lib/lessComponent.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			var h = function(e, t) {
				var r = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]])
				}
				return r
			};
			const f = p.a.button("IconButton", m.a),
				I = p.a.wrapped(d.a, "SubscribeIcon", m.a),
				C = p.a.wrapped(i.a, "UnsubscribeIcon", m.a),
				x = p.a.wrapped(e => {
					var {
						border: t,
						small: r
					} = e, n = h(e, ["border", "small"]);
					return a.a.createElement(f, n, a.a.createElement(I, {
						className: Object(b.a)(n.className, {
							[m.a.isSmall]: r
						})
					}))
				}, "SubscribeIconButton", m.a),
				E = p.a.wrapped(e => {
					var {
						border: t,
						small: r
					} = e, n = h(e, ["border", "small"]);
					return t ? a.a.createElement(c.f, v({}, n, {
						className: Object(b.a)(n.className, {
							[m.a.isSmall]: r
						})
					})) : a.a.createElement(c.n, v({}, n, {
						className: Object(b.a)(n.className, {
							[m.a.isSmall]: r
						})
					}))
				}, "SubscribeInternalButton", m.a),
				w = e => {
					var {
						icon: t
					} = e, r = h(e, ["icon"]);
					return t ? a.a.createElement(x, v({}, r, {
						className: Object(b.a)(r.className, {
							[m.a.isSmall]: r.small
						})
					})) : a.a.createElement(E, v({}, r, {
						className: Object(b.a)(r.className, {
							[m.a.isSmall]: r.small
						})
					}))
				},
				g = p.a.wrapped(e => {
					var {
						border: t,
						small: r,
						type: n
					} = e, s = h(e, ["border", "small", "type"]);
					return a.a.createElement(f, s, a.a.createElement(C, {
						className: Object(b.a)(o.n, s.className, {
							[m.a.isSmall]: r
						})
					}))
				}, "UnsubscribeIconButton", m.a),
				_ = p.a.wrapped(e => {
					var {
						border: t,
						small: r,
						buttonType: s
					} = e, o = h(e, ["border", "small", "buttonType"]);
					const i = a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
							className: m.a.UnsubscribeButtonDefault
						}, "subreddit" === s ? n.fbt._("Joined", null, {
							hk: "1MTmIz"
						}) : n.fbt._("Following", null, {
							hk: "1wQlVR"
						})), a.a.createElement("span", {
							className: m.a.UnsubscribeButtonHover
						}, "subreddit" === s ? n.fbt._("Leave", null, {
							hk: "2lLnnn"
						}) : n.fbt._("Unfollow", null, {
							hk: "2b5ERD"
						}))),
						d = Object(b.a)(o.className, {
							[m.a.isSmall]: r
						});
					return t ? a.a.createElement(c.i, v({}, o, {
						className: d
					}), i) : a.a.createElement(c.n, v({}, o, {
						className: d
					}), i)
				}, "UnsubscribeButton", m.a),
				L = e => {
					var {
						icon: t
					} = e, r = h(e, ["icon"]);
					return t ? a.a.createElement(g, v({}, r, {
						className: Object(b.a)(r.className, {
							[m.a.isSmall]: r.small
						})
					})) : a.a.createElement(_, v({}, r, {
						className: Object(b.a)(r.className, {
							[m.a.isSmall]: r.small
						})
					}))
				};
			class j extends a.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						icon: r = !1,
						id: n,
						small: s = !1
					} = this.props, o = {
						border: e,
						className: t,
						icon: r,
						onClick: this.onClick,
						small: s
					};
					return this.props.userIsSubscriber ? a.a.createElement(L, v({}, o, {
						buttonType: this.props.identifier.type
					})) : a.a.createElement(w, v({}, o, {
						id: n
					}), this.props.children, Object(l.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const s = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				a = {
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
				o = e => {
					let {
						type: t,
						key: r
					} = e;
					return a[s({
						type: t
					})][r]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/components/TrackingHelper/index.tsx"),
				s = r("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = r("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(s.a)(Object(n.c)(a.a))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/actions/subscription/index.ts"),
				o = r("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(s.c)({
				userIsSubscriber: o.cb
			}), (e, t) => {
				let {
					identifier: r
				} = t;
				return {
					onSubscribe: () => e(a.d([r], !0)),
					onSubscriptionsRequested: () => e(a.e()),
					onUnsubscribe: () => e(a.d([r], !1))
				}
			})
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "h", (function() {
				return o
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "i", (function() {
				return d
			})), r.d(t, "j", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "k", (function() {
				return v
			}));
			var n, s = r("./src/config.ts"),
				a = r("./src/reddit/endpoints/governance/requester.ts");

			function o(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "Ethereum Main Network";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function c(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error("No JSON RPC url for provider: ".concat(e))
			}

			function i(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "homestead";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error("No ethereum network for provider: ".concat(e))
			}
			async function d(e, t, r) {
				return Object(a.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function l(e, t, r) {
				return await Object(a.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: r
				})
			}
			async function u(e, t, r) {
				return await Object(a.a)(e, {
					method: "delete",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(r)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(n || (n = {}));
			const m = e => ({
					type: "claim",
					subredditId: e
				}),
				b = e => ({
					type: "subscribe",
					subredditId: e
				}),
				p = (e, t, r, n) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: n
				});
			async function v(e, t) {
				return await Object(a.a)(e, {
					method: "put",
					endpoint: "".concat(s.a.metaUrl, "/crypto/ethereum/transaction-intent"),
					data: t
				})
			}
		},
		"./src/reddit/icons/fonts/Info/index.m.less": function(e, t, r) {
			e.exports = {
				InfoIcon: "_3nKAYOml-oSgh4pKL20-sC",
				infoIcon: "_3nKAYOml-oSgh4pKL20-sC"
			}
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/icons/fonts/helpers.tsx"),
				o = r("./src/reddit/icons/fonts/Info/index.m.less"),
				c = r.n(o);
			const i = r("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: "".concat(Object(a.b)("info"), " ").concat(e.className)
			}), "InfoIcon", c.a);
			t.a = i
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, r) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/Admin/index.m.less"),
				c = r.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(e.className, c.a.admin, {
					[c.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Ban/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M12.8172,7.49104 C12.8172,7.70304 12.7332,7.90704 12.5828,8.05664 L9.5196,11.11984 C9.3636,11.27584 9.1588,11.35424 8.954,11.35424 C8.7492,11.35424 8.5444,11.27584 8.3884,11.11984 L7.2572,9.98784 L2.966,14.27904 C2.8092,14.43584 2.6044,14.51344 2.4004,14.51344 C2.1956,14.51344 1.9908,14.43584 1.834,14.27904 C1.522,13.96704 1.522,13.46064 1.834,13.14784 L6.126,8.85664 L4.9948,7.72544 C4.682,7.41264 4.682,6.90704 4.9948,6.59424 L8.0572,3.53104 C8.3572,3.23104 8.8884,3.23104 9.1884,3.53104 L12.5828,6.92544 C12.7332,7.07504 12.8172,7.27904 12.8172,7.49104 Z M3.86328,6.26288 C3.65848,6.26288 3.45368,6.18448 3.29768,6.02848 C2.98488,5.71568 2.98488,5.21008 3.29768,4.89728 L6.36008,1.83408 C6.67288,1.52208 7.17928,1.52208 7.49128,1.83408 C7.80408,2.14688 7.80408,2.65328 7.49128,2.96528 L4.42888,6.02848 C4.27288,6.18448 4.06808,6.26288 3.86328,6.26288 Z M14.27968,8.62264 C14.59248,8.93544 14.59248,9.44104 14.27968,9.75384 L11.21728,12.81624 C11.06128,12.97224 10.85648,13.05064 10.65168,13.05064 C10.44688,13.05064 10.24208,12.97224 10.08608,12.81624 C9.77328,12.50424 9.77328,11.99784 10.08608,11.68504 L13.14848,8.62264 C13.46128,8.30984 13.96688,8.30984 14.27968,8.62264 Z"
			})))
		},
		"./src/reddit/icons/svgs/Karma/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
			})))
		},
		"./src/reddit/icons/svgs/Mute/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M9.97968,8.20936 C10.13568,8.36536 10.13568,8.61896 9.97968,8.77496 C9.90128,8.85336 9.79888,8.89256 9.69648,8.89256 C9.59488,8.89256 9.49248,8.85336 9.41408,8.77496 L7.99968,7.36056 L6.58608,8.77496 C6.50768,8.85336 6.40528,8.89256 6.30288,8.89256 C6.20048,8.89256 6.09808,8.85336 6.02048,8.77496 C5.86368,8.61896 5.86368,8.36536 6.02048,8.20936 L7.43408,6.79496 L6.02048,5.38136 C5.86368,5.22536 5.86368,4.97176 6.02048,4.81576 C6.17648,4.65976 6.43008,4.65976 6.58608,4.81576 L7.99968,6.22936 L9.41408,4.81576 C9.57008,4.65976 9.82368,4.65976 9.97968,4.81576 C10.13568,4.97176 10.13568,5.22536 9.97968,5.38136 L8.56528,6.79496 L9.97968,8.20936 Z M12.79968,1.59976 L3.19968,1.59976 C2.31808,1.59976 1.59968,2.31816 1.59968,3.19976 L1.59968,10.59496 C1.59968,11.47736 2.31808,12.19496 3.19968,12.19496 L6.10528,12.19496 L7.33408,14.03896 C7.48288,14.26136 7.73248,14.39496 7.99968,14.39496 C8.26688,14.39496 8.51728,14.26136 8.66528,14.03896 L9.89488,12.19496 L12.79968,12.19496 C13.68208,12.19496 14.39968,11.47736 14.39968,10.59496 L14.39968,3.19976 C14.39968,2.31816 13.68208,1.59976 12.79968,1.59976 L12.79968,1.59976 Z",
				id: "path-1"
			})))
		},
		"./src/reddit/icons/svgs/Tag/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M5.14293863,3.38188919 C5.75317178,3.99212234 5.75317178,4.98136473 5.14293863,5.59159788 C4.53270548,6.20183104 3.54346309,6.20183104 2.93322994,5.59159788 C2.32299679,4.98136473 2.32299679,3.99212234 2.93322994,3.38188919 C3.54346309,2.77165604 4.53270548,2.77165604 5.14293863,3.38188919 Z M1.01449569,2.94595786 L1,9.03662212 C1.00035355,9.55457784 1.19162594,10.0654625 1.55790725,10.4317438 L9.89929239,18.7731289 C10.6622606,19.5360972 11.8989904,19.5360972 12.661605,18.7734825 L18.7381272,12.6969604 C19.5007418,11.9343457 19.5007418,10.697616 18.7377736,9.93464773 L10.3963885,1.59326259 C10.0301071,1.22698128 9.54786032,1.00707107 9.02955105,1.00707107 L2.96045355,1 C1.8814086,1 1.01414214,1.86726647 1.01449569,2.94595786 Z"
			})))
		},
		"./src/reddit/icons/svgs/Unban/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8,6.77247619 L8,6.27380952 L7.5072,6.27380952 L8,6.77247619 Z M7,5.76057143 L7,0.80952381 L11,0.80952381 L11,6.27380952 L10,6.27380952 L10,8.79628571 L15.9072,14.7738095 L15.2,15.4894286 L1,1.12038095 L1.7072,0.404761905 L3,1.71295238 L3,1.00178571 C3,0.44847619 3.4432,0 3.99,0 L4.01,0 C4.5568,0 5,0.44847619 5,1.00178571 L5,3.7367619 L5.8,4.54628571 L5.8,0.80952381 C5.8,0.585690476 5.9792,0.404761905 6.2,0.404761905 C6.4208,0.404761905 6.6,0.585690476 6.6,0.80952381 L6.6,5.35580952 L7,5.76057143 Z M8.2,8.9047619 L10.2,10.9285714 L10.2,14.2706905 C10.2,14.824 9.7568,15.2724762 9.21,15.2724762 L9.19,15.2724762 C8.6432,15.2724762 8.2,14.824 8.2,14.2706905 L8.2,8.9047619 Z M5.8,6.47619048 L6.284,6.96595238 C6.2568,6.97161905 6.2288,6.97485714 6.2,6.97485714 C5.9792,6.97485714 5.8,6.79392857 5.8,6.57009524 L5.8,6.47619048 Z M12.2,0.404761905 C12.4208,0.404761905 12.6,0.586095238 12.6,0.80952381 L12.6,6.67857143 C12.6,6.902 12.4208,7.08333333 12.2,7.08333333 C11.9792,7.08333333 11.8,6.902 11.8,6.67857143 L11.8,0.80952381 C11.8,0.586095238 11.9792,0.404761905 12.2,0.404761905 Z M14.01,0 C14.5568,0 15,0.44847619 15,1.00178571 L15,6.08154762 C15,6.63485714 14.5568,7.08333333 14.01,7.08333333 L13.99,7.08333333 C13.4432,7.08333333 13,6.63485714 13,6.08154762 L13,1.00178571 C13,0.44847619 13.4432,0 13.99,0 L14.01,0 Z M3,4.04761905 L5,6.07142857 L5,6.37783333 C5,6.93114286 4.5568,7.37961905 4.01,7.37961905 L3.99,7.37961905 C3.4432,7.37961905 3,6.93114286 3,6.37783333 L3,4.04761905 Z"
			})))
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = e => !0
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "g", (function() {
				return v
			})), r.d(t, "t", (function() {
				return h
			})), r.d(t, "h", (function() {
				return f
			})), r.d(t, "i", (function() {
				return I
			})), r.d(t, "j", (function() {
				return C
			})), r.d(t, "k", (function() {
				return x
			})), r.d(t, "q", (function() {
				return E
			})), r.d(t, "r", (function() {
				return w
			})), r.d(t, "p", (function() {
				return g
			})), r.d(t, "m", (function() {
				return _
			})), r.d(t, "n", (function() {
				return L
			})), r.d(t, "u", (function() {
				return j
			})), r.d(t, "a", (function() {
				return N
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "s", (function() {
				return y
			})), r.d(t, "o", (function() {
				return H
			})), r.d(t, "l", (function() {
				return k
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				s = r("./src/reddit/endpoints/governance/crypto.ts"),
				a = r("./src/reddit/featureFlags/index.ts"),
				o = r("./src/reddit/selectors/experiments/pollsGA.ts"),
				c = r("./src/reddit/selectors/postCreations.ts");
			const i = [],
				d = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				u = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = j(e, {
						subredditId: r
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.harberger ? n.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				m = (e, t) => {
					const r = _(e, t);
					if (r) return r.mainHeader
				},
				b = (e, t) => {
					const r = _(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				p = (e, t) => {
					const r = _(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : d
				},
				v = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				h = (e, t) => {
					const r = v(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				f = (e, t) => {
					const r = v(e, t);
					return r && r.amount || "0"
				},
				I = (e, t) => {
					if (Object(o.a)(e)) {
						const t = Object(c.g)(e);
						if (t.allowedPostTypes && t.allowedPostTypes.polls) return !0
					}
					const r = a.d.spPolls(e) || a.d.spKarmaPoints(e),
						n = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (n) {
						const e = !!n.polls && !1 === n.polls.canCreate;
						return r && !e
					}
					return r
				},
				C = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				x = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || i
				},
				E = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				w = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				g = (e, t) => {
					const r = y(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				_ = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				L = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				j = (e, t) => {
					const r = L(e, t);
					return r && r.walletProvider
				},
				N = (e, t) => {
					const r = j(e, t),
						n = L(e, t);
					return r && r.provider || n && n.provider
				},
				O = (e, t) => {
					const r = N(e, t);
					return r === s.a.Ethereum || r === s.a.Rinkeby || r === s.a.EthTraderEthereum || r === s.a.EthTraderRinkeby
				},
				y = (e, t) => {
					const r = j(e, t),
						n = N(e, t);
					if (r && !r.inTransition && n === s.a.Stellar) return {
						address: r.extra && r.extra.issuerAddress || "",
						decimals: r.extra && r.extra.decimals || 7,
						symbol: r.extra && r.extra.token || "PHOTON"
					};
					const a = r && r.extra && r.extra.contracts,
						o = a && a.unlocked;
					return o && {
						address: o.address,
						symbol: o.token || "",
						decimals: o.decimals || 18,
						image: o.image
					}
				},
				H = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = j(e, {
						subredditId: r
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				k = (e, t) => {
					const r = L(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard~EconTopAwardersModal~Settings~SubredditWiki.8cf6691c1bbeb8c8d1fc.js.map