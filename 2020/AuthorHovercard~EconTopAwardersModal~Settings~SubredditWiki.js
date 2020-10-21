// https://www.redditstatic.com/desktop2x/AuthorHovercard~EconTopAwardersModal~Settings~SubredditWiki.b7f45e0117a0d96280c5.js
// Retrieved at 10/21/2020, 2:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard~EconTopAwardersModal~Settings~SubredditWiki"], {
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/actions/chat/toggle.ts"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				i = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			const l = e => {
				let {
					onStartChat: t,
					children: r,
					className: s,
					sendEvent: a,
					contextId: o
				} = e;
				return n.a.createElement(i.i, {
					onClick: () => {
						t(), a(Object(d.b)(o))
					},
					className: s
				}, r)
			};
			l.displayName = "ChatButton";
			const u = Object(a.b)(null, (e, t) => {
				let {
					contextId: r,
					userId: s
				} = t;
				return {
					onStartChat: () => {
						e(Object(o.a)(s, r))
					}
				}
			});
			t.a = u(Object(c.c)(l))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/actions/tooltip.ts"),
				i = r("./src/reddit/models/User/index.ts"),
				d = r("./src/reddit/selectors/experiments/econAwardKarma.ts"),
				l = r("./src/reddit/selectors/gold/awardIcon.ts"),
				u = r("./src/reddit/selectors/gov.ts"),
				m = r("./src/reddit/selectors/meta.ts"),
				b = r("./src/reddit/selectors/moderatorPermissions.ts"),
				p = r("./src/reddit/selectors/subreddit.ts"),
				v = r("./src/reddit/selectors/tooltip.ts"),
				C = r("./src/reddit/selectors/user.ts"),
				h = r("./src/reddit/selectors/userFlair.ts"),
				I = r("./src/reddit/selectors/profile.ts"),
				_ = r("./node_modules/fbt/lib/FbtPublic.js"),
				x = r("./src/config.ts"),
				E = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				L = r("./src/lib/lessComponent.tsx"),
				f = r("./src/lib/prettyPrintNumber/index.ts"),
				w = r("./src/lib/timeAgo/index.ts"),
				g = r("./src/reddit/components/ChatButton/index.tsx"),
				j = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				O = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				N = r("./src/reddit/components/SubscribeButton/index.tsx"),
				H = r("./src/reddit/components/UserIcon/index.tsx"),
				M = r("./src/reddit/helpers/trackers/authorHovercard.ts"),
				y = r("./src/reddit/icons/fonts/Info/index.tsx"),
				U = r("./src/reddit/icons/svgs/Admin/index.tsx"),
				B = r("./src/reddit/icons/svgs/Karma/index.tsx"),
				A = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				S = r("./src/reddit/models/Gold/Award.ts"),
				K = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				T = r("./src/reddit/actions/inContextModeration.ts"),
				k = r("./src/reddit/actions/modal.ts"),
				P = r("./src/reddit/actions/subredditModeration.ts"),
				F = r("./src/reddit/constants/modals.ts"),
				D = r("./src/reddit/components/Hovercards/helpers.ts"),
				Z = r("./src/reddit/icons/svgs/Ban/index.tsx"),
				R = r("./src/reddit/icons/svgs/Mute/index.tsx"),
				J = r("./src/reddit/icons/svgs/Unban/index.tsx"),
				Y = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				V = r("./src/reddit/selectors/subredditModeration.ts"),
				z = r("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				q = r.n(z);
			const {
				fbt: Q
			} = r("./node_modules/fbt/lib/FbtPublic.js"), W = L.a.wrapped(Z.a, "BanIcon", q.a), G = L.a.wrapped(R.a, "MuteIcon", q.a), X = L.a.wrapped(J.a, "UnbanIcon", q.a), $ = Object(o.c)({
				hasModMailPermissions: Object(b.a)(Y.c.mail),
				isUserBanned: (e, t) => !!Object(V.g)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(C.hb)(e, {
					userName: t.username
				})
			});
			class ee extends n.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: r,
						isUserBanned: s,
						onUnbanUser: a,
						sendEvent: o,
						toggleBanModal: c,
						toggleMuteModal: i
					} = this.props;
					return n.a.createElement("div", {
						className: e
					}, s ? n.a.createElement(D.a, {
						role: "button",
						onClick: () => {
							a(this.props.user.id), o(M.e(t))
						}
					}, n.a.createElement(X, null), Q._("Unban User", null, {
						hk: "1aASyW"
					})) : n.a.createElement(D.a, {
						role: "button",
						onClick: () => {
							c(), o(M.a(t))
						}
					}, n.a.createElement(W, null), Q._("Ban User", null, {
						hk: "3OhuLx"
					})), r && n.a.createElement(D.a, {
						role: "button",
						onClick: () => {
							i(), o(M.d(t))
						}
					}, n.a.createElement(G, null), Q._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var te = Object(a.b)($, (e, t) => {
					let {
						username: r,
						subredditId: s,
						contextId: n
					} = t;
					return {
						onUnbanUser: t => e(Object(P.ob)(s, t)),
						requestUserBanInfo: () => e(Object(P.Z)(s, {
							username: r
						})),
						toggleBanModal: () => {
							e(Object(T.c)({
								username: r,
								subredditId: s,
								contextId: n
							})), e(Object(P.X)(s, r))
						},
						toggleMuteModal: () => {
							e(Object(T.d)({
								username: r,
								subredditId: s,
								contextId: n
							})), e(Object(k.i)(F.a.MUTE_USER))
						}
					}
				})(ee),
				re = r("./src/reddit/actions/userFlair.ts"),
				se = r("./src/reddit/icons/svgs/Tag/index.tsx"),
				ne = r("./src/reddit/components/Hovercards/AuthorHovercard/ModFlairActions.m.less"),
				ae = r.n(ne);
			const {
				fbt: oe
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ce = L.a.wrapped(se.a, "FlairIcon", ae.a);
			var ie = Object(a.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(re.p)(t.subredditId, t.username))
				}))(e => n.a.createElement(D.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(M.c(e.contextId))
					}
				}, n.a.createElement(ce, null), oe._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				de = r("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				le = r.n(de);

			function ue() {
				return (ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const me = L.a.wrapped(H.a, "UserIcon", le.a),
				be = L.a.wrapped(N.a, "SubscribeButton", le.a),
				pe = L.a.wrapped(g.a, "ChatButton", le.a),
				ve = L.a.wrapped(B.a, "KarmaIcon", le.a),
				Ce = L.a.wrapped(A.a, "PremiumIcon", le.a),
				he = L.a.wrapped(E.a, "UserNameLink", le.a),
				Ie = L.a.div("UserNameMetaData", le.a),
				_e = L.a.div("MetaDataItem", le.a),
				xe = L.a.div("Bullet", le.a),
				Ee = L.a.div("UserNameContainer", le.a),
				Le = L.a.div("UserInfoContainer", le.a),
				fe = L.a.div("PostKarma", le.a),
				we = L.a.div("CommentKarma", le.a),
				ge = L.a.div("KarmaGrid", le.a),
				je = L.a.div("GenericKarma", le.a),
				Oe = L.a.a("InfoLink", le.a),
				Ne = L.a.div("KarmaCount", le.a),
				He = L.a.div("KarmaLabel", le.a),
				Me = L.a.div("GenericKarmaLabel", le.a),
				ye = L.a.div("BannerImage", le.a),
				Ue = L.a.div("UserContainer", le.a),
				Be = L.a.div("BottomSpacer", le.a),
				Ae = L.a.div("Container", le.a),
				Se = e => n.a.createElement("div", null, n.a.createElement("div", null, n.a.createElement(he, {
					to: "/user/".concat(e.userName, "/")
				}, "u/".concat(e.userName)), e.user.isEmployee && n.a.createElement(U.a, {
					className: le.a.adminIcon,
					title: _.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && n.a.createElement(E.a, {
					to: "/premium"
				}, n.a.createElement(Ce, null))), n.a.createElement(Ie, null, e.user.username && n.a.createElement(_e, null, e.user.username, n.a.createElement(xe, null, "•")), n.a.createElement(_e, null, Object(w.d)(e.user.createdUtc || e.user.created)))),
				Ke = e => {
					const {
						showAwardKarma: t,
						user: r
					} = e;
					return t ? n.a.createElement(ge, null, n.a.createElement(je, null, n.a.createElement(Ne, null, Object(f.b)(r.postKarma)), n.a.createElement(Me, null, _.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [_.fbt._plural(r.postKarma)], {
						hk: "3K4oaH"
					}))), n.a.createElement(je, null, n.a.createElement(Ne, null, Object(f.b)(r.commentKarma)), n.a.createElement(Me, null, _.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [_.fbt._plural(r.commentKarma)], {
						hk: "3gKRx9"
					}))), n.a.createElement(je, null, n.a.createElement(Ne, null, Object(f.b)(r.awardeeKarma)), n.a.createElement(Me, null, _.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [_.fbt._plural(r.awardeeKarma)], {
						hk: "3nzm9q"
					}), n.a.createElement(Oe, {
						href: S.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.a.createElement(y.a, {
						className: le.a.infoIcon
					})))), n.a.createElement(je, null, n.a.createElement(Ne, null, Object(f.b)(r.awarderKarma)), n.a.createElement(Me, null, _.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [_.fbt._plural(r.awarderKarma)], {
						hk: "4zXN3B"
					}), n.a.createElement(Oe, {
						href: S.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.a.createElement(y.a, {
						className: le.a.infoIcon
					}))))) : n.a.createElement(Le, null, n.a.createElement(ve, null), n.a.createElement(fe, null, n.a.createElement(Ne, null, Object(f.b)(r.postKarma)), n.a.createElement(He, null, _.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [_.fbt._plural(r.postKarma)], {
						hk: "3K4oaH"
					}))), n.a.createElement(we, null, n.a.createElement(Ne, null, Object(f.b)(r.commentKarma)), n.a.createElement(He, null, _.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [_.fbt._plural(r.commentKarma)], {
						hk: "3gKRx9"
					}))))
				},
				Te = e => {
					const {
						className: t,
						contextId: r,
						hideNSFWPref: s,
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
						user: C,
						userFlair: h,
						userIsBanned: I,
						acceptChats: E
					} = e;
					if (!C) return n.a.createElement(Ae, {
						style: m
					});
					const L = C.isNSFW && s,
						f = C.accountIcon || "".concat(x.a.assetPath, "/img/snoo_user_placeholder.png"),
						w = d && d.flair,
						g = d && d.access,
						O = h && h.templateIds && h.templateIds.length > 0,
						N = h && h.displaySettings && h.displaySettings.isEnabled,
						{
							awardedLastMonth: H
						} = C,
						y = L ? "".concat(x.a.assetPath, "/img/user-info-banner.png") : e.user.bannerImage;
					return n.a.createElement(Ae, {
						className: t,
						id: a,
						style: m
					}, y && n.a.createElement(ye, {
						style: {
							backgroundImage: "url('".concat(y, "')")
						}
					}), n.a.createElement(Ue, null, n.a.createElement(Ee, null, n.a.createElement(me, {
						iconUrl: f,
						isNSFW: C.isNSFW,
						userName: v
					}), n.a.createElement(Se, {
						origin: i,
						user: C,
						userName: v
					})), n.a.createElement(Ke, {
						showAwardKarma: u,
						user: C
					}), H && n.a.createElement(K.a, {
						recentAwardings: H,
						topAwardIcon: p,
						username: v
					}), c && !o && !I && E && n.a.createElement(pe, {
						contextId: r,
						userId: C.id
					}, _.fbt._("Start Chat", null, {
						hk: "2mfqRE"
					})), C.hasUserProfile && !I && !o && n.a.createElement(be, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(M.g)(e ? "unfollow" : "follow", r),
						small: !0
					})), g && r && !o && b && n.a.createElement(te, {
						contextId: r,
						subredditId: b,
						sendEvent: l,
						username: v
					}), w && r && O && N && b && n.a.createElement(ie, {
						contextId: r,
						subredditId: b,
						sendEvent: l,
						username: v
					}), n.a.createElement(j.i, {
						contextId: r,
						subredditId: b,
						user: C
					}), !(g || c) && n.a.createElement(Be, null))
				},
				ke = Object(O.a)(Te),
				Pe = e => {
					const t = e.activeTooltipId === e.tooltipId;
					return n.a.createElement(ke, ue({
						isOpen: t
					}, e))
				};
			Pe.WrappedComponent = Te;
			var Fe = Pe;
			const De = Object(o.c)({
					tokenName: u.p,
					activeTooltipId: v.a,
					isCurrentUser: (e, t) => {
						const r = Object(C.i)(e);
						return !!r && Object(i.e)(r) === t.userName
					},
					isLoggedIn: C.I,
					hideNSFWPref: C.A,
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
						return Object(v.a)(e) === t.tooltipId && Object(d.a)(e)
					},
					topAwardIcon: (e, t) => {
						let {
							userName: r
						} = t;
						return Object(l.e)(e, {
							userName: r,
							minSize: 32
						})
					},
					user: C.hb,
					userFlair: (e, t) => {
						let {
							subredditId: r
						} = t;
						return r ? Object(h.c)(e, {
							subredditId: r
						}) : void 0
					},
					userIsBanned: (e, t) => !!Object(p.n)(t) && Object(p.fb)(e, t),
					acceptChats: (e, t) => {
						const r = Object(I.h)(e, {
							profileName: t.userName
						});
						return !r || r.acceptChats
					}
				}),
				Ze = Object(a.b)(De, (e, t) => ({
					onHideTooltip: () => e(Object(c.i)())
				}));
			t.a = Ze(e => n.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, n.a.createElement(Fe, {
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
				userIsBanned: e.userIsBanned,
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
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
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
				C = r("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				h = r.n(C);
			class I extends n.a.Component {
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
					return n.a.createElement("div", {
						className: t,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, e)
				}
			}
			const _ = a.a.wrapped(I, "HoverDiv", h.a),
				x = m(_),
				E = v(_)
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
			var s = r("./src/lib/lessComponent.tsx"),
				n = r("./src/reddit/layout/row/Inline/index.tsx"),
				a = r("./src/reddit/components/Hovercards/helpers.m.less"),
				o = r.n(a);
			const c = s.a.wrapped(n.a, "UserActionItem", o.a),
				i = e => {
					const {
						author: t,
						itemId: r,
						subredditName: s,
						tooltipIdPrefix: n,
						tooltipType: a
					} = e;
					let o = n;
					return r && (o = "".concat(o, "--").concat(r)), a && (o = "".concat(o, "--").concat(a)), t && (o = "".concat(o, "--").concat(t)), s && (o = "".concat(o, "--").concat(s)), o
				}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/config.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				c = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				i = r.n(c);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class l extends n.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: r
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: s,
						totalCount: c
					} = t, l = s.description ? s.description : s.name;
					return n.a.createElement("a", {
						className: i.a.AwardedLastMonth,
						href: "".concat(a.a.oldRedditUrl, "/user/").concat(r, "/gilded")
					}, n.a.createElement("div", {
						className: i.a.iconColumn
					}, n.a.createElement("img", {
						alt: l,
						className: i.a.icon,
						src: e
					}), c > 1 && n.a.createElement("span", {
						className: i.a.count
					}, "+".concat(Object(o.b)(c - 1)))), n.a.createElement("div", {
						className: i.a.textColumn
					}, d._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [d._param("award-name", s.name), d._plural(c)], {
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
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				is2020: "_2CLbCoThTVSANDpeJGlI6a"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return x
			}));
			r("./node_modules/core-js/modules/es6.symbol.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./src/reddit/controls/Button/index.tsx"),
				c = r("./src/reddit/hooks/useButtons2020.ts"),
				i = r("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = r("./src/reddit/components/SubscribeButton/Base.m.less"),
				l = r.n(d),
				u = r("./src/lib/classNames/index.ts"),
				m = r("./src/lib/lessComponent.tsx");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var r = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (r[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (s = Object.getOwnPropertySymbols(e); n < s.length; n++) t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (r[s[n]] = e[s[n]])
				}
				return r
			};
			const v = m.a.wrapped(e => {
					var {
						border: t,
						small: r
					} = e, s = p(e, ["border", "small"]);
					return t ? a.a.createElement(o.i, b({}, s, {
						className: Object(u.a)(s.className, {
							[l.a.isSmall]: r
						})
					})) : a.a.createElement(o.o, b({}, s, {
						className: Object(u.a)(s.className, {
							[l.a.isSmall]: r
						})
					}))
				}, "SubscribeInternalButton", l.a),
				C = e => {
					var {
						border: t,
						small: r
					} = e, s = p(e, ["border", "small"]);
					return Object(c.a)() ? a.a.createElement(o.q, b({}, s, {
						priority: t ? o.b.Primary : o.b.Plain,
						className: Object(u.a)(s.className, l.a.is2020),
						size: r ? o.c.S : o.c.M
					})) : a.a.createElement(v, b({}, s, {
						border: t,
						small: r,
						className: Object(u.a)(s.className, {
							[l.a.isSmall]: r
						})
					}))
				},
				h = e => a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
					className: l.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? s.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : s.fbt._("Following", null, {
					hk: "1wQlVR"
				})), a.a.createElement("span", {
					className: l.a.UnsubscribeButtonHover
				}, "subreddit" === e ? s.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : s.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				I = m.a.wrapped(e => {
					var {
						border: t,
						small: r,
						buttonType: s
					} = e, n = p(e, ["border", "small", "buttonType"]);
					const c = h(s),
						i = Object(u.a)(n.className, {
							[l.a.isSmall]: r
						});
					return t ? a.a.createElement(o.l, b({}, n, {
						className: i
					}), c) : a.a.createElement(o.o, b({}, n, {
						className: i
					}), c)
				}, "UnsubscribeButton", l.a),
				_ = e => {
					var {
						buttonType: t,
						border: r,
						small: s
					} = e, n = p(e, ["buttonType", "border", "small"]);
					return Object(c.a)() ? a.a.createElement(o.q, b({}, n, {
						priority: r ? o.b.Secondary : o.b.Plain,
						className: Object(u.a)(n.className, l.a.is2020),
						size: s ? o.c.S : o.c.M,
						text: h(t)
					})) : a.a.createElement(I, b({}, n, {
						border: r,
						small: s,
						buttonType: t,
						className: Object(u.a)(n.className, {
							[l.a.isSmall]: s
						})
					}))
				};
			class x extends a.a.Component {
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
						id: r,
						small: s = !1
					} = this.props, n = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: s
					};
					return this.props.userIsSubscriber ? a.a.createElement(_, b({}, n, {
						buttonType: this.props.identifier.type
					})) : a.a.createElement(C, b({}, n, {
						id: r
					}), this.props.children, Object(i.a)({
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
			var s = r("./node_modules/fbt/lib/FbtPublic.js");
			const n = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				a = {
					subredditActions: {
						subscribe: () => s.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => s.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => s.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => s.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => s.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => s.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				o = e => {
					let {
						type: t,
						key: r
					} = e;
					return a[n({
						type: t
					})][r]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/components/TrackingHelper/index.tsx"),
				n = r("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = r("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(n.a)(Object(s.c)(a.a))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/actions/subscription/index.ts"),
				o = r("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(n.c)({
				userIsSubscriber: o.gb
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
		"./src/reddit/icons/fonts/Info/index.m.less": function(e, t, r) {
			e.exports = {
				InfoIcon: "_3nKAYOml-oSgh4pKL20-sC",
				infoIcon: "_3nKAYOml-oSgh4pKL20-sC"
			}
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/reddit/icons/fonts/helpers.tsx"),
				o = r("./src/reddit/icons/fonts/Info/index.m.less"),
				c = r.n(o);
			const i = r("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
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
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/Admin/index.m.less"),
				c = r.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(e.className, c.a.admin, {
					[c.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && n.a.createElement("title", null, e.title), e.desc && n.a.createElement("desc", null, e.desc), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), n.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, n.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), n.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Ban/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M12.8172,7.49104 C12.8172,7.70304 12.7332,7.90704 12.5828,8.05664 L9.5196,11.11984 C9.3636,11.27584 9.1588,11.35424 8.954,11.35424 C8.7492,11.35424 8.5444,11.27584 8.3884,11.11984 L7.2572,9.98784 L2.966,14.27904 C2.8092,14.43584 2.6044,14.51344 2.4004,14.51344 C2.1956,14.51344 1.9908,14.43584 1.834,14.27904 C1.522,13.96704 1.522,13.46064 1.834,13.14784 L6.126,8.85664 L4.9948,7.72544 C4.682,7.41264 4.682,6.90704 4.9948,6.59424 L8.0572,3.53104 C8.3572,3.23104 8.8884,3.23104 9.1884,3.53104 L12.5828,6.92544 C12.7332,7.07504 12.8172,7.27904 12.8172,7.49104 Z M3.86328,6.26288 C3.65848,6.26288 3.45368,6.18448 3.29768,6.02848 C2.98488,5.71568 2.98488,5.21008 3.29768,4.89728 L6.36008,1.83408 C6.67288,1.52208 7.17928,1.52208 7.49128,1.83408 C7.80408,2.14688 7.80408,2.65328 7.49128,2.96528 L4.42888,6.02848 C4.27288,6.18448 4.06808,6.26288 3.86328,6.26288 Z M14.27968,8.62264 C14.59248,8.93544 14.59248,9.44104 14.27968,9.75384 L11.21728,12.81624 C11.06128,12.97224 10.85648,13.05064 10.65168,13.05064 C10.44688,13.05064 10.24208,12.97224 10.08608,12.81624 C9.77328,12.50424 9.77328,11.99784 10.08608,11.68504 L13.14848,8.62264 C13.46128,8.30984 13.96688,8.30984 14.27968,8.62264 Z"
			})))
		},
		"./src/reddit/icons/svgs/Karma/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
			})))
		},
		"./src/reddit/icons/svgs/Mute/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M9.97968,8.20936 C10.13568,8.36536 10.13568,8.61896 9.97968,8.77496 C9.90128,8.85336 9.79888,8.89256 9.69648,8.89256 C9.59488,8.89256 9.49248,8.85336 9.41408,8.77496 L7.99968,7.36056 L6.58608,8.77496 C6.50768,8.85336 6.40528,8.89256 6.30288,8.89256 C6.20048,8.89256 6.09808,8.85336 6.02048,8.77496 C5.86368,8.61896 5.86368,8.36536 6.02048,8.20936 L7.43408,6.79496 L6.02048,5.38136 C5.86368,5.22536 5.86368,4.97176 6.02048,4.81576 C6.17648,4.65976 6.43008,4.65976 6.58608,4.81576 L7.99968,6.22936 L9.41408,4.81576 C9.57008,4.65976 9.82368,4.65976 9.97968,4.81576 C10.13568,4.97176 10.13568,5.22536 9.97968,5.38136 L8.56528,6.79496 L9.97968,8.20936 Z M12.79968,1.59976 L3.19968,1.59976 C2.31808,1.59976 1.59968,2.31816 1.59968,3.19976 L1.59968,10.59496 C1.59968,11.47736 2.31808,12.19496 3.19968,12.19496 L6.10528,12.19496 L7.33408,14.03896 C7.48288,14.26136 7.73248,14.39496 7.99968,14.39496 C8.26688,14.39496 8.51728,14.26136 8.66528,14.03896 L9.89488,12.19496 L12.79968,12.19496 C13.68208,12.19496 14.39968,11.47736 14.39968,10.59496 L14.39968,3.19976 C14.39968,2.31816 13.68208,1.59976 12.79968,1.59976 L12.79968,1.59976 Z",
				id: "path-1"
			})))
		},
		"./src/reddit/icons/svgs/Tag/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M5.14293863,3.38188919 C5.75317178,3.99212234 5.75317178,4.98136473 5.14293863,5.59159788 C4.53270548,6.20183104 3.54346309,6.20183104 2.93322994,5.59159788 C2.32299679,4.98136473 2.32299679,3.99212234 2.93322994,3.38188919 C3.54346309,2.77165604 4.53270548,2.77165604 5.14293863,3.38188919 Z M1.01449569,2.94595786 L1,9.03662212 C1.00035355,9.55457784 1.19162594,10.0654625 1.55790725,10.4317438 L9.89929239,18.7731289 C10.6622606,19.5360972 11.8989904,19.5360972 12.661605,18.7734825 L18.7381272,12.6969604 C19.5007418,11.9343457 19.5007418,10.697616 18.7377736,9.93464773 L10.3963885,1.59326259 C10.0301071,1.22698128 9.54786032,1.00707107 9.02955105,1.00707107 L2.96045355,1 C1.8814086,1 1.01414214,1.86726647 1.01449569,2.94595786 Z"
			})))
		},
		"./src/reddit/icons/svgs/Unban/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8,6.77247619 L8,6.27380952 L7.5072,6.27380952 L8,6.77247619 Z M7,5.76057143 L7,0.80952381 L11,0.80952381 L11,6.27380952 L10,6.27380952 L10,8.79628571 L15.9072,14.7738095 L15.2,15.4894286 L1,1.12038095 L1.7072,0.404761905 L3,1.71295238 L3,1.00178571 C3,0.44847619 3.4432,0 3.99,0 L4.01,0 C4.5568,0 5,0.44847619 5,1.00178571 L5,3.7367619 L5.8,4.54628571 L5.8,0.80952381 C5.8,0.585690476 5.9792,0.404761905 6.2,0.404761905 C6.4208,0.404761905 6.6,0.585690476 6.6,0.80952381 L6.6,5.35580952 L7,5.76057143 Z M8.2,8.9047619 L10.2,10.9285714 L10.2,14.2706905 C10.2,14.824 9.7568,15.2724762 9.21,15.2724762 L9.19,15.2724762 C8.6432,15.2724762 8.2,14.824 8.2,14.2706905 L8.2,8.9047619 Z M5.8,6.47619048 L6.284,6.96595238 C6.2568,6.97161905 6.2288,6.97485714 6.2,6.97485714 C5.9792,6.97485714 5.8,6.79392857 5.8,6.57009524 L5.8,6.47619048 Z M12.2,0.404761905 C12.4208,0.404761905 12.6,0.586095238 12.6,0.80952381 L12.6,6.67857143 C12.6,6.902 12.4208,7.08333333 12.2,7.08333333 C11.9792,7.08333333 11.8,6.902 11.8,6.67857143 L11.8,0.80952381 C11.8,0.586095238 11.9792,0.404761905 12.2,0.404761905 Z M14.01,0 C14.5568,0 15,0.44847619 15,1.00178571 L15,6.08154762 C15,6.63485714 14.5568,7.08333333 14.01,7.08333333 L13.99,7.08333333 C13.4432,7.08333333 13,6.63485714 13,6.08154762 L13,1.00178571 C13,0.44847619 13.4432,0 13.99,0 L14.01,0 Z M3,4.04761905 L5,6.07142857 L5,6.37783333 C5,6.93114286 4.5568,7.37961905 4.01,7.37961905 L3.99,7.37961905 C3.4432,7.37961905 3,6.93114286 3,6.37783333 L3,4.04761905 Z"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard~EconTopAwardersModal~Settings~SubredditWiki.b7f45e0117a0d96280c5.js.map