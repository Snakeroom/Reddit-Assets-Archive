// https://www.redditstatic.com/desktop2x/Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250.abfffd26c6424f1be1de.js
// Retrieved at 4/20/2021, 7:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"], {
		"./src/graphql/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"84f02d14f38a"}')
		},
		"./src/lib/makeCommentPermalink/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/redditId/index.ts");
			t.a = (e, t) => {
				let s = e;
				return "/" !== s.substr(-1) && (s += "/"), s += Object(r.c)(t)
			}
		},
		"./src/reddit/actions/jsApi.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			}));
			var r = s("./src/lib/makeActionCreator/index.ts");
			const n = "JSAPI__CONSUMER_SUBSCRIBED",
				o = Object(r.a)(n)
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "h", (function() {
				return i
			})), s.d(t, "i", (function() {
				return a
			})), s.d(t, "g", (function() {
				return c
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			}));
			const r = "SUBSCRIPTION__FETCH_DATA_PENDING",
				n = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				o = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				i = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				a = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				c = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				m = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return L
			})), s.d(t, "d", (function() {
				return D
			})), s.d(t, "c", (function() {
				return R
			})), s.d(t, "a", (function() {
				return A
			})), s.d(t, "b", (function() {
				return W
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				a = s("./src/reddit/actions/login.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/subscription/constants.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/constants/posts.ts"),
				u = s("./src/lib/makeApiRequest/index.ts"),
				p = s("./src/lib/omitHeaders/index.ts"),
				b = s("./src/reddit/constants/headers.ts");
			var f = s("./src/graphql/operations/SubscribedSubreddits.json"),
				h = s("./src/lib/makeGqlRequest/index.ts"),
				x = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var C = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				y = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				O = s("./src/reddit/models/GqlTopLevelField.ts"),
				g = s("./src/reddit/models/User/index.ts");

			function j(e) {
				const t = [],
					s = [],
					r = {},
					n = {},
					{
						followedRedditorsInfo: o
					} = e.identity;
				for (const a of o.edges) {
					if (a.node.__typename !== g.c.AvailableRedditor) continue;
					const e = Object(C.a)(a.node.profile);
					r[e.id] = e;
					const {
						isFavorite: s
					} = a.node.profile;
					s && t.push(e.id)
				}
				const {
					subscribedSubreddits: i
				} = e.identity;
				for (const a of i.edges) {
					if (a.node.__typename !== O.a.Subreddit) continue;
					const e = Object(y.a)(a.node);
					n[e.id] = e;
					const {
						isFavorite: t
					} = a.node;
					t && s.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: s,
					profiles: r,
					subreddits: n
				}
			}
			var k = s("./src/reddit/models/Toast/index.ts"),
				I = s("./src/reddit/selectors/profile.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/selectors/subscriptions.ts"),
				T = s("./src/reddit/selectors/user.ts");
			const N = () => r.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				S = Object(o.a)(d.c),
				E = Object(o.a)(d.b),
				w = Object(o.a)(d.a),
				F = Object(o.a)(d.h),
				L = (Object(o.a)(d.i), Object(o.a)(d.g), () => async (e, t, {
					gqlContext: s
				}) => {
					const r = t();
					if (!r.user.account || r.subscriptions.api.fetched) return;
					e(E());
					const n = await (e => Object(h.a)(e, f))(s());
					if (n.ok) {
						const t = j(n.body.data);
						e(S(t))
					} else e(w({
						error: n.error
					}))
				}),
				P = (e, t) => t.type === m.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				D = (e, t, s) => async (o, d, {
					apiContext: f
				}) => {
					let h = e.map(e => e.type === m.a.SUBREDDIT ? {
						id: Object(_.F)(d(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(I.m)(d(), e.name),
						name: `${n.Yb}${e.name}`,
						type: e.type
					});
					if (!Object(T.J)(d())) return o(Object(c.k)({
						actionSource: c.a.Subscribe
					})), void o(Object(a.j)());
					const C = Object(T.i)(d());
					if (C) {
						const t = h.length,
							s = e.length;
						if (h = h.filter(e => !P(C, e)), (e = e.filter(e => !P(C, e))).length !== s || h.length !== t) {
							const e = r.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(l.f)(Object(l.e)(e, k.b.Error)))
						}
						if (!e.length && !h.length) return
					}
					if (o(F({
							identifiers: h,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(v.b)(d()),
							userIsSubscriber: t,
							widgetId: s
						})), (await ((e, {
							subredditIds: t,
							subredditNames: s,
							subscribe: r
						}) => Object(u.a)(Object(p.a)(e, [b.a]), {
							method: n.cb.POST,
							endpoint: Object(x.a)(`${e.apiUrl}/api/subscribe`),
							data: {
								action: r ? "sub" : "unsub",
								sr: t && t.join(",") || void 0,
								sr_name: s && s.join(",") || void 0,
								api_type: "json"
							}
						}))(f(), {
							subredditNames: h.map(({
								name: e
							}) => e),
							subscribe: t
						})).ok) {
						const s = 1 === e.length ? `${"subreddit"===e[0].type?i.d.subreddit:i.d.profile}${e[0].name}` : `${r.fbt.plural("community",e.length,{many:"communities",name:"communities",showCount:"yes"})}`;
						o(Object(l.f)({
							text: 1 === e.length && "profile" === e[0].type ? r.fbt._("Sucсessfully {verb} {communityname}", [r.fbt._param("verb", t ? "followed" : "unfollowed"), r.fbt._param("communityname", s)], {
								hk: "1hY5KX"
							}) : r.fbt._("Sucсessfully {verb} {communityname}", [r.fbt._param("verb", t ? "joined" : "left"), r.fbt._param("communityname", s)], {
								hk: "1hY5KX"
							})
						}))
					} else {
						o(F({
							identifiers: h,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(v.b)(d()),
							userIsSubscriber: !t,
							widgetId: s
						}));
						const n = r.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(l.f)(Object(l.e)(n, k.b.Error)))
					}
				}, M = Object(o.a)(d.f), R = e => async (t, s, {
					apiContext: r
				}) => {
					const o = s(),
						i = Object(_.L)(o, {
							identifier: e
						});
					if (!i) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const a = e.type === m.a.SUBREDDIT ? i.name : `u_${i.name}`,
						c = o.subscriptions.favoriteSubredditOrder || [],
						d = o.subscriptions.favoriteProfileOrder || [],
						f = c.indexOf(e.id),
						h = d.indexOf(e.id),
						x = -1 === f && -1 === h,
						C = o.subreddits.models,
						y = o.profiles.models;
					t(M({
						makeFavorite: x,
						identifier: e,
						subredditModels: C,
						profileModels: y
					}));
					const O = {
							type: e.type,
							name: i.name
						},
						g = () => Object(_.gb)(s(), {
							identifier: O
						});
					(g() || (await t(D([O], !0)), g())) && ((await ((e, t, s) => Object(u.a)(Object(p.a)(e, [b.a]), {
						method: n.cb.POST,
						endpoint: `${e.apiUrl}/api/favorite`,
						data: {
							make_favorite: s ? "true" : "false",
							sr_name: t,
							api_type: "json"
						}
					}))(r(), a, x)).ok || (t(M({
						makeFavorite: !x,
						identifier: e,
						subredditModels: C,
						profileModels: y
					})), t(Object(l.f)({
						text: N(),
						kind: k.b.Error
					}))))
				}, H = Object(o.a)(d.d), A = e => async (t, s, {
					apiContext: r
				}) => {
					const o = s().multireddits.models,
						i = () => {
							t(Object(l.f)({
								text: N(),
								kind: k.b.Error
							}))
						},
						a = o[e];
					if (!a) return void i();
					const c = !a.isFavorited;
					t(H({
						makeFavorite: c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), (await ((e, t, s) => Object(u.a)(Object(p.a)(e, [b.a]), {
						method: n.cb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: s ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(r(), e, c)).ok || (t(H({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), i())
				}, K = Object(o.a)(d.e), W = e => async (t, s, {
					apiContext: o
				}) => {
					const i = s(),
						a = i.multireddits.models;
					if (!Object(T.J)(i)) return;
					const c = (e = !0) => {
							t(Object(l.f)({
								text: r.fbt._("Sorry, failed to {followAction}", [r.fbt._param("followAction", e ? r.fbt._("follow", null, {
									hk: "2I4uia"
								}) : r.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: k.b.Error
							}))
						},
						d = a[e];
					if (!d) return void c();
					const m = !d.isFollowed;
					t(K({
						follow: m,
						multiredditPath: e,
						multiredditsModelsState: a
					})), (await ((e, t, s) => Object(u.a)(Object(p.a)(e, [b.a]), {
						method: n.cb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: s ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(o(), e, m)).ok || (t(K({
						follow: !m,
						multiredditPath: e,
						multiredditsModelsState: a
					})), c(m))
				}
		},
		"./src/reddit/components/CategoryTag/index.m.less": function(e, t, s) {
			e.exports = {
				metaFlair: "_7_d4sJjd2oYzaJuU_QpOI",
				"m-lightboxHeader": "_1rtoCmW_7bFJWYffSOwt4R",
				mLightboxHeader: "_1rtoCmW_7bFJWYffSOwt4R"
			}
		},
		"./src/reddit/components/CategoryTagList/index.m.less": function(e, t, s) {
			e.exports = {
				categoryTagWrapper: "_13jLUpnQtcA8FXyw5Kv06q"
			}
		},
		"./src/reddit/components/CategoryTagList/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/selectors/user.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/constants/posts.ts"),
				u = s("./src/reddit/controls/InternalLink/index.tsx"),
				p = s("./src/lib/addQueryParams/index.ts");
			const b = (e, t, s, r, n) => {
				const o = n || "*:*",
					i = s || l.Q;
				return Object(p.a)("/search", {
					q: o,
					sort: i,
					t: r,
					category_name: e,
					category: t
				})
			};
			var f = s("./src/reddit/helpers/correlationIdTracker.ts"),
				h = s("./src/reddit/selectors/telemetry.ts");
			const x = (e, t) => s => ({
				source: "post",
				action: "click",
				noun: "meta_flair",
				...h.defaults(s),
				correlationId: Object(f.c)(f.a.SearchResults),
				post: h.post(s, e),
				search: h.postFlairClickToSearch(s, t),
				subreddit: h.subreddit(s)
			});
			var C = s("./src/reddit/components/CategoryTag/index.m.less"),
				y = s.n(C);
			class O extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const e = {
							id: this.props.category.categoryId,
							title: this.props.category.categoryName,
							eventType: m.a.SUBREDDIT,
							originElement: "meta_flair"
						};
						this.props.sendEvent(x(this.props.postId, e))
					}
				}
				render() {
					const e = this.props.category,
						t = this.props.inLightboxHeader,
						s = e.categoryId,
						r = e.categoryName,
						o = n.a.createElement("span", null, r);
					return n.a.createElement("span", {
						className: Object(d.a)(y.a.metaFlair, {
							[y.a["m-lightboxHeader"]]: t
						})
					}, n.a.createElement(u.a, {
						onClick: this.onClick,
						to: b(r, s, l.Ob.Relevance, l.Wb.DAY),
						children: o
					}))
				}
			}
			var g = s("./src/reddit/components/CategoryTagList/index.m.less"),
				j = s.n(g);
			const k = Object(o.b)(() => Object(i.c)({
				labelNSFW: c.S
			}));
			t.a = k(Object(a.c)(({
				postCategories: e,
				postId: t,
				inLightboxHeader: s,
				sendEvent: r
			}) => n.a.createElement("span", {
				className: s ? void 0 : j.a.categoryTagWrapper
			}, e.map(e => n.a.createElement(O, {
				postId: t,
				category: e,
				key: e.categoryId,
				inLightboxHeader: s,
				sendEvent: r
			})))))
		},
		"./src/reddit/components/Emoji/index.m.less": function(e, t, s) {
			e.exports = {
				EmojiDisplay: "_2Gt13AX94UlLxkluAMsZqP",
				emojiDisplay: "_2Gt13AX94UlLxkluAMsZqP"
			}
		},
		"./src/reddit/components/Flair/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Flair/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return K
			})), s.d(t, "a", (function() {
				return W
			})), s.d(t, "b", (function() {
				return G
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/pick.js"),
				o = s.n(n),
				i = s("./node_modules/polished/dist/polished.es.js"),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = s("./src/lib/addQueryParams/index.ts"),
				m = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/components/Emoji/index.m.less"),
				f = s.n(b);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const x = p.a.wrapped(({
				backgroundImage: e,
				style: t,
				...s
			}) => c.a.createElement("div", h({
				style: {
					...t || {},
					backgroundImage: `url('${e}')`
				}
			}, s)), "EmojiDisplay", f.a);
			var C = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				y = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				O = s("./src/reddit/constants/colors.ts"),
				g = s("./src/reddit/constants/parameters.ts"),
				j = s("./src/reddit/controls/InternalLink/index.tsx"),
				k = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				I = s("./src/reddit/icons/svgs/Close/index.tsx"),
				_ = s("./src/reddit/models/Flair/index.ts"),
				v = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				T = s("./src/reddit/components/Flair/index.m.less"),
				N = s.n(T);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const E = Object(y.a)(C.b),
				w = p.a.div("FlairWrapper", N.a),
				F = p.a.wrapped(d.a, "CloseButton", N.a),
				L = p.a.wrapped(Object(u.a)(({
					forceSmallEmojis: e,
					theme: t,
					...s
				}) => {
					const r = t;
					return c.a.createElement(x, S({
						style: {
							...P(!!e, r) || {}
						}
					}, s))
				}), "FlairEmojiDisplay", N.a),
				P = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: `${t.subredditContext.emojiHeight}px`,
						width: `${t.subredditContext.emojiWidth}px`
					}
				},
				D = (e, t) => {
					const s = t ? `/r/${t}/search` : "/search",
						r = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(l.a)(s, {
						[g.p]: r,
						[g.s]: t ? "1" : ""
					})
				},
				M = e => e.isFlairFilter ? c.a.createElement(j.a, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? c.a.createElement(j.a, {
					onClick: () => e.onClick(e.searchableTerm),
					to: D(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class R extends c.a.Component {
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
						className: Object(m.a)(this.props.className, {
							[N.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(v.a)(this.props).flair,
							color: `${K(this.props)}`
						}
					}, this.props.text, this.props.isSelected && c.a.createElement(F, {
						to: "./",
						onClick: this.props.onCloseClick
					}, c.a.createElement(I.a, {
						className: N.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(v.a)(this.props).flair
						}
					})), !!this.props.tooltip && c.a.createElement(E, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return c.a.createElement(M, {
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
			const H = Object(u.a)(R),
				A = Object(u.a)(e => {
					let t = "",
						s = !1;
					const r = e.richtext.map((r, n) => {
						if (r.e === _.c.Emoji) {
							const o = r;
							return t += o.a, s = !0, c.a.createElement(L, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: o.u,
								key: n,
								title: o.a
							})
						} {
							const e = r;
							return t += e.t, c.a.createElement("span", {
								key: n
							}, e.t)
						}
					});
					let n;
					s && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (n = {
						marginTop: `-${e.theme.subredditContext.emojiHeight-16}px`
					});
					const o = c.a.createElement(w, {
						className: Object(m.a)(e.className, {
							[N.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...n,
							backgroundColor: e.backgroundColor || Object(v.a)(e).flair,
							color: `${K(e)}`
						}
					}, r, e.isSelected && c.a.createElement(F, {
						to: "./",
						onClick: e.onCloseClick
					}, c.a.createElement(I.a, {
						className: N.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(v.a)(e).flair
						}
					})));
					return c.a.createElement(M, {
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
				K = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(v.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(k.a)(Object(v.a)(e).post, O.b.black, O.b.white) : e.textColor === _.e.Dark ? O.b.black : O.b.white,
				W = p.a.wrapped(H, "TextFlair", N.a),
				V = p.a.wrapped(A, "RichTextFlair", N.a),
				U = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(i.j)(.1, Object(v.a)(o()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				B = p.a.wrapped(e => {
					const t = U(e),
						s = c.a.createElement("span", {
							className: e.className,
							style: {
								border: `1px solid ${t}`,
								color: t
							}
						}, e.text);
					return c.a.createElement(M, {
						flair: s,
						searchableTerm: e.text
					})
				}, "MetaFlair", N.a);

			function G(e) {
				const {
					className: t,
					disabled: s = !1,
					flair: n,
					isFlairFilter: o,
					isSelected: i,
					onClick: a,
					onCloseClick: d,
					onMouseDown: l,
					subredditName: u,
					usesCommunityStyles: p,
					forceSmallEmojis: b,
					to: f
				} = e, h = Object(m.a)({
					[N.a.flairVariant]: o,
					[N.a.small]: o && !e.large,
					[N.a.large]: o && e.large
				}, t);
				switch (n.type) {
					case _.f.Richtext:
						return s || !n.richtext ? null : c.a.createElement(V, {
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
							subredditName: u,
							textColor: n.textColor,
							to: f
						});
					case _.f.Text:
						return s || !n.text ? null : c.a.createElement(W, {
							backgroundColor: n.backgroundColor,
							className: h,
							isFlairFilter: o,
							isSelected: i,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: u,
							text: n.text,
							textColor: n.textColor,
							redditStyle: !p,
							to: f
						});
					case _.f.Meta:
						return c.a.createElement(W, {
							backgroundColor: n.backgroundColor,
							className: t,
							isFlairFilter: o,
							subredditName: u,
							text: n.text,
							textColor: n.textColor,
							redditStyle: !p,
							to: f
						});
					case _.f.Nsfw:
					case _.f.Spoiler:
						return c.a.createElement(B, {
							className: t,
							text: n.text,
							type: n.type
						});
					case _.f.Quarantined:
						return null;
					case _.f.Oc:
						return c.a.createElement(W, {
							backgroundColor: O.b.alienblue,
							text: n.text,
							textColor: _.e.Light,
							tooltip: r.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return n.text ? c.a.createElement(W, {
							backgroundColor: n.backgroundColor,
							className: h,
							isFlairFilter: o,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: u,
							text: n.text,
							redditStyle: !p,
							to: f
						}) : null
				}
			}
		},
		"./src/reddit/components/FlairList/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/noop.js"),
				n = s.n(r),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/Flair/index.tsx"),
				l = s("./src/reddit/helpers/flair.ts"),
				m = s("./src/reddit/models/Flair/index.ts"),
				u = s("./src/reddit/selectors/user.ts");
			const p = Object(c.c)({
					labelNSFW: u.S
				}),
				b = Object(a.b)(p),
				f = e => {
					if (e.type === m.f.Richtext && e.richtext) {
						const t = e.richtext.map(e => e.e === m.c.Emoji ? e.u : e.t).join("-");
						return `${e.type}--${t}`
					}
					return `${e.type}--${e.text}`
				};
			t.a = b(({
				className: e,
				isFlairFilter: t,
				onClick: s,
				onMouseDown: r,
				disabled: o = !1,
				flair: a,
				labelNSFW: c,
				subredditName: u
			}) => {
				const p = !!a.find(e => e.type === m.f.Richtext),
					b = a.map(e => {
						if (e.type === m.f.Text && p) return null;
						if (!c && e.type === m.f.Nsfw) return null;
						const a = Object(l.j)(e),
							b = `/r/${u}/`,
							h = r ? () => r(e) : n.a;
						return i.a.createElement(d.b, {
							isFlairFilter: t,
							key: f(e),
							onClick: s,
							onMouseDown: h,
							disabled: o,
							flair: e,
							forceSmallEmojis: !0,
							subredditName: u,
							to: Object(l.e)(b, a)
						})
					});
				return i.a.createElement("div", {
					className: e
				}, b)
			})
		},
		"./src/reddit/components/FlairWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				flairList: "lrzZ8b0L6AzLkQj5Ww7H1",
				flairWrapper: "_2fiIRtMpITeCAzXc4cANKp",
				flairNoWrap: "_2xu1HuBz1Yx6SP10AGVx_I"
			}
		},
		"./src/reddit/components/FlairWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return k
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/CategoryTagList/index.tsx"),
				l = s("./src/reddit/components/FlairList/index.tsx"),
				m = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/helpers/correlationIdTracker.ts"),
				b = s("./src/reddit/helpers/flair.ts"),
				f = s("./src/reddit/helpers/trackers/postFlair.ts"),
				h = s("./src/reddit/models/Flair/index.ts"),
				x = s("./src/reddit/selectors/postFlair.ts"),
				C = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/components/FlairWrapper/index.m.less"),
				g = s.n(O);
			const j = Object(i.b)(() => Object(a.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(u.p)(e, {
						pageLayer: t
					}),
					isPostFlairEnabled: (e, t) => Object(x.c)(e, {
						subredditId: t.post.belongsTo.id
					}),
					postCategories: (e, {
						post: t
					}) => Object(C.u)(e, t),
					subredditName: (e, {
						post: t
					}) => Object(y.T)(e, {
						subredditId: t.belongsTo.id
					}).name
				})),
				k = e => {
					const t = [];
					return e.isOriginalContent && t.push({
						text: r.fbt._("OC", null, {
							hk: "1i721p"
						}),
						type: h.f.Oc
					}), e.isMeta && t.push({
						text: r.fbt._("Poll", null, {
							hk: "1scdU1"
						}),
						type: h.f.Meta
					}), t.push(...e.flair), t
				};
			t.a = j(({
				className: e,
				disableFlair: t,
				flairPosition: s,
				isFlairFilter: r,
				isPostFlairEnabled: n,
				nowrap: i,
				post: a,
				postCategories: u,
				sendEvent: x,
				showCategoryTag: C,
				subredditName: y,
				titleFlair: O
			}) => {
				const j = Object(m.b)(),
					I = s === h.b.Left,
					_ = O || k(a),
					v = [];
				let T = [];
				I ? _.map(e => {
					Object(b.q)(e.type) ? v.push(e) : T.push(e)
				}) : T = _;
				const N = i ? g.a.flairNoWrap : v.length > 0 || T.length > 0 || u && C ? g.a.flairWrapper : null,
					S = e => {
						const t = {
							id: a.belongsTo.id,
							eventType: a.belongsTo.type,
							originElement: "post_flair",
							postFlairName: e
						};
						Object(p.d)(p.a.SearchResults), x && x(Object(f.a)(a.id, t))
					},
					E = e => {
						Object(p.d)(p.a.SearchResults), x && x(Object(f.e)(e, a.id))
					},
					w = !(t || !_ || !_.length),
					F = !!(C && u && u.length);
				return w || F ? o.a.createElement("div", {
					className: Object(c.a)(N, e),
					"data-ignore-click": j
				}, w && v && o.a.createElement(l.a, {
					className: g.a.flairList,
					isFlairFilter: r,
					key: "leftFlair",
					onClick: S,
					onMouseDown: E,
					flair: v,
					disabled: !n,
					subredditName: y
				}), w && o.a.createElement(l.a, {
					className: g.a.flairList,
					isFlairFilter: r,
					key: "rightFlair",
					onClick: S,
					onMouseDown: E,
					flair: T,
					disabled: !n,
					subredditName: y
				}), F && o.a.createElement(d.a, {
					inLightboxHeader: i,
					postId: a.id,
					postCategories: u
				})) : null
			})
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const o = () => null;
			t.a = Object(r.a)({
				ErrorComponent: o,
				getComponent: () => Object(n.a)(() => s.e("SubredditHovercard").then(s.bind(null, "./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/ImageWithFallback/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			s("./node_modules/react/index.js");
			const r = e => new Promise((t, s) => {
				const r = new Image;
				r.onload = () => t(r), r.onerror = s, r.src = e
			})
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
				return h
			})), s.d(t, "a", (function() {
				return x
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = s("./src/reddit/selectors/tooltip.ts"),
				l = s("./src/reddit/components/InfoTextTooltip/index.m.less"),
				m = s.n(l),
				u = s("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const b = u.a.div("Text", m.a),
				f = u.a.div("BottomText", m.a),
				h = e => n.a.createElement(b, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				x = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return n.a.createElement(f, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				C = Object(i.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(d.b)(t)(e)
				}),
				y = Object(c.a)(x, [a.a.Click, a.a.Keydown]),
				O = Object(c.a)(h, [a.a.Click, a.a.Keydown]),
				g = Object(o.b)(C);
			t.c = g(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? n.a.createElement(y, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : n.a.createElement(O, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/higherOrderComponents/asTooltip.tsx"),
				i = s("./src/reddit/constants/elementIds.ts"),
				a = s("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const s = Object(o.a)(e, t);
				class r extends n.a.PureComponent {
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
						return n.a.createElement(s, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(r)
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			}));
			var r = s("./node_modules/react/index.js");
			const n = Object(r.createContext)(!1);

			function o() {
				return Object(r.useContext)(n)
			}
		},
		"./src/reddit/components/Thumbnail/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return U
			}));
			var r = s("./src/lib/isUrl/index.ts"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				l = s("./src/reddit/components/ImageWithFallback/index.tsx"),
				m = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				u = s("./src/reddit/icons/fonts/Link/index.tsx"),
				p = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				b = s("./src/reddit/icons/fonts/Text/index.tsx"),
				f = s("./src/reddit/icons/fonts/Video/index.tsx"),
				h = s("./src/reddit/icons/svgs/Gallery/index.tsx"),
				x = s("./src/reddit/icons/svgs/Poll/index.tsx"),
				C = s("./src/reddit/constants/elementClassNames.ts"),
				y = s("./src/reddit/controls/ContentType/index.m.less"),
				O = s.n(y);
			const g = e => Object(i.a)(O.a.contentTypeIcon, e.className),
				j = e => o.a.createElement(u.a, {
					className: Object(i.a)(C.a, g(e))
				});

			function k(e) {
				const t = g(e);
				switch (e.type) {
					case "gifvideo":
						return o.a.createElement(m.a, {
							className: t
						});
					case "image":
						return o.a.createElement(p.a, {
							className: t
						});
					case "meta":
						return o.a.createElement(x.a, {
							className: t
						});
					case "rtjson":
					case "text":
						return o.a.createElement(b.a, {
							className: t
						});
					case "video":
						return o.a.createElement(f.a, {
							className: t
						});
					case "gallery":
						return o.a.createElement(h.a, {
							className: t
						});
					default:
						return o.a.createElement(j, e)
				}
			}
			var I = s("./src/reddit/controls/OutboundLink/index.tsx"),
				_ = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				v = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				T = s("./src/reddit/models/Media/index.ts"),
				N = s("./src/reddit/models/Theme/index.ts"),
				S = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				E = s("./src/reddit/components/Thumbnail/index.m.less"),
				w = s.n(E);

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const L = e => e.placeholderImage || Object(S.a)(e).placeholderImage,
				P = e => e.placeholderImage ? "cover" : Object(S.a)(e).placeholderImagePosition,
				D = c.a.span("LinkText", w.a),
				M = ({
					className: e,
					onClick: t,
					children: s
				}) => o.a.createElement("div", {
					onClick: t,
					className: Object(i.a)(w.a.linkIcon, e)
				}, s),
				R = e => o.a.createElement("img", {
					alt: e.alt,
					className: Object(i.a)(w.a.hiddenImage, e.className)
				}),
				H = e => {
					const t = o.a.createRef(),
						{
							src: s,
							errorSrc: r
						} = e;
					return s && r && Object(l.a)(s).catch(() => {
						t.current && (t.current.style.backgroundImage = `url(${r})`)
					}), o.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(i.a)(w.a.thumbnail, w.a.imageThumbnail, e.className),
						"data-click-id": "image",
						ref: t,
						role: "img",
						style: {
							backgroundImage: `url(${e.src})`,
							borderColor: e.isOutbound ? Object(S.a)(e).button : Object(S.a)(e).line
						}
					}, e.isOutbound && o.a.createElement(M, {
						className: e.linkIconClassName
					}, o.a.createElement(v.a, {
						className: Object(i.a)(w.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: e.isInIcons2020
					}), e.text && o.a.createElement(D, {
						className: e.linkTextClassName
					}, e.text)), o.a.createElement(R, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				A = e => e.isOutbound ? Object(S.a)(e).button : e.placeholderImage ? "transparent" : Object(S.a)(e).line,
				K = e => {
					const t = L(e),
						s = t && {
							background: Object(N.g)(Object(S.a)(e).placeholder, t, P(e))
						};
					return o.a.createElement("div", {
						className: Object(i.a)(w.a.thumbnail, w.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: {
							...s,
							borderColor: A(e)
						}
					}, (!e.placeholderImage || e.showContentType) && o.a.createElement(k, {
						className: Object(i.a)(e.contentTypeClassName, w.a.contentType, {
							[w.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && o.a.createElement(M, {
						className: e.linkIconClassName
					}, o.a.createElement(v.a, {
						className: Object(i.a)(w.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: e.isInIcons2020
					}), e.text && o.a.createElement(D, {
						className: e.linkTextClassName
					}, e.text)))
				},
				W = e => o.a.createElement(H, F({}, e, {
					className: Object(i.a)(w.a.blurredThumbnail, e.className)
				})),
				V = Object(a.a)(e => {
					const {
						className: t,
						containerClassName: s,
						contentTypeClassName: n,
						crosspost: a,
						forceShowNSFW: c,
						isMeta: d,
						linkIconClassName: l,
						linkTextClassName: m,
						outboundLinkIconClassName: u,
						post: p,
						redditStyle: b,
						removeLink: f,
						showContentType: h,
						templatePlaceholderImage: x,
						text: C,
						theme: y,
						usePreview: O
					} = e, g = Object(_.a)(), j = !y.subredditContext.shouldShowNSFWContent && (p.isNSFW || !(!a || !a.isNSFW)) && !c, k = L({
						placeholderImage: x,
						redditStyle: b,
						theme: y
					}), v = U(e), N = G(p, t, k, j, C, y, v, d, h, f, b, l, m, u, n, g), S = Object(T.D)(p);
					return Object(r.a)(S) && !f && S.indexOf("redditmedia") < 0 ? o.a.createElement("div", {
						className: Object(i.a)(w.a.container, O ? w.a.usePreview : "", s)
					}, o.a.createElement(I.b, {
						href: Object(T.D)(p),
						isSponsored: p.isSponsored,
						postId: p.id,
						source: p.source
					}, N)) : o.a.createElement("div", {
						className: Object(i.a)(w.a.container, O ? w.a.usePreview : "", s)
					}, N)
				}),
				U = ({
					crosspost: e,
					post: t,
					url: s,
					usePreview: r
				}) => {
					if (s) return s;
					const {
						preview: n,
						media: o,
						thumbnail: i
					} = e || t;
					return r && n ? n.url : t.isSponsored && n && "default" === i.url ? n.url : B(o) ? o.scrubberThumbSource : i.url
				},
				B = e => !!e && e.type === T.o.LIVEVIDEO,
				G = (e, t, s, n, a, c, l, m, u, p, b, f, h, x, C, y) => {
					const O = e.source && !e.isSponsored || !1;
					if (Object(r.a)(l)) {
						const s = B(e.media),
							r = s ? {
								errorSrc: d.U
							} : {},
							m = Object(i.a)(t, {
								[w.a.verticallyCenterThumbnail]: s
							});
						return n ? o.a.createElement(W, F({
							"data-click-id": "image",
							src: l
						}, r, {
							className: m,
							isOutbound: O && !p,
							linkIconClassName: f,
							linkTextClassName: h,
							outboundLinkIconClassName: x,
							redditStyle: b,
							text: a,
							theme: c,
							isInIcons2020: y
						})) : o.a.createElement(H, F({
							alt: e.title,
							className: m,
							src: l
						}, r, {
							isOutbound: O && !p,
							linkIconClassName: f,
							linkTextClassName: h,
							outboundLinkIconClassName: x,
							redditStyle: b,
							text: a,
							theme: c,
							isInIcons2020: y
						}))
					}
					return o.a.createElement(K, {
						className: t,
						contentTypeClassName: C,
						placeholderImage: s,
						isMeta: m,
						isOutbound: O && !p,
						linkIconClassName: f,
						linkTextClassName: h,
						outboundLinkIconClassName: x,
						redditStyle: b,
						showContentType: u,
						text: a,
						theme: c,
						type: e.media ? e.media.type : null,
						isPoll: !!e.pollData,
						isInIcons2020: y
					})
				};
			t.a = V
		},
		"./src/reddit/controls/ContentType/index.m.less": function(e, t, s) {
			e.exports = {
				contentTypeIcon: "_3CquMWJ6RMh8E9D-_84AtZ"
			}
		},
		"./src/reddit/controls/OutboundLink/styled.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/constants/elementClassNames.ts"),
				o = s("./src/reddit/controls/OutboundLink/index.tsx"),
				i = s("./src/reddit/controls/OutboundLink/styles.m.less"),
				a = s.n(i);
			t.a = r.a.wrapped(o.b, "styledOutboundLink", {
				styledOutboundLink: `${a.a.styledOutboundLink} ${n.l}`
			})
		},
		"./src/reddit/controls/OutboundLink/styles.m.less": function(e, t, s) {
			e.exports = {
				styledOutboundLink: "_13svhQIUZqD9PVzFcLwOKT"
			}
		},
		"./src/reddit/helpers/commentList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/reddit/constants/comments.ts"),
				n = s("./src/reddit/selectors/comments.ts"),
				o = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts");
			const a = (e, t) => t().features.comments.models[e],
				c = e => {
					switch (e.commentLink.type) {
						case r.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case r.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case r.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				d = (e, t) => e.type === r.a.MoreComments ? t[e.id].numComments : 1,
				l = (e, t, s, r) => {
					let o = Object(n.n)(r, {
							commentLink: t,
							commentsPageKey: e
						}),
						i = t;
					for (; o && o.depth > s && o.prev && (i = o.prev, (o = Object(n.n)(r, {
							commentLink: i,
							commentsPageKey: e
						})) && !(o.depth <= s)););
					return i.id
				},
				m = (e, t, s) => {
					const {
						commentLists: r,
						comments: n
					} = e, {
						head: a
					} = r[t];
					if (a) return Object.keys(n).filter(e => {
						const t = n[e];
						return !(!t.isStickied || !((e, t) => {
							const s = Object(i.c)(e, {
								experimentEligibilitySelector: i.a,
								experimentName: o.w,
								expEventOverride: t
							});
							return !!(Object(o.pd)(s) ? void 0 : s)
						})(s)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/trackers/postFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			}));
			var r = s("./src/reddit/helpers/correlationIdTracker.ts"),
				n = s("./src/reddit/selectors/telemetry.ts"),
				o = s("./src/reddit/helpers/flair.ts");
			const i = (e, t) => s => ({
					source: "post",
					action: "click",
					noun: "post_flair",
					...n.defaults(s),
					actionInfo: n.actionInfo(s),
					correlationId: Object(r.c)(r.a.SearchResults),
					post: n.post(s, e),
					search: {
						...n.postFlairClickToSearch(s, t),
						query: `flair_name:'${t.postFlairName}'`,
						queryId: Object(r.c)(r.a.SearchResults)
					},
					subreddit: n.subreddit(s)
				}),
				a = e => t => ({
					source: "post_flair_widget",
					action: "click",
					noun: "post_flair_search",
					...n.defaults(t),
					actionInfo: n.actionInfo(t),
					correlationId: Object(r.c)(r.a.SearchResults),
					search: n.postFlairClickToSearch(t, e),
					subreddit: n.subreddit(t)
				}),
				c = e => t => {
					const s = Object(o.g)(e);
					return {
						...n.defaults(t),
						action: "click",
						noun: "post_flair",
						source: "post_flair_widget",
						subreddit: n.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: s
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
					const s = Object(o.g)(e);
					return {
						...n.defaults(t),
						action: "click",
						noun: "clear",
						source: "post_flair_widget",
						subreddit: n.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: s
						}
					}
				},
				m = (e, t) => s => {
					const i = Object(o.g)(e),
						a = n.post(s, t);
					return {
						...n.defaults(s),
						action: "click",
						noun: "post_flair",
						source: "post",
						subreddit: n.subreddit(s),
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
							queryId: Object(r.c)(r.a.SearchResults),
							originPageType: s.platform.currentPage ? n.getPageTypeFromCurrentPage(s.platform.currentPage) : void 0
						}
					}
				}
		},
		"./src/reddit/hooks/usePostContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./node_modules/react/index.js"),
				n = s("./src/reddit/contexts/Post/index.tsx");

			function o() {
				const e = Object(r.useContext)(n.c);
				if (!e) throw new Error("No Post context!");
				return e
			}
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./node_modules/react/index.js"),
				n = s("./src/lib/CSSVariableProvider/index.tsx");

			function o() {
				return Object(r.useContext)(n.b)
			}
		},
		"./src/reddit/icons/fonts/Gif/index.m.less": function(e, t, s) {
			e.exports = {
				GifIcon: "_2FVMHfvH9Kj7f59LnZjdUX",
				gifIcon: "_2FVMHfvH9Kj7f59LnZjdUX"
			}
		},
		"./src/reddit/icons/fonts/Gif/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Gif/index.m.less"),
				c = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(o.a)();
				return n.a.createElement("i", {
					className: `${Object(i.b)(t?"gif_post":"gif",e.isFilled)} ${e.className}`
				})
			}, "GifIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Link/index.m.less": function(e, t, s) {
			e.exports = {
				LinkIcon: "_1UzGujIvFbQUgWI4gO6QeD",
				linkIcon: "_1UzGujIvFbQUgWI4gO6QeD"
			}
		},
		"./src/reddit/icons/fonts/Link/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Link/index.m.less"),
				c = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(o.a)();
				return n.a.createElement("i", {
					className: `${Object(i.b)(t?"link_post":"link",e.isFilled)} ${e.className}`
				})
			}, "LinkIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => {
				const t = Object(o.a)();
				return n.a.createElement("i", {
					className: `${Object(i.b)(t?"external_link":"outboundLink",e.isFilled)} ${e.className}`
				})
			}
		},
		"./src/reddit/icons/fonts/Photos/index.m.less": function(e, t, s) {
			e.exports = {
				PhotoIcon: "_1LWQVKh7NQLbKMIz2io1Di",
				photoIcon: "_1LWQVKh7NQLbKMIz2io1Di"
			}
		},
		"./src/reddit/icons/fonts/Photos/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Photos/index.m.less"),
				c = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(o.a)();
				return n.a.createElement("i", {
					className: `${Object(i.b)(t?"image_post":"photos",e.isFilled)} ${e.className}`
				})
			}, "PhotoIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Text/index.m.less": function(e, t, s) {
			e.exports = {
				TextIcon: "_5UHlAh7zBZ6migrBJeld3",
				textIcon: "_5UHlAh7zBZ6migrBJeld3"
			}
		},
		"./src/reddit/icons/fonts/Text/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Text/index.m.less"),
				c = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(o.a)();
				return n.a.createElement("i", {
					className: `${Object(i.b)(t?"text_post":"text",e.isFilled)} ${e.className}`
				})
			}, "TextIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Video/index.m.less": function(e, t, s) {
			e.exports = {
				VideoIcon: "_1q4uVersxe3LOuom7R34bx",
				videoIcon: "_1q4uVersxe3LOuom7R34bx"
			}
		},
		"./src/reddit/icons/fonts/Video/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Video/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: `${Object(o.b)("video",e.isFilled)} ${e.className}`
			}), "VideoIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/Gallery/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M1 0H6C6.55298 0 7 0.446991 7 1V6C7 6.55301 6.55298 7 6 7H1C0.447021 7 0 6.55301 0 6V1C0 0.446991 0.447021 0 1 0ZM10 0H15C15.553 0 16 0.446991 16 1V6C16 6.55301 15.553 7 15 7H10C9.44702 7 9 6.55301 9 6V1C9 0.446991 9.44702 0 10 0ZM15 9H10C9.44702 9 9 9.44699 9 10V15C9 15.553 9.44702 16 10 16H15C15.553 16 16 15.553 16 15V10C16 9.44699 15.553 9 15 9ZM1 9H6C6.55298 9 7 9.44699 7 10V15C7 15.553 6.55298 16 6 16H1C0.447021 16 0 15.553 0 15V10C0 9.44699 0.447021 9 1 9Z"
			})))
		},
		"./src/reddit/icons/svgs/Poll/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M2.1952,13.9279 C2.9452,13.9279 3.5382,14.3119 3.8382,14.8939 L2.8962,15.3249 C2.7702,15.0489 2.4882,14.8519 2.1232,14.8519 C1.6192,14.8519 1.2232,15.3189 1.2232,15.9489 C1.2232,16.5849 1.6252,17.0409 2.1172,17.0409 C2.4882,17.0409 2.7772,16.8369 2.9262,16.5369 L3.9162,16.8909 C3.6102,17.5559 2.9802,17.9639 2.1952,17.9639 C1.0492,17.9639 0.1202,17.0759 0.1202,15.9489 C0.1202,14.8279 1.0492,13.9279 2.1952,13.9279 Z M11.5004,14.5 C12.3294,14.5 13.0004,15.171 13.0004,16 C13.0004,16.829 12.3294,17.5 11.5004,17.5 L6.5004,17.5 C5.6714,17.5 5.0004,16.829 5.0004,16 C5.0004,15.171 5.6714,14.5 6.5004,14.5 L11.5004,14.5 Z M1.8953,8.0003 C2.8063,8.0003 3.5503,8.2643 3.5503,9.0313 C3.5503,9.3433 3.3523,9.5893 3.0763,9.7813 C3.4483,9.9553 3.7243,10.2253 3.7243,10.6623 C3.7243,11.5179667 2.93757778,11.8598556 2.22929983,11.8952023 L2.1053,11.8983 L0.3723,11.8983 L0.3723,8.0003 L1.8953,8.0003 Z M18.5004,8.5 C19.3294,8.5 20.0004,9.171 20.0004,10 C20.0004,10.829 19.3294,11.5 18.5004,11.5 L6.5004,11.5 C5.6714,11.5 5.0004,10.829 5.0004,10 C5.0004,9.171 5.6714,8.5 6.5004,8.5 L18.5004,8.5 Z M1.8623,8.8693 L1.4753,8.8693 L1.4753,11.0283 L1.9843,11.0283 C2.3013,11.0283 2.5853,10.7603 2.5853,10.4623 C2.5853,10.0713909 2.27786198,9.92097769 2.01460128,9.89686048 L1.9373,9.8933 L1.9373,9.7853 C2.0923,9.7853 2.4353,9.6783 2.4353,9.3333 C2.4353,8.9793 2.1923,8.8693 1.8623,8.8693 Z M2.783,1.9997 L4.096,5.8977 L2.963,5.8977 C2.963,5.8977 2.147,3.3737 2.063,3.0137 L2.063,3.0137 L2.039,3.0137 C1.955,3.3737 1.127,5.8977 1.127,5.8977 L1.127,5.8977 L-2.25597319e-13,5.8977 L1.319,1.9997 L2.783,1.9997 Z M15.5004,2.5 C16.3294,2.5 17.0004,3.171 17.0004,4 C17.0004,4.829 16.3294,5.5 15.5004,5.5 L6.5004,5.5 C5.6714,5.5 5.0004,4.829 5.0004,4 C5.0004,3.171 5.6714,2.5 6.5004,2.5 L15.5004,2.5 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/reducers/pages/comments/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/redux/es/redux.js"),
				n = s("./src/reddit/actions/ads/constants.ts");
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
				a = s("./src/reddit/actions/pages/constants.ts");
			const c = {};
			var d = (e = c, t) => {
				switch (t.type) {
					case a.d:
					case a.b:
					case a.h:
					case a.f: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case a.a:
					case a.e: {
						const {
							key: s,
							error: r
						} = t.payload;
						return {
							...e,
							[s]: r || {}
						}
					}
					default:
						return e
				}
			};
			const l = {};
			var m = (e = l, t) => {
				switch (t.type) {
					case a.c:
					case a.g: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: !0
						}
					}
					default:
						return e
				}
			};
			const u = {};
			var p = (e = u, t) => {
					switch (t.type) {
						case a.d:
						case a.h: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case a.b:
						case a.a:
						case a.f:
						case a.e: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				b = Object(r.c)({
					error: d,
					fullyLoaded: m,
					pending: p
				}),
				f = s("./node_modules/lodash/uniqBy.js"),
				h = s.n(f),
				x = s("./node_modules/lodash/values.js"),
				C = s.n(x),
				y = s("./src/reddit/actions/comment/constants.ts"),
				O = s("./src/reddit/actions/comment/websocket/constants.ts");
			const g = {};

			function j(e) {
				return h()(e, "id").sort((e, t) => e.created - t.created)
			}
			var k = (e = g, t) => {
					switch (t.type) {
						case a.f:
						case y.u:
						case a.b: {
							const {
								comments: s,
								key: r
							} = t.payload, n = e[r] ? e[r] : [], o = function(e, t) {
								return C()(e).map(e => {
									const s = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: s,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(s, n.find(e => e.stickied)), i = j([...n, ...o]);
							return {
								...e,
								[r]: [...i]
							}
						}
						case O.b:
						case O.c:
						case O.d:
						case y.G:
						case y.F: {
							const {
								comment: {
									id: s,
									created: r,
									isStickied: n,
									authorId: o
								},
								commentsPageKey: i,
								isChatSort: a
							} = t.payload;
							return !1 === a ? e : {
								...e,
								[i]: [...j([...e[i] ? e[i] : [], {
									id: s,
									created: r,
									stickied: n,
									authorId: o
								}])]
							}
						}
						default:
							return e
					}
				},
				I = s("./node_modules/lodash/mapValues.js"),
				_ = s.n(I),
				v = s("./src/reddit/helpers/commentList/index.ts"),
				T = s("./src/reddit/models/Comment/index.ts");
			const N = {};

			function S(e) {
				const t = e;
				return _()(t, ({
					depth: e,
					next: t,
					prev: s
				}) => ({
					depth: e,
					next: t,
					prev: s
				}))
			}
			var E = (e = N, t) => {
				switch (t.type) {
					case y.u: {
						const {
							comments: s,
							commentLists: r,
							continueThreads: n,
							key: o,
							moreCommentsItem: i,
							moreComments: a
						} = t.payload, c = r[i.postId], d = e[o], l = {}, m = d[i.id];
						if (m && m.prev) {
							const {
								id: e
							} = m.prev;
							l[e] = {
								...d[e],
								next: c.head || m.next
							}
						}
						if (m && m.next) {
							const {
								id: e
							} = m.next;
							l[e] = {
								...d[e],
								prev: c.tail || m.prev
							}
						}
						if (c.head && c.tail) {
							const e = Object(v.c)({
									commentLink: c.head,
									commentsDict: s,
									moreCommentsDict: a,
									continueThreadDict: n
								}),
								t = Object(v.c)({
									commentLink: c.tail,
									commentsDict: s,
									moreCommentsDict: a,
									continueThreadDict: n
								});
							m && (e.prev = m.prev, t.next = m.next)
						}
						return {
							...e,
							[o]: {
								...e[o],
								...S(s),
								...S(n),
								...S(a),
								...l
							}
						}
					}
					case a.b:
					case a.f: {
						const {
							comments: s,
							continueThreads: r,
							key: n,
							moreComments: o
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								...S(s),
								...S(r),
								...S(o)
							}
						}
					}
					case O.b:
						const {
							comment: s, commentsPageKey: r, depth: n, headCommentId: o, originId: i, isChatSort: c
						} = t.payload, d = e[r], l = {};
						let m = null;
						if (c) return o && (l[o] = {
							...d[o],
							prev: Object(T.g)(s.id)
						}, m = Object(T.g)(o)), {
							...e,
							[r]: {
								...e[r],
								...l,
								[s.id]: {
									depth: 0,
									next: m,
									prev: null
								}
							}
						}; {
							let t = null;
							const o = s.parentId;
							if (i && o) {
								const s = "moreComments-" + i;
								if (d[o] && !d[s]) {
									const i = d[o].next;
									return i && (l[i.id] = {
										...d[i.id],
										prev: Object(T.h)(s)
									}, m = i), l[o] = {
										...d[o],
										next: Object(T.h)(s)
									}, t = Object(T.g)(o), {
										...e,
										[r]: {
											...e[r],
											...l,
											[s]: {
												depth: n || 0,
												next: m,
												prev: t
											}
										}
									}
								}
							}
							return e
						}
						case y.G: {
							const {
								comment: s,
								commentsPageKey: r,
								headCommentId: n
							} = t.payload, o = e[r], i = {};
							let a = null;
							return n && (i[n] = {
								...o[n],
								prev: Object(T.g)(s.id)
							}, a = Object(T.g)(n)), {
								...e,
								[r]: {
									...e[r],
									...i,
									[s.id]: {
										depth: 0,
										next: a,
										prev: null
									}
								}
							}
						}
						case y.F: {
							const {
								comment: s,
								commentsPageKey: r,
								parentCommentId: n,
								depth: o
							} = t.payload, i = e[r], a = {};
							let c = null;
							if (!i[n]) return e;
							const d = i[n].next;
							return d && (a[d.id] = {
								...i[d.id],
								prev: Object(T.g)(s.id)
							}, c = d), a[n] = {
								...i[n],
								next: Object(T.g)(s.id)
							}, {
								...e,
								[r]: {
									...e[r],
									...a,
									[s.id]: {
										depth: o,
										next: c,
										prev: Object(T.g)(n)
									}
								}
							}
						}
						default:
							return e
				}
			};
			const w = {};
			var F = (e = w, t) => {
				switch (t.type) {
					case O.b:
					case O.c:
					case y.G: {
						const {
							comment: s,
							commentsPageKey: r,
							isChatSort: n
						} = t.payload;
						return !1 === n ? e : {
							...e,
							[r]: s.id
						}
					}
					case a.b:
					case a.f: {
						const {
							commentLists: s,
							key: r,
							postId: n
						} = t.payload;
						return {
							...e,
							[r]: s[n] && s[n].head ? s[n].head.id : null
						}
					}
					default:
						return e
				}
			};
			const L = {};
			var P = (e = L, t) => {
				switch (t.type) {
					case a.d:
					case a.b:
					case a.c:
					case a.h: {
						const {
							key: s,
							postId: r
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case y.G: {
						const {
							parentId: s,
							commentsPageKey: r
						} = t.payload;
						return e[r] ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				api: b,
				keyToChatCommentLinks: k,
				keyToCommentThreadLinkSets: E,
				keyToHeadCommentId: F,
				keyToPostId: P,
				ads: i
			})
		},
		"./src/reddit/selectors/comments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return x
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "u", (function() {
				return y
			})), s.d(t, "w", (function() {
				return O
			})), s.d(t, "x", (function() {
				return g
			})), s.d(t, "k", (function() {
				return k
			})), s.d(t, "g", (function() {
				return I
			})), s.d(t, "G", (function() {
				return _
			})), s.d(t, "n", (function() {
				return v
			})), s.d(t, "o", (function() {
				return T
			})), s.d(t, "j", (function() {
				return N
			})), s.d(t, "l", (function() {
				return S
			})), s.d(t, "h", (function() {
				return E
			})), s.d(t, "a", (function() {
				return w
			})), s.d(t, "b", (function() {
				return F
			})), s.d(t, "q", (function() {
				return L
			})), s.d(t, "m", (function() {
				return P
			})), s.d(t, "t", (function() {
				return D
			})), s.d(t, "z", (function() {
				return M
			})), s.d(t, "I", (function() {
				return R
			})), s.d(t, "s", (function() {
				return H
			})), s.d(t, "B", (function() {
				return A
			})), s.d(t, "C", (function() {
				return K
			})), s.d(t, "E", (function() {
				return W
			})), s.d(t, "r", (function() {
				return V
			})), s.d(t, "e", (function() {
				return U
			})), s.d(t, "v", (function() {
				return B
			})), s.d(t, "J", (function() {
				return G
			})), s.d(t, "f", (function() {
				return $
			})), s.d(t, "i", (function() {
				return q
			})), s.d(t, "F", (function() {
				return Z
			})), s.d(t, "A", (function() {
				return z
			})), s.d(t, "H", (function() {
				return Q
			})), s.d(t, "p", (function() {
				return J
			})), s.d(t, "K", (function() {
				return X
			})), s.d(t, "D", (function() {
				return Y
			})), s.d(t, "y", (function() {
				return ee
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/values.js"),
				n = s.n(r),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeCommentPermalink/index.ts"),
				a = s("./src/lib/objectSelector/index.ts"),
				c = s("./src/reddit/constants/comments.ts"),
				d = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/reddit/selectors/posts.ts"),
				m = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/selectors/commentSelector.ts"),
				b = s("./src/lib/initializeClient/installReducer.ts"),
				f = s("./src/reddit/reducers/features/comments/index.ts"),
				h = s("./src/reddit/reducers/pages/comments/index.ts");
			Object(b.a)({
				features: {
					comments: f.a
				},
				pages: {
					comments: h.a
				}
			});
			const x = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.error[t],
				C = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.pending[t],
				y = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.fullyLoaded[t],
				O = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				g = (e, t) => {
					const s = O(e, t);
					if (s) return Object(p.a)(e, {
						commentId: s
					})
				},
				j = [],
				k = Object(a.a)((e, t) => {
					const s = g(e, t),
						r = s && s.id;
					if (!r) return j;
					const {
						commentsPageKey: n
					} = t, o = e.pages.comments.keyToCommentThreadLinkSets[n], i = [];
					let a = {
						id: r,
						type: c.a.Comment
					};
					do {
						i.push(a), a = o[a.id].next
					} while (a);
					return i
				}),
				I = (e, t) => O(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				_ = (e, {
					commentsPageKey: t
				}) => {
					const s = e.pages.comments.keyToPostId[t];
					return s ? e.posts.models[s] : null
				},
				v = (e, {
					commentId: t,
					commentLink: s,
					commentsPageKey: r
				}) => {
					const n = e.pages.comments.keyToCommentThreadLinkSets[r];
					return n ? s ? n[s.id] : t ? n[t] : null : null
				},
				T = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				N = (e, t) => {
					const s = t.commentsPageKey ? v(e, t) : null;
					return s ? s.depth : null
				},
				S = (e, {
					commentLink: t
				}) => {
					const {
						id: s,
						type: r
					} = t;
					switch (r) {
						case c.a.Comment:
							return e.features.comments.models[s];
						case c.a.MoreComments:
							return e.moreComments.models[s];
						case c.a.ContinueThread:
							return e.continueThreads.models[s];
						default:
							return null
					}
				},
				E = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, s = Object(d.r)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === s && e.features.comments.models[t].author !== o.A).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				w = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				F = e => e.moreComments.models,
				L = e => e.features.comments.models,
				P = (e, {
					commentId: t
				}) => {
					const s = Object(p.a)(e, {
						commentId: t
					});
					return s ? Object(i.a)(Object(l.C)(e, s), t) : ""
				},
				D = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				M = (e, {
					commentId: t,
					commentsPageKey: s
				}) => !!(t && e.features.comments.isEditing[s] && e.features.comments.isEditing[s][t]),
				R = (e, {
					commentId: t,
					commentsPageKey: s
				}) => !!(t && e.features.comments.replyFormOpen[s] && e.features.comments.replyFormOpen[s][t]),
				H = (e, {
					commentsPageKey: t
				}) => {
					const s = t && e.features.comments.replyFormOpen[t] || {},
						r = Object.keys(s).find(e => s[e]),
						n = Object(p.a)(e, {
							commentId: r
						}),
						o = n && N(e, {
							commentId: n.id,
							commentLink: void 0,
							commentsPageKey: t
						});
					if (n && "number" == typeof o) return {
						...n,
						depth: o
					}
				},
				A = (e, {
					moreCommentsId: t
				}) => e.moreComments.models[t],
				K = (e, {
					moreCommentsId: t
				}) => !!e.moreComments.api.pending[t],
				W = (e, {
					commentsPageKey: t
				}) => {
					const s = e.pages.comments.keyToPostId[t];
					if (s) {
						const t = n()(e.moreComments.models).find(t => t.postId === s && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
						if (t) return {
							moreCommentId: t.id,
							pending: !!e.moreComments.api.pending[t.id]
						}
					}
					return null
				},
				V = (e, {
					id: t
				}) => e.continueThreads.models[t],
				U = (e, {
					commentId: t
				}) => {
					const s = t ? e.features.comments.models[t] : void 0;
					if (!s) return null;
					const r = e.authorFlair.models[s.subredditId];
					return r ? r[s.author] : null
				},
				B = (e, {
					draftKey: t
				}) => !!e.features.comments.submit.error[t],
				G = (e, {
					draftKey: t
				}) => {
					const s = e.features.comments.submit.error[t];
					return s && s.fields ? s.fields.map(e => e.msg) : []
				},
				$ = (e, {
					draftKey: t
				}) => {
					const s = e.features.comments.drafts[t];
					return !!s && s.autofocusDisabled
				},
				q = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				Z = (e, {
					commentId: t
				}) => {
					const s = t ? e.features.comments.submit.error[t] : void 0;
					return s && s.fields ? s.fields.map(e => e.msg) : void 0
				},
				z = (e, {
					commentId: t
				}) => !!t && e.features.comments.submit.pending[t],
				Q = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				J = e => e.features.comments.visitHighlightFilter,
				X = (e, t) => {
					const s = Object(p.a)(e, t);
					if (s) return Object(m.Y)(e, s)
				},
				Y = (e, {
					postId: t
				}) => e.features.comments.newCommentsCount[t] ? e.features.comments.newCommentsCount[t] : 0,
				ee = (e, {
					commentId: t
				}) => {
					const s = Object(p.a)(e, {
							commentId: t
						}),
						r = s && s.authorId || "";
					return Object(u.R)(e, r)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250.abfffd26c6424f1be1de.js.map