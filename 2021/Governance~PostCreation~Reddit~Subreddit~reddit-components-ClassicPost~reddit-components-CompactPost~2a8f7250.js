// https://www.redditstatic.com/desktop2x/Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250.2bced96b31708f8d5355.js
// Retrieved at 9/22/2021, 1:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"], {
		"./src/lib/humanizeDate/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/lib/constants/index.ts");

			function s(e, {
				showDay: t,
				useUtc: r,
				shortMonths: s,
				locale: o = n.C
			} = {}) {
				const i = new Date(e * n.Pb);
				return new Intl.DateTimeFormat(o, {
					month: s ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: r ? "UTC" : void 0
				}).format(i)
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/constants/index.ts");
			t.a = (e, t = n.C) => {
				return new Date(1e3 * e).toLocaleString(t, {
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
		"./src/reddit/actions/jsApi.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const s = "JSAPI__CONSUMER_SUBSCRIBED",
				o = Object(n.a)(s)
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
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
			const n = "SUBSCRIPTION__FETCH_DATA_PENDING",
				s = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
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
				return w
			})), r.d(t, "d", (function() {
				return P
			})), r.d(t, "c", (function() {
				return D
			})), r.d(t, "a", (function() {
				return A
			})), r.d(t, "b", (function() {
				return H
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts"),
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
			var f = r("./src/reddit/endpoints/subreddit/subscriptions.ts"),
				h = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				x = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				y = r("./src/reddit/models/GqlTopLevelField.ts"),
				g = r("./src/reddit/models/User/index.ts");

			function O(e) {
				const t = [],
					r = [],
					n = {},
					s = {},
					{
						followedRedditorsInfo: o
					} = e.identity;
				for (const a of o.edges) {
					if (a.node.__typename !== g.c.AvailableRedditor || !a.node.profile) continue;
					const e = Object(h.a)(a.node.profile);
					n[e.id] = e;
					const {
						isFavorite: r
					} = a.node.profile;
					r && t.push(e.id)
				}
				const {
					subscribedSubreddits: i
				} = e.identity;
				for (const a of i.edges) {
					if (a.node.__typename !== y.a.Subreddit) continue;
					const e = Object(x.a)(a.node);
					s[e.id] = e;
					const {
						isFavorite: t
					} = a.node;
					t && r.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: r,
					profiles: n,
					subreddits: s
				}
			}
			var j = r("./src/reddit/models/Toast/index.ts"),
				C = r("./src/reddit/selectors/profile.ts"),
				k = r("./src/reddit/selectors/subreddit.ts"),
				_ = r("./src/reddit/selectors/subscriptions.ts"),
				v = r("./src/reddit/selectors/user.ts");
			const T = () => n.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				I = Object(o.a)(d.c),
				S = Object(o.a)(d.b),
				N = Object(o.a)(d.a),
				E = Object(o.a)(d.h),
				w = (Object(o.a)(d.i), Object(o.a)(d.g), () => async (e, t, {
					gqlContext: r
				}) => {
					const n = t();
					if (!n.user.account || n.subscriptions.api.fetched) return;
					e(S());
					const s = await Object(f.a)(r());
					if (s.ok) {
						const t = O(s.body.data);
						e(I(t))
					} else e(N({
						error: s.error
					}))
				}),
				F = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				P = (e, t, r) => async (o, d, {
					apiContext: m
				}) => {
					let p = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(k.B)(d(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(C.m)(d(), e.name),
						name: `${s.fc}${e.name}`,
						type: e.type
					});
					if (!Object(v.K)(d())) return o(Object(c.k)({
						actionSource: c.a.Subscribe
					})), void o(Object(a.k)());
					const b = Object(v.k)(d());
					if (b) {
						const t = p.length,
							r = e.length;
						if (p = p.filter(e => !F(b, e)), (e = e.filter(e => !F(b, e))).length !== r || p.length !== t) {
							const e = n.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(l.f)(Object(l.e)(e, j.b.Error)))
						}
						if (!e.length && !p.length) return
					}
					if (o(E({
							identifiers: p,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(_.b)(d()),
							userIsSubscriber: t,
							widgetId: r
						})), (await Object(f.c)(m(), {
							subredditNames: p.map(({
								name: e
							}) => e),
							subscribe: t
						})).ok) {
						const r = 1 === e.length ? `${"subreddit"===e[0].type?i.d.subreddit:i.d.profile}${e[0].name}` : n.fbt._({
								"*": "{communities} communities",
								_1: "1 community"
							}, [n.fbt._plural(e.length, "communities")], {
								hk: "IgDzJ"
							}),
							s = n.fbt._("Sucсessfully followed {communityname}", [n.fbt._param("communityname", r)], {
								hk: "1S5AXJ"
							}),
							a = n.fbt._("Sucсessfully unfollowed {communityname}", [n.fbt._param("communityname", r)], {
								hk: "2XWHyB"
							}),
							c = n.fbt._("Sucсessfully joined {communityname}", [n.fbt._param("communityname", r)], {
								hk: "3Al8aF"
							}),
							d = n.fbt._("Sucсessfully left {communityname}", [n.fbt._param("communityname", r)], {
								hk: "2w5JFZ"
							});
						o(Object(l.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? s : a : t ? c : d
						}))
					} else {
						o(E({
							identifiers: p,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(_.b)(d()),
							userIsSubscriber: !t,
							widgetId: r
						}));
						const s = n.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(l.f)(Object(l.e)(s, j.b.Error)))
					}
				}, L = Object(o.a)(d.f), D = e => async (t, r, {
					apiContext: n
				}) => {
					const s = r(),
						o = Object(k.I)(s, {
							identifier: e
						});
					if (!o) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const i = e.type === u.a.SUBREDDIT ? o.name : `u_${o.name}`,
						a = s.subscriptions.favoriteSubredditOrder || [],
						c = s.subscriptions.favoriteProfileOrder || [],
						d = a.indexOf(e.id),
						m = c.indexOf(e.id),
						p = -1 === d && -1 === m,
						b = s.subreddits.models,
						h = s.profiles.models;
					t(L({
						makeFavorite: p,
						identifier: e,
						subredditModels: b,
						profileModels: h
					}));
					const x = {
							type: e.type,
							name: o.name
						},
						y = () => Object(k.cb)(r(), {
							identifier: x
						});
					(y() || (await t(P([x], !0)), y())) && ((await Object(f.b)(n(), i, p)).ok || (t(L({
						makeFavorite: !p,
						identifier: e,
						subredditModels: b,
						profileModels: h
					})), t(Object(l.f)({
						text: T(),
						kind: j.b.Error
					}))))
				}, R = Object(o.a)(d.d), A = e => async (t, r, {
					apiContext: n
				}) => {
					const o = r().multireddits.models,
						i = () => {
							t(Object(l.f)({
								text: T(),
								kind: j.b.Error
							}))
						},
						a = o[e];
					if (!a) return void i();
					const c = !a.isFavorited;
					t(R({
						makeFavorite: c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), (await ((e, t, r) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: s.ib.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: r ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(n(), e, c)).ok || (t(R({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), i())
				}, M = Object(o.a)(d.e), H = e => async (t, r, {
					apiContext: o
				}) => {
					const i = r(),
						a = i.multireddits.models;
					if (!Object(v.K)(i)) return;
					const c = (e = !0) => {
							t(Object(l.f)({
								text: n.fbt._("Sorry, failed to {followAction}", [n.fbt._param("followAction", e ? n.fbt._("follow", null, {
									hk: "2I4uia"
								}) : n.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: j.b.Error
							}))
						},
						d = a[e];
					if (!d) return void c();
					const u = !d.isFollowed;
					t(M({
						follow: u,
						multiredditPath: e,
						multiredditsModelsState: a
					})), (await ((e, t, r) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: s.ib.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: r ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(o(), e, u)).ok || (t(M({
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/components/TrackingHelper/index.tsx"),
				c = r("./src/reddit/selectors/user.ts"),
				d = r("./src/lib/classNames/index.ts"),
				l = r("./src/lib/constants/index.ts"),
				u = r("./src/reddit/constants/posts.ts"),
				m = r("./src/reddit/controls/InternalLink/index.tsx"),
				p = r("./src/lib/addQueryParams/index.ts");
			const b = (e, t, r, n, s) => {
				const o = s || "*:*",
					i = r || l.W;
				return Object(p.a)("/search", {
					q: o,
					sort: i,
					t: n,
					category_name: e,
					category: t
				})
			};
			var f = r("./src/reddit/helpers/correlationIdTracker.ts"),
				h = r("./src/reddit/selectors/telemetry.ts");
			const x = (e, t) => r => ({
				source: "post",
				action: "click",
				noun: "meta_flair",
				...h.defaults(r),
				correlationId: Object(f.c)(f.a.SearchResults),
				post: h.post(r, e),
				search: h.postFlairClickToSearch(r, t),
				subreddit: h.subreddit(r)
			});
			var y = r("./src/reddit/components/CategoryTag/index.m.less"),
				g = r.n(y);
			class O extends s.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const e = {
							id: this.props.category.categoryId,
							title: this.props.category.categoryName,
							eventType: u.a.SUBREDDIT,
							originElement: "meta_flair"
						};
						this.props.sendEvent(x(this.props.postId, e))
					}
				}
				render() {
					const e = this.props.category,
						t = this.props.inLightboxHeader,
						r = e.categoryId,
						n = e.categoryName,
						o = s.a.createElement("span", null, n);
					return s.a.createElement("span", {
						className: Object(d.a)(g.a.metaFlair, {
							[g.a["m-lightboxHeader"]]: t
						})
					}, s.a.createElement(m.a, {
						onClick: this.onClick,
						to: b(n, r, l.Vb.Relevance, l.dc.DAY),
						children: o
					}))
				}
			}
			var j = r("./src/reddit/components/CategoryTagList/index.m.less"),
				C = r.n(j);
			const k = Object(o.b)(() => Object(i.c)({
				labelNSFW: c.U
			}));
			t.a = k(Object(a.c)(({
				postCategories: e,
				postId: t,
				inLightboxHeader: r,
				sendEvent: n
			}) => s.a.createElement("span", {
				className: r ? void 0 : C.a.categoryTagWrapper
			}, e.map(e => s.a.createElement(O, {
				postId: t,
				category: e,
				key: e.categoryId,
				inLightboxHeader: r,
				sendEvent: n
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
				return U
			})), r.d(t, "b", (function() {
				return $
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/pick.js"),
				o = r.n(s),
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
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = p.a.wrapped(({
				backgroundImage: e,
				style: t,
				...r
			}) => c.a.createElement("div", h({
				style: {
					...t || {},
					backgroundImage: `url('${e}')`
				}
			}, r)), "EmojiDisplay", f.a);
			var y = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				g = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				O = r("./src/reddit/constants/colors.ts"),
				j = r("./src/reddit/constants/parameters.ts"),
				C = r("./src/reddit/controls/InternalLink/index.tsx"),
				k = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				_ = r("./src/reddit/icons/svgs/Close/index.tsx"),
				v = r("./src/reddit/models/Flair/index.ts"),
				T = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				I = r("./src/reddit/components/Flair/index.m.less"),
				S = r.n(I);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = Object(g.a)(y.b),
				w = p.a.div("FlairWrapper", S.a),
				F = p.a.wrapped(d.a, "CloseButton", S.a),
				P = p.a.wrapped(Object(m.a)(({
					forceSmallEmojis: e,
					theme: t,
					...r
				}) => {
					const n = t;
					return c.a.createElement(x, N({
						style: {
							...L(!!e, n) || {}
						}
					}, r))
				}), "FlairEmojiDisplay", S.a),
				L = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: `${t.subredditContext.emojiHeight}px`,
						width: `${t.subredditContext.emojiWidth}px`
					}
				},
				D = (e, t) => {
					const r = t ? `/r/${t}/search` : "/search",
						n = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(l.a)(r, {
						[j.p]: n,
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
							[S.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(T.a)(this.props).flair,
							color: `${W(this.props)}`
						}
					}, this.props.text, this.props.isSelected && c.a.createElement(F, {
						to: "./",
						onClick: this.props.onCloseClick
					}, c.a.createElement(_.a, {
						className: S.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(T.a)(this.props).flair
						}
					})), !!this.props.tooltip && c.a.createElement(E, {
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
				H = Object(m.a)(e => {
					let t = "",
						r = !1;
					const n = e.richtext.map((n, s) => {
						if (n.e === v.c.Emoji) {
							const o = n;
							return t += o.a, r = !0, c.a.createElement(P, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: o.u,
								key: s,
								title: o.a
							})
						} {
							const e = n;
							return t += e.t, c.a.createElement("span", {
								key: s
							}, e.t)
						}
					});
					let s;
					r && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (s = {
						marginTop: `-${e.theme.subredditContext.emojiHeight-16}px`
					});
					const o = c.a.createElement(w, {
						className: Object(u.a)(e.className, {
							[S.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...s,
							backgroundColor: e.backgroundColor || Object(T.a)(e).flair,
							color: `${W(e)}`
						}
					}, n, e.isSelected && c.a.createElement(F, {
						to: "./",
						onClick: e.onCloseClick
					}, c.a.createElement(_.a, {
						className: S.a.CloseIcon,
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
				W = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(T.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(k.a)(Object(T.a)(e).post, O.b.black, O.b.white) : e.textColor === v.e.Dark ? O.b.black : O.b.white,
				U = p.a.wrapped(M, "TextFlair", S.a),
				K = p.a.wrapped(H, "RichTextFlair", S.a),
				B = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(i.i)(.1, Object(T.a)(o()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				q = p.a.wrapped(e => {
					const t = B(e),
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
				}, "MetaFlair", S.a);

			function $(e) {
				const {
					className: t,
					disabled: r = !1,
					flair: s,
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
					[S.a.flairVariant]: o,
					[S.a.small]: o && !e.large,
					[S.a.large]: o && e.large
				}, t);
				switch (s.type) {
					case v.f.Richtext:
						return r || !s.richtext ? null : c.a.createElement(K, {
							backgroundColor: s.backgroundColor,
							className: h,
							forceSmallEmojis: b,
							isFlairFilter: o,
							isSelected: i,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							redditStyle: !p,
							richtext: s.richtext,
							subredditName: m,
							textColor: s.textColor,
							to: f
						});
					case v.f.Text:
						return r || !s.text ? null : c.a.createElement(U, {
							backgroundColor: s.backgroundColor,
							className: h,
							isFlairFilter: o,
							isSelected: i,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: s.text,
							textColor: s.textColor,
							redditStyle: !p,
							to: f
						});
					case v.f.Meta:
						return c.a.createElement(U, {
							backgroundColor: s.backgroundColor,
							className: t,
							isFlairFilter: o,
							subredditName: m,
							text: s.text,
							textColor: s.textColor,
							redditStyle: !p,
							to: f
						});
					case v.f.Nsfw:
					case v.f.Spoiler:
						return c.a.createElement(q, {
							className: t,
							text: s.text,
							type: s.type
						});
					case v.f.Quarantined:
						return null;
					case v.f.Oc:
						return c.a.createElement(U, {
							backgroundColor: O.b.alienblue,
							text: s.text,
							textColor: v.e.Light,
							tooltip: n.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return s.text ? c.a.createElement(U, {
							backgroundColor: s.backgroundColor,
							className: h,
							isFlairFilter: o,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: s.text,
							redditStyle: !p,
							to: f
						}) : null
				}
			}
		},
		"./src/reddit/components/FlairList/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/lodash/noop.js"),
				s = r.n(n),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/components/Flair/index.tsx"),
				l = r("./src/reddit/helpers/flair.ts"),
				u = r("./src/reddit/models/Flair/index.ts"),
				m = r("./src/reddit/selectors/user.ts");
			const p = Object(c.c)({
					labelNSFW: m.U
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
				onMouseDown: n,
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
							h = n ? () => n(e) : s.a;
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
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
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
				x = r("./src/reddit/selectors/postFlair.ts"),
				y = r("./src/reddit/selectors/posts.ts"),
				g = r("./src/reddit/selectors/subreddit.ts"),
				O = r("./src/reddit/components/FlairWrapper/index.m.less"),
				j = r.n(O);
			const C = Object(i.b)(() => Object(a.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(m.q)(e, {
						pageLayer: t
					}),
					isPostFlairEnabled: (e, t) => Object(x.c)(e, {
						subredditId: t.post.belongsTo.id
					}),
					postCategories: (e, {
						post: t
					}) => Object(y.x)(e, t),
					subredditName: (e, {
						post: t
					}) => Object(g.Q)(e, {
						subredditId: t.belongsTo.id
					}).name
				})),
				k = e => {
					const t = [];
					return e.isOriginalContent && t.push({
						text: n.fbt._("OC", null, {
							hk: "1i721p"
						}),
						type: h.f.Oc
					}), e.isMeta && t.push({
						text: n.fbt._("Poll", null, {
							hk: "1scdU1"
						}),
						type: h.f.Meta
					}), t.push(...e.flair), t
				};
			t.a = C(({
				className: e,
				disableFlair: t,
				flairPosition: r,
				isFlairFilter: n,
				isPostFlairEnabled: s,
				nowrap: i,
				post: a,
				postCategories: m,
				sendEvent: x,
				showCategoryTag: y,
				subredditName: g,
				titleFlair: O
			}) => {
				const C = Object(u.b)(),
					_ = r === h.b.Left,
					v = O || k(a),
					T = [];
				let I = [];
				_ ? v.map(e => {
					Object(b.q)(e.type) ? T.push(e) : I.push(e)
				}) : I = v;
				const S = i ? j.a.flairNoWrap : T.length > 0 || I.length > 0 || m && y ? j.a.flairWrapper : null,
					N = e => {
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
					w = !(t || !v || !v.length),
					F = !!(y && m && m.length);
				return w || F ? o.a.createElement("div", {
					className: Object(c.a)(S, e),
					"data-ignore-click": C
				}, w && T && o.a.createElement(l.a, {
					className: j.a.flairList,
					isFlairFilter: n,
					key: "leftFlair",
					onClick: N,
					onMouseDown: E,
					flair: T,
					disabled: !s,
					subredditName: g
				}), w && o.a.createElement(l.a, {
					className: j.a.flairList,
					isFlairFilter: n,
					key: "rightFlair",
					onClick: N,
					onMouseDown: E,
					flair: I,
					disabled: !s,
					subredditName: g
				}), F && o.a.createElement(d.a, {
					inLightboxHeader: i,
					postId: a.id,
					postCategories: m
				})) : null
			})
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/higherOrderComponents/makeAsync.tsx"),
				s = r("./src/lib/loadWithRetries/index.ts");
			const o = () => null;
			t.a = Object(n.a)({
				ErrorComponent: o,
				getComponent: () => Object(s.a)(() => r.e("SubredditHovercard").then(r.bind(null, "./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return a
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return h
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/timeAgo/index.ts"),
				i = r("./src/reddit/hooks/useLocale.ts");
			var a = function({
					seconds: e,
					...t
				}) {
					var r;
					const n = Object(i.a)(),
						a = {
							...t,
							locale: null !== (r = t.locale) && void 0 !== r ? r : n
						};
					return s.a.createElement(s.a.Fragment, null, Object(o.d)(e, a))
				},
				c = r("./src/lib/humanizeDate/index.ts");
			var d = function({
					seconds: e,
					...t
				}) {
					var r;
					const n = Object(i.a)(),
						o = {
							...t,
							locale: null !== (r = t.locale) && void 0 !== r ? r : n
						};
					return s.a.createElement(s.a.Fragment, null, Object(c.a)(e, o))
				},
				l = r("./src/lib/constants/index.ts");
			var u = function({
					seconds: e,
					locale: t
				}) {
					const r = Object(i.a)(),
						n = null != t ? t : r;
					return s.a.createElement(s.a.Fragment, null, function(e, t = l.C) {
						const r = e * l.Pb;
						return new Date(r).toLocaleString(t, {
							weekday: "short",
							month: "short",
							year: "numeric",
							day: "2-digit",
							hour: "2-digit",
							minute: "2-digit",
							second: "2-digit",
							timeZoneName: "long"
						})
					}(e, n))
				},
				m = r("./node_modules/fbt/lib/FbtPublic.js"),
				p = r("./src/lib/eventTools/index.ts");

			function b(e, t = l.C) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function f(e, t, r, n = l.C) {
				const s = Object(p.e)(e, t),
					o = new Date(e * l.Pb);
				let i;
				if (s === p.a.Live || r) return m.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return s === p.a.Future ? i = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(p.b)(e) >= 5 ? b(o, n) : function(e, t = l.C) {
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(o, n) : s === p.a.Past && (i = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : b(o, n)), `${i} @ ${function(e,t=l.C){return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(o,n)}`
			}
			var h = function({
				startTime: e,
				endTime: t,
				isLive: r,
				locale: n
			}) {
				const o = Object(i.a)(),
					a = null != n ? n : o;
				return s.a.createElement(s.a.Fragment, null, f(e, t, r, a))
			};
			r("./src/lib/humanizeUTCDate/index.tsx")
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
				return x
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
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
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const b = m.a.div("Text", u.a),
				f = m.a.div("BottomText", u.a),
				h = e => s.a.createElement(b, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				x = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return s.a.createElement(f, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				y = Object(i.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(d.b)(t)(e)
				}),
				g = Object(c.a)(x, [a.a.Click, a.a.Keydown]),
				O = Object(c.a)(h, [a.a.Click, a.a.Keydown]),
				j = Object(o.b)(y);
			t.c = j(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(g, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : s.a.createElement(O, p({}, e, {
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/higherOrderComponents/asTooltip.tsx"),
				i = r("./src/reddit/constants/elementIds.ts"),
				a = r("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const r = Object(o.a)(e, t);
				class n extends s.a.PureComponent {
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
						return s.a.createElement(r, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(n)
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./node_modules/react/index.js");
			const s = Object(n.createContext)(!1);

			function o() {
				return Object(n.useContext)(s)
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
			var n = r("./src/lib/isUrl/index.ts"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
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
				x = {
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

			function y(e) {
				const t = h(e),
					r = e.type && x[e.type] || u.a.link_post;
				return o.a.createElement(m.a, {
					name: r,
					className: Object(i.a)({
						[p.a]: r === u.a.link_post
					}, t)
				})
			}
			var g = r("./src/reddit/controls/OutboundLink/index.tsx"),
				O = r("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
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
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const S = e => e.placeholderImage || Object(k.a)(e).placeholderImage,
				N = e => e.placeholderImage ? "cover" : Object(k.a)(e).placeholderImagePosition,
				E = c.a.span("LinkText", T.a),
				w = ({
					className: e,
					onClick: t,
					children: r
				}) => o.a.createElement("div", {
					onClick: t,
					className: Object(i.a)(T.a.linkIcon, e)
				}, r),
				F = e => o.a.createElement("img", {
					alt: e.alt,
					className: Object(i.a)(T.a.hiddenImage, e.className)
				}),
				P = e => {
					const t = o.a.createRef(),
						{
							src: r,
							errorSrc: n
						} = e;
					return r && n && Object(l.a)(r).catch(() => {
						t.current && (t.current.style.backgroundImage = `url(${n})`)
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
					}, e.isOutbound && o.a.createElement(w, {
						className: e.linkIconClassName
					}, o.a.createElement(O.a, {
						className: Object(i.a)(T.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && o.a.createElement(E, {
						className: e.linkTextClassName
					}, e.text)), o.a.createElement(F, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				L = e => e.isOutbound ? Object(k.a)(e).button : e.placeholderImage ? "transparent" : Object(k.a)(e).line,
				D = e => {
					const t = S(e),
						r = t && {
							background: Object(C.g)(Object(k.a)(e).placeholder, t, N(e))
						};
					return o.a.createElement("div", {
						className: Object(i.a)(T.a.thumbnail, T.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: {
							...r,
							borderColor: L(e)
						}
					}, (!e.placeholderImage || e.showContentType) && o.a.createElement(y, {
						className: Object(i.a)(e.contentTypeClassName, T.a.contentType, {
							[T.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && o.a.createElement(w, {
						className: e.linkIconClassName
					}, o.a.createElement(O.a, {
						className: Object(i.a)(T.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && o.a.createElement(E, {
						className: e.linkTextClassName
					}, e.text)))
				},
				R = e => o.a.createElement(P, I({}, e, {
					className: Object(i.a)(T.a.blurredThumbnail, e.className)
				})),
				A = Object(a.a)(e => {
					const {
						className: t,
						containerClassName: r,
						contentTypeClassName: s,
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
						showContentType: x,
						templatePlaceholderImage: y,
						text: O,
						theme: C,
						usePreview: k
					} = e, v = !C.subredditContext.shouldShowNSFWContent && (b.isNSFW || !(!a || !a.isNSFW)) && !c, I = S({
						placeholderImage: y,
						redditStyle: f,
						theme: C
					}), N = M(e), E = d ? _.SourceElement.PostImage : _.SourceElement.ListingPostImage, w = W(b, t, I, v, O, C, N, l, x, h, f, u, m, p, s), F = Object(j.D)(b);
					return Object(n.a)(F) && !h && F.indexOf("redditmedia") < 0 ? o.a.createElement("div", {
						className: Object(i.a)(T.a.container, k ? T.a.usePreview : "", r)
					}, o.a.createElement(g.b, {
						href: Object(j.D)(b),
						isSponsored: b.isSponsored,
						postId: b.id,
						source: b.source,
						sourceElement: E
					}, w)) : o.a.createElement("div", {
						className: Object(i.a)(T.a.container, k ? T.a.usePreview : "", r)
					}, w)
				}),
				M = ({
					crosspost: e,
					post: t,
					url: r,
					usePreview: n
				}) => {
					if (r) return r;
					const {
						preview: s,
						media: o,
						thumbnail: i
					} = e || t;
					return n && s ? s.url : t.isSponsored && s && "default" === i.url ? s.url : H(o) ? o.scrubberThumbSource : i.url
				},
				H = e => !!e && e.type === j.o.LIVEVIDEO,
				W = (e, t, r, s, a, c, l, u, m, p, b, f, h, x, y) => {
					const g = e.source && !e.isSponsored || !1;
					if (Object(n.a)(l)) {
						const r = H(e.media),
							n = r ? {
								errorSrc: d.U
							} : {},
							u = Object(i.a)(t, {
								[T.a.verticallyCenterThumbnail]: r
							});
						return s ? o.a.createElement(R, I({
							"data-click-id": "image",
							src: l
						}, n, {
							className: u,
							isOutbound: g && !p,
							linkIconClassName: f,
							linkTextClassName: h,
							outboundLinkIconClassName: x,
							redditStyle: b,
							text: a,
							theme: c
						})) : o.a.createElement(P, I({
							alt: e.title,
							className: u,
							src: l
						}, n, {
							isOutbound: g && !p,
							linkIconClassName: f,
							linkTextClassName: h,
							outboundLinkIconClassName: x,
							redditStyle: b,
							text: a,
							theme: c
						}))
					}
					return o.a.createElement(D, {
						className: t,
						contentTypeClassName: y,
						placeholderImage: r,
						isMeta: u,
						isOutbound: g && !p,
						linkIconClassName: f,
						linkTextClassName: h,
						outboundLinkIconClassName: x,
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
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/constants/elementClassNames.ts"),
				o = r("./src/reddit/controls/OutboundLink/index.tsx"),
				i = r("./src/reddit/controls/OutboundLink/styles.m.less"),
				a = r.n(i);
			t.a = n.a.wrapped(o.b, "styledOutboundLink", {
				styledOutboundLink: `${a.a.styledOutboundLink} ${s.l}`
			})
		},
		"./src/reddit/controls/OutboundLink/styles.m.less": function(e, t, r) {
			e.exports = {
				styledOutboundLink: "_13svhQIUZqD9PVzFcLwOKT"
			}
		},
		"./src/reddit/endpoints/subreddit/subscriptions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			}));
			var n = r("./src/redditGQL/operations/SubscribedSubreddits.json"),
				s = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				d = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			t.a = e => Object(i.a)(e, n);
			const l = (e, {
					subredditIds: t,
					subredditNames: r,
					subscribe: n
				}) => Object(o.a)(Object(a.a)(e, [c.a]), {
					method: s.ib.POST,
					endpoint: Object(d.a)(`${e.apiUrl}/api/subscribe`),
					data: {
						action: n ? "sub" : "unsub",
						sr: t && t.join(",") || void 0,
						sr_name: r && r.join(",") || void 0,
						api_type: "json"
					}
				}),
				u = (e, t, r) => Object(o.a)(Object(a.a)(e, [c.a]), {
					method: s.ib.POST,
					endpoint: `${e.apiUrl}/api/favorite`,
					data: {
						make_favorite: r ? "true" : "false",
						sr_name: t,
						api_type: "json"
					}
				})
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
			var n = r("./src/reddit/constants/comments.ts"),
				s = r("./src/reddit/selectors/comments.ts"),
				o = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts");
			const a = (e, t) => t().features.comments.models[e],
				c = e => {
					switch (e.commentLink.type) {
						case n.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case n.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case n.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				d = (e, t) => e.type === n.a.MoreComments ? t[e.id].numComments : 1,
				l = (e, t, r, n) => {
					let o = Object(s.n)(n, {
							commentLink: t,
							commentsPageKey: e
						}),
						i = t;
					for (; o && o.depth > r && o.prev && (i = o.prev, (o = Object(s.n)(n, {
							commentLink: i,
							commentsPageKey: e
						})) && !(o.depth <= r)););
					return i.id
				},
				u = (e, t, r) => {
					const {
						commentLists: n,
						comments: s
					} = e, {
						head: a
					} = n[t];
					if (a) return Object.keys(s).filter(e => {
						const t = s[e];
						return !(!t.isStickied || !((e, t) => {
							const r = Object(i.c)(e, {
								experimentEligibilitySelector: i.a,
								experimentName: o.D,
								expEventOverride: t
							});
							return !!(Object(o.ye)(r) ? void 0 : r)
						})(r)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "f", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "d", (function() {
				return m
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/models/RichTextJson/index.ts");
			const s = "giphy|",
				o = "|downsized";

			function i(e, t) {
				return s + e + (t ? o : "")
			}

			function a(e) {
				return e && 0 === e.indexOf(s)
			}

			function c(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(a)
			}

			function d(e) {
				let t = e.substring(s.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function l(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, r) => [...e, ...l(r, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function u(e) {
				return l(e, n.F).map(e => e.id)
			}

			function m(e) {
				return l(e, e => e.e === n.o).map(e => e.u)
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
			var n = r("./src/reddit/helpers/correlationIdTracker.ts"),
				s = r("./src/reddit/selectors/telemetry.ts"),
				o = r("./src/reddit/helpers/flair.ts");
			const i = (e, t) => r => ({
					source: "post",
					action: "click",
					noun: "post_flair",
					...s.defaults(r),
					actionInfo: s.actionInfo(r),
					correlationId: Object(n.c)(n.a.SearchResults),
					post: s.post(r, e),
					search: {
						...s.postFlairClickToSearch(r, t),
						query: `flair_name:'${t.postFlairName}'`,
						queryId: Object(n.c)(n.a.SearchResults)
					},
					subreddit: s.subreddit(r)
				}),
				a = e => t => ({
					source: "post_flair_widget",
					action: "click",
					noun: "post_flair_search",
					...s.defaults(t),
					actionInfo: s.actionInfo(t),
					correlationId: Object(n.c)(n.a.SearchResults),
					search: s.postFlairClickToSearch(t, e),
					subreddit: s.subreddit(t)
				}),
				c = e => t => {
					const r = Object(o.g)(e);
					return {
						...s.defaults(t),
						action: "click",
						noun: "post_flair",
						source: "post_flair_widget",
						subreddit: s.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: r
						}
					}
				},
				d = () => e => ({
					...s.defaults(e),
					action: "click",
					noun: "overflow",
					source: "post_flair_widget",
					subreddit: s.subreddit(e)
				}),
				l = e => t => {
					const r = Object(o.g)(e);
					return {
						...s.defaults(t),
						action: "click",
						noun: "clear",
						source: "post_flair_widget",
						subreddit: s.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: r
						}
					}
				},
				u = (e, t) => r => {
					const i = Object(o.g)(e),
						a = s.post(r, t);
					return {
						...s.defaults(r),
						action: "click",
						noun: "post_flair",
						source: "post",
						subreddit: s.subreddit(r),
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
							queryId: Object(n.c)(n.a.SearchResults),
							originPageType: r.platform.currentPage ? s.getPageTypeFromCurrentPage(r.platform.currentPage) : void 0
						}
					}
				}
		},
		"./src/reddit/hooks/useClickSourceData.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/uuid/v4.js"),
				s = r.n(n),
				o = r("./src/reddit/constants/history.ts"),
				i = r("./src/reddit/contexts/PageLayer/index.tsx"),
				a = r("./src/reddit/selectors/telemetry.ts");

			function c() {
				const e = Object(i.db)(),
					t = e ? Object(a.getPageTypeFromCurrentPage)(e) : void 0,
					r = "search_results" === t && Object(a.structureType)(e) === a.StructureType.Trending;
				return {
					[o.a.ClickSource]: r ? "search_results_trending" : t,
					[o.a.ClickId]: s()()
				}
			}
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");

			function o(e, t = s.a) {
				return Object(n.e)(r => Object(s.c)(r, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/constants/index.ts"),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/selectors/meta.ts");
			t.a = "undefined" == typeof document ? function() {
				return Object(s.e)(o.i) || n.C
			} : function() {
				return document.documentElement.lang || n.C
			}
		},
		"./src/reddit/hooks/usePostContext.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/lib/sentry/index.ts"),
				s = r("./node_modules/react/index.js"),
				o = r("./src/reddit/contexts/Post/index.tsx");

			function i() {
				const e = Object(s.useContext)(o.c);
				return e || n.c.captureMessage("No post context provided"), e
			}
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/react/index.js"),
				s = r("./src/lib/CSSVariableProvider/index.tsx");

			function o() {
				return Object(n.useContext)(s.b)
			}
		},
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(o.b)("external_link",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/reducers/pages/comments/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				s = r("./src/reddit/actions/ads/constants.ts");
			const o = [];
			var i = (e = o, t) => {
					switch (t.type) {
						case s.o:
							return t.payload;
						case s.p:
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
							error: n
						} = t.payload;
						return {
							...e,
							[r]: n || {}
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
				b = Object(n.c)({
					error: d,
					fullyLoaded: u,
					pending: p
				}),
				f = r("./src/reddit/actions/comment/constants.ts");
			const h = [];
			var x = (e = h, t) => {
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
				y = r("./node_modules/lodash/uniqBy.js"),
				g = r.n(y),
				O = r("./node_modules/lodash/values.js"),
				j = r.n(O),
				C = r("./src/reddit/actions/comment/websocket/constants.ts");
			const k = {};

			function _(e) {
				return g()(e, "id").sort((e, t) => e.created - t.created)
			}
			var v = (e = k, t) => {
					switch (t.type) {
						case a.f:
						case f.w:
						case a.b: {
							const {
								comments: r,
								key: n
							} = t.payload, s = e[n] ? e[n] : [], o = function(e, t) {
								return j()(e).map(e => {
									const r = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: r,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(r, s.find(e => e.stickied)), i = _([...s, ...o]);
							return {
								...e,
								[n]: [...i]
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
									created: n,
									isStickied: s,
									authorId: o
								},
								commentsPageKey: i
							} = t.payload;
							return {
								...e,
								[i]: [..._([...e[i] ? e[i] : [], {
									id: r,
									created: n,
									stickied: s,
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
				S = r("./src/reddit/helpers/commentList/index.ts"),
				N = r("./src/reddit/models/Comment/index.ts");
			const E = {};

			function w(e) {
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
			var F = (e = E, t) => {
				switch (t.type) {
					case f.w: {
						const {
							comments: r,
							commentLists: n,
							continueThreads: s,
							key: o,
							moreCommentsItem: i,
							moreComments: a
						} = t.payload, c = n[i.postId], d = e[o], l = {}, u = d[i.id];
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
							const e = Object(S.c)({
									commentLink: c.head,
									commentsDict: r,
									moreCommentsDict: a,
									continueThreadDict: s
								}),
								t = Object(S.c)({
									commentLink: c.tail,
									commentsDict: r,
									moreCommentsDict: a,
									continueThreadDict: s
								});
							u && (e.prev = u.prev, t.next = u.next)
						}
						return {
							...e,
							[o]: {
								...e[o],
								...w(r),
								...w(s),
								...w(a),
								...l
							}
						}
					}
					case a.b:
					case a.f: {
						const {
							comments: r,
							continueThreads: n,
							key: s,
							moreComments: o
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								...w(r),
								...w(n),
								...w(o)
							}
						}
					}
					case C.b:
					case f.J: {
						const {
							comment: r,
							commentsPageKey: n,
							headCommentId: s
						} = t.payload, o = e[n], i = {};
						let a = null;
						return s && (i[s] = {
							...o[s],
							prev: Object(N.i)(r.id)
						}, a = Object(N.i)(s)), {
							...e,
							[n]: {
								...e[n],
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
							commentsPageKey: n,
							parentCommentId: s,
							depth: o
						} = t.payload, i = e[n], a = {};
						let c = null;
						if (!i[s]) return e;
						const d = i[s].next;
						return d && (a[d.id] = {
							...i[d.id],
							prev: Object(N.i)(r.id)
						}, c = d), a[s] = {
							...i[s],
							next: Object(N.i)(r.id)
						}, {
							...e,
							[n]: {
								...e[n],
								...a,
								[r.id]: {
									depth: o,
									next: c,
									prev: Object(N.i)(s)
								}
							}
						}
					}
					default:
						return e
				}
			};
			const P = {};
			var L = (e = P, t) => {
				switch (t.type) {
					case C.b:
					case C.c:
					case f.J: {
						const {
							comment: r,
							commentsPageKey: n
						} = t.payload;
						return {
							...e,
							[n]: r.id
						}
					}
					case a.b:
					case a.f: {
						const {
							commentLists: r,
							key: n,
							postId: s
						} = t.payload;
						return {
							...e,
							[n]: r[s] && r[s].head ? r[s].head.id : null
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
							postId: n
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					case f.J: {
						const {
							parentId: r,
							commentsPageKey: n
						} = t.payload;
						return e[n] ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				api: b,
				followed: x,
				keyToChatCommentLinks: v,
				keyToCommentThreadLinkSets: F,
				keyToHeadCommentId: L,
				keyToPostId: R,
				ads: i
			})
		},
		"./src/reddit/selectors/comments.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return f
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "u", (function() {
				return x
			})), r.d(t, "w", (function() {
				return y
			})), r.d(t, "x", (function() {
				return g
			})), r.d(t, "k", (function() {
				return j
			})), r.d(t, "g", (function() {
				return C
			})), r.d(t, "H", (function() {
				return k
			})), r.d(t, "n", (function() {
				return _
			})), r.d(t, "o", (function() {
				return v
			})), r.d(t, "j", (function() {
				return T
			})), r.d(t, "l", (function() {
				return I
			})), r.d(t, "h", (function() {
				return S
			})), r.d(t, "a", (function() {
				return N
			})), r.d(t, "b", (function() {
				return E
			})), r.d(t, "q", (function() {
				return w
			})), r.d(t, "m", (function() {
				return F
			})), r.d(t, "t", (function() {
				return P
			})), r.d(t, "A", (function() {
				return L
			})), r.d(t, "J", (function() {
				return D
			})), r.d(t, "s", (function() {
				return R
			})), r.d(t, "D", (function() {
				return A
			})), r.d(t, "E", (function() {
				return M
			})), r.d(t, "F", (function() {
				return H
			})), r.d(t, "r", (function() {
				return W
			})), r.d(t, "e", (function() {
				return U
			})), r.d(t, "v", (function() {
				return K
			})), r.d(t, "K", (function() {
				return B
			})), r.d(t, "f", (function() {
				return q
			})), r.d(t, "i", (function() {
				return $
			})), r.d(t, "G", (function() {
				return V
			})), r.d(t, "C", (function() {
				return G
			})), r.d(t, "I", (function() {
				return J
			})), r.d(t, "p", (function() {
				return z
			})), r.d(t, "L", (function() {
				return X
			})), r.d(t, "y", (function() {
				return Z
			})), r.d(t, "z", (function() {
				return Q
			})), r.d(t, "B", (function() {
				return Y
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/values.js"),
				s = r.n(n),
				o = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/objectSelector/index.ts"),
				a = r("./src/reddit/constants/comments.ts"),
				c = r("./src/reddit/models/Post/index.ts"),
				d = r("./src/reddit/selectors/subreddit.ts"),
				l = r("./src/reddit/selectors/user.ts"),
				u = r("./src/reddit/selectors/commentSelector.ts"),
				m = r("./src/lib/initializeClient/installReducer.ts"),
				p = r("./src/reddit/reducers/features/comments/index.ts"),
				b = r("./src/reddit/reducers/pages/comments/index.ts");
			Object(m.a)({
				features: {
					comments: p.a
				},
				pages: {
					comments: b.a
				}
			});
			const f = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.error[t],
				h = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.pending[t],
				x = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.fullyLoaded[t],
				y = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				g = (e, t) => {
					const r = y(e, t);
					if (r) return Object(u.b)(e, {
						commentId: r
					})
				},
				O = [],
				j = Object(i.a)((e, t) => {
					const r = g(e, t),
						n = r && r.id;
					if (!n) return O;
					const {
						commentsPageKey: s
					} = t, o = e.pages.comments.keyToCommentThreadLinkSets[s], i = [];
					let c = {
						id: n,
						type: a.a.Comment
					};
					do {
						i.push(c), c = o[c.id].next
					} while (c);
					return i
				}),
				C = (e, t) => y(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				k = (e, {
					commentsPageKey: t
				}) => {
					const r = e.pages.comments.keyToPostId[t];
					return r ? e.posts.models[r] : null
				},
				_ = (e, {
					commentId: t,
					commentLink: r,
					commentsPageKey: n
				}) => {
					const s = e.pages.comments.keyToCommentThreadLinkSets[n];
					return s ? r ? s[r.id] : t ? s[t] : null : null
				},
				v = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				T = (e, t) => {
					const r = t.commentsPageKey ? _(e, t) : null;
					return r ? r.depth : null
				},
				I = (e, {
					commentLink: t
				}) => {
					const {
						id: r,
						type: n
					} = t;
					switch (n) {
						case a.a.Comment:
							return e.features.comments.models[r];
						case a.a.MoreComments:
							return e.moreComments.models[r];
						case a.a.ContinueThread:
							return e.continueThreads.models[r];
						default:
							return null
					}
				},
				S = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, r = Object(c.s)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === r && e.features.comments.models[t].author !== o.D).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				N = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				E = e => e.moreComments.models,
				w = e => e.features.comments.models,
				F = (e, {
					commentId: t
				}) => {
					const r = Object(u.b)(e, {
						commentId: t
					});
					return r ? Object(u.a)(e, r) : ""
				},
				P = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				L = (e, {
					commentId: t,
					commentsPageKey: r
				}) => !!(t && e.features.comments.isEditing[r] && e.features.comments.isEditing[r][t]),
				D = (e, {
					commentId: t,
					commentsPageKey: r
				}) => !!(t && e.features.comments.replyFormOpen[r] && e.features.comments.replyFormOpen[r][t]),
				R = (e, {
					commentsPageKey: t
				}) => {
					const r = t && e.features.comments.replyFormOpen[t] || {},
						n = Object.keys(r).find(e => r[e]),
						s = Object(u.b)(e, {
							commentId: n
						}),
						o = s && T(e, {
							commentId: s.id,
							commentLink: void 0,
							commentsPageKey: t
						});
					if (s && "number" == typeof o) return {
						...s,
						depth: o
					}
				},
				A = (e, {
					moreCommentsId: t
				}) => e.moreComments.models[t],
				M = (e, {
					moreCommentsId: t
				}) => !!e.moreComments.api.pending[t],
				H = (e, {
					commentsPageKey: t
				}) => {
					const r = e.pages.comments.keyToPostId[t];
					if (r) {
						const t = s()(e.moreComments.models).find(t => t.postId === r && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
						if (t) return {
							moreCommentId: t.id,
							pending: !!e.moreComments.api.pending[t.id]
						}
					}
					return null
				},
				W = (e, {
					id: t
				}) => e.continueThreads.models[t],
				U = (e, {
					commentId: t
				}) => {
					const r = t ? e.features.comments.models[t] : void 0;
					if (!r) return null;
					const n = e.authorFlair.models[r.subredditId];
					return n ? n[r.author] : null
				},
				K = (e, {
					draftKey: t
				}) => !!e.features.comments.submit.error[t],
				B = (e, {
					draftKey: t
				}) => {
					const r = e.features.comments.submit.error[t];
					return r && r.fields ? r.fields.map(e => e.msg) : []
				},
				q = (e, {
					draftKey: t
				}) => {
					const r = e.features.comments.drafts[t];
					return !!r && r.autofocusDisabled
				},
				$ = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				V = (e, {
					commentId: t
				}) => {
					const r = t ? e.features.comments.submit.error[t] : void 0;
					return r && r.fields ? r.fields.map(e => e.msg) : void 0
				},
				G = (e, {
					commentId: t
				}) => !!t && e.features.comments.submit.pending[t],
				J = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				z = e => e.features.comments.visitHighlightFilter,
				X = (e, t) => {
					const r = Object(u.b)(e, t);
					if (r) return Object(d.V)(e, r)
				},
				Z = (e, {
					commentId: t
				}) => {
					const r = Object(u.b)(e, {
							commentId: t
						}),
						n = r && r.authorId || "";
					return Object(l.T)(e, n)
				},
				Q = (e, {
					commentId: t
				}) => {
					var r, n;
					return !!((null === (n = null === (r = e.pages) || void 0 === r ? void 0 : r.comments) || void 0 === n ? void 0 : n.followed) || []).find(e => e.id === t)
				},
				Y = (e, {
					commentId: t
				}) => {
					var r, n;
					const s = ((null === (n = null === (r = e.pages) || void 0 === r ? void 0 : r.comments) || void 0 === n ? void 0 : n.followed) || []).find(e => e.id === t);
					return !!(s && s.expiresAt < Date.now())
				}
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"84f02d14f38a"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250.2bced96b31708f8d5355.js.map