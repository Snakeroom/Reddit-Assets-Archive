// https://www.redditstatic.com/desktop2x/Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250.404559c2919f5d287411.js
// Retrieved at 7/21/2021, 5:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"], {
		"./src/lib/makeCommentPermalink/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/redditId/index.ts");
			t.a = (e, t) => {
				let r = e;
				return "/" !== r.substr(-1) && (r += "/"), r += Object(s.c)(t)
			}
		},
		"./src/reddit/actions/economics/powerups/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "f", (function() {
				return a
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "e", (function() {
				return d
			}));
			const s = 120,
				n = "ON_CREATE_CUSTOM_EMOJI_SUCCESS",
				o = "ON_DELETE_CUSTOM_EMOJI_SUCCESS",
				i = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENTS_LOADED",
				a = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENT_PREFERENCE_UPDATE_REQUESTED",
				c = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENT_PREFERENCE_UPDATED",
				d = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENT_PREFERENCE_UPDATE_FAILED"
		},
		"./src/reddit/actions/jsApi.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "JSAPI__CONSUMER_SUBSCRIBED",
				o = Object(s.a)(n)
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "h", (function() {
				return i
			})), r.d(t, "i", (function() {
				return a
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			}));
			const s = "SUBSCRIPTION__FETCH_DATA_PENDING",
				n = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				o = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				i = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				a = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				c = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return F
			})), r.d(t, "d", (function() {
				return D
			})), r.d(t, "c", (function() {
				return A
			})), r.d(t, "a", (function() {
				return U
			})), r.d(t, "b", (function() {
				return H
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/linkMatchers/customLinks.ts"),
				a = r("./src/reddit/actions/login.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/actions/subscription/constants.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/constants/posts.ts"),
				m = r("./src/lib/makeApiRequest/index.ts"),
				p = r("./src/lib/omitHeaders/index.ts"),
				b = r("./src/reddit/constants/headers.ts");
			var f = r("./src/redditGQL/operations/SubscribedSubreddits.json"),
				h = r("./src/lib/makeGqlRequest/index.ts"),
				y = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var x = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				O = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				g = r("./src/reddit/models/GqlTopLevelField.ts"),
				j = r("./src/reddit/models/User/index.ts");

			function C(e) {
				const t = [],
					r = [],
					s = {},
					n = {},
					{
						followedRedditorsInfo: o
					} = e.identity;
				for (const a of o.edges) {
					if (a.node.__typename !== j.c.AvailableRedditor || !a.node.profile) continue;
					const e = Object(x.a)(a.node.profile);
					s[e.id] = e;
					const {
						isFavorite: r
					} = a.node.profile;
					r && t.push(e.id)
				}
				const {
					subscribedSubreddits: i
				} = e.identity;
				for (const a of i.edges) {
					if (a.node.__typename !== g.a.Subreddit) continue;
					const e = Object(O.a)(a.node);
					n[e.id] = e;
					const {
						isFavorite: t
					} = a.node;
					t && r.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: r,
					profiles: s,
					subreddits: n
				}
			}
			var k = r("./src/reddit/models/Toast/index.ts"),
				_ = r("./src/reddit/selectors/profile.ts"),
				v = r("./src/reddit/selectors/subreddit.ts"),
				T = r("./src/reddit/selectors/subscriptions.ts"),
				I = r("./src/reddit/selectors/user.ts");
			const E = () => s.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				S = Object(o.a)(d.c),
				P = Object(o.a)(d.b),
				N = Object(o.a)(d.a),
				w = Object(o.a)(d.h),
				F = (Object(o.a)(d.i), Object(o.a)(d.g), () => async (e, t, {
					gqlContext: r
				}) => {
					const s = t();
					if (!s.user.account || s.subscriptions.api.fetched) return;
					e(P());
					const n = await (e => Object(h.a)(e, f))(r());
					if (n.ok) {
						const t = C(n.body.data);
						e(S(t))
					} else e(N({
						error: n.error
					}))
				}),
				L = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				D = (e, t, r) => async (o, d, {
					apiContext: f
				}) => {
					let h = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(v.D)(d(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(_.m)(d(), e.name),
						name: `${n.dc}${e.name}`,
						type: e.type
					});
					if (!Object(I.J)(d())) return o(Object(c.k)({
						actionSource: c.a.Subscribe
					})), void o(Object(a.j)());
					const x = Object(I.j)(d());
					if (x) {
						const t = h.length,
							r = e.length;
						if (h = h.filter(e => !L(x, e)), (e = e.filter(e => !L(x, e))).length !== r || h.length !== t) {
							const e = s.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(l.f)(Object(l.e)(e, k.b.Error)))
						}
						if (!e.length && !h.length) return
					}
					if (o(w({
							identifiers: h,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(T.b)(d()),
							userIsSubscriber: t,
							widgetId: r
						})), (await ((e, {
							subredditIds: t,
							subredditNames: r,
							subscribe: s
						}) => Object(m.a)(Object(p.a)(e, [b.a]), {
							method: n.hb.POST,
							endpoint: Object(y.a)(`${e.apiUrl}/api/subscribe`),
							data: {
								action: s ? "sub" : "unsub",
								sr: t && t.join(",") || void 0,
								sr_name: r && r.join(",") || void 0,
								api_type: "json"
							}
						}))(f(), {
							subredditNames: h.map(({
								name: e
							}) => e),
							subscribe: t
						})).ok) {
						const r = 1 === e.length ? `${"subreddit"===e[0].type?i.d.subreddit:i.d.profile}${e[0].name}` : s.fbt._({
								"*": "{communities} communities",
								_1: "1 community"
							}, [s.fbt._plural(e.length, "communities")], {
								hk: "IgDzJ"
							}),
							n = s.fbt._("Sucсessfully followed {communityname}", [s.fbt._param("communityname", r)], {
								hk: "1S5AXJ"
							}),
							a = s.fbt._("Sucсessfully unfollowed {communityname}", [s.fbt._param("communityname", r)], {
								hk: "2XWHyB"
							}),
							c = s.fbt._("Sucсessfully joined {communityname}", [s.fbt._param("communityname", r)], {
								hk: "3Al8aF"
							}),
							d = s.fbt._("Sucсessfully left {communityname}", [s.fbt._param("communityname", r)], {
								hk: "2w5JFZ"
							});
						o(Object(l.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? n : a : t ? c : d
						}))
					} else {
						o(w({
							identifiers: h,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(T.b)(d()),
							userIsSubscriber: !t,
							widgetId: r
						}));
						const n = s.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(l.f)(Object(l.e)(n, k.b.Error)))
					}
				}, R = Object(o.a)(d.f), A = e => async (t, r, {
					apiContext: s
				}) => {
					const o = r(),
						i = Object(v.K)(o, {
							identifier: e
						});
					if (!i) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const a = e.type === u.a.SUBREDDIT ? i.name : `u_${i.name}`,
						c = o.subscriptions.favoriteSubredditOrder || [],
						d = o.subscriptions.favoriteProfileOrder || [],
						f = c.indexOf(e.id),
						h = d.indexOf(e.id),
						y = -1 === f && -1 === h,
						x = o.subreddits.models,
						O = o.profiles.models;
					t(R({
						makeFavorite: y,
						identifier: e,
						subredditModels: x,
						profileModels: O
					}));
					const g = {
							type: e.type,
							name: i.name
						},
						j = () => Object(v.eb)(r(), {
							identifier: g
						});
					(j() || (await t(D([g], !0)), j())) && ((await ((e, t, r) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: n.hb.POST,
						endpoint: `${e.apiUrl}/api/favorite`,
						data: {
							make_favorite: r ? "true" : "false",
							sr_name: t,
							api_type: "json"
						}
					}))(s(), a, y)).ok || (t(R({
						makeFavorite: !y,
						identifier: e,
						subredditModels: x,
						profileModels: O
					})), t(Object(l.f)({
						text: E(),
						kind: k.b.Error
					}))))
				}, M = Object(o.a)(d.d), U = e => async (t, r, {
					apiContext: s
				}) => {
					const o = r().multireddits.models,
						i = () => {
							t(Object(l.f)({
								text: E(),
								kind: k.b.Error
							}))
						},
						a = o[e];
					if (!a) return void i();
					const c = !a.isFavorited;
					t(M({
						makeFavorite: c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), (await ((e, t, r) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: n.hb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: r ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(s(), e, c)).ok || (t(M({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), i())
				}, W = Object(o.a)(d.e), H = e => async (t, r, {
					apiContext: o
				}) => {
					const i = r(),
						a = i.multireddits.models;
					if (!Object(I.J)(i)) return;
					const c = (e = !0) => {
							t(Object(l.f)({
								text: s.fbt._("Sorry, failed to {followAction}", [s.fbt._param("followAction", e ? s.fbt._("follow", null, {
									hk: "2I4uia"
								}) : s.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: k.b.Error
							}))
						},
						d = a[e];
					if (!d) return void c();
					const u = !d.isFollowed;
					t(W({
						follow: u,
						multiredditPath: e,
						multiredditsModelsState: a
					})), (await ((e, t, r) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: n.hb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: r ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(o(), e, u)).ok || (t(W({
						follow: !u,
						multiredditPath: e,
						multiredditsModelsState: a
					})), c(u))
				}
		},
		"./src/reddit/components/CategoryTag/index.m.less": function(e, t, r) {
			e.exports = {
				metaFlair: "_7_d4sJjd2oYzaJuU_QpOI",
				"m-lightboxHeader": "_1rtoCmW_7bFJWYffSOwt4R",
				mLightboxHeader: "_1rtoCmW_7bFJWYffSOwt4R"
			}
		},
		"./src/reddit/components/CategoryTagList/index.m.less": function(e, t, r) {
			e.exports = {
				categoryTagWrapper: "_13jLUpnQtcA8FXyw5Kv06q"
			}
		},
		"./src/reddit/components/CategoryTagList/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/components/TrackingHelper/index.tsx"),
				c = r("./src/reddit/selectors/user.ts"),
				d = r("./src/lib/classNames/index.ts"),
				l = r("./src/lib/constants/index.ts"),
				u = r("./src/reddit/constants/posts.ts"),
				m = r("./src/reddit/controls/InternalLink/index.tsx"),
				p = r("./src/lib/addQueryParams/index.ts");
			const b = (e, t, r, s, n) => {
				const o = n || "*:*",
					i = r || l.V;
				return Object(p.a)("/search", {
					q: o,
					sort: i,
					t: s,
					category_name: e,
					category: t
				})
			};
			var f = r("./src/reddit/helpers/correlationIdTracker.ts"),
				h = r("./src/reddit/selectors/telemetry.ts");
			const y = (e, t) => r => ({
				source: "post",
				action: "click",
				noun: "meta_flair",
				...h.defaults(r),
				correlationId: Object(f.c)(f.a.SearchResults),
				post: h.post(r, e),
				search: h.postFlairClickToSearch(r, t),
				subreddit: h.subreddit(r)
			});
			var x = r("./src/reddit/components/CategoryTag/index.m.less"),
				O = r.n(x);
			class g extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const e = {
							id: this.props.category.categoryId,
							title: this.props.category.categoryName,
							eventType: u.a.SUBREDDIT,
							originElement: "meta_flair"
						};
						this.props.sendEvent(y(this.props.postId, e))
					}
				}
				render() {
					const e = this.props.category,
						t = this.props.inLightboxHeader,
						r = e.categoryId,
						s = e.categoryName,
						o = n.a.createElement("span", null, s);
					return n.a.createElement("span", {
						className: Object(d.a)(O.a.metaFlair, {
							[O.a["m-lightboxHeader"]]: t
						})
					}, n.a.createElement(m.a, {
						onClick: this.onClick,
						to: b(s, r, l.Tb.Relevance, l.bc.DAY),
						children: o
					}))
				}
			}
			var j = r("./src/reddit/components/CategoryTagList/index.m.less"),
				C = r.n(j);
			const k = Object(o.b)(() => Object(i.c)({
				labelNSFW: c.S
			}));
			t.a = k(Object(a.c)(({
				postCategories: e,
				postId: t,
				inLightboxHeader: r,
				sendEvent: s
			}) => n.a.createElement("span", {
				className: r ? void 0 : C.a.categoryTagWrapper
			}, e.map(e => n.a.createElement(g, {
				postId: t,
				category: e,
				key: e.categoryId,
				inLightboxHeader: r,
				sendEvent: s
			})))))
		},
		"./src/reddit/components/Emoji/index.m.less": function(e, t, r) {
			e.exports = {
				EmojiDisplay: "_2Gt13AX94UlLxkluAMsZqP",
				emojiDisplay: "_2Gt13AX94UlLxkluAMsZqP"
			}
		},
		"./src/reddit/components/Flair/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Flair/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return W
			})), r.d(t, "a", (function() {
				return H
			})), r.d(t, "b", (function() {
				return V
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/pick.js"),
				o = r.n(n),
				i = r("./node_modules/polished/dist/polished.es.js"),
				a = r("./node_modules/react/index.js"),
				c = r.n(a),
				d = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = r("./src/lib/addQueryParams/index.ts"),
				u = r("./src/lib/classNames/index.ts"),
				m = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = r("./src/lib/lessComponent.tsx"),
				b = r("./src/reddit/components/Emoji/index.m.less"),
				f = r.n(b);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const y = p.a.wrapped(({
				backgroundImage: e,
				style: t,
				...r
			}) => c.a.createElement("div", h({
				style: {
					...t || {},
					backgroundImage: `url('${e}')`
				}
			}, r)), "EmojiDisplay", f.a);
			var x = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				O = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				g = r("./src/reddit/constants/colors.ts"),
				j = r("./src/reddit/constants/parameters.ts"),
				C = r("./src/reddit/controls/InternalLink/index.tsx"),
				k = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				_ = r("./src/reddit/icons/svgs/Close/index.tsx"),
				v = r("./src/reddit/models/Flair/index.ts"),
				T = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				I = r("./src/reddit/components/Flair/index.m.less"),
				E = r.n(I);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const P = Object(O.a)(x.b),
				N = p.a.div("FlairWrapper", E.a),
				w = p.a.wrapped(d.a, "CloseButton", E.a),
				F = p.a.wrapped(Object(m.a)(({
					forceSmallEmojis: e,
					theme: t,
					...r
				}) => {
					const s = t;
					return c.a.createElement(y, S({
						style: {
							...L(!!e, s) || {}
						}
					}, r))
				}), "FlairEmojiDisplay", E.a),
				L = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: `${t.subredditContext.emojiHeight}px`,
						width: `${t.subredditContext.emojiWidth}px`
					}
				},
				D = (e, t) => {
					const r = t ? `/r/${t}/search` : "/search",
						s = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(l.a)(r, {
						[j.p]: s,
						[j.s]: t ? "1" : ""
					})
				},
				R = e => e.isFlairFilter ? c.a.createElement(C.a, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? c.a.createElement(C.a, {
					onClick: () => e.onClick(e.searchableTerm),
					to: D(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class A extends c.a.Component {
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
					const e = c.a.createElement("span", {
						className: Object(u.a)(this.props.className, {
							[E.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(T.a)(this.props).flair,
							color: `${W(this.props)}`
						}
					}, this.props.text, this.props.isSelected && c.a.createElement(w, {
						to: "./",
						onClick: this.props.onCloseClick
					}, c.a.createElement(_.a, {
						className: E.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(T.a)(this.props).flair
						}
					})), !!this.props.tooltip && c.a.createElement(P, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return c.a.createElement(R, {
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
			const M = Object(m.a)(A),
				U = Object(m.a)(e => {
					let t = "",
						r = !1;
					const s = e.richtext.map((s, n) => {
						if (s.e === v.c.Emoji) {
							const o = s;
							return t += o.a, r = !0, c.a.createElement(F, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: o.u,
								key: n,
								title: o.a
							})
						} {
							const e = s;
							return t += e.t, c.a.createElement("span", {
								key: n
							}, e.t)
						}
					});
					let n;
					r && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (n = {
						marginTop: `-${e.theme.subredditContext.emojiHeight-16}px`
					});
					const o = c.a.createElement(N, {
						className: Object(u.a)(e.className, {
							[E.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...n,
							backgroundColor: e.backgroundColor || Object(T.a)(e).flair,
							color: `${W(e)}`
						}
					}, s, e.isSelected && c.a.createElement(w, {
						to: "./",
						onClick: e.onCloseClick
					}, c.a.createElement(_.a, {
						className: E.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(T.a)(e).flair
						}
					})));
					return c.a.createElement(R, {
						flair: o,
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
				W = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(T.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(k.a)(Object(T.a)(e).post, g.b.black, g.b.white) : e.textColor === v.e.Dark ? g.b.black : g.b.white,
				H = p.a.wrapped(M, "TextFlair", E.a),
				B = p.a.wrapped(U, "RichTextFlair", E.a),
				K = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(i.j)(.1, Object(T.a)(o()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				q = p.a.wrapped(e => {
					const t = K(e),
						r = c.a.createElement("span", {
							className: e.className,
							style: {
								border: `1px solid ${t}`,
								color: t
							}
						}, e.text);
					return c.a.createElement(R, {
						flair: r,
						searchableTerm: e.text
					})
				}, "MetaFlair", E.a);

			function V(e) {
				const {
					className: t,
					disabled: r = !1,
					flair: n,
					isFlairFilter: o,
					isSelected: i,
					onClick: a,
					onCloseClick: d,
					onMouseDown: l,
					subredditName: m,
					usesCommunityStyles: p,
					forceSmallEmojis: b,
					to: f
				} = e, h = Object(u.a)({
					[E.a.flairVariant]: o,
					[E.a.small]: o && !e.large,
					[E.a.large]: o && e.large
				}, t);
				switch (n.type) {
					case v.f.Richtext:
						return r || !n.richtext ? null : c.a.createElement(B, {
							backgroundColor: n.backgroundColor,
							className: h,
							forceSmallEmojis: b,
							isFlairFilter: o,
							isSelected: i,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							redditStyle: !p,
							richtext: n.richtext,
							subredditName: m,
							textColor: n.textColor,
							to: f
						});
					case v.f.Text:
						return r || !n.text ? null : c.a.createElement(H, {
							backgroundColor: n.backgroundColor,
							className: h,
							isFlairFilter: o,
							isSelected: i,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: n.text,
							textColor: n.textColor,
							redditStyle: !p,
							to: f
						});
					case v.f.Meta:
						return c.a.createElement(H, {
							backgroundColor: n.backgroundColor,
							className: t,
							isFlairFilter: o,
							subredditName: m,
							text: n.text,
							textColor: n.textColor,
							redditStyle: !p,
							to: f
						});
					case v.f.Nsfw:
					case v.f.Spoiler:
						return c.a.createElement(q, {
							className: t,
							text: n.text,
							type: n.type
						});
					case v.f.Quarantined:
						return null;
					case v.f.Oc:
						return c.a.createElement(H, {
							backgroundColor: g.b.alienblue,
							text: n.text,
							textColor: v.e.Light,
							tooltip: s.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return n.text ? c.a.createElement(H, {
							backgroundColor: n.backgroundColor,
							className: h,
							isFlairFilter: o,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: n.text,
							redditStyle: !p,
							to: f
						}) : null
				}
			}
		},
		"./src/reddit/components/FlairList/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/lodash/noop.js"),
				n = r.n(s),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/components/Flair/index.tsx"),
				l = r("./src/reddit/helpers/flair.ts"),
				u = r("./src/reddit/models/Flair/index.ts"),
				m = r("./src/reddit/selectors/user.ts");
			const p = Object(c.c)({
					labelNSFW: m.S
				}),
				b = Object(a.b)(p),
				f = e => {
					if (e.type === u.f.Richtext && e.richtext) {
						const t = e.richtext.map(e => e.e === u.c.Emoji ? e.u : e.t).join("-");
						return `${e.type}--${t}`
					}
					return `${e.type}--${e.text}`
				};
			t.a = b(({
				className: e,
				isFlairFilter: t,
				onClick: r,
				onMouseDown: s,
				disabled: o = !1,
				flair: a,
				labelNSFW: c,
				subredditName: m
			}) => {
				const p = !!a.find(e => e.type === u.f.Richtext),
					b = a.map(e => {
						if (e.type === u.f.Text && p) return null;
						if (!c && e.type === u.f.Nsfw) return null;
						const a = Object(l.j)(e),
							b = `/r/${m}/`,
							h = s ? () => s(e) : n.a;
						return i.a.createElement(d.b, {
							isFlairFilter: t,
							key: f(e),
							onClick: r,
							onMouseDown: h,
							disabled: o,
							flair: e,
							forceSmallEmojis: !0,
							subredditName: m,
							to: Object(l.e)(b, a)
						})
					});
				return i.a.createElement("div", {
					className: e
				}, b)
			})
		},
		"./src/reddit/components/FlairWrapper/index.m.less": function(e, t, r) {
			e.exports = {
				flairList: "lrzZ8b0L6AzLkQj5Ww7H1",
				flairWrapper: "_2fiIRtMpITeCAzXc4cANKp",
				flairNoWrap: "_2xu1HuBz1Yx6SP10AGVx_I"
			}
		},
		"./src/reddit/components/FlairWrapper/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return k
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/components/CategoryTagList/index.tsx"),
				l = r("./src/reddit/components/FlairList/index.tsx"),
				u = r("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				m = r("./src/reddit/contexts/PageLayer/index.tsx"),
				p = r("./src/reddit/helpers/correlationIdTracker.ts"),
				b = r("./src/reddit/helpers/flair.ts"),
				f = r("./src/reddit/helpers/trackers/postFlair.ts"),
				h = r("./src/reddit/models/Flair/index.ts"),
				y = r("./src/reddit/selectors/postFlair.ts"),
				x = r("./src/reddit/selectors/posts.ts"),
				O = r("./src/reddit/selectors/subreddit.ts"),
				g = r("./src/reddit/components/FlairWrapper/index.m.less"),
				j = r.n(g);
			const C = Object(i.b)(() => Object(a.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(m.p)(e, {
						pageLayer: t
					}),
					isPostFlairEnabled: (e, t) => Object(y.c)(e, {
						subredditId: t.post.belongsTo.id
					}),
					postCategories: (e, {
						post: t
					}) => Object(x.w)(e, t),
					subredditName: (e, {
						post: t
					}) => Object(O.S)(e, {
						subredditId: t.belongsTo.id
					}).name
				})),
				k = e => {
					const t = [];
					return e.isOriginalContent && t.push({
						text: s.fbt._("OC", null, {
							hk: "1i721p"
						}),
						type: h.f.Oc
					}), e.isMeta && t.push({
						text: s.fbt._("Poll", null, {
							hk: "1scdU1"
						}),
						type: h.f.Meta
					}), t.push(...e.flair), t
				};
			t.a = C(({
				className: e,
				disableFlair: t,
				flairPosition: r,
				isFlairFilter: s,
				isPostFlairEnabled: n,
				nowrap: i,
				post: a,
				postCategories: m,
				sendEvent: y,
				showCategoryTag: x,
				subredditName: O,
				titleFlair: g
			}) => {
				const C = Object(u.b)(),
					_ = r === h.b.Left,
					v = g || k(a),
					T = [];
				let I = [];
				_ ? v.map(e => {
					Object(b.q)(e.type) ? T.push(e) : I.push(e)
				}) : I = v;
				const E = i ? j.a.flairNoWrap : T.length > 0 || I.length > 0 || m && x ? j.a.flairWrapper : null,
					S = e => {
						const t = {
							id: a.belongsTo.id,
							eventType: a.belongsTo.type,
							originElement: "post_flair",
							postFlairName: e
						};
						Object(p.d)(p.a.SearchResults), y && y(Object(f.a)(a.id, t))
					},
					P = e => {
						Object(p.d)(p.a.SearchResults), y && y(Object(f.e)(e, a.id))
					},
					N = !(t || !v || !v.length),
					w = !!(x && m && m.length);
				return N || w ? o.a.createElement("div", {
					className: Object(c.a)(E, e),
					"data-ignore-click": C
				}, N && T && o.a.createElement(l.a, {
					className: j.a.flairList,
					isFlairFilter: s,
					key: "leftFlair",
					onClick: S,
					onMouseDown: P,
					flair: T,
					disabled: !n,
					subredditName: O
				}), N && o.a.createElement(l.a, {
					className: j.a.flairList,
					isFlairFilter: s,
					key: "rightFlair",
					onClick: S,
					onMouseDown: P,
					flair: I,
					disabled: !n,
					subredditName: O
				}), w && o.a.createElement(d.a, {
					inLightboxHeader: i,
					postId: a.id,
					postCategories: m
				})) : null
			})
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/higherOrderComponents/makeAsync.tsx"),
				n = r("./src/lib/loadWithRetries/index.ts");
			const o = () => null;
			t.a = Object(s.a)({
				ErrorComponent: o,
				getComponent: () => Object(n.a)(() => r.e("SubredditHovercard").then(r.bind(null, "./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, r) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return h
			})), r.d(t, "a", (function() {
				return y
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				a = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = r("./src/reddit/selectors/tooltip.ts"),
				l = r("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = r.n(l),
				m = r("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = m.a.div("Text", u.a),
				f = m.a.div("BottomText", u.a),
				h = e => n.a.createElement(b, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				y = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return n.a.createElement(f, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				x = Object(i.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(d.b)(t)(e)
				}),
				O = Object(c.a)(y, [a.a.Click, a.a.Keydown]),
				g = Object(c.a)(h, [a.a.Click, a.a.Keydown]),
				j = Object(o.b)(x);
			t.c = j(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? n.a.createElement(O, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : n.a.createElement(g, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/higherOrderComponents/asTooltip.tsx"),
				i = r("./src/reddit/constants/elementIds.ts"),
				a = r("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const r = Object(o.a)(e, t);
				class s extends n.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(i.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return n.a.createElement(r, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(s)
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./node_modules/react/index.js");
			const n = Object(s.createContext)(!1);

			function o() {
				return Object(s.useContext)(n)
			}
		},
		"./src/reddit/components/Thumbnail/index.m.less": function(e, t, r) {
			e.exports = {
				blurredThumbnail: "GnWcY6GPzeZ5rzsiQ98fo",
				container: "_2MkcR85HDnYngvlVW2gMMa",
				contentType: "_2hIvPRO2xz4rn9LXAJXYDa",
				hasType: "_10qSZsDWnOBwx4bc7GJ1QF",
				hiddenImage: "_25ZOvQhQdAqwdxPd5z-KFB",
				imageThumbnail: "_33Pa96SGhFVpZeI6a7Y_Pl",
				verticallyCenterThumbnail: "Fq7oYOARH1VVCaLAuAh37",
				linkIcon: "m0n699kowSp8Wfa40lqpF",
				outboundLinkIcon: "_2rOixIHGmpfZB93ihJsw3V",
				placeholderThumbnail: "_2YO2O4rMRYYMeH_t2y8M5w",
				thumbnail: "_2c1ElNxHftd8W_nZtcG9zf",
				usePreview: "_78ohNtfA1urjgUhnN1jLi",
				LinkText: "_3HXDOeeCKnmgu_pIdoLofi",
				linkText: "_3HXDOeeCKnmgu_pIdoLofi"
			}
		},
		"./src/reddit/components/Thumbnail/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return M
			}));
			var s = r("./src/lib/isUrl/index.ts"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = r("./src/lib/lessComponent.tsx"),
				d = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				l = r("./src/reddit/components/ImageWithFallback/index.tsx"),
				u = r("./src/lib/constants/icons.ts"),
				m = r("./src/reddit/icons/fonts/index.tsx"),
				p = r("./src/reddit/constants/elementClassNames.ts"),
				b = r("./src/reddit/controls/ContentType/index.m.less"),
				f = r.n(b);
			const h = e => Object(i.a)(f.a.contentTypeIcon, e.className),
				y = {
					embed: u.a.embed,
					gallery: u.a.media_gallery,
					gifvideo: u.a.gif_post,
					image: u.a.image_post,
					meta: u.a.poll_post,
					rpan: u.a.video_live,
					rtjson: u.a.text_post,
					text: u.a.text_post,
					video: u.a.video_post
				};

			function x(e) {
				const t = h(e),
					r = e.type && y[e.type] || u.a.link_post;
				return o.a.createElement(m.a, {
					name: r,
					className: Object(i.a)({
						[p.a]: r === u.a.link_post
					}, t)
				})
			}
			var O = r("./src/reddit/controls/OutboundLink/index.tsx"),
				g = r("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				j = r("./src/reddit/models/Media/index.ts"),
				C = r("./src/reddit/models/Theme/index.ts"),
				k = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				_ = r("./src/telemetry/models/Outbound.ts"),
				v = r("./src/reddit/components/Thumbnail/index.m.less"),
				T = r.n(v);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const E = e => e.placeholderImage || Object(k.a)(e).placeholderImage,
				S = e => e.placeholderImage ? "cover" : Object(k.a)(e).placeholderImagePosition,
				P = c.a.span("LinkText", T.a),
				N = ({
					className: e,
					onClick: t,
					children: r
				}) => o.a.createElement("div", {
					onClick: t,
					className: Object(i.a)(T.a.linkIcon, e)
				}, r),
				w = e => o.a.createElement("img", {
					alt: e.alt,
					className: Object(i.a)(T.a.hiddenImage, e.className)
				}),
				F = e => {
					const t = o.a.createRef(),
						{
							src: r,
							errorSrc: s
						} = e;
					return r && s && Object(l.a)(r).catch(() => {
						t.current && (t.current.style.backgroundImage = `url(${s})`)
					}), o.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(i.a)(T.a.thumbnail, T.a.imageThumbnail, e.className),
						"data-click-id": "image",
						ref: t,
						role: "img",
						style: {
							backgroundImage: `url(${e.src})`,
							borderColor: e.isOutbound ? Object(k.a)(e).button : Object(k.a)(e).line
						}
					}, e.isOutbound && o.a.createElement(N, {
						className: e.linkIconClassName
					}, o.a.createElement(g.a, {
						className: Object(i.a)(T.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && o.a.createElement(P, {
						className: e.linkTextClassName
					}, e.text)), o.a.createElement(w, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				L = e => e.isOutbound ? Object(k.a)(e).button : e.placeholderImage ? "transparent" : Object(k.a)(e).line,
				D = e => {
					const t = E(e),
						r = t && {
							background: Object(C.g)(Object(k.a)(e).placeholder, t, S(e))
						};
					return o.a.createElement("div", {
						className: Object(i.a)(T.a.thumbnail, T.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: {
							...r,
							borderColor: L(e)
						}
					}, (!e.placeholderImage || e.showContentType) && o.a.createElement(x, {
						className: Object(i.a)(e.contentTypeClassName, T.a.contentType, {
							[T.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && o.a.createElement(N, {
						className: e.linkIconClassName
					}, o.a.createElement(g.a, {
						className: Object(i.a)(T.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && o.a.createElement(P, {
						className: e.linkTextClassName
					}, e.text)))
				},
				R = e => o.a.createElement(F, I({}, e, {
					className: Object(i.a)(T.a.blurredThumbnail, e.className)
				})),
				A = Object(a.a)(e => {
					const {
						className: t,
						containerClassName: r,
						contentTypeClassName: n,
						crosspost: a,
						forceShowNSFW: c,
						isCommentsPage: d,
						isMeta: l,
						linkIconClassName: u,
						linkTextClassName: m,
						outboundLinkIconClassName: p,
						post: b,
						redditStyle: f,
						removeLink: h,
						showContentType: y,
						templatePlaceholderImage: x,
						text: g,
						theme: C,
						usePreview: k
					} = e, v = !C.subredditContext.shouldShowNSFWContent && (b.isNSFW || !(!a || !a.isNSFW)) && !c, I = E({
						placeholderImage: x,
						redditStyle: f,
						theme: C
					}), S = M(e), P = d ? _.SourceElement.PostImage : _.SourceElement.ListingPostImage, N = W(b, t, I, v, g, C, S, l, y, h, f, u, m, p, n), w = Object(j.D)(b);
					return Object(s.a)(w) && !h && w.indexOf("redditmedia") < 0 ? o.a.createElement("div", {
						className: Object(i.a)(T.a.container, k ? T.a.usePreview : "", r)
					}, o.a.createElement(O.b, {
						href: Object(j.D)(b),
						isSponsored: b.isSponsored,
						postId: b.id,
						source: b.source,
						sourceElement: P
					}, N)) : o.a.createElement("div", {
						className: Object(i.a)(T.a.container, k ? T.a.usePreview : "", r)
					}, N)
				}),
				M = ({
					crosspost: e,
					post: t,
					url: r,
					usePreview: s
				}) => {
					if (r) return r;
					const {
						preview: n,
						media: o,
						thumbnail: i
					} = e || t;
					return s && n ? n.url : t.isSponsored && n && "default" === i.url ? n.url : U(o) ? o.scrubberThumbSource : i.url
				},
				U = e => !!e && e.type === j.o.LIVEVIDEO,
				W = (e, t, r, n, a, c, l, u, m, p, b, f, h, y, x) => {
					const O = e.source && !e.isSponsored || !1;
					if (Object(s.a)(l)) {
						const r = U(e.media),
							s = r ? {
								errorSrc: d.U
							} : {},
							u = Object(i.a)(t, {
								[T.a.verticallyCenterThumbnail]: r
							});
						return n ? o.a.createElement(R, I({
							"data-click-id": "image",
							src: l
						}, s, {
							className: u,
							isOutbound: O && !p,
							linkIconClassName: f,
							linkTextClassName: h,
							outboundLinkIconClassName: y,
							redditStyle: b,
							text: a,
							theme: c
						})) : o.a.createElement(F, I({
							alt: e.title,
							className: u,
							src: l
						}, s, {
							isOutbound: O && !p,
							linkIconClassName: f,
							linkTextClassName: h,
							outboundLinkIconClassName: y,
							redditStyle: b,
							text: a,
							theme: c
						}))
					}
					return o.a.createElement(D, {
						className: t,
						contentTypeClassName: x,
						placeholderImage: r,
						isMeta: u,
						isOutbound: O && !p,
						linkIconClassName: f,
						linkTextClassName: h,
						outboundLinkIconClassName: y,
						redditStyle: b,
						showContentType: m,
						text: a,
						theme: c,
						type: e.media ? e.media.type : null,
						isPoll: !!e.pollData
					})
				};
			t.a = A
		},
		"./src/reddit/controls/ContentType/index.m.less": function(e, t, r) {
			e.exports = {
				contentTypeIcon: "_3CquMWJ6RMh8E9D-_84AtZ"
			}
		},
		"./src/reddit/controls/OutboundLink/styled.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/lessComponent.tsx"),
				n = r("./src/reddit/constants/elementClassNames.ts"),
				o = r("./src/reddit/controls/OutboundLink/index.tsx"),
				i = r("./src/reddit/controls/OutboundLink/styles.m.less"),
				a = r.n(i);
			t.a = s.a.wrapped(o.b, "styledOutboundLink", {
				styledOutboundLink: `${a.a.styledOutboundLink} ${n.l}`
			})
		},
		"./src/reddit/controls/OutboundLink/styles.m.less": function(e, t, r) {
			e.exports = {
				styledOutboundLink: "_13svhQIUZqD9PVzFcLwOKT"
			}
		},
		"./src/reddit/helpers/commentList/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "a", (function() {
				return u
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/reddit/constants/comments.ts"),
				n = r("./src/reddit/selectors/comments.ts"),
				o = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts");
			const a = (e, t) => t().features.comments.models[e],
				c = e => {
					switch (e.commentLink.type) {
						case s.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case s.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case s.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				d = (e, t) => e.type === s.a.MoreComments ? t[e.id].numComments : 1,
				l = (e, t, r, s) => {
					let o = Object(n.n)(s, {
							commentLink: t,
							commentsPageKey: e
						}),
						i = t;
					for (; o && o.depth > r && o.prev && (i = o.prev, (o = Object(n.n)(s, {
							commentLink: i,
							commentsPageKey: e
						})) && !(o.depth <= r)););
					return i.id
				},
				u = (e, t, r) => {
					const {
						commentLists: s,
						comments: n
					} = e, {
						head: a
					} = s[t];
					if (a) return Object.keys(n).filter(e => {
						const t = n[e];
						return !(!t.isStickied || !((e, t) => {
							const r = Object(i.c)(e, {
								experimentEligibilitySelector: i.a,
								experimentName: o.B,
								expEventOverride: t
							});
							return !!(Object(o.Zd)(r) ? void 0 : r)
						})(r)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/trackers/postFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			}));
			var s = r("./src/reddit/helpers/correlationIdTracker.ts"),
				n = r("./src/reddit/selectors/telemetry.ts"),
				o = r("./src/reddit/helpers/flair.ts");
			const i = (e, t) => r => ({
					source: "post",
					action: "click",
					noun: "post_flair",
					...n.defaults(r),
					actionInfo: n.actionInfo(r),
					correlationId: Object(s.c)(s.a.SearchResults),
					post: n.post(r, e),
					search: {
						...n.postFlairClickToSearch(r, t),
						query: `flair_name:'${t.postFlairName}'`,
						queryId: Object(s.c)(s.a.SearchResults)
					},
					subreddit: n.subreddit(r)
				}),
				a = e => t => ({
					source: "post_flair_widget",
					action: "click",
					noun: "post_flair_search",
					...n.defaults(t),
					actionInfo: n.actionInfo(t),
					correlationId: Object(s.c)(s.a.SearchResults),
					search: n.postFlairClickToSearch(t, e),
					subreddit: n.subreddit(t)
				}),
				c = e => t => {
					const r = Object(o.g)(e);
					return {
						...n.defaults(t),
						action: "click",
						noun: "post_flair",
						source: "post_flair_widget",
						subreddit: n.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: r
						}
					}
				},
				d = () => e => ({
					...n.defaults(e),
					action: "click",
					noun: "overflow",
					source: "post_flair_widget",
					subreddit: n.subreddit(e)
				}),
				l = e => t => {
					const r = Object(o.g)(e);
					return {
						...n.defaults(t),
						action: "click",
						noun: "clear",
						source: "post_flair_widget",
						subreddit: n.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: r
						}
					}
				},
				u = (e, t) => r => {
					const i = Object(o.g)(e),
						a = n.post(r, t);
					return {
						...n.defaults(r),
						action: "click",
						noun: "post_flair",
						source: "post",
						subreddit: n.subreddit(r),
						postFlair: {
							id: e.templateId,
							title: i
						},
						post: a,
						search: {
							query: `flair_name:'${i}'`,
							subredditId: a ? a.subredditId : void 0,
							subredditName: a ? a.subredditName : void 0,
							postFlairName: i,
							originElement: "post_flair",
							queryId: Object(s.c)(s.a.SearchResults),
							originPageType: r.platform.currentPage ? n.getPageTypeFromCurrentPage(r.platform.currentPage) : void 0
						}
					}
				}
		},
		"./src/reddit/hooks/useClickSourceData.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./node_modules/uuid/v4.js"),
				n = r.n(s),
				o = r("./src/reddit/constants/history.ts"),
				i = r("./src/reddit/contexts/PageLayer/index.tsx"),
				a = r("./src/reddit/selectors/telemetry.ts");

			function c() {
				const e = Object(i.bb)(),
					t = e ? Object(a.getPageTypeFromCurrentPage)(e) : void 0,
					r = "search_results" === t && Object(a.structureType)(e) === a.StructureType.Trending;
				return {
					[o.a.ClickSource]: r ? "search_results_trending" : t,
					[o.a.ClickId]: n()()
				}
			}
		},
		"./src/reddit/hooks/usePostContext.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var s = r("./node_modules/react/index.js"),
				n = r("./src/reddit/contexts/Post/index.tsx");

			function o() {
				const e = Object(s.useContext)(n.c);
				if (!e) throw new Error("No Post context!");
				return e
			}
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var s = r("./node_modules/react/index.js"),
				n = r("./src/lib/CSSVariableProvider/index.tsx");

			function o() {
				return Object(s.useContext)(n.b)
			}
		},
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(o.b)("external_link",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/redux/es/redux.js"),
				n = r("./src/reddit/actions/gold/constants.ts");
			const o = {};
			var i = r("./node_modules/icepick/icepick.js"),
				a = r("./src/reddit/actions/economics/powerups/constants.ts");
			const c = {};
			t.a = Object(s.c)({
				subredditAchievements: (e = o, t) => {
					switch (t.type) {
						case n.pb:
							const {
								subredditId: r, subredditAchievementFlairs: s
							} = t.payload, o = s.reduce((e, t) => ({
								...e,
								[t.type]: t
							}), e[r] || {});
							return {
								...e, [r]: o
							};
						default:
							return e
					}
				},
				subredditUserAchievements: (e = c, t) => {
					var r, s, n;
					switch (t.type) {
						case a.d: {
							const {
								id: o,
								userAchievementFlairsByRedditorIds: i
							} = t.payload;
							let a = e[o] || {};
							for (const {
									redditorId: e,
									userAchievementFlairs: t
								} of i) {
								const o = t.map(({
										type: e
									}) => e),
									i = (null === (r = t.find(({
										isPreferred: e
									}) => e)) || void 0 === r ? void 0 : r.type) || (null === (s = t[0]) || void 0 === s ? void 0 : s.type),
									c = null === (n = t.find(({
										type: e
									}) => e.startsWith("POWERUPS_SUPPORTER"))) || void 0 === n ? void 0 : n.type;
								a = {
									...a,
									[e]: {
										achievementTypes: o,
										preferredType: i,
										supporterType: c
									}
								}
							}
							return {
								...e,
								[o]: a
							}
						}
						case a.f: {
							const {
								subredditId: r,
								userId: s,
								achievementType: n
							} = t.payload;
							return Object(i.setIn)(e, [r, s, "pendingPreferredType"], n)
						}
						case a.g: {
							const {
								subredditId: r,
								userId: s,
								achievementType: n
							} = t.payload;
							return Object(i.updateIn)(e, [r, s], e => ({
								...e,
								preferredType: n,
								pendingPreferredType: void 0
							}))
						}
						case a.e: {
							const {
								subredditId: r,
								userId: s
							} = t.payload;
							return Object(i.setIn)(e, [r, s, "pendingPreferredType"], void 0)
						}
						default:
							return e
					}
				}
			})
		},
		"./src/reddit/reducers/pages/comments/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/redux/es/redux.js"),
				n = r("./src/reddit/actions/ads/constants.ts");
			const o = [];
			var i = (e = o, t) => {
					switch (t.type) {
						case n.o:
							return t.payload;
						case n.p:
						default:
							return e
					}
				},
				a = r("./src/reddit/actions/pages/constants.ts");
			const c = {};
			var d = (e = c, t) => {
				switch (t.type) {
					case a.d:
					case a.b:
					case a.h:
					case a.f: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case a.a:
					case a.e: {
						const {
							key: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s || {}
						}
					}
					default:
						return e
				}
			};
			const l = {};
			var u = (e = l, t) => {
				switch (t.type) {
					case a.c:
					case a.g: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: !0
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var p = (e = m, t) => {
					switch (t.type) {
						case a.d:
						case a.h: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case a.b:
						case a.a:
						case a.f:
						case a.e: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				b = Object(s.c)({
					error: d,
					fullyLoaded: u,
					pending: p
				}),
				f = r("./src/reddit/actions/comment/constants.ts");
			const h = [];
			var y = (e = h, t) => {
					switch (t.type) {
						case f.E:
							return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
						case f.b:
							return [...e.filter(e => e.expiresAt > Date.now())];
						case f.u:
							return [...t.payload.comments];
						default:
							return e
					}
				},
				x = r("./node_modules/lodash/uniqBy.js"),
				O = r.n(x),
				g = r("./node_modules/lodash/values.js"),
				j = r.n(g),
				C = r("./src/reddit/actions/comment/websocket/constants.ts");
			const k = {};

			function _(e) {
				return O()(e, "id").sort((e, t) => e.created - t.created)
			}
			var v = (e = k, t) => {
					switch (t.type) {
						case a.f:
						case f.w:
						case a.b: {
							const {
								comments: r,
								key: s
							} = t.payload, n = e[s] ? e[s] : [], o = function(e, t) {
								return j()(e).map(e => {
									const r = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: r,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(r, n.find(e => e.stickied)), i = _([...n, ...o]);
							return {
								...e,
								[s]: [...i]
							}
						}
						case C.b:
						case C.c:
						case C.d:
						case f.J:
						case f.I: {
							const {
								comment: {
									id: r,
									created: s,
									isStickied: n,
									authorId: o
								},
								commentsPageKey: i
							} = t.payload;
							return {
								...e,
								[i]: [..._([...e[i] ? e[i] : [], {
									id: r,
									created: s,
									stickied: n,
									authorId: o
								}])]
							}
						}
						default:
							return e
					}
				},
				T = r("./node_modules/lodash/mapValues.js"),
				I = r.n(T),
				E = r("./src/reddit/helpers/commentList/index.ts"),
				S = r("./src/reddit/models/Comment/index.ts");
			const P = {};

			function N(e) {
				const t = e;
				return I()(t, ({
					depth: e,
					next: t,
					prev: r
				}) => ({
					depth: e,
					next: t,
					prev: r
				}))
			}
			var w = (e = P, t) => {
				switch (t.type) {
					case f.w: {
						const {
							comments: r,
							commentLists: s,
							continueThreads: n,
							key: o,
							moreCommentsItem: i,
							moreComments: a
						} = t.payload, c = s[i.postId], d = e[o], l = {}, u = d[i.id];
						if (u && u.prev) {
							const {
								id: e
							} = u.prev;
							l[e] = {
								...d[e],
								next: c.head || u.next
							}
						}
						if (u && u.next) {
							const {
								id: e
							} = u.next;
							l[e] = {
								...d[e],
								prev: c.tail || u.prev
							}
						}
						if (c.head && c.tail) {
							const e = Object(E.c)({
									commentLink: c.head,
									commentsDict: r,
									moreCommentsDict: a,
									continueThreadDict: n
								}),
								t = Object(E.c)({
									commentLink: c.tail,
									commentsDict: r,
									moreCommentsDict: a,
									continueThreadDict: n
								});
							u && (e.prev = u.prev, t.next = u.next)
						}
						return {
							...e,
							[o]: {
								...e[o],
								...N(r),
								...N(n),
								...N(a),
								...l
							}
						}
					}
					case a.b:
					case a.f: {
						const {
							comments: r,
							continueThreads: s,
							key: n,
							moreComments: o
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								...N(r),
								...N(s),
								...N(o)
							}
						}
					}
					case C.b:
					case f.J: {
						const {
							comment: r,
							commentsPageKey: s,
							headCommentId: n
						} = t.payload, o = e[s], i = {};
						let a = null;
						return n && (i[n] = {
							...o[n],
							prev: Object(S.h)(r.id)
						}, a = Object(S.h)(n)), {
							...e,
							[s]: {
								...e[s],
								...i,
								[r.id]: {
									depth: 0,
									next: a,
									prev: null
								}
							}
						}
					}
					case f.I: {
						const {
							comment: r,
							commentsPageKey: s,
							parentCommentId: n,
							depth: o
						} = t.payload, i = e[s], a = {};
						let c = null;
						if (!i[n]) return e;
						const d = i[n].next;
						return d && (a[d.id] = {
							...i[d.id],
							prev: Object(S.h)(r.id)
						}, c = d), a[n] = {
							...i[n],
							next: Object(S.h)(r.id)
						}, {
							...e,
							[s]: {
								...e[s],
								...a,
								[r.id]: {
									depth: o,
									next: c,
									prev: Object(S.h)(n)
								}
							}
						}
					}
					default:
						return e
				}
			};
			const F = {};
			var L = (e = F, t) => {
				switch (t.type) {
					case C.b:
					case C.c:
					case f.J: {
						const {
							comment: r,
							commentsPageKey: s
						} = t.payload;
						return {
							...e,
							[s]: r.id
						}
					}
					case a.b:
					case a.f: {
						const {
							commentLists: r,
							key: s,
							postId: n
						} = t.payload;
						return {
							...e,
							[s]: r[n] && r[n].head ? r[n].head.id : null
						}
					}
					default:
						return e
				}
			};
			const D = {};
			var R = (e = D, t) => {
				switch (t.type) {
					case a.d:
					case a.b:
					case a.c:
					case a.h: {
						const {
							key: r,
							postId: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case f.J: {
						const {
							parentId: r,
							commentsPageKey: s
						} = t.payload;
						return e[s] ? e : {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				api: b,
				followed: y,
				keyToChatCommentLinks: v,
				keyToCommentThreadLinkSets: w,
				keyToHeadCommentId: L,
				keyToPostId: R,
				ads: i
			})
		},
		"./src/reddit/selectors/comments.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return y
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "u", (function() {
				return O
			})), r.d(t, "w", (function() {
				return g
			})), r.d(t, "x", (function() {
				return j
			})), r.d(t, "k", (function() {
				return k
			})), r.d(t, "g", (function() {
				return _
			})), r.d(t, "H", (function() {
				return v
			})), r.d(t, "n", (function() {
				return T
			})), r.d(t, "o", (function() {
				return I
			})), r.d(t, "j", (function() {
				return E
			})), r.d(t, "l", (function() {
				return S
			})), r.d(t, "h", (function() {
				return P
			})), r.d(t, "a", (function() {
				return N
			})), r.d(t, "b", (function() {
				return w
			})), r.d(t, "q", (function() {
				return F
			})), r.d(t, "m", (function() {
				return L
			})), r.d(t, "t", (function() {
				return D
			})), r.d(t, "A", (function() {
				return R
			})), r.d(t, "J", (function() {
				return A
			})), r.d(t, "s", (function() {
				return M
			})), r.d(t, "D", (function() {
				return U
			})), r.d(t, "E", (function() {
				return W
			})), r.d(t, "F", (function() {
				return H
			})), r.d(t, "r", (function() {
				return B
			})), r.d(t, "e", (function() {
				return K
			})), r.d(t, "v", (function() {
				return q
			})), r.d(t, "K", (function() {
				return V
			})), r.d(t, "f", (function() {
				return J
			})), r.d(t, "i", (function() {
				return $
			})), r.d(t, "G", (function() {
				return G
			})), r.d(t, "C", (function() {
				return z
			})), r.d(t, "I", (function() {
				return X
			})), r.d(t, "p", (function() {
				return Q
			})), r.d(t, "L", (function() {
				return Y
			})), r.d(t, "y", (function() {
				return Z
			})), r.d(t, "z", (function() {
				return ee
			})), r.d(t, "B", (function() {
				return te
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/values.js"),
				n = r.n(s),
				o = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeCommentPermalink/index.ts"),
				a = r("./src/lib/objectSelector/index.ts"),
				c = r("./src/reddit/constants/comments.ts"),
				d = r("./src/reddit/models/Post/index.ts"),
				l = r("./src/reddit/selectors/posts.ts"),
				u = r("./src/reddit/selectors/subreddit.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				p = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/lib/initializeClient/installReducer.ts"),
				f = r("./src/reddit/reducers/features/comments/index.ts"),
				h = r("./src/reddit/reducers/pages/comments/index.ts");
			Object(b.a)({
				features: {
					comments: f.a
				},
				pages: {
					comments: h.a
				}
			});
			const y = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.error[t],
				x = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.pending[t],
				O = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.fullyLoaded[t],
				g = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				j = (e, t) => {
					const r = g(e, t);
					if (r) return Object(p.a)(e, {
						commentId: r
					})
				},
				C = [],
				k = Object(a.a)((e, t) => {
					const r = j(e, t),
						s = r && r.id;
					if (!s) return C;
					const {
						commentsPageKey: n
					} = t, o = e.pages.comments.keyToCommentThreadLinkSets[n], i = [];
					let a = {
						id: s,
						type: c.a.Comment
					};
					do {
						i.push(a), a = o[a.id].next
					} while (a);
					return i
				}),
				_ = (e, t) => g(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				v = (e, {
					commentsPageKey: t
				}) => {
					const r = e.pages.comments.keyToPostId[t];
					return r ? e.posts.models[r] : null
				},
				T = (e, {
					commentId: t,
					commentLink: r,
					commentsPageKey: s
				}) => {
					const n = e.pages.comments.keyToCommentThreadLinkSets[s];
					return n ? r ? n[r.id] : t ? n[t] : null : null
				},
				I = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				E = (e, t) => {
					const r = t.commentsPageKey ? T(e, t) : null;
					return r ? r.depth : null
				},
				S = (e, {
					commentLink: t
				}) => {
					const {
						id: r,
						type: s
					} = t;
					switch (s) {
						case c.a.Comment:
							return e.features.comments.models[r];
						case c.a.MoreComments:
							return e.moreComments.models[r];
						case c.a.ContinueThread:
							return e.continueThreads.models[r];
						default:
							return null
					}
				},
				P = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, r = Object(d.s)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === r && e.features.comments.models[t].author !== o.C).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				N = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				w = e => e.moreComments.models,
				F = e => e.features.comments.models,
				L = (e, {
					commentId: t
				}) => {
					const r = Object(p.a)(e, {
						commentId: t
					});
					return r ? Object(i.a)(Object(l.E)(e, r), t) : ""
				},
				D = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				R = (e, {
					commentId: t,
					commentsPageKey: r
				}) => !!(t && e.features.comments.isEditing[r] && e.features.comments.isEditing[r][t]),
				A = (e, {
					commentId: t,
					commentsPageKey: r
				}) => !!(t && e.features.comments.replyFormOpen[r] && e.features.comments.replyFormOpen[r][t]),
				M = (e, {
					commentsPageKey: t
				}) => {
					const r = t && e.features.comments.replyFormOpen[t] || {},
						s = Object.keys(r).find(e => r[e]),
						n = Object(p.a)(e, {
							commentId: s
						}),
						o = n && E(e, {
							commentId: n.id,
							commentLink: void 0,
							commentsPageKey: t
						});
					if (n && "number" == typeof o) return {
						...n,
						depth: o
					}
				},
				U = (e, {
					moreCommentsId: t
				}) => e.moreComments.models[t],
				W = (e, {
					moreCommentsId: t
				}) => !!e.moreComments.api.pending[t],
				H = (e, {
					commentsPageKey: t
				}) => {
					const r = e.pages.comments.keyToPostId[t];
					if (r) {
						const t = n()(e.moreComments.models).find(t => t.postId === r && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
						if (t) return {
							moreCommentId: t.id,
							pending: !!e.moreComments.api.pending[t.id]
						}
					}
					return null
				},
				B = (e, {
					id: t
				}) => e.continueThreads.models[t],
				K = (e, {
					commentId: t
				}) => {
					const r = t ? e.features.comments.models[t] : void 0;
					if (!r) return null;
					const s = e.authorFlair.models[r.subredditId];
					return s ? s[r.author] : null
				},
				q = (e, {
					draftKey: t
				}) => !!e.features.comments.submit.error[t],
				V = (e, {
					draftKey: t
				}) => {
					const r = e.features.comments.submit.error[t];
					return r && r.fields ? r.fields.map(e => e.msg) : []
				},
				J = (e, {
					draftKey: t
				}) => {
					const r = e.features.comments.drafts[t];
					return !!r && r.autofocusDisabled
				},
				$ = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				G = (e, {
					commentId: t
				}) => {
					const r = t ? e.features.comments.submit.error[t] : void 0;
					return r && r.fields ? r.fields.map(e => e.msg) : void 0
				},
				z = (e, {
					commentId: t
				}) => !!t && e.features.comments.submit.pending[t],
				X = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				Q = e => e.features.comments.visitHighlightFilter,
				Y = (e, t) => {
					const r = Object(p.a)(e, t);
					if (r) return Object(u.X)(e, r)
				},
				Z = (e, {
					commentId: t
				}) => {
					const r = Object(p.a)(e, {
							commentId: t
						}),
						s = r && r.authorId || "";
					return Object(m.R)(e, s)
				},
				ee = (e, {
					commentId: t
				}) => {
					var r, s;
					return !!((null === (s = null === (r = e.pages) || void 0 === r ? void 0 : r.comments) || void 0 === s ? void 0 : s.followed) || []).find(e => e.id === t)
				},
				te = (e, {
					commentId: t
				}) => {
					var r, s;
					const n = ((null === (s = null === (r = e.pages) || void 0 === r ? void 0 : r.comments) || void 0 === s ? void 0 : s.followed) || []).find(e => e.id === t);
					return !!(n && n.expiresAt < Date.now())
				}
		},
		"./src/reddit/selectors/gold/powerups/achievements.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "a", (function() {
				return m
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(n.a)({
				features: {
					powerups: o.a
				}
			});
			const i = (e, {
					subredditId: t
				}) => t ? e.features.powerups.subredditAchievements[t] : null,
				a = (e, {
					subredditId: t,
					userId: r
				}) => {
					var s;
					return t && r ? null === (s = e.features.powerups.subredditUserAchievements[t]) || void 0 === s ? void 0 : s[r] : null
				},
				c = Object(s.a)(a, e => (null == e ? void 0 : e.pendingPreferredType) || (null == e ? void 0 : e.preferredType)),
				d = Object(s.a)([i, c], (e, t) => e && t ? e[t] : null),
				l = Object(s.a)(a, e => null == e ? void 0 : e.supporterType),
				u = Object(s.a)([i, l], (e, t) => e && t ? e[t] : null),
				m = Object(s.a)([i, a], (e, t) => {
					if (!e) return [];
					const r = t ? t.achievementTypes : [],
						s = (null == t ? void 0 : t.pendingPreferredType) || (null == t ? void 0 : t.preferredType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !r.includes(e.type),
						isPreferred: e.type === s
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				})
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"84f02d14f38a"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250.404559c2919f5d287411.js.map