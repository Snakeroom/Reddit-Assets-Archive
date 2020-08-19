// https://www.redditstatic.com/desktop2x/Multireddit.073feeaec6eedff505bc.js
// Retrieved at 8/19/2020, 1:50:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Multireddit"], {
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "h", (function() {
				return k
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var r = n("./node_modules/linkify-it/index.js"),
				s = n.n(r),
				a = n("./node_modules/tlds/index.js"),
				i = n.n(a),
				o = n("./src/lib/linkMatchers/customLinks.ts"),
				l = n("./node_modules/lodash/values.js"),
				c = n.n(l);
			const d = e => c()(o.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = s()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				b = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(o.g.mention.prefix, o.g.mention.config),
				h = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config),
				x = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config),
				f = s()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config).add(o.g.mention.prefix, o.g.mention.config),
				g = p.normalize;
			p.normalize = e => {
				g.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = "https:".concat(e.url.slice(5)))
			};
			const E = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const n = d(e.text);
						return !n || n && t
					})
				},
				_ = e => {
					return [...x.match(e) || [], ...b.match(e) || []].map(e => !d(e.text) && e.text.replace(o.a, "")).filter(e => e)
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
				s = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const a = Object(s.e)(e),
					i = encodeURIComponent("".concat(t).concat(a));
				return "".concat(r.a.accountManagerOrigin).concat(n || "/login", "?dest=").concat(i)
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
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				o = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = n("./src/reddit/controls/TextButton/index.tsx"),
				c = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				d = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(d);
			const m = e => e.preventDefault();
			t.a = Object(i.a)(e => a.a.createElement(o.d, null, a.a.createElement(o.h, null, a.a.createElement(c.a, null, a.a.createElement(o.p, null, e.headerText || r.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), a.a.createElement(l.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, a.a.createElement(o.b, null)))), a.a.createElement(o.k, null, a.a.createElement(o.o, {
				className: u.a.ModalText
			}, e.modalText)), a.a.createElement(o.f, null, !e.hideCancelButton && a.a.createElement(o.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || r.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), a.a.createElement(o.t, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
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
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router/esm/react-router.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/loginHref/index.ts"),
				d = n("./src/reddit/actions/contentGate.ts"),
				u = n("./src/reddit/actions/preferences.ts"),
				m = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/components/Footer/index.m.less"),
				h = n.n(b);
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js"), f = p.a.div("FooterContainer", h.a), g = p.a.div("UserAgreement", h.a), E = p.a.a("UserAgreementLink", h.a), _ = p.a.a("PrivacyLink", h.a);
			var y = () => a.a.createElement(f, null, a.a.createElement(g, null, x._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [x._param("=User Agreement", a.a.createElement(E, {
					href: "".concat(r.a.redditUrl, "/help/useragreement")
				}, x._("User Agreement", null, {
					hk: "2srkM2"
				}))), x._param("=Privacy Policy", a.a.createElement(_, {
					href: "".concat(r.a.redditUrl, "/help/privacypolicy")
				}, x._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), x._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				k = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				v = n("./src/reddit/components/RichTextJson/index.tsx"),
				C = (n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/lodash/flatMap.js")),
				O = n.n(C),
				j = n("./src/lib/linkMatchers/index.ts"),
				T = n("./src/lib/linkMatchers/customLinks.ts"),
				w = n("./src/reddit/controls/OutboundLink/index.tsx");
			const L = /\[(.+?)\]\((.+?)\)/g,
				N = e => {
					const t = e.split(L);
					if (1 === t.length) return [e];
					const n = [];
					for (let r = 0; r < t.length; r += 3) {
						const [e, s, a] = t.slice(r, r + 3);
						n.push(e), n.push([a, s])
					}
					return n
				};
			var B = a.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = O()(t, N)), e.parseRegularLinks && (t = O()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = j.e.add(T.g.subreddit.prefix, T.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let r = null;
						for (const s of t) n.push(e.slice(r ? r.lastIndex : 0, s.index)), r = s, n.push([s.url, s.text]);
						return r && n.push(e.slice(r.lastIndex)), n
					})(e))), a.a.createElement(a.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [r, s] = t;
							return a.a.createElement(w.b, {
								className: e.linkClassName,
								href: r,
								isSponsored: !1,
								key: n,
								source: null
							}, s)
						}
						return a.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				S = n("./src/reddit/contexts/PageLayer/index.tsx"),
				I = n("./src/reddit/controls/Button/index.tsx"),
				P = n("./src/reddit/models/ContentGate.ts"),
				D = n("./src/reddit/selectors/meta.ts"),
				M = n("./src/reddit/selectors/user.ts"),
				F = n("./src/reddit/components/ContentGate/index.m.less"),
				R = n.n(F);
			const {
				fbt: A
			} = n("./node_modules/fbt/lib/FbtPublic.js"), U = p.a.div("ButtonsContainer", R.a), H = p.a.div("Container", R.a), z = p.a.div("Description", R.a), G = p.a.div("PrivateSubredditDetails", R.a), W = p.a.div("PrivateSubredditDescription", R.a), J = p.a.h3("PrivateSubredditName", R.a), X = p.a.a("Link", R.a), q = p.a.wrapped(I.h, "LinkRouterButton", R.a), Z = p.a.wrapped(I.g, "LinkButton", R.a), K = p.a.wrapped(I.k, "SecondaryLinkRouterButton", R.a), V = p.a.wrapped(I.j, "SecondaryLinkButton", R.a), Y = p.a.wrapped(q, "GoHomeLinkButton", R.a), Q = p.a.img("Image", R.a), $ = p.a.img("ImagePlaceholder", R.a), ee = p.a.wrapped(q, "LeftLinkRouterButton", R.a), te = p.a.wrapped(Z, "LeftLinkButton", R.a), ne = p.a.wrapped(V, "SecondaryLeftLinkButton", R.a), re = p.a.wrapped(K, "SecondaryLeftLinkRouterButton", R.a), se = p.a.h3("Title", R.a), ae = p.a.div("PageBody", R.a), ie = p.a.div("QuarantineMessageWrapper", R.a), oe = Object(l.c)({
				isLoggedIn: M.G,
				origin: D.l,
				user: M.i
			}), le = Object(S.t)(), ce = Object(i.b)(oe, (e, t) => {
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
					continueToQuarantinedSubreddit: s,
					isLoggedIn: i,
					location: o,
					origin: l,
					pageLayer: u,
					quarantineRequiresEmail: p,
					quarantineMessage: b,
					quarantineMessageHtml: h,
					quarantineMessageRTJson: x,
					setNSFWPreference: f,
					subredditDescription: g,
					subredditName: E,
					user: _
				} = e, y = () => {
					i ? f() : Object(d.k)(), window.location.reload()
				};
				switch (n) {
					case P.a.GoldSubreddit:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/gold/premium-crest.png")
						}), a.a.createElement(se, null, A._("r/{community name} is a Reddit Premium community", [A._param("community name", E)], {
							hk: "2lyDwB"
						})), a.a.createElement(z, null, A._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), a.a.createElement(U, null, _ ? a.a.createElement(ne, {
							href: "".concat(r.a.redditUrl, "/premium")
						}, A._("Get Premium", null, {
							hk: "3ChWi4"
						})) : a.a.createElement(te, {
							href: Object(c.a)(o, l)
						}, A._("Sign Up", null, {
							hk: "rvpjy"
						})), _ ? a.a.createElement(q, {
							to: "/"
						}, A._("Go Home", null, {
							hk: "49p4or"
						})) : a.a.createElement(V, {
							href: Object(c.a)(o, l)
						}, A._("Log in", null, {
							hk: "odEG4"
						}))));
					case P.a.Nsfw:
					case P.a.NsfwCustomFeed:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/nsfw.png")
						}), a.a.createElement(se, null, n === P.a.Nsfw ? A._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : A._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), a.a.createElement(z, null, A._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), a.a.createElement(U, null, a.a.createElement(ee, {
							to: "/"
						}, A._("No", null, {
							hk: "3fMglW"
						})), a.a.createElement(V, {
							onClick: y
						}, A._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case P.a.PrivateSubreddit:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/private.png")
						}), a.a.createElement(se, null, A._("You must be invited to visit this community", null, {
							hk: "dHP8K"
						})), g && g.length && a.a.createElement(G, null, a.a.createElement(J, null, "r/", E), a.a.createElement(W, null, a.a.createElement("div", null, g))), a.a.createElement(z, null, A._("The moderators in this community have set it to private. You must be a moderator or approved user to visit.", null, {
							hk: "nwL0k"
						})), a.a.createElement(U, null, _ ? a.a.createElement(ne, {
							href: "".concat(r.a.redditUrl, "/message/compose?to=/r/").concat(E)
						}, A._("Message Mods", null, {
							hk: "vVe1i"
						})) : a.a.createElement(ne, {
							href: Object(c.a)(o, l)
						}, A._("Sign Up", null, {
							hk: "rvpjy"
						})), a.a.createElement(q, {
							to: "/"
						}, _ ? A._("Go Home", null, {
							hk: "49p4or"
						}) : A._("Explore Reddit", null, {
							hk: "3IwwVU"
						}))));
					case P.a.QuarantinedSubreddit:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/quarantined.png")
						}), a.a.createElement(se, null, A._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), a.a.createElement(z, null, A._("This community is {=quarantined}", [A._param("=quarantined", a.a.createElement(X, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, A._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), a.a.createElement(ie, null, x ? a.a.createElement(v.a, {
							content: x,
							rtJsonElementProps: {
								pageLayer: u
							}
						}) : h ? a.a.createElement(k.a, {
							html: h
						}) : b || A._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), A._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), a.a.createElement(U, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? a.a.createElement(U, null, a.a.createElement(re, {
								to: "/"
							}, A._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(Z, {
								href: "".concat(r.a.redditUrl, "/prefs/update")
							}, A._("Verify Email", null, {
								hk: "1893cq"
							}))) : a.a.createElement(U, null, a.a.createElement(ee, {
								to: "/"
							}, A._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(V, {
								onClick: t
							}, A._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(_, s, p)));
					case P.a.SubredditBanned:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/banned.png")
						}), a.a.createElement(se, null, A._("r/{community name} has been banned from Reddit", [A._param("community name", E)], {
							hk: "2at9Se"
						})), (e => a.a.createElement(z, null, e ? a.a.createElement(B, {
							linkClassName: R.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : A._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), a.a.createElement(U, null, a.a.createElement(q, {
							to: "/"
						}, A._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case P.a.SubredditBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), a.a.createElement(se, null, A._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), a.a.createElement(U, null, a.a.createElement(q, {
							to: "/"
						}, A._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case P.a.SubredditDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement($, null), a.a.createElement(se, null, A._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), a.a.createElement(z, null, A._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), a.a.createElement(U, null, _ && a.a.createElement(m.a, {
							eventSource: "content_gate"
						}), a.a.createElement(Y, {
							to: "/"
						}, A._("Go Home", null, {
							hk: "49p4or"
						}))));
					case P.a.ProfileDoesNotExist:
					case P.a.ProfileDeleted:
					case P.a.ProfileSuspended:
					case P.a.ProfileBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), a.a.createElement(se, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case P.a.ProfileBlockedForLegalReason:
									return A._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case P.a.ProfileDeleted:
									return A._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case P.a.ProfileSuspended:
									return a.a.createElement(a.a.Fragment, null, A._("This account has been {=suspended} .", [A._param("=suspended", a.a.createElement(X, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, A._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case P.a.ProfileDoesNotExist:
									return a.a.createElement(a.a.Fragment, null, a.a.createElement(se, null, A._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), a.a.createElement(z, null, A._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), a.a.createElement(U, null, a.a.createElement(Y, {
							to: "/"
						}, A._("Go Home", null, {
							hk: "49p4or"
						}))));
					case P.a.CustomFeedDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), a.a.createElement(se, null, A._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), a.a.createElement(U, null, a.a.createElement(Y, {
							to: "/"
						}, A._("Go Home", null, {
							hk: "49p4or"
						}))));
					case P.a.PostBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), a.a.createElement(se, null, A._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), a.a.createElement(U, null, a.a.createElement(q, {
							to: "/"
						}, A._("Explore Reddit", null, {
							hk: "FrUWU"
						}))))
				}
			};
			t.default = le(ce(Object(o.i)(e => a.a.createElement(H, null, a.a.createElement("div", null, a.a.createElement(ae, null, de(e))), a.a.createElement(y, null)))))
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				SecondaryButton: "_3U-J6NPoBHbyibarrb7T3F",
				secondaryButton: "_3U-J6NPoBHbyibarrb7T3F",
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/overlay/index.ts"),
				p = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				x = n.n(h),
				f = n("./src/lib/lessComponent.tsx");
			const g = "create-community-button",
				E = f.a.wrapped(u.i, "SecondaryButton", x.a),
				_ = f.a.wrapped(c.c, "StyledTooltip", x.a),
				y = Object(o.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.ab)(e),
					userIsSuspended: b.M
				});
			t.a = Object(i.b)(y, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(p.b)(n)), e(Object(m.a)("/subreddits/create"))
					},
					onShowTooltip: () => e(Object(l.f)({
						tooltipId: g
					})),
					onHideTooltip: () => e(Object(l.i)())
				}
			})(Object(d.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: s,
					onHideTooltip: i,
					openCommunityCreation: o,
					sendEvent: l,
					userDoesNotHaveEnoughExpToCreateCommunity: c,
					userIsSuspended: d
				} = e;
				return a.a.createElement(E, {
					className: t,
					disabled: d || c,
					onClick: () => o(l),
					onMouseEnter: s,
					onMouseLeave: i,
					id: g
				}, r.fbt._("Create Community", null, {
					hk: "RLA8A"
				}), c ? a.a.createElement(_, {
					caretOnTop: !0,
					tooltipId: g,
					text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : d ? a.a.createElement(_, {
					caretOnTop: !0,
					tooltipId: g,
					text: r.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
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
		"./src/reddit/components/MultiredditTopBar/Button/index.m.less": function(e, t, n) {
			e.exports = {
				textBase: "LcUEFMijsseUG0elP8bNx",
				button: "_14uJB4G3tqOEYET63pRdyA",
				hoverText: "_3GSO2RiUsPx69akefymMHH",
				text: "_2RcDSmyTF8XzvMXlNYdfB3",
				withHover: "_1eiwN-M8gLxB0Wrix2rZI9",
				icon: "nVpAL8k7NeDtiXcPNAmaX"
			}
		},
		"./src/reddit/components/MultiredditTopBar/FollowButton/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3d7Sfwey7uejnzrmv0eHPD",
				isFollowed: "mmRAVpxPd7_dKF--axI5t"
			}
		},
		"./src/reddit/components/MultiredditTopBar/OverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				warning: "bX6SqXfzfxpv4GQbuIYVZ",
				button: "_1qiH6rUwyms3uD12BWyHR5"
			}
		},
		"./src/reddit/components/MultiredditTopBar/ShareMenu/index.m.less": function(e, t, n) {
			e.exports = {
				shareMenu: "_3mn7XQLztyLrhr3ZAQyl5y",
				shareIcon: "_373yJBxVgon33agUR-lV0m"
			}
		},
		"./src/reddit/components/MultiredditTopBar/VisibilitySwitch/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_1doK8qD1dkYaqBY5YEJaOD",
				pencilIcon: "_3PELp5Muvbc7hRTVQW0VEa",
				dropdownRow: "KXZPPPGdP_LlVeAK0oMa",
				icon: "_3T9KQ0BWvW9jR5SmmqJgVE",
				public: "_1mAvxBXazRTEPbQEYYMhFI",
				private: "_2slZfnU3hwgD9b8dT79p1F"
			}
		},
		"./src/reddit/components/MultiredditTopBar/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1f7kdhvpHh0S3ClTn3xFCa",
				layoutContainer: "_2CnZ_NKcI15TLBqdLMIYmu",
				layoutCard: "_1xUCmooih5FTp8z5c-oD6U",
				actions: "_1T_vh62Hnliedh8W_NT8-m",
				icon: "_2xtXouwF6uqK9UUpun6xXY",
				content: "_3zG_bpPw8e9TAPq07QCJya",
				header: "_1-u63wf24mXQJg7YnYaR_O",
				multiredditName: "_3I-SyNPeXukMGT4sLs6sFH",
				flair: "_3OqxkWiGGZGmXF0KTa12_h",
				descriptionContainer: "_2SmhQkTKjbD38r3jy00afr",
				meta: "_9uTR_Kf5w51DX_D_Zzj6b",
				usernameLink: "_3O7szJf96hs9FVHDx2qH9d"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/actions/page.ts"),
				d = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = n.n(u);
			const p = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(c.G)(t))
				})),
				b = l.a.wrapped(e => a.a.createElement("div", {
					className: e.className,
					dangerouslySetInnerHTML: {
						__html: e.html
					},
					onClick: t => {
						((e, t, n) => {
							if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
								e.preventDefault(), t(e.target.getAttribute("href"))
							}
							e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
						})(t, e.onNavigate, e.onClick)
					},
					style: Object.assign(Object.assign({}, e.style), {
						"--RawHTMLDisplay-tr-even": Object(r.g)(Object(d.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(r.g)(Object(d.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", m.a);
			t.a = p(Object(o.a)(b))
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
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
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./src/reddit/constants/elementClassNames.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				c = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				u = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				m = n.n(u),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			const f = b.a.button("IconButton", m.a),
				g = b.a.wrapped(c.a, "SubscribeIcon", m.a),
				E = b.a.wrapped(l.a, "UnsubscribeIcon", m.a),
				_ = b.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, r = x(e, ["border", "small"]);
					return a.a.createElement(f, r, a.a.createElement(g, {
						className: Object(p.a)(r.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "SubscribeIconButton", m.a),
				y = b.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, r = x(e, ["border", "small"]);
					return t ? a.a.createElement(o.f, h({}, r, {
						className: Object(p.a)(r.className, {
							[m.a.isSmall]: n
						})
					})) : a.a.createElement(o.n, h({}, r, {
						className: Object(p.a)(r.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "SubscribeInternalButton", m.a),
				k = e => {
					var {
						icon: t
					} = e, n = x(e, ["icon"]);
					return t ? a.a.createElement(_, h({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					})) : a.a.createElement(y, h({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					}))
				},
				v = b.a.wrapped(e => {
					var {
						border: t,
						small: n,
						type: r
					} = e, s = x(e, ["border", "small", "type"]);
					return a.a.createElement(f, s, a.a.createElement(E, {
						className: Object(p.a)(i.n, s.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "UnsubscribeIconButton", m.a),
				C = b.a.wrapped(e => {
					var {
						border: t,
						small: n,
						buttonType: s
					} = e, i = x(e, ["border", "small", "buttonType"]);
					const l = a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
							className: m.a.UnsubscribeButtonDefault
						}, "subreddit" === s ? r.fbt._("Joined", null, {
							hk: "1MTmIz"
						}) : r.fbt._("Following", null, {
							hk: "1wQlVR"
						})), a.a.createElement("span", {
							className: m.a.UnsubscribeButtonHover
						}, "subreddit" === s ? r.fbt._("Leave", null, {
							hk: "2lLnnn"
						}) : r.fbt._("Unfollow", null, {
							hk: "2b5ERD"
						}))),
						c = Object(p.a)(i.className, {
							[m.a.isSmall]: n
						});
					return t ? a.a.createElement(o.i, h({}, i, {
						className: c
					}), l) : a.a.createElement(o.n, h({}, i, {
						className: c
					}), l)
				}, "UnsubscribeButton", m.a),
				O = e => {
					var {
						icon: t
					} = e, n = x(e, ["icon"]);
					return t ? a.a.createElement(v, h({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					})) : a.a.createElement(C, h({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
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
						icon: n = !1,
						id: r,
						small: s = !1
					} = this.props, i = {
						border: e,
						className: t,
						icon: n,
						onClick: this.onClick,
						small: s
					};
					return this.props.userIsSubscriber ? a.a.createElement(O, h({}, i, {
						buttonType: this.props.identifier.type
					})) : a.a.createElement(k, h({}, i, {
						id: r
					}), this.props.children, Object(d.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				a = {
					subredditActions: {
						subscribe: () => r.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => r.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => r.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => r.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => r.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => r.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = e => {
					let {
						type: t,
						key: n
					} = e;
					return a[s({
						type: t
					})][n]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				s = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(s.a)(Object(r.c)(a.a))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return j
			})), n.d(t, "a", (function() {
				return w
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/index.tsx"),
				m = n("./src/reddit/actions/subscription/index.ts");
			var p = Object(i.b)(null, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/constants/componentSizes.ts"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				E = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				_ = n("./src/reddit/models/Flair/index.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				v = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				C = n.n(v);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => a.a.createElement(b.a, {
					className: Object(c.a)(C.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, a.a.createElement("div", {
					className: C.a.container
				}, e.isLoading ? a.a.createElement(f.a, {
					className: C.a.loadingIcon,
					sizePx: 32
				}) : a.a.createElement(a.a.Fragment, null, e.isError ? a.a.createElement("p", {
					className: C.a.errorMsg
				}, e.errorMsg || r.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : a.a.createElement(a.a.Fragment, null, e.communities.map(t => a.a.createElement(w, O({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && a.a.createElement(x.n, {
					className: C.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				T = Object(l.c)({
					hideNSFWPref: y.z
				}),
				w = Object(i.b)(T)(e => a.a.createElement("div", {
					className: C.a.communityItemContainer
				}, a.a.createElement(E.a, {
					widthRight: h.t
				}, a.a.createElement("div", {
					className: C.a.iconContainer
				}, e.communityIcon || e.iconUrl ? a.a.createElement("img", {
					className: C.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : a.a.createElement(g.a, {
					className: C.a.planetIcon,
					"data-redditstyle": !0
				})), a.a.createElement("div", {
					className: C.a.communityDescriptionContainer
				}, a.a.createElement(o.a, {
					className: C.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(k.b)(e.name, e.type),
					to: Object(k.a)(e.name, e.type)
				}, Object(k.b)(e.name, e.type)), a.a.createElement("div", {
					className: C.a.communityInfoContainer
				}, !!e.subscribers && a.a.createElement("p", {
					className: C.a.subscriberCount
				}, r.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [r.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && a.a.createElement(d.b, {
					flair: {
						type: _.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? a.a.createElement(f.a, {
					className: Object(c.a)(C.a.communityCta, C.a.smallLoadingIcon),
					sizePx: 12
				}) : a.a.createElement(x.n, {
					className: Object(c.a)(C.a.communityCta, {
						[C.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? a.a.createElement(p, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : a.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && a.a.createElement("p", {
					title: e.description,
					className: C.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/reddit/constants/posts.ts"),
				s = n("./src/reddit/helpers/name/index.ts");

			function a(e, t) {
				return (t === r.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function i(e, t) {
				return t === r.a.PROFILE ? Object(s.c)(e) : Object(s.b)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, n) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6"
			}
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(s.c)({
				userIsSubscriber: i.bb
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(a.d([n], !0)),
					onSubscriptionsRequested: () => e(a.e()),
					onUnsubscribe: () => e(a.d([n], !1))
				}
			})
		},
		"./src/reddit/icons/fonts/Pencil/index.m.less": function(e, t, n) {
			e.exports = {
				PencilIcon: "fKeLCuOy1oZ3UGfRARX6w",
				pencilIcon: "fKeLCuOy1oZ3UGfRARX6w"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Pencil/index.m.less"),
				o = n.n(i);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: "".concat(Object(a.b)("pencil"), " ").concat(e.className)
			}), "PencilIcon", o.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: Object(a.a)(Object(i.b)("plus"), e.className)
			})
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				o = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = n.n(o);
			t.a = e => s.a.createElement("i", {
				className: Object(a.a)(Object(i.b)("share"), l.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, n) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		},
		"./src/reddit/icons/svgs/Planet/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", a({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), s.a.createElement("title", null, "Planet"), s.a.createElement("path", {
				d: "M16.74,11.87A7,7,0,0,0,8.13,3.26c-3-2-5.59-2.8-6.63-1.76S1.25,5.15,3.28,8.16a6.95,6.95,0,0,0,8.57,8.57c3,2,5.61,2.82,6.66,1.78S18.76,14.87,16.74,11.87Zm0,4.86c-.53.53-1.77.26-3.33-.61h0a25.48,25.48,0,0,1-5.32-4.19c-.46-.46-.9-.93-1.31-1.39h0c-.41-.46-.79-.92-1.15-1.37h0c-.35-.45-.68-.89-1-1.32h0C4.36,7.41,4.1,7,3.88,6.6,3,5,2.74,3.8,3.27,3.27S5,3,6.6,3.88A6.78,6.78,0,0,0,4.52,5.65a23.14,23.14,0,0,0,4.27,5.56,22.92,22.92,0,0,0,5.56,4.27,6.79,6.79,0,0,0,1.77-2.08C17,15,17.26,16.2,16.73,16.73Z"
			}))
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				l = n.n(o);
			t.a = Object(a.a)(e => s.a.createElement("div", {
				className: Object(i.a)(l.a.expandedCenterContainer, e.className)
			}, s.a.createElement("div", {
				className: l.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: l.a.center
			}, Array.isArray(e.children) && e.children[1]), s.a.createElement("div", {
				className: l.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/pages/Multireddit/index.m.less": function(e, t, n) {
			e.exports = {
				sidebar: "_398UHHJSXVL0IJVGTkTa9B",
				planetIcon: "_1r6EMjMnKM7lL8H8H3Vs4t",
				emptyMessageText: "_1rJj6Qsj1uaYq4iwCBZX9_",
				emptyMessage: "_23HF_LA75CXQvFP4nnxWQD"
			}
		},
		"./src/reddit/pages/Multireddit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/core-js/modules/es6.regexp.search.js"), n("./node_modules/core-js/modules/es6.array.sort.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/fromPairs.js"),
				a = n.n(s),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				l = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/extractQueryParams/index.ts"),
				m = n("./src/lib/makeListingKey/index.ts"),
				p = n("./src/reddit/actions/multireddit/index.ts"),
				b = n("./src/reddit/constants/parameters.ts"),
				h = n("./src/reddit/helpers/trackers/screenview.ts"),
				x = n("./src/reddit/components/ContentGate/index.tsx"),
				f = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				g = n("./src/reddit/components/JumpToContent/index.tsx"),
				E = n("./src/reddit/components/ListingPostList/index.tsx"),
				_ = n("./src/reddit/components/MultiredditSidebar/index.tsx"),
				y = n("./src/lib/classNames/index.ts"),
				k = n("./src/reddit/components/Flair/index.tsx"),
				v = n("./src/reddit/actions/modal.ts"),
				C = n("./src/reddit/constants/modals.ts"),
				O = n("./src/reddit/icons/fonts/Pencil/index.tsx"),
				j = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				T = n("./src/reddit/icons/svgs/User/index.tsx"),
				w = n("./src/reddit/models/Multireddit/index.ts"),
				L = n("./src/reddit/components/MultiredditTopBar/VisibilitySwitch/index.m.less"),
				N = n.n(L);
			const B = Object(l.b)(null, e => ({
					onEditClicked: () => e(Object(v.h)(C.a.MULTIREDDIT_EDIT))
				})),
				S = {
					[w.e.Public]: {
						icon: o.a.createElement(T.a, {
							className: Object(y.a)(N.a.icon, N.a.public)
						}),
						text: r.fbt._("Public", null, {
							hk: "8ZeHp"
						})
					},
					[w.e.Hidden]: {
						icon: o.a.createElement(T.a, {
							className: Object(y.a)(N.a.icon, N.a.public)
						}),
						text: r.fbt._("Hidden", null, {
							hk: "1qlAJf"
						})
					},
					[w.e.Private]: {
						icon: o.a.createElement(j.a, {
							className: Object(y.a)(N.a.icon, N.a.private)
						}),
						text: r.fbt._("Private", null, {
							hk: "2HVerT"
						})
					}
				};
			var I = B(e => {
					const {
						multireddit: t,
						onEditClicked: n
					} = e;
					return o.a.createElement(o.a.Fragment, null, S[t.visibility].icon, S[t.visibility].text, o.a.createElement("button", {
						className: N.a.button,
						onClick: n
					}, o.a.createElement(O.a, {
						className: N.a.pencilIcon
					})))
				}),
				P = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				D = n("./src/reddit/components/RichTextJson/index.tsx"),
				M = n("./src/reddit/constants/postLayout.ts"),
				F = n("./src/reddit/contexts/PageLayer/index.tsx"),
				R = n("./src/reddit/controls/InternalLink/index.tsx"),
				A = n("./src/reddit/helpers/name/index.ts"),
				U = n("./src/reddit/models/Flair/index.ts"),
				H = n("./src/reddit/selectors/multireddit.ts"),
				z = n("./src/reddit/selectors/user.ts"),
				G = n("./src/reddit/actions/subscription/index.ts"),
				W = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./src/reddit/components/MultiredditTopBar/Button/index.m.less")),
				J = n.n(W);

			function X() {
				return (X = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var q = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			var Z = o.a.memo(e => {
					var {
						className: t,
						onClick: n,
						children: r,
						hoverText: s,
						text: a,
						icon: i
					} = e, l = q(e, ["className", "onClick", "children", "hoverText", "text", "icon"]);
					return o.a.createElement("button", X({
						className: Object(y.a)(t, J.a.button, s ? J.a.withHover : null),
						onClick: n
					}, l), o.a.createElement("span", {
						className: J.a.icon
					}, i), a && o.a.createElement("span", {
						className: J.a.text
					}, a), s && o.a.createElement("span", {
						className: J.a.hoverText
					}, s), r)
				}),
				K = n("./src/reddit/components/TrackingHelper/index.tsx"),
				V = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				Y = n("./src/reddit/icons/fonts/Plus/index.tsx"),
				Q = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				$ = n("./src/reddit/components/MultiredditTopBar/FollowButton/index.m.less"),
				ee = n.n($);
			const te = Object(l.b)(null, (e, t) => ({
				onFollowClick: () => {
					e(Object(G.b)(t.multireddit.url)), t.multireddit.isFollowed ? t.sendEvent(Object(V.g)(t.multireddit.url)) : t.sendEvent(Object(V.d)(t.multireddit.url))
				}
			}));
			var ne = Object(K.c)(te(e => o.a.createElement(Z, {
					className: Object(y.a)(ee.a.button, e.multireddit.isFollowed ? ee.a.isFollowed : null),
					hoverText: e.multireddit.isFollowed ? r.fbt._("Unfollow", null, {
						hk: "PezOE"
					}) : void 0,
					icon: e.multireddit.isFollowed ? o.a.createElement(Q.a, null) : o.a.createElement(Y.a, null),
					onClick: e.onFollowClick,
					text: e.multireddit.isFollowed ? r.fbt._("Following", null, {
						hk: "1wsu4d"
					}) : r.fbt._("Follow", null, {
						hk: "1DZLve"
					})
				}))),
				re = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				se = n("./src/reddit/components/OverflowMenu/index.tsx"),
				ae = n("./src/reddit/controls/Dropdown/Row.tsx"),
				ie = n("./src/reddit/selectors/activeModalId.ts"),
				oe = n("./src/reddit/components/MultiredditTopBar/OverflowMenu/index.m.less"),
				le = n.n(oe);
			const ce = Object(c.c)({
				isConfirmDeleteOpen: e => "MULTIREDDIT_TOP_BAR_DELETE_CONFIRMATION" === Object(ie.a)(e),
				showOwnerButtons: (e, t) => Object(H.c)(e, t.multireddit.url)
			});
			var de = Object(l.b)(ce, (e, t) => ({
					deleteConfirmed: () => e(Object(p.c)(t.multireddit.url)),
					onDuplicateClicked: () => e(Object(v.h)(C.a.MULTIREDDIT_DUPLICATE)),
					onEdit: () => e(Object(v.h)(C.a.MULTIREDDIT_EDIT)),
					toggleConfirmDelete: () => e(Object(v.i)("MULTIREDDIT_TOP_BAR_DELETE_CONFIRMATION"))
				}))(Object(K.c)(e => {
					const {
						deleteConfirmed: t,
						isConfirmDeleteOpen: n,
						multireddit: s,
						onDuplicateClicked: a,
						onEdit: i,
						sendEvent: l,
						showOwnerButtons: c,
						toggleConfirmDelete: d
					} = e;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(se.b, {
						className: le.a.button,
						dropdownId: "MULTIREDDIT_TOP_BAR_OVERFLOW",
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, c && o.a.createElement(ae.b, {
						displayText: r.fbt._("Edit Details", null, {
							hk: "q4B9D"
						}),
						onClick: i
					}), o.a.createElement(ae.b, {
						displayText: r.fbt._("Duplicate", null, {
							hk: "4DZaW1"
						}),
						onClick: a
					}), c && o.a.createElement(ae.b, {
						className: Object(y.a)(le.a.warning),
						displayText: r.fbt._("Delete Custom Feed", null, {
							hk: "3QSOzN"
						}),
						onClick: d
					})), n && o.a.createElement(re.a, {
						toggleModal: d,
						onConfirm: t,
						actionText: r.fbt._("Delete", null, {
							hk: "3PGKcp"
						}),
						cancelActionText: r.fbt._("Keep", null, {
							hk: "1nkPG8"
						}),
						headerText: r.fbt._("Delete Custom Feed?", null, {
							hk: "szoK6"
						}),
						modalText: r.fbt._("Are you sure you would like to delete this Custom Feed? This will not affect the communities you have added.", null, {
							hk: "2GGkLQ"
						}),
						trackClick: () => {
							l(Object(V.a)(s.url))
						},
						withOverlay: !0
					}))
				})),
				ue = n("./node_modules/lodash/noop.js"),
				me = n.n(ue),
				pe = n("./src/config.ts"),
				be = n("./src/lib/copyToClipboard/index.ts"),
				he = n("./src/reddit/actions/toaster.ts"),
				xe = n("./src/reddit/actions/tooltip.ts"),
				fe = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				ge = n("./src/reddit/controls/Dropdown/index.tsx"),
				Ee = n("./src/reddit/icons/fonts/Share/index.tsx"),
				_e = n("./src/reddit/models/Toast/index.ts"),
				ye = n("./src/reddit/selectors/tooltip.ts"),
				ke = n("./src/reddit/components/MultiredditTopBar/ShareMenu/index.m.less"),
				ve = n.n(ke);
			const Ce = "MULTIREDDIT_TOP_BAR_SHARE",
				Oe = Object(fe.a)(ge.a),
				je = Object(c.c)({
					isConfirmPublicOpen: e => "MULTIREDDIT_TOP_BAR_PUBLIC_CONFIRMATION" === Object(ie.a)(e),
					isDropdownOpen: Object(ye.b)(Ce),
					isUpdatePending: e => e.multireddits.api.edit.pending
				}),
				Te = Object(l.b)(je, (e, t) => ({
					copyLink: () => {
						if (Object(be.a)(pe.a.redditUrl + t.multireddit.url)) {
							const t = Object(he.d)(r.fbt._("Copied link!", null, {
								hk: "2IxdQz"
							}), _e.b.SuccessCommunity);
							e(Object(he.e)(t))
						} else {
							const t = Object(he.d)(r.fbt._("Something went wrong", null, {
								hk: "GmeVt"
							}), _e.b.Error);
							e(Object(he.e)(t))
						}
					},
					toggleConfirmPublic: () => e(Object(v.i)("MULTIREDDIT_TOP_BAR_PUBLIC_CONFIRMATION")),
					toggleDropdown: () => {
						e(Object(xe.h)({
							tooltipId: Ce
						})), t.sendEvent(Object(V.e)(t.multireddit.url))
					},
					updateVisibility: n => e(Object(p.e)({
						multipath: t.multireddit.url,
						visibility: n
					}))
				}));
			class we extends o.a.Component {
				constructor() {
					super(...arguments), this.onShareButtonClick = async () => {
						this.props.multireddit.visibility === w.e.Private ? this.props.toggleConfirmPublic() : this.props.toggleDropdown()
					}, this.onMakePublicConfirm = () => {
						this.props.updateVisibility(w.e.Public)
					}
				}
				render() {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(Z, {
						className: ve.a.shareMenu,
						disabled: this.props.isUpdatePending,
						icon: o.a.createElement(Ee.a, {
							className: ve.a.shareIcon
						}),
						id: Ce,
						onClick: this.onShareButtonClick,
						text: r.fbt._("Share", null, {
							hk: "2e7dE3"
						})
					}, o.a.createElement(Oe, {
						isOpen: this.props.isDropdownOpen,
						tooltipId: Ce,
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, o.a.createElement(ae.b, {
						displayText: r.fbt._("Copy link", null, {
							hk: "1RMEDS"
						}),
						onClick: this.props.copyLink
					}))), this.props.isConfirmPublicOpen && o.a.createElement(re.a, {
						toggleModal: this.props.toggleConfirmPublic,
						onConfirm: this.onMakePublicConfirm,
						actionText: r.fbt._("Make public", null, {
							hk: "2jdbN"
						}),
						headerText: r.fbt._("Make Custom Feed Public?", null, {
							hk: "3UHhCD"
						}),
						modalText: o.a.createElement(o.a.Fragment, null, r.fbt._("This Custom Feed is currently private.", null, {
							hk: "15Ymz2"
						}), o.a.createElement("br", null), o.a.createElement("br", null), r.fbt._("Would you like to make it public so you can share it with other people?", null, {
							hk: "3IbJao"
						})),
						trackClick: me.a,
						withOverlay: !0
					}))
				}
			}
			var Le = Object(K.c)(Te(we)),
				Ne = n("./src/reddit/components/MultiredditTopBar/index.m.less"),
				Be = n.n(Ne);
			const {
				fbt: Se
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ie = Object(c.c)({
				isLoggedIn: z.H,
				layout: (e, t) => M.e[Object(F.N)(e, t)],
				userIsOwner: (e, t) => Object(H.c)(e, t.multireddit.url)
			}), Pe = Object(l.b)(Ie), De = Object(F.t)(), Me = {};
			var Fe = De(Pe(e => o.a.createElement("div", {
					className: Be.a.container
				}, o.a.createElement("div", {
					className: Object(y.a)(Be.a.layoutContainer, e.layout === M.d.Card ? Be.a.layoutCard : null)
				}, o.a.createElement("img", {
					className: Be.a.icon,
					src: e.multireddit.icon
				}), o.a.createElement("div", {
					className: Be.a.content
				}, o.a.createElement("div", {
					className: Be.a.header
				}, o.a.createElement("h1", {
					className: Be.a.multiredditName
				}, e.multireddit.displayText), e.multireddit.isNSFW && o.a.createElement(k.b, {
					className: Be.a.flair,
					flair: {
						type: U.f.Nsfw,
						text: "nsfw"
					}
				})), o.a.createElement("div", {
					className: Be.a.meta
				}, Se._({
					"*": "{communitiesCount} communities in this custom feed",
					_1: "1 community in this custom feed"
				}, [Se._plural(e.multireddit.subredditCount, "communitiesCount")], {
					hk: "12Ej7M"
				}), o.a.createElement("span", null, " • "), e.userIsOwner ? o.a.createElement(I, {
					multireddit: e.multireddit
				}) : o.a.createElement(o.a.Fragment, null, Se._("Curated by {multiredditFeedAuthorLink}", [Se._param("multiredditFeedAuthorLink", o.a.createElement(R.a, {
					className: Be.a.usernameLink,
					to: "/".concat(Object(A.c)(Object(w.i)(e.multireddit.url)))
				}, Object(A.c)(Object(w.i)(e.multireddit.url))))], {
					hk: "3AKmgH"
				}))), o.a.createElement("div", {
					className: Be.a.descriptionContainer
				}, e.multireddit.descriptionRtJson ? o.a.createElement(D.a, {
					content: e.multireddit.descriptionRtJson,
					rtJsonElementProps: Me
				}) : o.a.createElement(P.a, {
					html: e.multireddit.descriptionHtml || e.multireddit.description
				}))), o.a.createElement("div", {
					className: Be.a.actions
				}, !e.userIsOwner && e.isLoggedIn && o.a.createElement(ne, {
					multireddit: e.multireddit
				}), o.a.createElement(Le, {
					multireddit: e.multireddit
				}), e.isLoggedIn && o.a.createElement(de, {
					multireddit: e.multireddit
				})))))),
				Re = n("./src/reddit/icons/svgs/Planet/index.tsx"),
				Ae = n("./src/reddit/layout/page/Listing/index.tsx"),
				Ue = n("./src/reddit/models/ContentGate.ts"),
				He = n("./src/reddit/pages/Multireddit/index.m.less"),
				ze = n.n(He);
			const Ge = e => o.a.createElement("div", {
					className: ze.a.emptyMessage
				}, o.a.createElement(Re.a, {
					className: ze.a.planetIcon
				}), o.a.createElement("div", {
					className: ze.a.emptyMessageText
				}, e.multireddit && 0 !== e.multireddit.subredditCount ? r.fbt._("There are no posts in this custom feed", null, {
					hk: "16ubpi"
				}) : r.fbt._("There are 0 communities in this custom feed", null, {
					hk: "tKC2v"
				}))),
				We = Object(F.t)({
					currentMultireddit: F.c,
					pageLayer: e => e
				}),
				Je = (e, t) => {
					let {
						match: n
					} = t;
					return n.params.sort || d.O.HOT
				},
				Xe = (e, t) => {
					let {
						location: n
					} = t;
					return a()([...Object(u.a)(n.search)])
				},
				qe = (e, t) => {
					const n = Object(F.d)(e, {
						pageLayer: t.pageLayer
					});
					if (n) return n.url; {
						const {
							currentMultireddit: e
						} = t;
						if (!e) return "";
						const {
							multiredditName: n,
							username: r
						} = e;
						return Object(w.h)(r || "me", n)
					}
				},
				Ze = Object(c.a)(Je, Xe, qe, (e, t, n) => Object(m.a)(n, e, t)),
				Ke = Object(c.a)(Xe, e => {
					const t = b.u in e && e[b.u].toUpperCase();
					return "string" == typeof t && t in d.Sb ? d.Sb[t] : d.Tb
				}),
				Ve = Object(c.c)({
					listingKey: Ze,
					listingName: qe,
					multireddit: F.d,
					over18Prefs: z.V,
					sort: Je,
					timeSort: Ke
				});
			class Ye extends o.a.Component {
				constructor() {
					super(...arguments), this.noPosts = () => o.a.createElement(Ge, {
						multireddit: this.props.multireddit
					})
				}
				render() {
					const {
						listingKey: e,
						listingName: t,
						match: {
							params: {
								username: n
							}
						},
						multireddit: r,
						over18Prefs: s,
						sort: a,
						timeSort: i
					} = this.props;
					return r ? r.isNSFW && !s ? o.a.createElement(x.default, {
						contentGateType: Ue.a.NsfwCustomFeed
					}) : o.a.createElement(Ae.a, {
						className: this.props.className,
						content: o.a.createElement(o.a.Fragment, null, r && o.a.createElement(f.a, {
							sort: a,
							baseUrl: n ? r.url.replace(/\/$/, "") : "/me/m/".concat(r.name),
							timeSort: i
						}), o.a.createElement(g.a, null), o.a.createElement(E.a, {
							listingKey: e,
							listingName: t,
							listingViewed: (t, n) => Object(h.e)(e, a, n, t, i),
							noPostsComponent: this.noPosts,
							onLoadMore: this.props.onLoadMorePosts,
							inSubredditOrProfile: !1
						})),
						contentNavBar: r ? o.a.createElement(o.a.Fragment, null, Object(w.f)(r) && o.a.createElement(Fe, {
							multireddit: r
						})) : null,
						fitPageToContent: !0,
						sidebar: r ? o.a.createElement(_.a, {
							className: ze.a.sidebar,
							listingKey: e,
							listingName: t,
							multireddit: r,
							multiUsername: n
						}) : null
					}) : o.a.createElement(x.default, {
						contentGateType: Ue.a.CustomFeedDoesNotExist
					})
				}
			}
			const Qe = We(Object(l.b)(Ve, (e, t) => ({
				onLoadMorePosts: () => e(Object(p.f)({
					sort: t.match.params.sort,
					multiredditName: t.match.params.multiredditName,
					username: t.match.params.username
				}))
			}))(Ye));
			t.default = e => o.a.createElement(Qe, e)
		}
	}
]);
//# sourceMappingURL=Multireddit.073feeaec6eedff505bc.js.map