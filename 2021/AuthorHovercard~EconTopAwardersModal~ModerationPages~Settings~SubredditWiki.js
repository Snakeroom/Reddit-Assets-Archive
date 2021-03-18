// https://www.redditstatic.com/desktop2x/AuthorHovercard~EconTopAwardersModal~ModerationPages~Settings~SubredditWiki.0a890870025c429fccda.js
// Retrieved at 3/18/2021, 3:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard~EconTopAwardersModal~ModerationPages~Settings~SubredditWiki"], {
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return V
			})), r.d(t, "d", (function() {
				return re
			})), r.d(t, "b", (function() {
				return ae
			})), r.d(t, "e", (function() {
				return oe
			})), r.d(t, "a", (function() {
				return ie
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/get.js"),
				a = r.n(s),
				o = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/apiRequestState.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/subreddit.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/constants/modals.ts"),
				m = r("./src/lib/constants/index.ts"),
				p = r("./src/lib/makeApiRequest/index.ts"),
				b = r("./src/lib/omitHeaders/index.ts"),
				v = r("./src/reddit/constants/headers.ts"),
				f = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const x = (e, t, r) => Object(p.a)(Object(b.a)(e, [v.a]), {
				endpoint: Object(f.a)(`${e.apiUrl}/api/v1/${t}/banned`),
				method: m.cb.GET,
				data: r
			});
			var h = r("./src/reddit/helpers/normalizeUsername/index.tsx"),
				I = r("./src/reddit/models/SubredditModeration/index.ts"),
				g = r("./src/reddit/models/Toast/index.ts"),
				C = r("./src/reddit/selectors/activeModalId.ts"),
				_ = r("./src/reddit/selectors/bannedUser.ts"),
				E = r("./src/reddit/selectors/subreddit.ts"),
				w = r("./src/reddit/selectors/user.ts"),
				j = r("./src/reddit/actions/subredditModeration/constants.ts"),
				O = r("./src/lib/initializeClient/installReducer.ts"),
				y = r("./node_modules/redux/es/redux.js");
			var N = (e = null, t) => {
				switch (t.type) {
					case j.o:
					case j.n:
						return null;
					case j.m:
						return t.payload;
					default:
						return e
				}
			};
			const L = {};
			var P = (e = L, t) => {
					switch (t.type) {
						case j.o: {
							const {
								subredditId: r,
								fetchedToken: n
							} = t.payload, s = Object(I.d)(r, n);
							return {
								...e,
								[s]: !0
							}
						}
						case j.n:
						case j.m: {
							const {
								subredditId: r,
								fetchedToken: n
							} = t.payload, s = Object(I.d)(r, n);
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				U = Object(y.c)({
					error: N,
					pending: P
				});
			const k = {};
			var S = (e = k, t) => {
					switch (t.type) {
						case j.n: {
							const {
								fetchedToken: r,
								subredditId: n
							} = t.payload, s = Object(I.d)(n, r);
							return {
								...e,
								[s]: !0
							}
						}
						default:
							return e
					}
				},
				B = r("./src/reddit/actions/inContextModeration.ts");
			var M = (e = null, t) => {
				switch (t.type) {
					case B.a:
						return t.payload;
					default:
						return e
				}
			};
			const A = {};
			var H = (e = A, t) => {
					switch (t.type) {
						case j.n: {
							const {
								subredditId: e,
								after: r
							} = t.payload;
							return {
								[e]: r
							}
						}
						default:
							return e
					}
				},
				T = r("./node_modules/icepick/icepick.js");
			const F = {};
			var K = (e = F, t) => {
				switch (t.type) {
					case j.l:
					case j.n: {
						const {
							subredditId: r,
							bannedUsers: n
						} = t.payload;
						return Object(T.merge)(e, {
							[r]: n
						})
					}
					case j.s: {
						const {
							subredditId: r,
							userId: n
						} = t.payload;
						return Object(T.unsetIn)(e, [r, n])
					}
					default:
						return e
				}
			};
			var R = (e = null, t) => {
				switch (t.type) {
					case j.r:
					case j.q:
						return null;
					case j.p:
						return t.payload;
					default:
						return e
				}
			};
			var D = (e = !1, t) => {
					switch (t.type) {
						case j.r:
							return !0;
						case j.q:
						case j.p:
							return !1;
						default:
							return e
					}
				},
				Z = Object(y.c)({
					error: R,
					pending: D
				});
			var q = (e = null, t) => {
					switch (t.type) {
						case j.r:
						case j.p:
							return null;
						case j.q: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				W = Object(y.c)({
					api: Z,
					result: q
				});
			const Y = {};
			var z = (e = Y, t) => {
					switch (t.type) {
						case j.n: {
							const {
								subredditId: r,
								bannedUserIds: n
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: [...e[r], ...n]
							} : {
								...e,
								[r]: n
							}
						}
						case j.s: {
							const {
								subredditId: r,
								userId: n
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== n)
							}
						}
						case j.l: {
							const {
								subredditId: r,
								bannedUserIds: n
							} = t.payload, s = n[0];
							return s && e[r] && -1 === e[r].indexOf(s) ? {
								[r]: [s, ...e[r]]
							} : e
						}
						default:
							return e
					}
				},
				J = Object(y.c)({
					api: U,
					fetchedTokens: S,
					inContext: M,
					loadMore: H,
					models: K,
					search: W,
					userOrder: z
				});
			Object(O.a)({
				features: {
					banned: J
				}
			});
			const G = Object(o.a)(j.o),
				Q = Object(o.a)(j.n),
				X = Object(o.a)(j.m),
				V = (e, t = {}) => async (r, n, {
					apiContext: s
				}) => {
					const a = n(),
						o = t.after || "",
						i = Object(I.d)(e, o),
						d = a.features.banned.fetchedTokens[i];
					if (a.features.banned.api.pending[i] || d) return;
					r(G({
						subredditId: e,
						fetchedToken: o
					}));
					const c = a.subreddits.models[e].name,
						l = await x(s(), c, t);
					l.ok ? r(Q({
						...l.body,
						fetchedToken: o
					})) : r(X({
						subredditId: e,
						fetchedToken: o
					}))
				}, $ = Object(o.a)(j.r), ee = Object(o.a)(j.q), te = Object(o.a)(j.p), re = (e, t) => async (r, n, {
					apiContext: s
				}) => {
					const a = n().subreddits.models[e].name,
						o = {
							username: Object(h.a)(t)
						};
					r($());
					const i = await x(s(), a, o);
					i.ok ? r(ee(i.body)) : r(te(i.error))
				}, ne = Object(o.a)(j.l), se = Object(o.a)(j.s), ae = (e, t, r) => async (s, o, {
					apiContext: d
				}) => {
					const c = o(),
						u = c.subreddits.models[e].url,
						f = c.subreddits.models[e].name;
					t.username = Object(h.a)(t.username), s(Object(i.h)(r));
					const I = await ((e, t, r) => Object(p.a)(Object(b.a)(e, [v.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: m.cb.POST,
						data: {
							api_type: "json",
							ban_reason: r.reason,
							ban_message: r.banMessage,
							duration: r.duration,
							name: r.username,
							note: r.modNote,
							ban_context: r.contextId,
							type: "banned"
						}
					}))(d(), u, t);
					if (I.ok) {
						s(Object(i.e)(r));
						const e = {
							username: t.username
						};
						s(Object(l.f)({
							kind: g.b.SuccessMod,
							text: n.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const a = await x(d(), f, e);
						a.ok && s(ne(a.body))
					} else {
						s(Object(i.f)(r, I.error));
						const e = a()(I, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(l.f)({
							kind: g.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, oe = (e, t) => async (r, s, {
					apiContext: o
				}) => {
					const i = s().subreddits.models[e].url,
						d = await ((e, t, r) => Object(p.a)(Object(b.a)(e, [v.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.cb.POST,
							data: {
								api_type: "json",
								id: r,
								type: "banned"
							}
						}))(o(), i, t);
					if (d.ok) r(se({
						subredditId: e,
						userId: t
					})), r(Object(l.f)({
						kind: g.b.SuccessMod,
						text: n.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = a()(d, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(l.f)({
							kind: g.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (r, n) => {
					const s = n();
					await Promise.all([(async () => {
						if (!Object(C.b)(u.a.BAN_USER)(s) && !Object(E.Q)(s, {
								subredditId: e
							})) {
							const t = Object(E.T)(s, {
								subredditId: e
							});
							await r(Object(c.o)(t.name))
						}
					})(), (async () => {
						const n = Object(w.nb)(s, {
							userName: t
						});
						if (!n) return;
						const a = Object(_.h)(s, {
							subredditId: e
						});
						a && a[n.id] || await r(V(e, {
							username: t
						}))
					})()]), r(Object(d.i)(u.a.BAN_USER))
				}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/actions/chat/toggle.ts"),
				i = r("./src/reddit/components/TrackingHelper/index.tsx"),
				d = r("./src/reddit/controls/Button/index.tsx"),
				c = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			const l = ({
				onStartChat: e,
				children: t,
				className: r,
				sendEvent: n,
				contextId: a
			}) => s.a.createElement(d.i, {
				onClick: () => {
					e(), n(Object(c.b)(a))
				},
				className: r
			}, t);
			l.displayName = "ChatButton";
			const u = Object(a.b)(null, (e, {
				contextId: t,
				userId: r
			}) => ({
				onStartChat: () => {
					e(Object(o.a)(r, t))
				}
			}));
			t.a = u(Object(i.c)(l))
		},
		"./src/reddit/components/EditableImage/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_27zThB3Syksyv8gLdDJqep",
				container: "_27zThB3Syksyv8gLdDJqep",
				HitBox: "_1RlGOQJAoxE66cPOVTH0s",
				hitBox: "_1RlGOQJAoxE66cPOVTH0s",
				Image: "_1te2cn6lvn-YtGSv-hrM7g",
				image: "_1te2cn6lvn-YtGSv-hrM7g",
				ImageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				imageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				ImageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				imageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				LoadingIcon: "_3syvcMeczod-NOIewWIb8n",
				loadingIcon: "_3syvcMeczod-NOIewWIb8n",
				EditButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				editButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				EditIcon: "_3X4DuB4IpAlTY0XMdSI5q6",
				editIcon: "_3X4DuB4IpAlTY0XMdSI5q6"
			}
		},
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/ImageInput/index.tsx"),
				i = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = r("./src/reddit/icons/svgs/NewPost/index.tsx"),
				c = r("./src/reddit/models/ApiRequestState/index.ts"),
				l = r("./src/reddit/components/EditableImage/index.m.less"),
				u = r.n(l);
			const {
				fbt: m
			} = r("./node_modules/fbt/lib/FbtPublic.js"), p = 80;
			class b extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						apiRequestId: null
					}, this.selectFile = e => {
						const t = Object(c.b)();
						this.setState({
							apiRequestId: t
						}), this.props.onFileSelected(e, t)
					}
				}
				render() {
					const {
						altText: e,
						children: t,
						className: r,
						editButtonClassName: n,
						isLoading: c,
						imageUrl: l
					} = this.props;
					return s.a.createElement("div", {
						className: Object(a.a)(u.a.Container, r)
					}, s.a.createElement("label", {
						className: u.a.HitBox
					}, s.a.createElement("span", {
						className: u.a.ImageContainer,
						role: "presentation"
					}, l ? s.a.createElement("img", {
						alt: e,
						className: u.a.Image,
						src: l
					}) : t), s.a.createElement(o.a, {
						className: u.a.ImageUploader,
						multiple: !1,
						onChange: this.selectFile
					}), !c && s.a.createElement("div", {
						className: Object(a.a)(u.a.EditButton, n)
					}, s.a.createElement(d.a, {
						className: u.a.EditIcon
					}))), c && s.a.createElement(i.a, {
						className: u.a.LoadingIcon,
						sizePx: p
					}))
				}
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/actions/snoovatar.ts"),
				d = r("./src/reddit/actions/tooltip.ts"),
				c = r("./src/reddit/selectors/gold/awardIcon.ts"),
				l = r("./src/reddit/selectors/gov.ts"),
				u = r("./src/reddit/selectors/meta.ts"),
				m = r("./src/reddit/selectors/moderatorPermissions.ts"),
				p = r("./src/reddit/selectors/profile.ts"),
				b = r("./src/reddit/selectors/structuredStyles.ts"),
				v = r("./src/reddit/selectors/subreddit.ts"),
				f = r("./src/reddit/selectors/tooltip.ts"),
				x = r("./src/reddit/selectors/user.ts"),
				h = r("./src/reddit/selectors/userFlair.ts"),
				I = r("./src/reddit/selectors/userPrefs.ts"),
				g = r("./node_modules/fbt/lib/FbtPublic.js"),
				C = r("./src/config.ts"),
				_ = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				E = r("./src/lib/lessComponent.tsx"),
				w = r("./src/lib/prettyPrintNumber/index.ts"),
				j = r("./src/lib/timeAgo/index.ts"),
				O = r("./src/reddit/components/ChatButton/index.tsx"),
				y = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				N = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				L = r("./src/reddit/components/SubscribeButton/index.tsx"),
				P = r("./src/reddit/components/UserIcon/index.tsx"),
				U = r("./src/reddit/helpers/trackers/authorHovercard.ts"),
				k = r("./src/reddit/icons/fonts/Info/index.tsx"),
				S = r("./src/reddit/icons/svgs/Admin/index.tsx"),
				B = r("./src/reddit/icons/svgs/Karma/index.tsx"),
				M = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				A = r("./src/reddit/models/Gold/Award.ts"),
				H = r("./src/reddit/models/User/index.ts"),
				T = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				F = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				K = r("./src/reddit/actions/inContextModeration.ts"),
				R = r("./src/reddit/actions/modal.ts"),
				D = r("./src/reddit/actions/subredditModeration/ban.ts"),
				Z = r("./src/reddit/constants/modals.ts"),
				q = r("./src/reddit/components/Hovercards/helpers.ts"),
				W = r("./src/reddit/icons/svgs/Ban/index.tsx"),
				Y = r("./src/reddit/icons/svgs/Mute/index.tsx"),
				z = r("./src/reddit/icons/svgs/Unban/index.tsx"),
				J = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				G = r("./src/reddit/selectors/bannedUser.ts"),
				Q = r("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				X = r.n(Q);
			const {
				fbt: V
			} = r("./node_modules/fbt/lib/FbtPublic.js"), $ = E.a.wrapped(W.a, "BanIcon", X.a), ee = E.a.wrapped(Y.a, "MuteIcon", X.a), te = E.a.wrapped(z.a, "UnbanIcon", X.a), re = Object(o.c)({
				hasModMailPermissions: Object(m.a)(J.c.mail),
				isUserBanned: (e, t) => !!Object(G.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(x.nb)(e, {
					userName: t.username
				})
			});
			class ne extends s.a.Component {
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
						toggleBanModal: i,
						toggleMuteModal: d
					} = this.props;
					return s.a.createElement("div", {
						className: e
					}, n ? s.a.createElement(q.a, {
						role: "button",
						onClick: () => {
							a(this.props.user.id), o(U.e(t))
						}
					}, s.a.createElement(te, null), V._("Unban User", null, {
						hk: "1aASyW"
					})) : s.a.createElement(q.a, {
						role: "button",
						onClick: () => {
							i(), o(U.a(t))
						}
					}, s.a.createElement($, null), V._("Ban User", null, {
						hk: "3OhuLx"
					})), r && s.a.createElement(q.a, {
						role: "button",
						onClick: () => {
							d(), o(U.d(t))
						}
					}, s.a.createElement(ee, null), V._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var se = Object(a.b)(re, (e, {
					username: t,
					subredditId: r,
					contextId: n
				}) => ({
					onUnbanUser: t => e(Object(D.e)(r, t)),
					requestUserBanInfo: () => e(Object(D.c)(r, {
						username: t
					})),
					toggleBanModal: () => {
						e(Object(K.c)({
							username: t,
							subredditId: r,
							contextId: n
						})), e(Object(D.a)(r, t))
					},
					toggleMuteModal: () => {
						e(Object(K.d)({
							username: t,
							subredditId: r,
							contextId: n
						})), e(Object(R.i)(Z.a.MUTE_USER))
					}
				}))(ne),
				ae = r("./src/reddit/actions/userFlair/index.ts"),
				oe = r("./src/reddit/icons/svgs/Tag/index.tsx"),
				ie = r("./src/reddit/components/Hovercards/AuthorHovercard/ModFlairActions.m.less"),
				de = r.n(ie);
			const {
				fbt: ce
			} = r("./node_modules/fbt/lib/FbtPublic.js"), le = E.a.wrapped(oe.a, "FlairIcon", de.a);
			var ue = Object(a.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(ae.g)(t.subredditId, t.username))
				}))(e => s.a.createElement(q.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(U.c(e.contextId))
					}
				}, s.a.createElement(le, null), ce._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				me = r("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				pe = r.n(me);

			function be() {
				return (be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ve = E.a.wrapped(P.a, "UserIcon", pe.a),
				fe = E.a.wrapped(L.a, "SubscribeButton", pe.a),
				xe = E.a.wrapped(O.a, "ChatButton", pe.a),
				he = E.a.wrapped(B.a, "KarmaIcon", pe.a),
				Ie = E.a.wrapped(M.a, "PremiumIcon", pe.a),
				ge = E.a.wrapped(_.a, "UserNameLink", pe.a),
				Ce = E.a.div("UserNameMetaData", pe.a),
				_e = E.a.div("MetaDataItem", pe.a),
				Ee = E.a.div("Bullet", pe.a),
				we = E.a.div("UserNameContainer", pe.a),
				je = E.a.div("UserInfoContainer", pe.a),
				Oe = E.a.div("PostKarma", pe.a),
				ye = E.a.div("CommentKarma", pe.a),
				Ne = E.a.div("KarmaGrid", pe.a),
				Le = E.a.div("GenericKarma", pe.a),
				Pe = E.a.a("InfoLink", pe.a),
				Ue = E.a.div("KarmaCount", pe.a),
				ke = E.a.div("KarmaLabel", pe.a),
				Se = E.a.div("GenericKarmaLabel", pe.a),
				Be = E.a.div("BannerImage", pe.a),
				Me = E.a.div("UserContainer", pe.a),
				Ae = E.a.div("BottomSpacer", pe.a),
				He = E.a.div("Container", pe.a),
				Te = e => s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement(ge, {
					to: `/user/${e.userName}/`
				}, `u/${e.userName}`), e.user.isEmployee && s.a.createElement(S.a, {
					className: pe.a.adminIcon,
					title: g.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && s.a.createElement(_.a, {
					to: "/premium"
				}, s.a.createElement(Ie, null))), s.a.createElement(Ce, null, e.user.username && s.a.createElement(_e, null, e.user.username, s.a.createElement(Ee, null, "•")), s.a.createElement(_e, null, Object(j.d)(e.user.createdUtc || e.user.created)))),
				Fe = e => {
					const {
						showAwardKarma: t,
						user: r
					} = e;
					return t ? s.a.createElement(Ne, null, s.a.createElement(Le, null, s.a.createElement(Ue, null, Object(w.b)(r.postKarma)), s.a.createElement(Se, null, g.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [g.fbt._plural(r.postKarma)], {
						hk: "3K4oaH"
					}))), s.a.createElement(Le, null, s.a.createElement(Ue, null, Object(w.b)(r.commentKarma)), s.a.createElement(Se, null, g.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [g.fbt._plural(r.commentKarma)], {
						hk: "3gKRx9"
					}))), s.a.createElement(Le, null, s.a.createElement(Ue, null, Object(w.b)(r.awardeeKarma)), s.a.createElement(Se, null, g.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [g.fbt._plural(r.awardeeKarma)], {
						hk: "3nzm9q"
					}), s.a.createElement(Pe, {
						href: A.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(k.a, {
						className: pe.a.infoIcon
					})))), s.a.createElement(Le, null, s.a.createElement(Ue, null, Object(w.b)(r.awarderKarma)), s.a.createElement(Se, null, g.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [g.fbt._plural(r.awarderKarma)], {
						hk: "4zXN3B"
					}), s.a.createElement(Pe, {
						href: A.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(k.a, {
						className: pe.a.infoIcon
					}))))) : s.a.createElement(je, null, s.a.createElement(he, null), s.a.createElement(Oe, null, s.a.createElement(Ue, null, Object(w.b)(r.postKarma)), s.a.createElement(ke, null, g.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [g.fbt._plural(r.postKarma)], {
						hk: "3K4oaH"
					}))), s.a.createElement(ye, null, s.a.createElement(Ue, null, Object(w.b)(r.commentKarma)), s.a.createElement(ke, null, g.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [g.fbt._plural(r.commentKarma)], {
						hk: "3gKRx9"
					}))))
				},
				Ke = e => {
					const {
						className: t,
						contextId: r,
						currentUser: n,
						hideNSFWPref: a,
						hoverId: o,
						isLoggedIn: i,
						onClickSnoovatar: d,
						origin: c,
						moderatorPermissions: l,
						prefersReducedAnimations: u,
						sendEvent: m,
						showAwardKarma: p,
						style: b,
						subredditId: v,
						topAwardIcon: f,
						userName: x,
						user: h,
						userFlair: I,
						userIsBanned: _,
						userProfileStyles: E,
						acceptChats: w
					} = e;
					if (!h) return s.a.createElement(He, {
						style: b
					});
					const j = !!n && Object(H.e)(n) === x,
						O = !!(null == n ? void 0 : n.snoovatarFullBodyAsset),
						N = h.accountIcon || `${C.a.assetPath}/img/snoo_user_placeholder.png`,
						L = l && l.flair,
						P = l && l.access,
						k = I && I.templateIds && I.templateIds.length > 0,
						S = I && I.displaySettings && I.displaySettings.isEnabled,
						{
							awardedLastMonth: B
						} = h,
						M = !!h.snoovatarFullBodyAsset,
						A = h.isNSFW && a;
					let K;
					return K = M ? !A && E && E.bannerBackgroundImage || void 0 : A ? `${C.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, s.a.createElement(He, {
						className: t,
						id: o,
						style: b
					}, !M && K && s.a.createElement(Be, {
						style: {
							backgroundImage: `url('${K}')`
						}
					}), s.a.createElement(Me, null, M ? s.a.createElement(F.a, {
						bannerBackgroundImage: K,
						compact: !0,
						currentUserHasSnoovatar: O,
						isEmployee: h.isEmployee,
						isGold: h.isGold,
						isNSFW: h.isNSFW,
						isOwnProfile: j,
						onClickSnoovatar: d,
						prefersReducedAnimations: !!u,
						snoovatarUrl: h.snoovatarFullBodyAsset,
						title: null,
						userCreated: h.created,
						username: x,
						url: `/user/${e.userName}/`
					}) : s.a.createElement(we, null, s.a.createElement(ve, {
						iconUrl: N,
						isNSFW: h.isNSFW,
						userName: x
					}), s.a.createElement(Te, {
						origin: c,
						user: h,
						userName: x
					})), s.a.createElement(Fe, {
						showAwardKarma: p,
						user: h
					}), B && s.a.createElement(T.a, {
						recentAwardings: B,
						topAwardIcon: f,
						username: x
					}), i && !j && !_ && w && s.a.createElement(xe, {
						contextId: r,
						userId: h.id
					}, g.fbt._("Start Chat", null, {
						hk: "2mfqRE"
					})), h.hasUserProfile && !_ && !j && s.a.createElement(fe, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(U.g)(e ? "unfollow" : "follow", r),
						small: !0
					})), P && r && !j && v && s.a.createElement(se, {
						contextId: r,
						subredditId: v,
						sendEvent: m,
						username: x
					}), L && r && k && S && v && s.a.createElement(ue, {
						contextId: r,
						subredditId: v,
						sendEvent: m,
						username: x
					}), s.a.createElement(y.i, {
						contextId: r,
						subredditId: v,
						user: h
					}), !(P || i) && s.a.createElement(Ae, null))
				},
				Re = Object(N.a)(Ke),
				De = e => {
					const t = e.activeTooltipId === e.tooltipId;
					return s.a.createElement(Re, be({
						isOpen: t
					}, e))
				};
			De.WrappedComponent = Ke;
			var Ze = De;
			const qe = Object(o.c)({
					tokenName: l.n,
					activeTooltipId: f.a,
					currentUser: x.j,
					isLoggedIn: x.K,
					hideNSFWPref: x.C,
					moderatorPermissions: (e, {
						subredditId: t
					}) => t ? Object(m.k)(e, {
						subredditId: t
					}) : void 0,
					origin: u.i,
					prefersReducedAnimations: I.c,
					showAwardKarma: (e, t) => {
						return Object(f.a)(e) === t.tooltipId
					},
					topAwardIcon: (e, {
						userName: t
					}) => Object(c.e)(e, {
						userName: t,
						minSize: 32
					}),
					user: x.nb,
					userFlair: (e, {
						subredditId: t
					}) => t ? Object(h.c)(e, {
						subredditId: t
					}) : void 0,
					userIsBanned: (e, t) => !!Object(v.m)(t) && Object(v.fb)(e, t),
					userProfileStyles: (e, t) => Object(b.m)(e, Object(p.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const r = Object(p.h)(e, {
							profileName: t.userName
						});
						return !r || r.acceptChats
					}
				}),
				We = Object(a.b)(qe, (e, t) => ({
					onClickSnoovatar: () => e(Object(i.b)("user_hovercard")),
					onHideTooltip: () => e(Object(d.i)())
				}));
			t.a = We(e => s.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, s.a.createElement(Ze, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				currentUser: e.currentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				moderatorPermissions: e.moderatorPermissions,
				onClickSnoovatar: e.onClickSnoovatar,
				onHideTooltip: e.onHideTooltip,
				origin: e.origin,
				prefersReducedAnimations: e.prefersReducedAnimations,
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
				userProfileStyles: e.userProfileStyles,
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
				return g
			})), r.d(t, "b", (function() {
				return C
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/lessComponent.tsx"),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/actions/profile/index.ts"),
				c = r("./src/reddit/actions/tooltip.ts"),
				l = r("./src/reddit/selectors/tooltip.ts");
			const u = Object(i.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var m = Object(o.b)(u, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && (await e(Object(d.d)(t.authorOrSubredditName)), t.sendHoverEvent())
					}
				})),
				p = r("./src/reddit/actions/subreddit.ts");
			const b = Object(i.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var v = Object(o.b)(b, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.t)(t.authorOrSubredditName))
					}
				})),
				f = r("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				x = r.n(f);
			class h extends s.a.Component {
				constructor() {
					super(...arguments), this.closeHovercardTimeoutId = 0, this.openHovercardTimeoutId = 0, this.isHovering = !1, this.hoverEl = void 0, this.onHoverElMouseEnter = () => {
						this.isHovering = !0
					}, this.onHoverElMouseLeave = () => {
						this.isHovering = !1
					}, this.onMouseEnter = e => {
						this.closeHovercardTimeoutId && clearTimeout(this.closeHovercardTimeoutId), this.openHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.dropdownIsOpen || this.props.onOpenUserDropdown()
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
			const I = a.a.wrapped(h, "HoverDiv", x.a),
				g = m(I),
				C = v(I)
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
				return i
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/layout/row/Inline/index.tsx"),
				a = r("./src/reddit/components/Hovercards/helpers.m.less"),
				o = r.n(a);
			const i = n.a.wrapped(s.a, "UserActionItem", o.a),
				d = e => {
					const {
						author: t,
						itemId: r,
						subredditName: n,
						tooltipIdPrefix: s,
						tooltipType: a
					} = e;
					let o = s;
					return r && (o = `${o}--${r}`), a && (o = `${o}--${a}`), t && (o = `${o}--${t}`), n && (o = `${o}--${n}`), o
				}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/config.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				i = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				d = r.n(i);
			const {
				fbt: c
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
						totalCount: i
					} = t, l = n.description ? n.description : n.name;
					return s.a.createElement("a", {
						className: d.a.AwardedLastMonth,
						href: `${a.a.oldRedditUrl}/user/${r}/gilded`
					}, s.a.createElement("div", {
						className: d.a.iconColumn
					}, s.a.createElement("img", {
						alt: l,
						className: d.a.icon,
						src: e
					}), i > 1 && s.a.createElement("span", {
						className: d.a.count
					}, `+${Object(o.b)(i-1)}`)), s.a.createElement("div", {
						className: d.a.textColumn
					}, c._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [c._param("award-name", n.name), c._plural(i)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = l
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less": function(e, t, r) {
			e.exports = {
				Banner: "_2ZyL7luKQghNeMnczY3gqW",
				banner: "_2ZyL7luKQghNeMnczY3gqW"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./src/reddit/models/Image/index.tsx"),
				i = r("./src/reddit/components/EditableImage/index.tsx"),
				d = r("./src/reddit/models/User/index.ts"),
				c = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				u = r.n(l);
			class m extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const r = await Object(o.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(r, "profileBanner"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						bannerUrl: e,
						className: t,
						currentUser: r,
						hideNSFWPref: s,
						isNSFW: o,
						userName: c
					} = this.props, {
						isUpdating: l
					} = this.state, m = e ? a.a.createElement("div", {
						className: u.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return r && Object(d.e)(r) === c ? a.a.createElement(i.a, {
						altText: n.fbt._("{userName} banner image", [n.fbt._param("userName", c)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, m) : o && s ? null : m
				}
			}
			t.a = Object(c.a)(m)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/actions/preferences.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const i = Object(s.c)({
					currentUser: o.j,
					hideNSFWPref: o.C
				}),
				d = Object(n.b)(i, e => ({
					imageUpdateRequested: (t, r) => e(Object(a.B)(t, r))
				}));
			t.a = d
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, r) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/Button/index.tsx"),
				i = r("./src/reddit/icons/svgs/Chevron/index.tsx"),
				d = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				c = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = r.n(c);
			const {
				fbt: u
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				compact: e,
				currentUserHasSnoovatar: t,
				isOwnProfile: r,
				onClick: n
			}) {
				return s.a.createElement(o.q, {
					onClick: n,
					className: Object(a.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !t && r,
						[l.a.compactButtonLayout]: e
					})
				}, t ? s.a.createElement(d.a, {
					className: l.a.shirtIcon
				}) : s.a.createElement("div", {
					className: l.a.shirtIcon
				}), t ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : r ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), t ? s.a.createElement("div", {
					className: l.a.chevronIcon
				}) : s.a.createElement(i.a, {
					className: l.a.chevronIcon
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less": function(e, t, r) {
			e.exports = {
				BannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				bannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				BannerImage: "_1IvROQ79nAJZ87_JkTFsLO",
				bannerImage: "_1IvROQ79nAJZ87_JkTFsLO"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				o = r("./src/reddit/icons/svgs/Close/index.tsx"),
				i = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				d = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				c = r.n(d),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				u = r.n(l);
			t.a = function({
				bannerBackgroundImage: e,
				isNSFW: t,
				username: r,
				editMode: n,
				isDeletingBanner: d,
				onDeleteBanner: l
			}) {
				return s.a.createElement("div", {
					className: c.a.bannerWrapper
				}, s.a.createElement(i.a, {
					bannerUrl: e,
					isNSFW: t,
					userName: r
				}), n && e && (d ? s.a.createElement(a.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : s.a.createElement(o.a, {
					className: u.a.closeIcon,
					onClick: l
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/timeAgo/index.ts"),
				i = r("./src/reddit/controls/InternalLink/index.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = function({
				className: e,
				shouldDisplaySnoovatar: t,
				url: r,
				userCreated: n,
				username: c,
				...l
			}) {
				const u = t ? a.fbt._("{username} · {time since account creation}", [a.fbt._param("username", `u/${c}`), a.fbt._param("time since account creation", Object(o.d)(n, {
					noPostfix: !0,
					shortenedUnit: !0
				}))], {
					hk: "2k741A"
				}) : `u/${c}`;
				return r ? s.a.createElement(i.a, d({}, l, {
					className: e,
					to: r
				}), u) : s.a.createElement("span", d({}, l, {
					className: e
				}), u)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, r) {
			e.exports = {
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, r) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
				bottomGlow: "_18b8M-cZftX_frkYRy3DN1",
				topGlow: "_1-PwjX8ETMrfCu2hAkAHFd",
				snoovatar: "_2bLCGrtCCJIMNCZgmAMZFM",
				premiumGlow: "_18BjSGkpIVVfS1xJXL1eoW",
				snoovatarUserName: "_28nEhn86_R1ENZ59eAru8S",
				snoovatarUserTitle: "_3LM4tRaExed4x1wBfK1pmg",
				snoovatarSettingsLink: "PNl4tAYE2TRxhOc34iqcY",
				snoovatarAdminIcon: "kOKnXvA8jebkfk2wVIb9R",
				snoovatarNsfwIcon: "Wb4wBt474lETdwG0YpWID",
				snoovatarPremiumIcon: "_3NZUKOdsA_2X9TrZGSNQyP",
				particleWrapper: "_3sckwXGpSWEBLgH7dBHDSI",
				particle: "R8JC02qFTBSKsWVEamnnh",
				particleX0: "_2FHPkirHUUZZ53WuQRt_ku",
				particleX20: "DeM4CXWl9dmFhzxbChV3v",
				particleX40: "_2jQr36LfrhyZudo0c4r5qb",
				particleX60: "_2ThlCGLfserHkMW64od-w_",
				particleX80: "_2PoCUl_D7HnNn8GhlmyNMn",
				particleX100: "_3xLPb9tG5DMGKH5Qmq0lMn",
				particleFloat1: "_2Tlu1OsBOwuxXIF1MLT2k",
				floatUp1: "_1-74-z_0KhbvP-MLUh63RF",
				particleFloat2: "BW4L6Zj7IYZtY4carTDWz",
				floatUp2: "BhXouEsciSb0lIayg329d",
				particleFloat3: "UjQ0lRcZlylUigyKGCSrO",
				floatUp3: "_2cAI3EiKyyG1hMFOLbG7ka",
				particleFloat4: "_2_ke4gf08pfYrY6lP-aPZ_",
				floatUp1Left: "_2D7to5Dk7q0ZyKN3MMQfuJ",
				particleFloat5: "_2wM6_vp4fY0ziLkOrGaobV",
				floatUp2Left: "_3BR2d3YbOQLeA3LmAmwBJL",
				particleFloat6: "_23n0biPU5CQf96pEUSFupJ",
				floatUp3Left: "_3FnzyfIl1wHuAYA54rlkJH",
				particleDelay1: "_3meTYeYw1F3UdYO0v-gAYr",
				particleDelay2: "_3d8_fd8LwWsj0tyZWIeQdt",
				particleDelay3: "_2PLSBdnBk3jcotYknlKud1",
				particleDelay4: "_2pnTv5ZAxpIbkx38PkPJPg",
				particleDelay5: "_3j1NzwW_t2Ufnx4ed9QabN",
				particleDelay6: "_1hddWHnQ8DFnwilLlN9GEO",
				particleDelay7: "_3eRR1I_MwXC19q9sr8mKaR",
				particleDelay8: "_1sCUpg4sdajNDXrcNTP0qW",
				particleDelay9: "_3J5h1MCyY_xUf2QP7PDSHY",
				particleDelay10: "_2RqcLn9onSZQmKQgvKmSF7"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./src/config.ts"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/controls/InternalLink/index.tsx"),
				c = r("./src/reddit/icons/svgs/Admin/index.tsx"),
				l = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				u = r("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				m = r("./src/reddit/icons/svgs/Settings/index.tsx"),
				p = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				b = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				v = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				f = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				x = r.n(f);
			const h = 25;

			function I(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function g(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const C = I("particleDelay", x.a),
				_ = I("particleX", x.a),
				E = I("particleFloat", x.a),
				w = () => {
					const e = g(_),
						t = g(E),
						r = g(C);
					return Object(i.a)(x.a.particle, e, t, r)
				};
			class j extends a.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < h; t++) e.push(this.createParticle(t));
					return a.a.createElement("div", {
						role: "presentation",
						className: x.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return a.a.createElement("div", {
						key: e,
						className: `${w()}`
					})
				}
			}
			var O = j,
				y = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				N = r.n(y);
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: r,
				editMode: s,
				isDeletingBanner: f,
				isEmployee: h,
				isGold: I,
				isNSFW: g,
				isOwnProfile: C,
				onClickSnoovatar: _,
				onDeleteBanner: E,
				prefersReducedAnimations: w,
				snoovatarUrl: j,
				title: y,
				userCreated: L,
				username: P,
				url: U
			}) => a.a.createElement(a.a.Fragment, null, a.a.createElement(b.a, {
				bannerBackgroundImage: e,
				editMode: !!s,
				isNSFW: g,
				username: P,
				isDeletingBanner: !!f,
				onDeleteBanner: E
			}), a.a.createElement("div", {
				className: x.a.snoovatarContainer
			}, I && a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
				className: x.a.topGlow
			}), a.a.createElement("div", {
				className: x.a.bottomGlow
			}), !w && a.a.createElement(O, null)), a.a.createElement("img", {
				className: Object(i.a)(x.a.snoovatar, {
					[x.a.premiumGlow]: I
				}),
				src: j || void 0
			})), !s && C && a.a.createElement(d.a, {
				to: "/settings/profile",
				className: x.a.snoovatarSettingsLink
			}, a.a.createElement(m.a, {
				className: N.a.settingsIcon
			})), a.a.createElement("h1", {
				className: x.a.snoovatarUserTitle
			}, y || P, h && a.a.createElement(c.a, {
				className: x.a.snoovatarAdminIcon,
				title: n.fbt._("Reddit admin", null, {
					hk: "goUUb"
				})
			}), I && a.a.createElement("a", {
				title: n.fbt._("{username} has Reddit Premium", [n.fbt._param("username", P)], {
					hk: "3Fylv"
				}),
				href: `${o.a.redditUrl}/premium`
			}, a.a.createElement(u.a, {
				className: x.a.snoovatarPremiumIcon
			})), g && a.a.createElement(l.a, {
				className: x.a.snoovatarNsfwIcon,
				title: n.fbt._("NSFW - Adult Content", null, {
					hk: "2Iw7mN"
				})
			})), a.a.createElement(v.a, {
				className: x.a.snoovatarUserName,
				shouldDisplaySnoovatar: !0,
				username: P,
				userCreated: L,
				url: U
			}), (C || !r && !!j) && a.a.createElement(p.a, {
				compact: t,
				currentUserHasSnoovatar: r,
				isOwnProfile: C,
				onClick: _
			}))
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, r) {
			e.exports = {
				actionItem: "_1l7CTV4NjDjmzX8DiiSgTL",
				AwardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				awardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				textColumn: "_wi1DtT7oN7k_x5oIV8zm",
				iconColumn: "_32tzMaZn7x3dfQC5MXndJn",
				icon: "_12jN4wdttUosp76WHzuieI",
				count: "_6xPPP5HdELF-SZJL8layH",
				awardIcon: "_2Eq8z6UD7I0ul3wnZ-YT80",
				adminIcon: "_1sNQxemH_0rq1jtZAMyAZd",
				snoovatarAdminIcon: "_1rf3zLc4sH59mO7_BEXyze",
				snoovatarPremiumIcon: "_3QQFENUs15G6BHI5pjsswJ",
				button: "_2q1wcTx60QKM_bQ1Maev7b"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, r) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return v
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./src/reddit/controls/Button/index.tsx"),
				i = r("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = r("./src/reddit/components/SubscribeButton/Base.m.less"),
				c = r.n(d),
				l = r("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = ({
					border: e,
					small: t,
					...r
				}) => a.a.createElement(o.q, u({}, r, {
					priority: e ? o.b.Primary : o.b.Plain,
					className: Object(l.a)(r.className, c.a.BaseButton),
					size: t ? o.c.S : o.c.M
				})),
				p = e => a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
					className: c.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? n.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : n.fbt._("Following", null, {
					hk: "1wQlVR"
				})), a.a.createElement("span", {
					className: c.a.UnsubscribeButtonHover
				}, "subreddit" === e ? n.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : n.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				b = ({
					buttonType: e,
					border: t,
					small: r,
					...n
				}) => a.a.createElement(o.q, u({}, n, {
					priority: t ? o.b.Secondary : o.b.Plain,
					className: Object(l.a)(n.className, c.a.BaseButton),
					size: r ? o.c.S : o.c.M,
					text: p(e)
				}));
			class v extends a.a.Component {
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
						small: n = !1
					} = this.props, s = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: n
					};
					return this.props.userIsSubscriber ? a.a.createElement(b, u({}, s, {
						buttonType: this.props.identifier.type
					})) : a.a.createElement(m, u({}, s, {
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
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const s = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
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
				o = ({
					type: e,
					key: t
				}) => a[s({
					type: e
				})][t]()
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
				userIsSubscriber: o.gb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(a.d([t], !0)),
				onSubscriptionsRequested: () => e(a.e()),
				onUnsubscribe: () => e(a.d([t], !1))
			}))
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			class a extends s.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							r = this.props.multiple ? [...t] : t[0];
						this.props.onChange(r), this.setState(() => ({
							value: r
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, r = "string" == typeof t.value ? t.value : "", n = "object" == typeof t.value ? t.value : null, a = r || n;
					return s.a.createElement("div", {
						className: e.className
					}, r && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: r,
						tabIndex: e.tabIndex
					}), !a && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = r.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => s.a.createElement("div", {
				className: Object(a.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				}
			})
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "j", (function() {
				return o
			})), r.d(t, "i", (function() {
				return i
			})), r.d(t, "h", (function() {
				return d
			})), r.d(t, "k", (function() {
				return c
			})), r.d(t, "l", (function() {
				return l
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "f", (function() {
				return f
			})), r.d(t, "m", (function() {
				return x
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

			function i(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function d(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "homestead";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}
			async function c(e, t, r) {
				return Object(a.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function l(e, t, r) {
				return await Object(a.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function u(e, t, r) {
				return await Object(a.a)(e, {
					method: "delete",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations/${r}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(n || (n = {}));
			const m = (e, t, r) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: r
				}),
				p = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				b = e => ({
					type: "claim",
					subredditId: e
				}),
				v = e => ({
					type: "subscribe",
					subredditId: e
				}),
				f = (e, t, r, n) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: n
				});
			async function x(e, t) {
				return await Object(a.a)(e, {
					method: "put",
					endpoint: `${s.a.metaUrl}/crypto/ethereum/transaction-intent`,
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
				i = r.n(o);
			const d = r("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: `${Object(a.b)("info",e.isFilled)} ${e.className}`
			}), "InfoIcon", i.a);
			t.a = d
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
				i = r.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
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
		"./src/reddit/icons/svgs/NewPost/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 19 19"
			}, s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.55 2.58716L16.413 4.45018C16.9354 4.97264 16.9354 5.82198 16.413 6.34445L14.7732 7.98419C14.6857 8.07171 14.5714 8.11547 14.458 8.11547C14.3436 8.11547 14.2293 8.07171 14.1418 7.98419L11.0159 4.85832C10.8418 4.68417 10.8418 4.40105 11.0159 4.2269L12.6557 2.58716C13.1781 2.0647 14.0275 2.0647 14.55 2.58716ZM9.7531 5.48975C9.92725 5.31559 10.2104 5.31559 10.3845 5.48975L13.5104 8.61561C13.6845 8.78977 13.6845 9.07288 13.5104 9.24703L5.8806 16.8768C5.79665 16.9608 5.68322 17.0072 5.56533 17.0072H2.43947C2.19208 17.0072 1.99292 16.808 1.99292 16.5607V13.4348C1.99292 13.3169 2.03936 13.2035 2.12331 13.1195L9.7531 5.48975Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), s.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, s.a.createElement("stop", {
				stopColor: "#EC0623"
			}), s.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
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
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "q", (function() {
				return p
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "i", (function() {
				return v
			})), r.d(t, "n", (function() {
				return f
			})), r.d(t, "o", (function() {
				return x
			})), r.d(t, "m", (function() {
				return h
			})), r.d(t, "k", (function() {
				return g
			})), r.d(t, "r", (function() {
				return C
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "p", (function() {
				return w
			})), r.d(t, "l", (function() {
				return j
			})), r.d(t, "j", (function() {
				return O
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				s = r("./src/reddit/endpoints/governance/crypto.ts");
			const a = [],
				o = {},
				i = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				d = (e, {
					subredditId: t
				}) => {
					const r = C(e, {
						subredditId: t
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.harberger ? r.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				c = (e, t) => {
					const r = I(e, t);
					if (r) return r.mainHeader
				},
				l = (e, t) => {
					const r = I(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				u = (e, t) => {
					const r = I(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : o
				},
				m = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				p = (e, t) => {
					const r = m(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				b = (e, t) => {
					const r = m(e, t);
					return r && r.amount || "0"
				},
				v = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || a
				},
				f = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				x = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || i,
				h = (e, t) => {
					const r = w(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				I = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				g = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				C = (e, t) => {
					const r = g(e, t);
					return r && r.walletProvider
				},
				_ = (e, t) => {
					const r = C(e, t),
						n = g(e, t);
					return r && r.provider || n && n.provider
				},
				E = (e, t) => {
					const r = _(e, t);
					return r === s.a.Ethereum || r === s.a.Rinkeby || r === s.a.EthTraderEthereum || r === s.a.EthTraderRinkeby
				},
				w = (e, t) => {
					const r = C(e, t),
						n = _(e, t);
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
				j = (e, {
					subredditId: t
				}) => {
					const r = C(e, {
						subredditId: t
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				O = (e, t) => {
					const r = g(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard~EconTopAwardersModal~ModerationPages~Settings~SubredditWiki.0a890870025c429fccda.js.map