// https://www.redditstatic.com/desktop2x/Multireddit.9e50b7a756f3506aa505.js
// Retrieved at 6/13/2023, 3:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Multireddit"], {
		"./src/higherOrderComponents/withAdClickLocation/Locations.ts": function(e, t, n) {
			"use strict";
			var r, o;
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.UNKNOWN = "unknown", e.TITLE = "title", e.TOP_BAR = "top_bar", e.MEDIA = "media", e.BODY = "body", e.BACKGROUND = "background", e.CTA_URL = "cta_url", e.CTA_BUTTON = "cta_button", e.CTA_WHITESPACE = "cta_whitespace", e.CTA_CAPTION = "cta_caption", e.SUBREDDIT = "subreddit", e.TIMESTAMP = "timestamp", e.USER = "user"
				}(r || (r = {})),
				function(e) {
					e.COMMENTS = "comments", e.FLATLIST_SHARE = "fl_share", e.FLATLIST_AWARD = "fl_award", e.FLATLIST_SAVE = "fl_save", e.FLATLIST_GENERAL = "fl_unknown", e.OVERFLOW_MENU = "overflow_menu", e.UPVOTE = "upvote", e.DOWNVOTE = "downvote"
				}(o || (o = {}))
		},
		"./src/lib/forceHttps/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") || e.startsWith("blob") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/constants/intlSupport.ts");

			function i(e) {
				let {
					showDay: t,
					useUtc: n,
					shortMonths: i,
					locale: c = r.DEFAULT_LOCALE
				} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				const a = new Date(e * o.Xb);
				return s.a ? new Intl.DateTimeFormat(c, {
					month: i ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(a) : a.toLocaleString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.DEFAULT_LOCALE;
				const n = e.toString().length > 10,
					o = new Date(e * (n ? 1 : 1e3));
				return o.toLocaleString(t, {
					weekday: "short",
					month: "short",
					year: "numeric",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					timeZoneName: "short",
					timeZone: "UTC"
				})
			}
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const o = "EMBEDS__UNLOADABLE",
				s = "EMBEDS__LOADABLE",
				i = Object(r.a)(o),
				c = Object(r.a)(s)
		},
		"./src/reddit/actions/multireddit/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "q", (function() {
				return r
			})), n.d(t, "r", (function() {
				return o
			})), n.d(t, "s", (function() {
				return s
			})), n.d(t, "t", (function() {
				return i
			})), n.d(t, "u", (function() {
				return c
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "l", (function() {
				return p
			})), n.d(t, "m", (function() {
				return f
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "o", (function() {
				return E
			})), n.d(t, "p", (function() {
				return x
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "b", (function() {
				return T
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "A", (function() {
				return j
			})), n.d(t, "B", (function() {
				return D
			})), n.d(t, "z", (function() {
				return I
			})), n.d(t, "y", (function() {
				return C
			})), n.d(t, "v", (function() {
				return g
			})), n.d(t, "w", (function() {
				return y
			})), n.d(t, "x", (function() {
				return v
			})), n.d(t, "d", (function() {
				return L
			}));
			const r = "MULTIREDDIT__MORE_POSTS_FAILED",
				o = "MULTIREDDIT__MORE_POSTS_LOADED",
				s = "MULTIREDDIT__MORE_POSTS_PENDING",
				i = "MULTIREDDIT__MY_MULTIREDDITS_PENDING",
				c = "MULTIREDDIT__MY_MULTIREDDITS_RECEIVED",
				a = "MULTIREDDIT__CREATE_FAILURE",
				d = "MULTIREDDIT__CREATE_PENDING",
				l = "MULTIREDDIT__CREATE_SUCCESS",
				u = "MULTIREDDIT__DELETE_PENDING",
				m = "MULTIREDDIT__DELETE_SUCCESS",
				b = "MULTIREDDIT__DELETE_FAILURE",
				p = "MULTIREDDIT__DUPLICATE_PENDING",
				f = "MULTIREDDIT__DUPLICATE_SUCCESS",
				h = "MULTIREDDIT__DUPLICATE_FAILURE",
				_ = "MULTIREDDIT__EDIT_FAILURE",
				E = "MULTIREDDIT__EDIT_PENDING",
				x = "MULTIREDDIT__EDIT_SUCCESS",
				O = "MULTIREDDIT__ADD_SUBREDDIT_FAILURE",
				T = "MULTIREDDIT__ADD_SUBREDDIT_PENDING",
				S = "MULTIREDDIT__ADD_SUBREDDIT_SUCCESS",
				j = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_PENDING",
				D = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_SUCCESS",
				I = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_FAILURE",
				C = 10,
				g = "MULTIREDDIT__REMOVE_SUBREDDIT_FAILURE",
				y = "MULTIREDDIT__REMOVE_SUBREDDIT_PENDING",
				v = "MULTIREDDIT__REMOVE_SUBREDDIT_SUCCESS";
			var L;
			! function(e) {
				e.InvalidSrQuarantine = "INVALID_SR_QUARANTINE", e.TooManySubreddits = "MULTI_TOO_MANY_SUBREDDITS"
			}(L || (L = {}))
		},
		"./src/reddit/actions/postList.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				o = (n("./src/reddit/actions/embedAndImage.ts"), n("./src/reddit/actions/video.ts"), n("./src/reddit/helpers/trackers/postList.ts"));
			n("./src/reddit/constants/postLayout.ts"), n("./src/reddit/models/Media/index.ts"), n("./src/reddit/selectors/platform.ts"), n("./src/reddit/selectors/posts.ts");
			n("./src/reddit/selectors/video.ts");
			const s = "POSTLIST__MARKED_END",
				i = "POSTLIST__UNMARKED_END",
				c = Object(r.a)(s),
				a = Object(r.a)(i),
				d = (e, t) => async (n, r) => {
					const s = r();
					e in s.listings.postOrder.fetchedTokens ? e in s.listings.postOrder.ids ? n(a({
						listingKey: e
					})) : o.l(s, e) : n(c({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/actions/subredditAutocomplete/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = "SUBREDDIT_AUTOCOMPLETE__PENDING",
				o = "SUBREDDIT_AUTOCOMPLETE__LOADED",
				s = "SUBREDDIT_AUTOCOMPLETE__FAILED"
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "h", (function() {
				return i
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			}));
			const r = "SUBSCRIPTION__FETCH_DATA_PENDING",
				o = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				s = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				i = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				c = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				a = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return k
			})), n.d(t, "d", (function() {
				return U
			})), n.d(t, "c", (function() {
				return A
			})), n.d(t, "a", (function() {
				return R
			})), n.d(t, "b", (function() {
				return P
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/linkMatchers/customLinks.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/login.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/subscription/constants.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/posts.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				p = n("./src/reddit/constants/headers.ts");
			var f = n("./src/reddit/endpoints/subreddit/subscriptions.ts"),
				h = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				_ = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				E = n("./src/reddit/models/GqlTopLevelField.ts"),
				x = n("./src/reddit/models/User/index.ts");

			function O(e) {
				const t = [],
					n = [],
					r = {},
					o = {},
					{
						followedRedditorsInfo: s
					} = e.identity;
				for (const c of s.edges) {
					if (c.node.__typename !== x.c.AvailableRedditor || !c.node.profile) continue;
					const e = Object(h.a)(c.node.profile);
					r[e.id] = e;
					const {
						isFavorite: n
					} = c.node.profile;
					n && t.push(e.id)
				}
				const {
					subscribedSubreddits: i
				} = e.identity;
				for (const c of i.edges) {
					if (c.node.__typename !== E.a.Subreddit) continue;
					const e = Object(_.a)(c.node);
					o[e.id] = e;
					const {
						isFavorite: t
					} = c.node;
					t && n.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: n,
					profiles: r,
					subreddits: o
				}
			}
			var T = n("./src/reddit/models/Toast/index.ts"),
				S = n("./src/reddit/selectors/profile.ts"),
				j = n("./src/reddit/selectors/subreddit.ts"),
				D = n("./src/reddit/selectors/subscriptions.ts"),
				I = n("./src/reddit/selectors/user.ts");
			const C = () => r.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				g = Object(i.a)(d.c),
				y = Object(i.a)(d.b),
				v = Object(i.a)(d.a),
				L = Object(i.a)(d.h),
				k = (Object(i.a)(d.i), Object(i.a)(d.g), () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					const o = t();
					if (!o.user.account || o.subscriptions.api.fetched) return;
					e(y());
					const s = await Object(f.a)(r());
					if (s.ok) {
						const t = O(s.body.data);
						e(g(t))
					} else e(v({
						error: s.error
					}))
				}),
				N = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				U = (e, t, n) => async (i, d, m) => {
					let {
						apiContext: b
					} = m, p = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(j.I)(d(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(S.o)(d(), e.name),
						name: `${o.qc}${e.name}`,
						type: e.type
					});
					if (!Object(I.S)(d())) return i(Object(a.k)({
						actionSource: a.a.Subscribe
					})), void i(Object(c.openRegisterModal)());
					const h = Object(I.m)(d());
					if (h) {
						const t = p.length,
							n = e.length;
						if (p = p.filter(e => !N(h, e)), (e = e.filter(e => !N(h, e))).length !== n || p.length !== t) {
							const e = r.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							i(Object(l.f)(Object(l.e)(e, T.b.Error)))
						}
						if (!e.length && !p.length) return
					}
					i(L({
						identifiers: p,
						nameIdentifiers: e,
						profileModels: d().profiles.models,
						subredditModels: d().subreddits.models,
						subscriptionsCount: Object(D.b)(d()),
						userIsSubscriber: t,
						widgetId: n
					}));
					const _ = await Object(f.c)(b(), {
						subredditNames: p.map(e => {
							let {
								name: t
							} = e;
							return t
						}),
						subscribe: t
					});
					if (_.ok) {
						const n = 1 === e.length ? `${"subreddit"===e[0].type?s.d.subreddit:s.d.profile}${e[0].name}` : r.fbt._({
								"*": "{communities} communities",
								_1: "1 community"
							}, [r.fbt._plural(e.length, "communities")], {
								hk: "IgDzJ"
							}),
							o = r.fbt._("Successfully followed {communityname}", [r.fbt._param("communityname", n)], {
								hk: "23Snyg"
							}),
							c = r.fbt._("Successfully unfollowed {communityname}", [r.fbt._param("communityname", n)], {
								hk: "jfC0S"
							}),
							a = r.fbt._("Successfully joined {communityname}", [r.fbt._param("communityname", n)], {
								hk: "1W9UY3"
							}),
							d = r.fbt._("Successfully left {communityname}", [r.fbt._param("communityname", n)], {
								hk: "1saMW"
							});
						i(Object(l.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? o : c : t ? a : d
						}))
					} else {
						i(L({
							identifiers: p,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(D.b)(d()),
							userIsSubscriber: !t,
							widgetId: n
						}));
						const o = r.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						i(Object(l.f)(Object(l.e)(o, T.b.Error)))
					}
					return _.ok
				}, w = Object(i.a)(d.f), A = e => async (t, n, r) => {
					let {
						apiContext: o
					} = r;
					const s = n(),
						i = Object(j.Q)(s, {
							identifier: e
						});
					if (!i) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const c = e.type === u.a.SUBREDDIT ? i.name : `u_${i.name}`,
						a = s.subscriptions.favoriteSubredditOrder || [],
						d = s.subscriptions.favoriteProfileOrder || [],
						m = a.indexOf(e.id),
						b = d.indexOf(e.id),
						p = -1 === m && -1 === b,
						h = s.subreddits.models,
						_ = s.profiles.models,
						E = {
							type: e.type,
							name: i.name
						},
						x = () => Object(j.jb)(n(), {
							identifier: E
						});
					(x() || (await t(U([E], !0)), x())) && (t(w({
						makeFavorite: p,
						identifier: e,
						subredditModels: h,
						profileModels: _
					})), (await Object(f.b)(o(), c, p)).ok || (t(w({
						makeFavorite: !p,
						identifier: e,
						subredditModels: h,
						profileModels: _
					})), t(Object(l.f)({
						text: C(),
						kind: T.b.Error
					}))))
				}, M = Object(i.a)(d.d), R = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const i = n().multireddits.models,
						c = () => {
							t(Object(l.f)({
								text: C(),
								kind: T.b.Error
							}))
						},
						a = i[e];
					if (!a) return void c();
					const d = !a.isFavorited;
					t(M({
						makeFavorite: d,
						multiredditPath: e,
						multiredditsModelsState: i
					})), (await ((e, t, n) => Object(m.a)(Object(b.a)(e, [p.a]), {
						method: o.ob.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(s(), e, d)).ok || (t(M({
						makeFavorite: !d,
						multiredditPath: e,
						multiredditsModelsState: i
					})), c())
				}, F = Object(i.a)(d.e), P = e => async (t, n, s) => {
					let {
						apiContext: i
					} = s;
					const c = n(),
						a = c.multireddits.models;
					if (!Object(I.S)(c)) return;
					const d = function() {
							let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
							t(Object(l.f)({
								text: r.fbt._("Sorry, failed to {followAction}", [r.fbt._param("followAction", e ? r.fbt._("follow", null, {
									hk: "3YMYJK"
								}) : r.fbt._("unfollow", null, {
									hk: "24IYxj"
								}))], {
									hk: "1ufRSl"
								}),
								kind: T.b.Error
							}))
						},
						u = a[e];
					if (!u) return void d();
					const f = !u.isFollowed;
					t(F({
						follow: f,
						multiredditPath: e,
						multiredditsModelsState: a
					})), (await ((e, t, n) => Object(m.a)(Object(b.a)(e, [p.a]), {
						method: o.ob.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: n ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(i(), e, f)).ok || (t(F({
						follow: !f,
						multiredditPath: e,
						multiredditsModelsState: a
					})), d(f))
				}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/lib/matchRoute/index.ts"),
				o = n("./src/lib/opener/index.ts"),
				s = n("./node_modules/react-router-redux/es/index.js");
			const i = function(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return async (n, i, c) => {
					let {
						routes: a
					} = c;
					const d = i();
					Object(r.a)(e, a, d) ? n(Object(s.b)(e)) : t ? Object(o.e)(e, "_blank") : window.location.assign(e)
				}
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const m = e => e.preventDefault();
			t.a = Object(i.a)(e => s.a.createElement(c.e, null, s.a.createElement(c.i, null, s.a.createElement(d.a, null, s.a.createElement(c.q, null, e.headerText || r.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), s.a.createElement(a.a, {
				onClick: t => {
					e.onClose && e.onClose(t), e.toggleModal && e.toggleModal()
				}
			}, s.a.createElement(c.b, null)))), s.a.createElement(c.l, null, s.a.createElement(c.p, {
				className: u.a.ModalText
			}, e.modalText)), s.a.createElement(c.g, null, !e.hideCancelButton && s.a.createElement(c.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || r.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), s.a.createElement(c.u, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(t), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/Emoji/index.m.less": function(e, t, n) {
			e.exports = {
				EmojiDisplay: "_2Gt13AX94UlLxkluAMsZqP",
				emojiDisplay: "_2Gt13AX94UlLxkluAMsZqP"
			}
		},
		"./src/reddit/components/Flair/index.m.less": function(e, t, n) {
			e.exports = {
				FlairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				flairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				FlairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				flairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				TextFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				textFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				transparentBackgroundColor: "_39BEcWjOlYi1QGcJil6-yl",
				RichTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				richTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				MetaFlair: "_1wzhGvvafQFOWAyA157okr",
				metaFlair: "_1wzhGvvafQFOWAyA157okr",
				CloseButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				closeButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				CloseIcon: "_2cvySYWkqJfynvXFOpNc5L",
				closeIcon: "_2cvySYWkqJfynvXFOpNc5L",
				small: "aJrgrewN9C8x1Fusdx4hh",
				large: "_1wj6zoMi6hRP5YhJ8nXWXE",
				flairVariant: "_2VqfzH0dZ9dIl3XWNxs42y"
			}
		},
		"./src/reddit/components/Flair/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return B
			})), n.d(t, "b", (function() {
				return H
			})), n.d(t, "a", (function() {
				return V
			})), n.d(t, "c", (function() {
				return Z
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/pick.js"),
				s = n.n(o),
				i = n("./node_modules/polished/dist/polished.es.js"),
				c = n("./node_modules/react/index.js"),
				a = n.n(c),
				d = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = n("./src/lib/addQueryParams/index.ts"),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				b = n("./src/lib/lessComponent.tsx"),
				p = n("./src/reddit/components/Emoji/index.m.less"),
				f = n.n(p);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = b.a.wrapped(e => {
				let {
					backgroundImage: t,
					style: n,
					...r
				} = e;
				return a.a.createElement("div", h({
					style: {
						...n || {},
						backgroundImage: `url('${t}')`
					}
				}, r))
			}, "EmojiDisplay", f.a);
			var E = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				x = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				O = n("./src/reddit/constants/colors.ts"),
				T = n("./src/reddit/constants/parameters.ts"),
				S = n("./src/reddit/controls/InternalLink/index.tsx"),
				j = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				D = n("./src/reddit/icons/svgs/Close/index.tsx"),
				I = n("./src/reddit/models/Flair/index.ts"),
				C = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = n("./src/reddit/components/Flair/index.m.less"),
				y = n.n(g);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const L = Object(x.a)(E.b),
				k = b.a.div("FlairWrapper", y.a),
				N = b.a.wrapped(d.a, "CloseButton", y.a),
				U = b.a.wrapped(Object(m.a)(e => {
					let {
						forceSmallEmojis: t,
						theme: n,
						...r
					} = e;
					const o = n;
					return a.a.createElement(_, v({
						style: {
							...w(!!t, o) || {}
						}
					}, r))
				}), "FlairEmojiDisplay", y.a),
				w = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: `${t.subredditContext.emojiHeight}px`,
						width: `${t.subredditContext.emojiWidth}px`
					}
				},
				A = (e, t) => {
					const n = t ? `/r/${t}/search` : "/search",
						r = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(l.a)(n, {
						[T.w]: r,
						[T.x]: t ? "1" : ""
					})
				},
				M = e => e.isFlairFilter ? a.a.createElement(S.default, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? a.a.createElement(S.default, {
					onClick: () => e.onClick(e.searchableTerm),
					to: A(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class R extends a.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.state = {
						isTooltipOpen: !1
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							isTooltipOpen: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							isTooltipOpen: !1
						})
					}
				}
				render() {
					const e = a.a.createElement("span", {
						className: Object(u.a)(this.props.className, {
							[y.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(C.a)(this.props).flair,
							color: `${B(this.props)}`
						}
					}, this.props.text, this.props.isSelected && a.a.createElement(N, {
						to: "./",
						onClick: this.props.onCloseClick
					}, a.a.createElement(D.a, {
						className: y.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(C.a)(this.props).flair
						}
					})), !!this.props.tooltip && a.a.createElement(L, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return a.a.createElement(M, {
						flair: e,
						isFlairFilter: this.props.isFlairFilter,
						onClick: this.props.onClick,
						onMouseDown: this.props.onMouseDown,
						searchableTerm: this.props.text,
						subredditName: this.props.subredditName,
						to: this.props.to
					})
				}
			}
			const F = Object(m.a)(R),
				P = Object(m.a)(e => {
					let t = "",
						n = !1;
					const r = e.richtext.map((r, o) => {
						if (r.e === I.c.Emoji) {
							const s = r;
							return t += s.a, n = !0, a.a.createElement(U, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: s.u,
								key: o,
								title: s.a
							})
						} {
							const e = r;
							return t += e.t, a.a.createElement("span", {
								key: o
							}, e.t)
						}
					});
					let o;
					n && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (o = {
						marginTop: `-${e.theme.subredditContext.emojiHeight-16}px`
					});
					const s = a.a.createElement(k, {
						className: Object(u.a)(e.className, {
							[y.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...o,
							backgroundColor: e.backgroundColor || Object(C.a)(e).flair,
							color: `${B(e)}`
						}
					}, r, e.isSelected && a.a.createElement(N, {
						to: "./",
						onClick: e.onCloseClick
					}, a.a.createElement(D.a, {
						className: y.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(C.a)(e).flair
						}
					})));
					return a.a.createElement(M, {
						flair: s,
						isFlairFilter: e.isFlairFilter,
						onClick: e.onClick ? () => {
							e.onClick(t)
						} : void 0,
						onMouseDown: e.onMouseDown,
						searchableTerm: t,
						subredditName: e.subredditName,
						to: e.to
					})
				}),
				B = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(C.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(j.a)(Object(C.a)(e).post, O.a.black, O.a.white) : e.textColor === I.e.Dark ? O.a.black : O.a.white,
				H = b.a.wrapped(F, "TextFlair", y.a),
				G = b.a.wrapped(P, "RichTextFlair", y.a),
				W = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(i.i)(.1, Object(C.a)(s()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				V = b.a.wrapped(e => {
					const t = W(e),
						n = a.a.createElement("span", {
							className: e.className,
							style: {
								border: `1px solid ${t}`,
								color: t
							}
						}, e.text);
					return a.a.createElement(M, {
						flair: n,
						searchableTerm: e.text
					})
				}, "MetaFlair", y.a);

			function Z(e) {
				const {
					className: t,
					disabled: n = !1,
					flair: o,
					isFlairFilter: s,
					isSelected: i,
					onClick: c,
					onCloseClick: d,
					onMouseDown: l,
					subredditName: m,
					usesCommunityStyles: b,
					forceSmallEmojis: p,
					to: f
				} = e, h = Object(u.a)({
					[y.a.flairVariant]: s,
					[y.a.small]: s && !e.large,
					[y.a.large]: s && e.large
				}, t);
				switch (o.type) {
					case I.f.Richtext:
						return n || !o.richtext ? null : a.a.createElement(G, {
							backgroundColor: o.backgroundColor,
							className: h,
							forceSmallEmojis: p,
							isFlairFilter: s,
							isSelected: i,
							onClick: c,
							onCloseClick: d,
							onMouseDown: l,
							redditStyle: !b,
							richtext: o.richtext,
							subredditName: m,
							textColor: o.textColor,
							to: f
						});
					case I.f.Text:
						return n || !o.text ? null : a.a.createElement(H, {
							backgroundColor: o.backgroundColor,
							className: h,
							isFlairFilter: s,
							isSelected: i,
							onClick: c,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: o.text,
							textColor: o.textColor,
							redditStyle: !b,
							to: f
						});
					case I.f.Meta:
						return a.a.createElement(H, {
							backgroundColor: o.backgroundColor,
							className: t,
							isFlairFilter: s,
							subredditName: m,
							text: o.text,
							textColor: o.textColor,
							redditStyle: !b,
							to: f
						});
					case I.f.Nsfw:
					case I.f.Spoiler:
						return a.a.createElement(V, {
							className: t,
							text: o.text,
							type: o.type
						});
					case I.f.Quarantined:
						return null;
					case I.f.Oc:
						return a.a.createElement(H, {
							backgroundColor: O.a.alienblue,
							text: o.text,
							textColor: I.e.Light,
							tooltip: r.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return o.text ? a.a.createElement(H, {
							backgroundColor: o.backgroundColor,
							className: h,
							isFlairFilter: s,
							onClick: c,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: o.text,
							redditStyle: !b,
							to: f
						}) : null
				}
			}
		},
		"./src/reddit/components/HumanDate/HumanDate.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/humanizeDate/index.ts"),
				i = n("./src/reddit/hooks/useLocale.ts");
			t.a = function(e) {
				let {
					seconds: t,
					...n
				} = e;
				var r;
				const c = Object(i.a)(),
					a = {
						...n,
						locale: null !== (r = n.locale) && void 0 !== r ? r : c
					};
				return o.a.createElement(o.a.Fragment, null, Object(s.a)(t, a))
			}
		},
		"./src/reddit/components/HumanDate/HumanDateTime.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				i = n("./src/lib/constants/index.ts");
			var c = n("./src/reddit/hooks/useLocale.ts");
			t.a = function(e) {
				let {
					seconds: t,
					locale: n
				} = e;
				const r = Object(c.a)(),
					a = null != n ? n : r;
				return o.a.createElement(o.a.Fragment, null, function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.DEFAULT_LOCALE;
					const n = e * i.Xb;
					return new Date(n).toLocaleString(t, {
						weekday: "short",
						month: "short",
						year: "numeric",
						day: "2-digit",
						hour: "2-digit",
						minute: "2-digit",
						second: "2-digit",
						timeZoneName: "long"
					})
				}(t, a))
			}
		},
		"./src/reddit/components/HumanDate/TimeAgo.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/timeAgo/index.ts"),
				i = n("./src/reddit/hooks/useLocale.ts");
			t.a = function(e) {
				let {
					seconds: t,
					...n
				} = e;
				var r;
				const c = Object(i.a)(),
					a = {
						...n,
						locale: null !== (r = n.locale) && void 0 !== r ? r : c
					};
				return o.a.createElement(o.a.Fragment, null, Object(s.d)(t, a))
			}
		},
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r.a
			})), n.d(t, "a", (function() {
				return o.a
			})), n.d(t, "b", (function() {
				return s.a
			})), n.d(t, "c", (function() {
				return f
			}));
			var r = n("./src/reddit/components/HumanDate/TimeAgo.tsx"),
				o = n("./src/reddit/components/HumanDate/HumanDate.tsx"),
				s = n("./src/reddit/components/HumanDate/HumanDateTime.tsx"),
				i = n("./node_modules/react/index.js"),
				c = n.n(i),
				a = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				d = n("./node_modules/fbt/lib/FbtPublic.js"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/eventTools/index.ts");

			function m(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.DEFAULT_LOCALE;
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function b(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.DEFAULT_LOCALE;
				const o = Object(u.e)(e, t),
					s = new Date(e * l.Xb);
				let i;
				if (o === u.a.Live || n) return d.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return o === u.a.Future ? i = Object(u.d)(e) ? d.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(u.b)(e) >= 5 ? m(s, r) : function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.DEFAULT_LOCALE;
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(s, r) : o === u.a.Past && (i = Object(u.d)(e) ? d.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : m(s, r)), `${i} @ ${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.DEFAULT_LOCALE;return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(s,r)}`
			}
			var p = n("./src/reddit/hooks/useLocale.ts");
			var f = function(e) {
				let {
					startTime: t,
					endTime: n,
					isLive: r,
					locale: o
				} = e;
				const s = Object(p.a)(),
					i = null != o ? o : s;
				return c.a.createElement(c.a.Fragment, null, b(t, n, r, i))
			};
			n("./src/lib/humanizeUTCDate/index.tsx")
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
				return h
			})), n.d(t, "a", (function() {
				return _
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				a = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = n("./src/reddit/selectors/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const p = m.a.div("Text", u.a),
				f = m.a.div("BottomText", u.a),
				h = e => o.a.createElement(p, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				_ = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return o.a.createElement(f, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				E = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(d.b)(n)(e)
					}
				}),
				x = Object(a.a)(_, [c.a.Click, c.a.Keydown]),
				O = Object(a.a)(h, [c.a.Click, c.a.Keydown]),
				T = Object(s.b)(E);
			t.c = T(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? o.a.createElement(x, b({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : o.a.createElement(O, b({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/higherOrderComponents/asTooltip.tsx"),
				i = n("./src/reddit/constants/elementIds.ts"),
				c = n("./src/reddit/contexts/InsideOverlay.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const n = Object(s.a)(e, t);
				class r extends o.a.PureComponent {
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
						return o.a.createElement(n, a({}, this.props, {
							container: this.state.container || this.props.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(c.b)(r)
			}
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				a = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = n.n(a),
				l = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = (e, t, n) => null != n ? n : t ? e : i.c.Plain,
				b = e => {
					let {
						border: t,
						priority: n,
						small: r,
						...o
					} = e;
					return s.a.createElement(i.t, u({}, o, {
						priority: m(i.c.Primary, t, n),
						className: Object(l.a)(o.className, d.a.BaseButton),
						size: r ? i.d.S : i.d.M
					}))
				},
				p = e => s.a.createElement(s.a.Fragment, null, s.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), s.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? r.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : r.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				f = e => {
					let {
						buttonType: t,
						border: n,
						priority: r,
						small: o,
						...c
					} = e;
					return s.a.createElement(i.t, u({}, c, {
						priority: m(i.c.Secondary, n, r),
						className: Object(l.a)(c.className, d.a.BaseButton),
						size: o ? i.d.S : i.d.M,
						text: p(t)
					}))
				};
			class h extends s.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
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
						id: n,
						priority: r,
						small: o = !1,
						isFullWidth: i = !1,
						style: a
					} = this.props, d = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: r,
						small: o,
						isFullWidth: i,
						style: a
					};
					return this.props.userIsSubscriber ? s.a.createElement(f, u({}, d, {
						buttonType: this.props.identifier.type
					})) : s.a.createElement(b, u({}, d, {
						id: n
					}), this.props.children, Object(c.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				o = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				s = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(o.a)(Object(r.c)(s.a))
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				m = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				b = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				p = n.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const h = Object(c.c)({
					currentUser: d.m,
					isNightMode: d.fb,
					isPresenceUserPrefEnabled: d.X,
					shouldHideNSFW: d.H
				}),
				_ = Object(i.b)(h);
			t.a = _(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: o,
					wrapperClassName: i,
					...c
				} = e, d = Object(a.a)(null == t ? void 0 : t.accountIcon);
				return s.a.createElement("div", {
					className: Object(r.a)(p.a.currentUserIconWrapper, i)
				}, d ? s.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : s.a.createElement(m.b, f({}, c, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && s.a.createElement(l.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/controls/OutboundLink/styled.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/constants/elementClassNames.ts"),
				s = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/styles.m.less"),
				c = n.n(i);
			t.a = r.a.wrapped(s.b, "styledOutboundLink", {
				styledOutboundLink: `${c.a.styledOutboundLink} ${o.l}`
			})
		},
		"./src/reddit/controls/OutboundLink/styles.m.less": function(e, t, n) {
			e.exports = {
				styledOutboundLink: "_13svhQIUZqD9PVzFcLwOKT"
			}
		},
		"./src/reddit/endpoints/subreddit/recommendations.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/redditGQL/operations/SubredditRecommendations.json");
			t.a = (e, t) => Object(r.a)(e, {
				...o,
				variables: t
			})
		},
		"./src/reddit/endpoints/subreddit/subscriptions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var r = n("./src/redditGQL/operations/SubscribedSubreddits.json"),
				o = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			t.a = e => Object(i.a)(e, r);
			const l = (e, t) => {
					let {
						subredditIds: n,
						subredditNames: r,
						subscribe: i
					} = t;
					return Object(s.a)(Object(c.a)(e, [a.a]), {
						method: o.ob.POST,
						endpoint: Object(d.a)(`${e.apiUrl}/api/subscribe`),
						data: {
							action: i ? "sub" : "unsub",
							sr: n && n.join(",") || void 0,
							sr_name: r && r.join(",") || void 0,
							api_type: "json"
						}
					})
				},
				u = (e, t, n) => Object(s.a)(Object(c.a)(e, [a.a]), {
					method: o.ob.POST,
					endpoint: `${e.apiUrl}/api/favorite`,
					data: {
						make_favorite: n ? "true" : "false",
						sr_name: t,
						api_type: "json"
					}
				})
		},
		"./src/reddit/helpers/counters/nsfwblocking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return d
			}));
			var r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/sample/index.ts"),
				s = n("./src/telemetry/helpers/sendCounter.ts");
			const i = () => !1;
			var c;
			! function(e) {
				e.Dismiss = "dismiss", e.Login = "login", e.Signup = "signup", e.View = "view"
			}(c || (c = {}));
			const a = e => {
					i() || Object(s.b)(r.n.Redesign, {
						type: s.a.NsfwBlocking,
						data: {
							action: e
						}
					})
				},
				d = e => {
					!i() && e && Object(o.b)(10) && Object(s.b)(r.n.Redesign, {
						type: s.a.NsfwBlocking,
						data: {
							action: c.View,
							variant: e
						}
					})
				}
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/brcast/dist/brcast.es.js");
			const o = Object(r.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/trackers/customFeeds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => ({
					...Object(r.o)(t),
					customFeed: Object(r.n)(t, e),
					source: "custom_feeds"
				}),
				s = e => t => ({
					...o(e, t),
					action: "click",
					noun: "delete"
				}),
				i = e => t => ({
					...o(e, t),
					action: "click",
					noun: "follow"
				}),
				c = e => t => ({
					...o(e, t),
					action: "click",
					noun: "unfollow"
				}),
				a = e => t => ({
					...o(e, t),
					action: "click",
					noun: "duplicate"
				}),
				d = e => t => ({
					...o(e, t),
					action: "click",
					noun: "share"
				}),
				l = e => t => ({
					...o(e, t),
					action: "click",
					noun: "favorite",
					source: "community_nav"
				}),
				u = e => t => ({
					...o(e, t),
					action: "click",
					noun: "unfavorite",
					source: "community_nav"
				})
		},
		"./src/reddit/helpers/trackers/subredditCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "h", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const s = e => t => ({
					source: e,
					noun: "create_community_button",
					action: "click",
					...o.o(t),
					actionInfo: o.d(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(r.d)(r.a.SubredditCreation, !0)
				}),
				i = (e, t, n) => s => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...o.o(s),
					actionInfo: o.d(s, {
						settingValue: e
					}),
					subreddit: {
						id: n,
						name: t.name,
						publicDescription: t.publicDescription,
						nsfw: t.over18,
						accessType: t.type,
						topicTagContents: t.allTags,
						topicTagPrimaryId: t.primaryTagId
					},
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				c = () => e => ({
					source: "community_form",
					noun: "cancel",
					action: "click",
					...o.o(e),
					actionInfo: o.d(e),
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				a = (e, t) => n => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...o.o(n),
					actionInfo: o.d(n, {
						reason: e,
						settingValue: t
					}),
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				d = () => e => ({
					source: "user_dropdown",
					noun: "create_community",
					action: "click",
					...o.o(e),
					actionInfo: o.d(e)
				}),
				l = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "view",
					...o.o(e),
					actionInfo: o.d(e)
				}),
				u = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "click",
					...o.o(e),
					actionInfo: o.d(e)
				}),
				m = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "dismiss",
					...o.o(e),
					actionInfo: o.d(e)
				})
		},
		"./src/reddit/hooks/useClickSourceData.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/helpers/clickSourceData/index.ts");

			function i() {
				const e = Object(o.e)(e => e.platform.currentPage),
					[t, n] = Object(r.useState)({});
				return Object(r.useEffect)(() => {
					n(Object(s.b)(e))
				}, [e]), t
			}
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				o = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/meta.ts");
			const c = "undefined" == typeof document ? function() {
				const e = Object(s.e)(i.k) || o.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? o.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || o.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? o.DEFAULT_LOCALE : e
			};
			t.a = c;
			const a = () => {
				const e = c(),
					t = Object(s.e)(i.b);
				return t ? e.replace(/([a-z]+-)([A-Z]+)/, `$1${t}`) : e
			}
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, o.a.createElement("g", null, o.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), o.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/layout/row/Inline/index.m.less"),
				s = n.n(o);
			t.a = r.a.div("inlineRow", s.a)
		},
		"./src/reddit/models/ContentGate.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.CustomFeedDoesNotExist = "CustomFeedDoesNotExist", e.GoldSubreddit = "GoldSubreddit", e.Nsfw = "Nsfw", e.NsfwCustomFeed = "NsfwCustomFeed", e.PrivateSubreddit = "PrivateSubreddit", e.ProfileDoesNotExist = "ProfileDoesNotExist", e.ProfileDeleted = "ProfileDeleted", e.ProfileSuspended = "ProfileSuspended", e.ProfileBlockedForLegalReason = "ProfileBlockedForLegalReason", e.QuarantinedSubreddit = "QuarantinedSubreddit", e.GatedSubreddit = "GatedSubreddit", e.SubredditBanned = "SubredditBanned", e.SubredditBlockedForLegalReason = "SubredditBlockedForLegalReason", e.SubredditDoesNotExist = "SubredditDoesNotExist", e.PostBlockedForLegalReason = "PostBlockedForLegalReason"
				}(r || (r = {}))
		},
		"./src/reddit/selectors/experiments/joinOptimizations.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/index.ts");
			const c = Object(r.a)(e => Object(s.c)(e, {
					experimentName: o.Ub,
					experimentEligibilitySelector: i.e
				}), e => e === o.Z.Enabled),
				a = Object(r.a)(e => Object(s.c)(e, {
					experimentName: o.Vb,
					experimentEligibilitySelector: i.e
				}), e => e === o.ab.Enabled),
				d = Object(r.a)(e => Object(s.c)(e, {
					experimentName: o.Wb,
					experimentEligibilitySelector: i.e
				}), e => e === o.bb.Enabled),
				l = Object(r.a)(e => Object(s.c)(e, {
					experimentName: o.Xb,
					experimentEligibilitySelector: i.e
				}), e => e === o.cb.Enabled),
				u = Object(r.a)(e => Object(s.c)(e, {
					experimentName: o.Zb,
					experimentEligibilitySelector: i.e
				}), e => e === o.eb.Enabled),
				m = Object(r.a)(e => Object(s.c)(e, {
					experimentName: o.Yb,
					experimentEligibilitySelector: i.e
				}), e => e === o.db.Enabled)
		},
		"./src/reddit/selectors/experiments/shredditMigration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return m
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "e", (function() {
				return h
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				s = n("./src/reddit/selectors/experiments/index.ts");
			const i = /^\/?(new|top|hot|controversial|rising|best)?\/?$/,
				c = /^\/r\/popular\/?((new|top|hot|controversial|rising|best)\/?)?$/,
				a = /^\/r\/[^/]+\/?((controversial|new|about|top)\/?)?$/,
				d = /^\/r\/[^/]+\/w(iki)?\/?([^/]+\/?)?$/,
				l = e => !!e.match(i) || !!e.match(c),
				u = e => !e.match(c) && ("/r/all" !== e && !e.startsWith("/r/all/") && (!!e.match(a) || !!e.match(d))),
				m = (e, t) => !!l(t) && [r.Zf.Enabled, r.Zf.HardReload].includes(Object(o.c)(e, {
					experimentEligibilitySelector: s.f,
					experimentName: r.Lf
				})),
				b = (e, t) => !!u(t) && [r.Zf.Enabled, r.Zf.HardReload].includes(Object(o.c)(e, {
					experimentEligibilitySelector: s.f,
					experimentName: r.Kf
				})),
				p = (e, t) => !(!u(t) && !l(t)) && Object(o.c)(e, {
					experimentEligibilitySelector: s.f,
					experimentName: r.se
				}) === r.Wd,
				f = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: s.f,
						experimentName: r.Jf
					})
				},
				h = (e, t) => !!(e => {
					return /^(?:\/r\/[^\/]+)?\/search\/?$/i.test(e) || /^\/u(?:ser)?\/[^\/]+\/m\/[^\/]+\/search\/?$/i.test(e)
				})(t) && (f(e) === r.Zf.Enabled || f(e) === r.Zf.HardReload)
		},
		"./src/reddit/selectors/experiments/shredditParity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts"),
				o = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/selectors/user.ts"),
				i = n("./src/reddit/selectors/experiments/shredditMigration.ts");
			const c = Object(o.a)(s.S, e => !e),
				a = (e, t) => {
					const n = t();
					Object(s.S)(n) || e.block(e => {
						const t = (e => !!e.match(/^\/(?:r\/[^\/]+\/)?comments\/([a-z0-9]*)/i) || !!e.match(/^\/u(?:ser)?\/[^/]+\/comments\/[a-z0-9]+/i))(e.pathname),
							o = Object(i.b)(n, e.pathname),
							s = Object(i.d)(n, e.pathname),
							c = Object(i.c)(n, e.pathname),
							a = Object(i.e)(n, e.pathname);
						if (o || t || s || c || a) {
							const t = e.pathname + e.search;
							return Object(r.f)(n), window.location.href = t, !1
						}
					})
				}
		},
		"./src/redditGQL/operations/SubredditRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"abcab38cb71c"}')
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"ca83defc2e15"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Multireddit.9e50b7a756f3506aa505.js.map