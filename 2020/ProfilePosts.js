// https://www.redditstatic.com/desktop2x/ProfilePosts.29e9041ce50f80fff636.js
// Retrieved at 10/29/2020, 6:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfilePosts", "reddit-components-ContentGate"], {
		"./node_modules/lodash/flatMap.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseFlatten.js"),
				a = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return r(a(e, t), 1)
			}
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return p
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "h", (function() {
				return k
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var r = n("./node_modules/linkify-it/index.js"),
				a = n.n(r),
				s = n("./node_modules/tlds/index.js"),
				o = n.n(s),
				i = n("./src/lib/linkMatchers/customLinks.ts"),
				l = n("./node_modules/lodash/values.js"),
				c = n.n(l);
			const d = e => c()(i.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = a()().tlds(o.a).set({
					fuzzyIP: !0
				}),
				f = a()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.mention.prefix, i.g.mention.config),
				h = m(a()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config),
				b = m(a()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config),
				g = a()().tlds(o.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				x = p.normalize;
			p.normalize = e => {
				x.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = "https:".concat(e.url.slice(5)))
			};
			const _ = (e, t) => {
					return (g.match(e) || []).filter(e => {
						const n = d(e.text);
						return !n || n && t
					})
				},
				E = e => {
					return [...b.match(e) || [], ...f.match(e) || []].map(e => !d(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				y = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				k = e => {
					const t = p.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const n = t[0];
						return n.lastIndex === e.length ? n : ((e, t) => {
							const n = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(n)) return t.lastIndex += n.length, t.url += n, t
						})(e, n)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				a = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const s = Object(a.e)(e),
					o = encodeURIComponent("".concat(t).concat(s));
				return "".concat(r.a.accountManagerOrigin).concat(n || "/login", "?dest=").concat(o)
			}
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
				Description: "_3VTI5BOpJO70xoBKSqz3O9",
				description: "_3VTI5BOpJO70xoBKSqz3O9",
				PrivateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				privateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				PrivateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				privateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				PrivateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				privateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				Link: "o4oSRcSrppMzf__hxJKxn",
				link: "o4oSRcSrppMzf__hxJKxn",
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				SecondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				secondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				SecondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				secondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				Image: "_1jefpljVGT-eHObg40F8Dm",
				image: "_1jefpljVGT-eHObg40F8Dm",
				ImagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				imagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				SecondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				secondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				SecondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				secondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				QuarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./src/config.ts"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/loginHref/index.ts"),
				d = n("./src/reddit/actions/contentGate.ts"),
				u = n("./src/reddit/actions/preferences.ts"),
				m = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				f = n("./src/reddit/components/Footer/index.m.less"),
				h = n.n(f);
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js"), g = p.a.div("FooterContainer", h.a), x = p.a.div("UserAgreement", h.a), _ = p.a.a("UserAgreementLink", h.a), E = p.a.a("PrivacyLink", h.a);
			var y = () => s.a.createElement(g, null, s.a.createElement(x, null, b._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [b._param("=User Agreement", s.a.createElement(_, {
					href: "".concat(r.a.redditUrl, "/help/useragreement")
				}, b._("User Agreement", null, {
					hk: "2srkM2"
				}))), b._param("=Privacy Policy", s.a.createElement(E, {
					href: "".concat(r.a.redditUrl, "/help/privacypolicy")
				}, b._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), b._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				k = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				v = n("./src/reddit/components/RichTextJson/index.tsx"),
				j = (n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/lodash/flatMap.js")),
				P = n.n(j),
				L = n("./src/lib/linkMatchers/index.ts"),
				S = n("./src/lib/linkMatchers/customLinks.ts"),
				N = n("./src/reddit/controls/OutboundLink/index.tsx");
			const O = /\[(.+?)\]\((.+?)\)/g,
				w = e => {
					const t = e.split(O);
					if (1 === t.length) return [e];
					const n = [];
					for (let r = 0; r < t.length; r += 3) {
						const [e, a, s] = t.slice(r, r + 3);
						n.push(e), n.push([s, a])
					}
					return n
				};
			var C = s.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = P()(t, w)), e.parseRegularLinks && (t = P()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = L.e.add(S.g.subreddit.prefix, S.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let r = null;
						for (const a of t) n.push(e.slice(r ? r.lastIndex : 0, a.index)), r = a, n.push([a.url, a.text]);
						return r && n.push(e.slice(r.lastIndex)), n
					})(e))), s.a.createElement(s.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [r, a] = t;
							return s.a.createElement(N.b, {
								className: e.linkClassName,
								href: r,
								isSponsored: !1,
								key: n,
								source: null
							}, a)
						}
						return s.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				B = n("./src/reddit/contexts/PageLayer/index.tsx"),
				T = n("./src/reddit/controls/Button/index.tsx"),
				I = n("./src/reddit/models/ContentGate.ts"),
				F = n("./src/reddit/selectors/meta.ts"),
				R = n("./src/reddit/selectors/user.ts"),
				D = n("./src/reddit/components/ContentGate/index.m.less"),
				M = n.n(D);
			const {
				fbt: G
			} = n("./node_modules/fbt/lib/FbtPublic.js"), U = p.a.div("ButtonsContainer", M.a), z = p.a.div("Container", M.a), A = p.a.div("Description", M.a), H = p.a.div("PrivateSubredditDetails", M.a), W = p.a.div("PrivateSubredditDescription", M.a), q = p.a.h3("PrivateSubredditName", M.a), K = p.a.a("Link", M.a), V = p.a.wrapped(T.k, "LinkRouterButton", M.a), Y = p.a.wrapped(T.j, "LinkButton", M.a), X = p.a.wrapped(T.n, "SecondaryLinkRouterButton", M.a), Z = p.a.wrapped(T.m, "SecondaryLinkButton", M.a), J = p.a.wrapped(V, "GoHomeLinkButton", M.a), Q = p.a.img("Image", M.a), $ = p.a.img("ImagePlaceholder", M.a), ee = p.a.wrapped(V, "LeftLinkRouterButton", M.a), te = p.a.wrapped(Y, "LeftLinkButton", M.a), ne = p.a.wrapped(Z, "SecondaryLeftLinkButton", M.a), re = p.a.wrapped(X, "SecondaryLeftLinkRouterButton", M.a), ae = p.a.h3("Title", M.a), se = p.a.div("PageBody", M.a), oe = p.a.div("QuarantineMessageWrapper", M.a), ie = Object(l.c)({
				isLoggedIn: R.H,
				origin: F.l,
				user: R.i
			}), le = Object(B.t)(), ce = Object(o.b)(ie, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(u.C(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(d.l)())
					}
				}
			}), de = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: a,
					isLoggedIn: o,
					location: i,
					origin: l,
					pageLayer: u,
					quarantineRequiresEmail: p,
					quarantineMessage: f,
					quarantineMessageHtml: h,
					quarantineMessageRTJson: b,
					setNSFWPreference: g,
					subredditDescription: x,
					subredditName: _,
					user: E
				} = e, y = () => {
					o ? g() : Object(d.k)(), window.location.reload()
				};
				switch (n) {
					case I.a.GoldSubreddit:
						return s.a.createElement("div", null, s.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/gold/premium-crest.png")
						}), s.a.createElement(ae, null, G._("r/{community name} is a Reddit Premium community", [G._param("community name", _)], {
							hk: "2lyDwB"
						})), s.a.createElement(A, null, G._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), s.a.createElement(U, null, E ? s.a.createElement(ne, {
							href: "".concat(r.a.redditUrl, "/premium")
						}, G._("Get Premium", null, {
							hk: "3ChWi4"
						})) : s.a.createElement(te, {
							href: Object(c.a)(i, l)
						}, G._("Sign Up", null, {
							hk: "rvpjy"
						})), E ? s.a.createElement(V, {
							to: "/"
						}, G._("Go Home", null, {
							hk: "49p4or"
						})) : s.a.createElement(Z, {
							href: Object(c.a)(i, l)
						}, G._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case I.a.Nsfw:
					case I.a.NsfwCustomFeed:
						return s.a.createElement("div", null, s.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/nsfw.png")
						}), s.a.createElement(ae, null, n === I.a.Nsfw ? G._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : G._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), s.a.createElement(A, null, G._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), s.a.createElement(U, null, s.a.createElement(ee, {
							to: "/"
						}, G._("No", null, {
							hk: "3fMglW"
						})), s.a.createElement(Z, {
							onClick: y
						}, G._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case I.a.PrivateSubreddit:
						return s.a.createElement("div", null, s.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/private.png")
						}), s.a.createElement(ae, null, G._("You must be invited to visit this community", null, {
							hk: "dHP8K"
						})), x && x.length && s.a.createElement(H, null, s.a.createElement(q, null, "r/", _), s.a.createElement(W, null, s.a.createElement("div", null, x))), s.a.createElement(A, null, G._("The moderators in this community have set it to private. You must be a moderator or approved user to visit.", null, {
							hk: "nwL0k"
						})), s.a.createElement(U, null, E ? s.a.createElement(ne, {
							href: "".concat(r.a.redditUrl, "/message/compose?to=/r/").concat(_)
						}, G._("Message Mods", null, {
							hk: "vVe1i"
						})) : s.a.createElement(ne, {
							href: Object(c.a)(i, l)
						}, G._("Sign Up", null, {
							hk: "rvpjy"
						})), s.a.createElement(V, {
							to: "/"
						}, E ? G._("Go Home", null, {
							hk: "49p4or"
						}) : G._("Explore Reddit", null, {
							hk: "3IwwVU"
						}))));
					case I.a.QuarantinedSubreddit:
						return s.a.createElement("div", null, s.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/quarantined.png")
						}), s.a.createElement(ae, null, G._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), s.a.createElement(A, null, G._("This community is {=quarantined}", [G._param("=quarantined", s.a.createElement(K, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, G._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), s.a.createElement(oe, null, b ? s.a.createElement(v.a, {
							content: b,
							rtJsonElementProps: {
								pageLayer: u
							}
						}) : h ? s.a.createElement(k.a, {
							html: h
						}) : f || G._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), G._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), s.a.createElement(U, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? s.a.createElement(U, null, s.a.createElement(re, {
								to: "/"
							}, G._("No Thank You", null, {
								hk: "4B26AR"
							})), s.a.createElement(Y, {
								href: "".concat(r.a.redditUrl, "/prefs/update")
							}, G._("Verify Email", null, {
								hk: "1893cq"
							}))) : s.a.createElement(U, null, s.a.createElement(ee, {
								to: "/"
							}, G._("No Thank You", null, {
								hk: "4B26AR"
							})), s.a.createElement(Z, {
								onClick: t
							}, G._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(E, a, p)));
					case I.a.SubredditBanned:
						return s.a.createElement("div", null, s.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/banned.png")
						}), s.a.createElement(ae, null, G._("r/{community name} has been banned from Reddit", [G._param("community name", _)], {
							hk: "2at9Se"
						})), (e => s.a.createElement(A, null, e ? s.a.createElement(C, {
							linkClassName: M.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : G._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), s.a.createElement(U, null, s.a.createElement(V, {
							to: "/"
						}, G._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case I.a.SubredditBlockedForLegalReason:
						return s.a.createElement("div", null, s.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), s.a.createElement(ae, null, G._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), s.a.createElement(U, null, s.a.createElement(V, {
							to: "/"
						}, G._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case I.a.SubredditDoesNotExist:
						return s.a.createElement("div", null, s.a.createElement($, null), s.a.createElement(ae, null, G._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), s.a.createElement(A, null, G._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), s.a.createElement(U, null, E && s.a.createElement(m.a, {
							eventSource: "content_gate"
						}), s.a.createElement(J, {
							to: "/"
						}, G._("Go Home", null, {
							hk: "49p4or"
						}))));
					case I.a.ProfileDoesNotExist:
					case I.a.ProfileDeleted:
					case I.a.ProfileSuspended:
					case I.a.ProfileBlockedForLegalReason:
						return s.a.createElement("div", null, s.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), s.a.createElement(ae, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case I.a.ProfileBlockedForLegalReason:
									return G._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case I.a.ProfileDeleted:
									return G._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case I.a.ProfileSuspended:
									return s.a.createElement(s.a.Fragment, null, G._("This account has been {=suspended} .", [G._param("=suspended", s.a.createElement(K, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, G._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case I.a.ProfileDoesNotExist:
									return s.a.createElement(s.a.Fragment, null, s.a.createElement(ae, null, G._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), s.a.createElement(A, null, G._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), s.a.createElement(U, null, s.a.createElement(J, {
							to: "/"
						}, G._("Go Home", null, {
							hk: "49p4or"
						}))));
					case I.a.CustomFeedDoesNotExist:
						return s.a.createElement("div", null, s.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), s.a.createElement(ae, null, G._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), s.a.createElement(U, null, s.a.createElement(J, {
							to: "/"
						}, G._("Go Home", null, {
							hk: "49p4or"
						}))));
					case I.a.PostBlockedForLegalReason:
						return s.a.createElement("div", null, s.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), s.a.createElement(ae, null, G._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), s.a.createElement(U, null, s.a.createElement(V, {
							to: "/"
						}, G._("Explore Reddit", null, {
							hk: "FrUWU"
						}))))
				}
			};
			t.default = le(ce(Object(i.i)(e => s.a.createElement(z, null, s.a.createElement("div", null, s.a.createElement(se, null, de(e))), s.a.createElement(y, null)))))
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/overlay/index.ts"),
				p = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				b = n.n(h),
				g = n("./src/lib/lessComponent.tsx");
			const x = "create-community-button",
				_ = g.a.wrapped(c.c, "StyledTooltip", b.a),
				E = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(f.db)(e),
					userIsSuspended: f.N
				});
			t.a = Object(o.b)(E, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(p.b)(n)), e(Object(m.a)("/subreddits/create"))
					},
					onShowTooltip: () => e(Object(l.f)({
						tooltipId: x
					})),
					onHideTooltip: () => e(Object(l.i)())
				}
			})(Object(d.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: a,
					onHideTooltip: o,
					openCommunityCreation: i,
					sendEvent: l,
					userDoesNotHaveEnoughExpToCreateCommunity: c,
					userIsSuspended: d
				} = e;
				return s.a.createElement(u.l, {
					className: t,
					disabled: d || c,
					onClick: () => i(l),
					onMouseEnter: a,
					onMouseLeave: o,
					id: x,
					isFullWidth: !0
				}, r.fbt._("Create Community", null, {
					hk: "RLA8A"
				}), c ? s.a.createElement(_, {
					caretOnTop: !0,
					tooltipId: x,
					text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : d ? s.a.createElement(_, {
					caretOnTop: !0,
					tooltipId: x,
					text: r.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/EmptyProfile/EmptyListing.m.less": function(e, t, n) {
			e.exports = {
				PrimaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				primaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				BackgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				backgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				Wrapper: "_1aYPXfy_h5ZUIu0k_69eX1",
				wrapper: "_1aYPXfy_h5ZUIu0k_69eX1"
			}
		},
		"./src/reddit/components/EmptyProfile/forbidden.m.less": function(e, t, n) {
			e.exports = {
				container: "_1RecBWgyCRDIwbumVv_1eu",
				hideIcon: "_2ahl77ziD4jsIXBLc18_Hc",
				title: "_1MRoVpNql4popp175MVxl6",
				subtitle: "_3HccUrmIe42WfjCGgNekWK",
				buttons: "_1BrhZvjQw9AWs6w5xlkj2F"
			}
		},
		"./src/reddit/components/EmptyProfile/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "a", (function() {
				return j
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/PostList/Placeholder.tsx"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				u = n.n(d);
			const m = i.a.div("PrimaryText", u.a),
				p = i.a.wrapped(l.a, "BackgroundPlaceholder", u.a),
				f = i.a.div("Wrapper", u.a);
			var h = e => {
				let {
					children: t,
					className: n
				} = e;
				return s.a.createElement(f, {
					className: n
				}, s.a.createElement(p, {
					isLoading: !1,
					layout: c.g.Classic
				}), s.a.createElement(m, null, t))
			};
			var b = e => {
				let {
					className: t,
					profileName: n,
					timeSort: a = o.Sb.ALL
				} = e;
				return s.a.createElement(h, {
					className: t
				}, a === o.Sb.ALL ? r.fbt._("hmm... {profileName} hasn't commented on anything", [r.fbt._param("profileName", "u/".concat(n))], {
					hk: "1MHn3t"
				}) : r.fbt._("hmm... {profileName} hasn't commented recently", [r.fbt._param("profileName", "u/".concat(n))], {
					hk: "qN3uL"
				}))
			};
			var g = e => {
				let {
					className: t,
					profileName: n,
					timeSort: a = o.Sb.ALL
				} = e;
				return s.a.createElement(h, {
					className: t
				}, a === o.Sb.ALL ? r.fbt._("hmm... {profileName} hasn't posted anything", [r.fbt._param("profileName", "u/".concat(n))], {
					hk: "28vBEd"
				}) : r.fbt._("hmm... {profileName} hasn't posted recently", [r.fbt._param("profileName", "u/".concat(n))], {
					hk: "38GhqN"
				}))
			};
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var _ = e => {
					let {
						className: t,
						verb: n
					} = e;
					return s.a.createElement(h, {
						className: t
					}, x._("hmm... looks like you haven't {verb} yet", [x._param("verb", n)], {
						hk: "142tKN"
					}))
				},
				E = n("./src/reddit/icons/svgs/Hide/index.tsx"),
				y = n("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				k = n.n(y);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var j = () => s.a.createElement("div", {
				className: k.a.container
			}, s.a.createElement(E.a, {
				className: k.a.hideIcon
			}), s.a.createElement("h3", {
				className: k.a.title
			}, v._("You do not have permission to access this resource", null, {
				hk: "10cPyp"
			})), s.a.createElement("p", {
				className: k.a.subtitle
			}, v._("You can only look at your own saved posts and comments", null, {
				hk: "3pWGtF"
			})))
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh"
			}
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/PostList/index.tsx"),
				a = n("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(a.a)(r.a)
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return P
			})), n.d(t, "b", (function() {
				return S
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/actions/ads/index.ts"),
				i = n("./src/reddit/actions/focusedVerticals/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/postList.ts"),
				d = n("./src/reddit/actions/survey/index.ts"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				f = n("./src/reddit/helpers/trackers/post.ts"),
				h = n("./src/reddit/components/PostList/Placeholder.tsx"),
				b = n("./src/reddit/featureFlags/index.ts"),
				g = n("./src/reddit/selectors/experiments/econ/predictions.ts"),
				x = n("./src/reddit/selectors/experiments/survey.ts"),
				_ = n("./src/reddit/selectors/listings.ts"),
				E = n("./src/reddit/selectors/posts.ts"),
				y = n("./src/reddit/selectors/subreddit.ts"),
				k = n("./src/reddit/selectors/tracking.ts");

			function v() {
				return Object(m.t)({
					currentProfileName: m.h,
					isCommentPermalink: m.v,
					isCommentsPage: m.w,
					isFrontpage: m.y,
					isProfilePostListing: m.I,
					isTopicPage: m.M,
					pageLayer: e => e
				})
			}
			const j = v(),
				P = {
					apiError: _.c,
					apiPending: _.d,
					measureScrollFPS: b.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(m.N)(e, t),
					loadMore: _.g,
					postsById: (e, t) => Object(E.Z)(e, Object.assign(Object.assign({}, t), {
						predictionsEnabled: Object(g.a)(e)
					})),
					postIds: Object(s.a)((e, t) => {
						let {
							listingKey: n,
							listingName: r,
							inSubredditOrProfile: a
						} = t;
						return Object(E.L)(e, n, r, a, Object(g.a)(e))
					}),
					subredditsById: y.ab,
					viewportDataLoaded: k.a,
					pageReferrer: m.Q,
					postListPlaceholderComponent: () => h.a,
					isNpsScrollSurveyEnabled: x.b
				},
				L = Object(a.c)(P),
				S = (e, t) => {
					let {
						isFrontpage: n
					} = t;
					return {
						onBottomViewed: (t, n) => e(c.c(t, n)),
						adBrandSafetyStatusReceived: t => {
							e(o.d({
								isViewSafe: t
							}))
						},
						openPost: t => {
							n && e(Object(i.a)({
								lastLoadedEnv: "server"
							})), e(l.C(t))
						},
						fireAdPixelsOfType: (t, n) => {
							e(l.t(t, n))
						},
						trackOnPostEnteredViewport: (t, n, r) => {
							e(l.F(t, r))
						},
						trackOnPostExitedViewport: (t, n, r, a) => {
							e(l.G(t, r, a))
						},
						surveyTriggerScrollCounted: () => e(Object(d.b)())
					}
				},
				N = Object(r.b)(L, S, (e, t, n) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), n), {
					postClickEventFactory: (e, t) => Object(f.f)(e, t, "post", n.listingKey, n.hostPostId, n.listingBelowVariant),
					postComponentForLayout: e => Object(p.b)(Object.assign({}, e))
				}));
			t.a = e => Object(u.c)(j(N(e)))
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/models/WhitelistStatus/index.ts");
			const a = (e, t) => {
				const n = e.some(e => e.isNSFW),
					a = t.some(e => e.wls === r.b.NO_ADS);
				return !n && !a
			}
		},
		"./src/reddit/icons/fonts/Gift/index.m.less": function(e, t, n) {
			e.exports = {
				GiftIcon: "_12P1l1cITUMF05krI6QUSj",
				giftIcon: "_12P1l1cITUMF05krI6QUSj"
			}
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/reddit/icons/fonts/helpers.tsx"),
				o = n("./src/reddit/icons/fonts/Gift/index.m.less"),
				i = n.n(o);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: "".concat(Object(s.b)("gift"), " ").concat(e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(s.a, null, e.desc)), "GiftIcon", i.a);
			t.a = l
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", s({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, n) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/pages/ErrorPages/index.m.less"),
				l = n.n(i);
			const c = e => {
					let {
						message: t
					} = e;
					return s.a.createElement("div", {
						className: l.a.container
					}, s.a.createElement("h3", {
						className: l.a.title
					}, t || r.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), s.a.createElement(o.k, {
						className: l.a.primaryRouterLink,
						to: "/"
					}, r.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				d = e => {
					let {
						message: t
					} = e;
					return s.a.createElement("div", {
						className: l.a.container
					}, s.a.createElement("h3", {
						className: l.a.title
					}, t || r.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), s.a.createElement(o.k, {
						className: l.a.primaryRouterLink,
						to: "/"
					}, r.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				}
		},
		"./src/reddit/pages/ProfilePosts/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/core-js/modules/es6.array.sort.js"), n("./node_modules/core-js/modules/es6.regexp.search.js");
			var r = n("./node_modules/lodash/fromPairs.js"),
				a = n.n(r),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/extractQueryParams/index.ts"),
				u = n("./src/lib/makeListingKey/index.ts"),
				m = n("./src/reddit/actions/pages/profilePosts.ts"),
				p = n("./src/reddit/actions/pages/profileShared.ts"),
				f = n("./src/reddit/components/ContentGate/index.tsx"),
				h = n("./src/reddit/components/EmptyProfile/index.ts"),
				b = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				g = n("./src/reddit/components/JumpToContent/index.tsx"),
				x = n("./src/reddit/components/ListingPostList/index.tsx"),
				_ = n("./src/reddit/components/ProfileNavMenu/index.tsx"),
				E = n("./src/reddit/components/ProfileSidebar/index.tsx"),
				y = n("./src/reddit/contexts/PageLayer/index.tsx"),
				k = n("./src/reddit/helpers/trackers/screenview.ts"),
				v = n("./src/reddit/layout/page/Listing/index.tsx"),
				j = n("./src/reddit/models/ContentGate.ts"),
				P = n("./src/reddit/pages/ErrorPages/index.tsx"),
				L = n("./src/reddit/selectors/profile.ts"),
				S = n("./src/reddit/selectors/user.ts");

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const O = Object(y.t)(),
				w = Object(l.a)(y.B, S.Y, (e, t) => {
					let {
						location: n
					} = t;
					return a()([...Object(d.a)(n.search)])
				}, y.N, (e, t) => {
					let {
						match: n
					} = t;
					return n.params.profileName
				}, (e, t) => {
					let {
						match: n
					} = t;
					return Object(L.j)(e, {
						profileName: n.params.profileName
					})
				}, S.I, (e, t) => {
					let {
						match: n
					} = t;
					return Object(S.e)(e, c.Ub + n.params.profileName)
				}, (e, t, n, r, a, s, o, i) => {
					const {
						sort: l,
						t: c
					} = Object(p.b)(n), d = Object(u.a)("u_".concat(a), l, n);
					return {
						contentGateInfo: i,
						over18Prefs: t,
						isLoggedIn: o,
						isOwnProfile: e,
						isProfileNSFW: !!s && s.isNSFW,
						layout: r,
						listingKey: d,
						profileName: a,
						sort: l,
						timeSort: c
					}
				}),
				C = Object(i.b)(w, (e, t) => ({
					onLoadMore: () => e(m.g()),
					onLayoutChange: () => e(m.h(Object.assign(Object.assign({}, t.match), {
						queryParams: a()([...Object(d.a)(t.location.search)])
					})))
				}));
			class B extends o.a.Component {
				render() {
					const {
						contentGateInfo: e,
						over18Prefs: t,
						isOwnProfile: n,
						isProfileNSFW: r,
						listingKey: a,
						onLoadMore: s,
						onLayoutChange: i,
						pageLayer: l,
						profileName: d,
						sort: u,
						timeSort: m
					} = this.props;
					if (!l || !d) return null;
					if (e && (e.profileDeleted || e.profileSuspended)) return o.a.createElement(f.default, {
						contentGateType: e.profileDeleted ? j.a.ProfileDeleted : j.a.ProfileSuspended,
						profileName: d
					});
					if (403 === l.status) return o.a.createElement(P.a, null);
					if (404 === l.status) return o.a.createElement(f.default, {
						contentGateType: j.a.ProfileDoesNotExist,
						profileName: d
					});
					const p = d.toLowerCase(),
						y = "/user/".concat(d, "/posts/"),
						L = {
							listingKey: a,
							listingName: p
						};
					if (!t && r && !n) return o.a.createElement(f.default, {
						contentGateType: j.a.Nsfw,
						subredditName: d
					});
					const S = {
						sort: u,
						baseUrl: y,
						sortOptions: c.tb,
						subredditId: this.props.subredditId,
						timeSort: m
					};
					return o.a.createElement(v.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: o.a.createElement(o.a.Fragment, null, o.a.createElement(_.a, {
							profileName: d
						})),
						content: o.a.createElement(o.a.Fragment, null, o.a.createElement(b.a, S), o.a.createElement(g.a, null), o.a.createElement(x.a, {
							listingKey: a,
							listingName: p,
							listingViewed: (e, t) => Object(k.p)(a, u, t, e, m),
							noPostsComponent: () => o.a.createElement(h.c, {
								profileName: d,
								timeSort: m
							}),
							onLoadMore: s,
							onTryAgain: i,
							inSubredditOrProfile: !1
						})),
						sidebar: o.a.createElement(E.a, N({}, L, {
							profileName: d
						}))
					})
				}
			}
			t.default = O(C(B))
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				s = n("./src/reddit/selectors/user.ts");
			const o = e => {
					const t = Object(a.c)(e, {
						experimentEligibilitySelector: s.I,
						experimentName: r.lb
					});
					return !(!t || Object(r.dd)(t))
				},
				i = e => {
					return Object(a.c)(e, {
						experimentEligibilitySelector: s.I,
						experimentName: r.lb
					}) === r.tb.ListingEnabled
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfilePosts.29e9041ce50f80fff636.js.map